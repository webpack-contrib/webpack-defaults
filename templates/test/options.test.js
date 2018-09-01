const webpack = require('./helpers/compiler');

describe('Options', () => {
  describe('option', () => {
    test('{Boolean}', async () => {
      const config = {
        loader: {
          test: /\.js$/,
          options: {
            name: true
          },
        },
      };

      webpack('fixture.js', config).then((stats) => {
        const { source } = stats.toJson().modules[1];

        expect(source).toMatchSnapshot();
      });
    });
  });
});
