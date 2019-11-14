import { compile, getCompiler, normalizeErrors, readAsset } from './helpers';

describe('name option', () => {
  it('value', async () => {
    const compiler = getCompiler('simple.js', {
      name: true,
    });
    const stats = await compile(compiler);

    expect(readAsset('main.bundle.js', compiler, stats)).toMatchSnapshot(
      'result'
    );
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });
});
