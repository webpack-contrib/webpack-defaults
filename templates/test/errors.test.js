import webpack from './helpers/compiler';

describe('Errors', () => {
  test('Validation Error', async () => {
    const config = {
      loader: {
        test: /\.js$/,
        options: { name: 'fail' },
      },
    };

    const stats = await webpack('fixture.js', config);
    const { errors } = stats.toJson();

    expect(errors).toMatchSnapshot();
  });
});
