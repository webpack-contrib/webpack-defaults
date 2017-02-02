const path = require('path');
const { json, template } = require('mrm-core');

module.exports = () => {
  const pkg = json('package.json');

  // Create Readme.md (no update)
  const readme = template('README.md', path.join(__dirname, '../../templates/README.template'));
  if (!readme.exists()) {
    readme
      .apply({
        package: pkg.get('name'),
        description: pkg.get('description') || 'DESCRIPTION',
      })
      .save();
  }
};
