const { yaml } = require('mrm-core');

module.exports = () => {
  // codecov.yml
  yaml('codecov.yml')
    // Overwrite
    .set({
      codecov: {
        branch: 'master',
      },
      coverage: {
        precision: 2,
        round: 'down',
        range: '70...100',
        status: {
          project: {
            default: {
              target: 'auto',
            },
          },
          patch: {
            default: {
              target: 'auto',
            },
          },
          changes: {
            default: {
              branches: null,
            },
          },
        },
      },
      comment: 'off',
    })
    .save();
};
