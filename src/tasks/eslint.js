const { json, lines } = require('mrm-core');

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
};
