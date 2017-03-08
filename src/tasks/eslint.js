const { json, lines } = require('mrm-core');

module.exports = () => {
  // .eslintrc: overwrite
  json('.eslintrc')
    .set({
      extends: 'webpack',
    })
    .save()
  ;

  // .eslintignore
  lines('.eslintignore')
    .add([
      '/node_modules',
      '/dist',
    ])
    .save()
  ;
};
