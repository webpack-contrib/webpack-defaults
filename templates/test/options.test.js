import webpack from './helpers/compiler';

describe('Options', () => {
  describe('name', () => {
    test('{Boolean}', async () => {
      const config = {
        loader: {
          test: /\.js$/,
          options: { name: true },
        },
      };

      const stats = await webpack('fixture.js', config);
      const { source } = stats.toJson().modules[1];

      expect(source).toMatchSnapshot();
    });
  });
});
