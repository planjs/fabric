# fabric

> `prettier`，`eslint`，`stylelint` commonly used configuration files.

## Usage

in `.eslintrc.js`

```javascript
module.exports = {
  extends: [require.resolve('@planjs/fabric/dist/eslint')],

  globals: {
    App: 'readonly',
    Page: 'readonly',
    Component: 'readonly',
  },

  rules: {
    // your rules
  },
};
```

in `.stylelintrc.js`

```javascript
module.exports = {
  extends: [require.resolve('@planjs/fabric/dist/stylelint')],
  rules: {
    // your rules
  },
};
```

in `.prettierrc.js`

```javascript
const { prettier } = require('@planjs/fabric');

module.exports = prettier;
```
