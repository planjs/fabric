const stylelint = require('./stylelint');
const prettier = require('./prettier');
const eslint = require('./eslint');

module.exports = { stylelint, prettier, eslint, default: eslint };
