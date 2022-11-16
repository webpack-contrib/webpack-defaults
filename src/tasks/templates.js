const path = require('path');

const { copyFiles, json, template } = require('mrm-core');

// These files will be overwritten without any confirmation
const files = [
  '.github/ISSUE_TEMPLATE/DOCS.md',
  '.github/ISSUE_TEMPLATE/SUPPORT.md',
  '.github/ISSUE_TEMPLATE.md',
  '.github/CODEOWNERS',
  '.github/PULL_REQUEST_TEMPLATE.md',
  '.github/FUNDING.yml',
  '.editorconfig',
  '.eslintignore',
  '.eslintrc.js',
  '.prettierignore',
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

// These files will be created only once
const filesOnce = [
  'src/index.js',
  'src/cjs.js',
  'src/options.json',
  'CHANGELOG.md',
];

const dynamicTemplates = [
  '.github/CONTRIBUTING.md',
  '.github/ISSUE_TEMPLATE/BUG.md',
  '.github/ISSUE_TEMPLATE/FEATURE.md',
  '.github/ISSUE_TEMPLATE/MODIFICATION.md',
];

module.exports = () => {
  const pkg = json('package.json');
  const templatesDir = path.resolve(__dirname, '../../templates');

  copyFiles(templatesDir, files);

  copyFiles(templatesDir, testFiles, { overwrite: false });

  for (const tmpl of dynamicTemplates) {
    const file = template(
      tmpl,
      path.join(__dirname, `../../templates/${tmpl}`)
    );

    file
      .apply({ package: pkg.get('name'), repo: pkg.get('repository') })
      .save();
  }

  copyFiles(templatesDir, filesOnce, { overwrite: false });
};
