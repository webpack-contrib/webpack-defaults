function buildPreset(options) {
  const minNode = (options && options.minNode) || '4.3';

  return {
    presets: [['env', {
      useBuiltIns: true,
      targets: {
        node: minNode,
      },
    }]],
    plugins: [
      ['transform-object-rest-spread', { useBuiltIns: true }],
    ],
  };
}

exports.buildPreset = buildPreset;
exports.default = buildPreset();
Object.defineProperty(exports, '__esModule', { value: true });
