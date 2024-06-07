module.exports = {
  parser: '@babel/eslint-parser',
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
  extends: ['plugin:storybook/recommended', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  plugins: ['react', 'react-hooks'],
  ignorePatterns: ['.eslintrc.js', 'node_modules*/'],
  rules: {
    'no-empty': ['warn', {allowEmptyCatch: true}],
    'react/prop-types': [1, {skipUndeclared: true}],
    'no-unused-vars': [1, {vars: 'all', args: 'none', ignoreRestSiblings: true}],
    'no-console': 'off',
    'react/no-string-refs': 'warn',
    'no-use-before-define': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};

