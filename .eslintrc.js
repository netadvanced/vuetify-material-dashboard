module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['standard', 'plugin:vue/recommended'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'template-curly-spacing': 'off',
    indent: 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
}
