const webpack = require('./helpers/compiler');

describe('Loader', () => {
  test('Defaults', () => {
    const config = {
      loader: {
        test: /\.js$/,
        options: {},
      },
    };

    return webpack('fixture.js', config).then((stats) => {)
      const { source } = stats.toJson().modules[1];

      expect(source).toMatchSnapshot();
    });
  });
});
