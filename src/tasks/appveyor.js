const { yaml } = require('mrm-core');

module.exports = (config) => {
  // appveyor.yml
  yaml('appveyor.yml')
    // Overwrite
    .set({
      branches: {
        only: [
          'master',
        ],
      },
      init: [
        'git config --global core.autocrlf input',
      ],
      environment: {
        matrix: [
          {
            nodejs_version: config.latestNode,
            webpack_version: config.webpackVersion,
            job_part: 'test',
          },
          {
            nodejs_version: config.latestNodeLTS,
            webpack_version: config.webpackVersion,
            job_part: 'test',
          },
          {
            nodejs_version: config.minNode,
            webpack_version: config.webpackVersion,
            job_part: 'test',
          },
        ],
      },
      build: 'off',
      matrix: {
        fast_finish: true,
      },
      install: [
        'ps: Install-Product node $env:nodejs_version x64',
        'npm i -g npm@latest',
        'npm install',
      ],
      before_test: [
        'cmd: npm install webpack@%webpack_version%',
      ],
      test_script: [
        'node --version',
        'npm --version',
        'cmd: npm run appveyor:%job_part%',
      ],
    })
    .save()
  ;
};
