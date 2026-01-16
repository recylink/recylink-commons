module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      // legacyDecorators: true,
      jsx: true
    },
    babelOptions: {
      rootMode: 'upward'
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended'
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  ignorePatterns: ['.eslintrc.js', 'node_modules*/'],
  rules: {
    'no-empty': ['warn', {allowEmptyCatch: true}],
    'react/prop-types': [1, {skipUndeclared: true}],
    '@typescript-eslint/no-unused-vars': [1, {vars: 'all', args: 'none', ignoreRestSiblings: true}],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'error',
    'react/jsx-uses-react': 'off',
    'react/no-string-refs': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react'],
          // Other library imports
          ['^@?\\w', '^\\w'],
          // Imports from App
          ['^App'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$']
        ]
      }
    ]
  }
}
