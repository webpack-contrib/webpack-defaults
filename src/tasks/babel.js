const { json } = require('mrm-core');

module.exports = () => {
  // .babelrc
  json('.babelrc')
    .merge({
      presets: ['webpack', 'jest'],
    })
    .save()
  ;
};
