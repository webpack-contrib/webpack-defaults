import { getCompiler, compile, normalizeErrors, readAsset } from './helpers';

describe('loader', () => {
  it('should work', async () => {
    const compiler = getCompiler('simple.js');
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
