module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  extends: [
    'react-app',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-void': 0,
    'no-empty': [2, { allowEmptyCatch: true }],
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
    'import/order': 1,
    '@typescript-eslint/no-use-before-define': [
      2,
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      0,
      { allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/camelcase': 0,
  },
};
