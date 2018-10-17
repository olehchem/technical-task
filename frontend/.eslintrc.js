/*eslint linebreak-style: ["error", "windows"]*/
module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 0,
    'react/prefer-stateless-function': false,
    'react/destructuring-assignment': false,
  },
};
