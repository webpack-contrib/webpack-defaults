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
            node_js: '7',
            env: jobEnv('lint'),
          },
          {
            os: 'linux',
            node_js: config.minNode,
            env: jobEnv('test'),
          },
          {
            os: 'linux',
            node_js: '6',
            env: jobEnv('test'),
          },
          {
            os: 'linux',
            node_js: '7',
            env: jobEnv('coverage'),
          },
        ],
      },
      before_install: [
        'nvm --version',
        'node --version',
      ],
      before_script: [
        `
if [ "$WEBPACK_VERSION" ]; then
  yarn add webpack@^$WEBPACK_VERSION
fi
`.trim(),
      ],
      script: [
        'yarn run travis:$JOB_PART',
      ],
      after_success: [
        'bash <(curl -s https://codecov.io/bash)',
      ],
    })
    .save()
  ;
};
