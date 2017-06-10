// This has been moved to ./templates until the anchor & alias issue is resolved
const { yaml } = require('mrm-core');

module.exports = (config) => {
  const jobEnv = name => `WEBPACK_VERSION="${config.webpackVersion}" JOB_PART=${name}`;

  // .travis.yml
  yaml('.travis.yml')
    // Overwrite
    .set({
      sudo: false,
      language: 'node_js',
      branches: {
        only: [
          'master',
        ],
      },
      matrix: {
        fast_finish: true,
        include: [
          {
            os: 'linux',
            node_js: config.latestNode,
            env: jobEnv('lint'),
          },
          {
            os: 'linux',
            node_js: config.minNode,
            env: jobEnv('test'),
          },
          {
            os: 'linux',
            node_js: config.latestNodeLTS,
            env: jobEnv('test'),
          },
          {
            os: 'linux',
            node_js: config.latestNode,
            env: jobEnv('coverage'),
          },
        ],
      },
      before_install: [
        'if [[ `npm -v` != 5* ]]; then npm i -g npm@^5.0.0; fi',
        'nvm --version',
        'node --version',
        'npm --version',
      ],
      before_script: [
        `
if [ "$WEBPACK_VERSION" ]; then
  npm i --no-save webpack@^$WEBPACK_VERSION
fi
`.trim(),
      ],
      script: [
        'npm run travis:$JOB_PART',
      ],
      after_success: [
        'bash <(curl -s https://codecov.io/bash)',
      ],
    })
    .save()
  ;
};
