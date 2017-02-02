const path = require('path');
const { copyFiles } = require('mrm-core');

// These files will be overwritten without any confirmation
const files = [
  'LICENSE',
  'CHANGELOG.md',
  '.github/ISSUE_TEMPLATE.md',
  '.github/PULL_REQUEST_TEMPLATE.md',
];

module.exports = () => {
  copyFiles(path.resolve(__dirname, '../../templates'), files);
};
