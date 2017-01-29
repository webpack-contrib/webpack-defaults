const { json, lines, install } = require('mrm-core');

const packages = [
  'eslint',
  'eslint-plugin-import',
  'eslint-config-webpack',
];

module.exports = () => {
  // .eslintrc
  json('.eslintrc')
    .merge({
      extends: 'webpack',
    })
    .save()
  ;

  // .eslintignore
  lines('.eslintignore')
    .append([
      '/node_modules',
      '/dist',
    ])
    .save()
  ;

  // Dependencies
  install(packages);
};
