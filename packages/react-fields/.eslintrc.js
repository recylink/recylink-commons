module.exports = {
  parser: '@babel/eslint-parser',

  parserOptions: {
    babelOptions: {
      rootMode: 'upward'
    }
  },

  extends: ['plugin:storybook/recommended', 'plugin:storybook/recommended']
}
