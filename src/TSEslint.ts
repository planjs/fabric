module.exports = {
  '@typescript-eslint/no-use-before-define': [
    2,
    { functions: false, classes: true, variables: true, typedefs: true },
  ],
  '@typescript-eslint/explicit-function-return-type': [0, { allowTypedFunctionExpressions: true }],
  '@typescript-eslint/camelcase': 0,
};
