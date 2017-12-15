const path = require('path');
const pathExists = require('path-exists');
const { copyFiles } = require('mrm-core');

// These files will be overwritten without any confirmation
const files = [
  '.circleci/config.yml',
  'commitlint.config.js',
  'LICENSE',
  '.github/ISSUE_TEMPLATE.md',
  '.github/PULL_REQUEST_TEMPLATE.md',
  '.prettierrc',
  'appveyor.yml',
  '.eslintrc.js',
];

const testFiles = [
  'test/loader.test.js',
  'test/options.test.js',
  'test/fixtures/fixture.js',
  'test/fixtures/foo.js',
  'test/helpers/compiler.js',
];

// These files will by created only once
const filesOnce = [
  'src/index.js',
  'src/cjs.js',
  'src/options.json',
  'CHANGELOG.md',
];

module.exports = () => {
  const templatesDir = path.resolve(__dirname, '../../templates');

  copyFiles(templatesDir, files);
  if (!pathExists('test')) {
    copyFiles(templatesDir, testFiles, { overwrite: false });
  }
  copyFiles(templatesDir, filesOnce, { overwrite: false });
};
