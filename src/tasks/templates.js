const path = require('path');

const pathExists = require('path-exists');
const { copyFiles } = require('mrm-core');

// These files will be overwritten without any confirmation
const files = [
  '.github/CODEOWNERS',
  '.github/PULL_REQUEST_TEMPLATE.md',
  '.github/CONTRIBUTING.md',
  '.editorconfig',
  '.eslintrc.js',
  '.prettierrc.js',
  'azure-pipelines.yml',
  'babel.config.js',
  'commitlint.config.js',
  'husky.config.js',
  'lint-staged.config.js',
  'LICENSE',
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

  pathExists('./test').then((exists) => {
    if (!exists) {
      copyFiles(templatesDir, testFiles, { overwrite: false });
    }
  });

  copyFiles(templatesDir, filesOnce, { overwrite: false });
};
