const path = require('path');

const { copyFiles, json, template } = require('mrm-core');

module.exports = () => {
  const pkg = json('package.json');

  const staticTemplates = [
    '.github/ISSUE_TEMPLATE/DOCS.md',
    '.github/ISSUE_TEMPLATE/SUPPORT.md',
  ];

  const dynamicTemplates = [
    'ISSUE_TEMPLATE.md',
    'ISSUE_TEMPLATE/BUG.md',
    'ISSUE_TEMPLATE/FEATURE.md',
    'ISSUE_TEMPLATE/MODIFICATION.md',
  ];

  const sourceDir = path.join(__dirname, '../../templates');

  copyFiles(sourceDir, staticTemplates);

  for (const tmpl of dynamicTemplates) {
    const file = template(
      `.github/${tmpl}`,
      path.join(__dirname, `../../templates/.github/${tmpl}`)
    );

    file.apply({ package: pkg.get('name') }).save();
  }
};
