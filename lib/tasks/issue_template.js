const path = require('path');

const { json, template } = require('mrm-core');

module.exports = () => {
  const pkg = json('package.json');

  // Create README.md (no update)
  const file = template(
    '.github/ISSUE_TEMPLATE.md',
    path.join(__dirname, '../../templates/.gitub/ISSUE_TEMPLATE.md')
  );

  if (!file.exists()) {
    file.apply({ package: pkg.get('name') }).save();
  }
};
