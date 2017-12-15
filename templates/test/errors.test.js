import loader from '../src';
import webpack from './helpers/compiler';

describe('Errors', () => {
  test('Loader Error', async () => {
    const config = {
      loader: {
        test: /\.js$/,
        options: { failMe: true },
      },
    };

    const stats = await webpack('error.js', config);
    const { source } = stats.toJson().modules[1];

    const err = () => eval(source);

    expect(err).toThrow();
    expect(err).toThrowErrorMatchingSnapshot();
  });

  test('Validation Error', () => {
    const err = () => loader.call({ query: { template: 1 } });

    expect(err).toThrow();
    expect(err).toThrowErrorMatchingSnapshot();
  });
});
