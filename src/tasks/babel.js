const { json } = require('mrm-core');

module.exports = () => {
  // .babelrc
  json('.babelrc')
    .merge({
      presets: [
        ['env', {
          modules: false,
          useBuiltIns: true,
          // Target maintained to match minimum Webpack Nodejs version.
          targets: { node: 4.3 },
          exclude: [
            'transform-async-to-generator',
            'transform-regenerator'
          ]
        }]
      ],
      env: {
        test: {
          // Transformation of es2015 modules are needed for Jest.
          presets: ['env']
        }
      },
    })
    .save()
  ;
};
