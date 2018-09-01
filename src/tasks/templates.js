const path = require('path');

const pathExists = require('path-exists');
const { copyFiles } = require('mrm-core');

// These files will be overwritten without any confirmation
const files = [
  '.circleci/config.yml',
  '.github/CODEOWNERS',
  '.github/PULL_REQUEST_TEMPLATE.md',
  '.github/CONTRIBUTING.md',
  '.editorconfig',
  '.eslintrc.js',
  '.prettierrc',
  'commitlint.config.js',
  'appveyor.yml',
  'LICENSE',
];

const testFiles = [
  'test/loader.test.js',
  'test/errors.test.js',
  'test/options.test.js',
  'test/helpers/compiler.js',
  'test/fixtures/fixture.js',
];

// These files will by created only once
const filesOnce = [
  'src/index.js',
  'src/options.json',
  'CHANGELOG.md',
];

module.exports = () => {
  const templatesDir = path.resolve(__dirname, '../../templates');

  copyFiles(templatesDir, files);

  pathExists('./test').then((exists) => {
    if (!exists) {
      copyFiles(templatesDir, testFiles, { overwrite: false });
    }
  });

  copyFiles(templatesDir, filesOnce, { overwrite: false });
};
