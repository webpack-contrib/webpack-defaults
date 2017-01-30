const { json, install } = require('mrm-core');

const packages = [
  // Utilities
  'del-cli',
  'cross-env',
  'nodemon',
  'nsp',

  // Jest
  'jest',
  'babel-jest',

  // Babel
  'babel-cli',
  'babel-polyfill',
  'babel-preset-webpack',

  // ESLint
  'eslint',
  'eslint-plugin-import',
  'eslint-config-webpack',
];

module.exports = () => {
  json('package.json')
    .merge({
      scripts: {
        prebuild: 'npm run clean:dist',
        build: "cross-env NODE_ENV=production babel -s true src -d dist --ignore 'src/**/*.test.js'",
        'clean:dist': 'del-cli dist',
        start: 'npm run serve:dev src',
        'serve:dev': 'nodemon $2 --exec babel-node',
        lint: 'eslint --cache src test',
        security: 'nsp check',
        test: 'jest',
        'test:coverage': "jest --collectCoverageFrom='src/**/*.js' --coverage",
        'travis:test': 'yarn run test',
        'travis:coverage': 'yarn run test:coverage',
        'travis:lint': 'yarn run lint && yarn run nsp',
      },
    })
    .save()
  ;

  install(packages);
};

