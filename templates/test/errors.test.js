const webpack = require('./helpers/compiler');

describe('Errors', () => {
  test('Validation Error', () => {
    const config = {
      loader: {
        test: /\.js$/,
        options: {
          option: 'false'
        },
      },
    };

    return webpack('fixture.js', config).then((stats) => {
      const { errors } = stats.toJson();

      expect(errors).toMatchSnapshot();
    });
  });
});
