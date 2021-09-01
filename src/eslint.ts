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
      'import/order': [ // import 分组排序
      'error',
      {
        groups: [
          'builtin', // Built-in types are first
          'external',
          'internal',
          'parent',
          'sibling',
          // ['parent', 'sibling'], // Then sibling and parent types. They can be mingled together
          'index', // Then the index file
          'object' // Then the rest: internal and external type
        ],
        'newlines-between': 'always'
      }
    ],
    'padding-line-between-statements': [
      // 块级前后加空行，表达式前后加空行
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'import', next: 'expression' }
    ],
    'no-else-return': ['error', { allowElseIf: false }], // if return 则去掉else
  },
};
