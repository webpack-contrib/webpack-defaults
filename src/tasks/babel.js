const { json } = require('mrm-core');

module.exports = (config) => {
  // .babelrc
  json('.babelrc')
    .merge({
      presets: [
        ['env', {
          modules: 'commonjs',
          useBuiltIns: true,
          // Target maintained to match minimum Webpack Nodejs version.
          targets: { node: config.minNode },
          exclude: [
            'transform-async-to-generator',
            'transform-regenerator',
          ],
        }],
      ],
      env: {
        test: {
          // Transformation of es2015 modules are needed for Jest.
          presets: ['env'],
        },
      },
    })
    .save()
  ;
};
