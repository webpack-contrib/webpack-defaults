const { json } = require('mrm-core');
const { buildPreset } = require('../../lib/babel-preset');

module.exports = (config) => {
  /* eslint-disable multiline-ternary */
  const babelConfig = typeof config.minNode === 'undefined' || config.minNode === '4.3'
    ? { presets: ['webpack-defaults/lib/babel-preset'] }
    : buildPreset(config);
  /* eslint-enable multiline-ternary */
  json('.babelrc')
    .merge(babelConfig)
    .save();
};
