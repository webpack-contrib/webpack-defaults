<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![chat][chat]][chat-url]

# ${package}

${description}

## Requirements

This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.

## Getting Started

To begin, you'll need to install `${package}`:

```console
$ npm install ${package} --save-dev
```

<!-- isLoader ? use(this) : delete(isPlugin) -->
Then add the loader to your `webpack` config. For example:

<!-- isPlugin ? use(this) : delete(isLoader) -->
Then add the plugin to your `webpack` config. For example:

**file.ext**
```js
import file from 'file.ext';
```

<!-- isLoader ? use(this) : delete(isPlugin) -->
**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.ext$/,
        use: [
          {
            loader: `${name.toLowerCase()}-loader`,
            options: {...options}
          }
        ]
      }
    ]
  }
}
```

<!-- isPlugin ? use(this) : delete(isLoader) -->
**webpack.config.js**
```js
module.exports = {
  plugins: [
    new `${name}`Plugin(options)
  ]
}
```

And run `webpack` via your preferred method.

## Options

### `[option]`

Type: `[type|other-type]`
Default: `[type|null]`

[ option description ]

<!-- isLoader ? use(this) : delete(isPlugin) -->
```js
// in your webpack.config.js
{
  loader: `${name.toLowerCase()}-loader`,
  options: {
    [option]: ''
  }
}
```

<!-- isPlugin ? use(this) : delete(isLoader) -->
```js
// in your webpack.config.js
new `${name}`Plugin({
  [option]: ''
})
```

## Examples

[ example outline text ]

**webpack.config.js**
```js
// Example setup here..
```

**file.ext**
```js
// Source code here...
```

**bundle.js**
```js
// Bundle code here...
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

#### [CONTRIBUTING](./.github/CONTRIBUTING)

## License

#### [MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/${package}.svg
[npm-url]: https://npmjs.com/package/${package}

[node]: https://img.shields.io/node/v/${package}.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-contrib/${package}.svg
[deps-url]: https://david-dm.org/webpack-contrib/${package}

[tests]: 	https://img.shields.io/circleci/project/github/webpack-contrib/${package}.svg
[tests-url]: https://circleci.com/gh/webpack-contrib/${package}

[cover]: https://codecov.io/gh/webpack-contrib/${package}/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/${package}

[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack