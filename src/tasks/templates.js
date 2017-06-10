const path = require('path');
const { copyFiles } = require('mrm-core');

// These files will be overwritten without any confirmation
const files = [
  '.travis.yml',
  'LICENSE',
  '.github/ISSUE_TEMPLATE.md',
  '.github/PULL_REQUEST_TEMPLATE.md',
];

// These files will by created only once
const filesOnce = [
  'src/index.js',
  'src/cjs.js',
  'CHANGELOG.md',
];

module.exports = () => {
  const templatesDir = path.resolve(__dirname, '../../templates');
  copyFiles(templatesDir, files);
  copyFiles(templatesDir, filesOnce, { overwrite: false });
};
