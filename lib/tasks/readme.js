const path = require('path');

const { json, template } = require('mrm-core');

module.exports = () => {
  const pkg = json('package.json');

  // Create README.md (no update)
  const readme = template(
    'README.md',
    path.join(__dirname, '../../templates/README.md')
  );

  if (!readme.exists()) {
    const startCase = (name) =>
      name.replace(name.charAt(0), name.charAt(0).toUpperCase());

    readme
      .apply({
        title: pkg
          .get('name')
          .split('-')
          .map((name) => startCase(name))
          .join(' '),
        name: pkg
          .get('name')
          .replace(/(-loader|-webpack-plugin)$/, '')
          .split('-')
          .map((name) => startCase(name))
          .join(''),
        package: pkg.get('name'),
        description: pkg.get('description') || '',
      })
      .save();
  }
};
