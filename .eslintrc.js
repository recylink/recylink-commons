module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true
    }
  },
  env: {
    node: true,
    browser: true,
    jest: true
  },
  globals: {
    history: 'off',
    Promise: 'readonly'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: [
    'react',
    // "react-native",
    'react-hooks'
  ],
  rules: {
    'no-empty': ['warn', {allowEmptyCatch: true}],
    'react/prop-types': [1, {skipUndeclared: true}],
    'no-unused-vars': [1, {vars: 'all', args: 'none', ignoreRestSiblings: true}],
    'no-console': 'off',
    'react/no-string-refs': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
  }
}
