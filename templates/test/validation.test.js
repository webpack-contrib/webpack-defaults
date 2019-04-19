import webpack from './helpers/compiler';

it('validation', async () => {
  const config = {
    loader: {
      test: /\.js$/,
      options: { name: false },
    },
  };

  const stats = await webpack('fixture.js', config);
  const { errors } = stats.toJson();

  expect(errors).toMatchSnapshot();
});
