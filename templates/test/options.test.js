import webpack from './helpers/compiler';

describe('options', () => {
  describe('name', () => {
    it('true', async () => {
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
