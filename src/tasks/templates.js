const path = require('path');
const { copyFiles } = require('mrm-core');

const files = [
  '.github/ISSUE_TEMPLATE.md',
  '.github/PULL_REQUEST_TEMPLATE.md',
];

module.exports = () => {
  copyFiles(path.resolve(__dirname, '../..'), files);
};
