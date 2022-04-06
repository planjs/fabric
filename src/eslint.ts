const path = require('path');
const fs = require('fs');

const tsConfig = require('./TSEslint');

const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));

// apply eslint-config-react-app env
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production'
}

module.exports = {
  extends: [
    'react-app',
    isTsProject && 'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ].filter(Boolean),
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['prettier'].filter(Boolean),
  rules: {
    'no-void': 0,
    'no-empty': [2, { allowEmptyCatch: true }],
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
    'no-else-return': [2, { allowElseIf: false }], // if return 则去掉else
    ...(isTsProject ? tsConfig : {}),
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
