# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.6.0"></a>
# [1.6.0](https://github.com/webpack-contrib/webpack-defaults/compare/v1.5.1...v1.6.0) (2017-09-30)


### Features

* update minimum required `node.js` version to `4.8` for travis CI (#82) ([ff4faf7](https://github.com/webpack-contrib/webpack-defaults/commit/ff4faf7))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/webpack-contrib/webpack-defaults/compare/v1.5.0...v1.5.1) (2017-08-25)


### Bug Fixes

* **appveyor:** always use latest npm (#81) ([722b093](https://github.com/webpack-contrib/webpack-defaults/commit/722b093))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/webpack-contrib/webpack-defaults/compare/v1.4.0...v1.5.0) (2017-07-06)


### Bug Fixes

* Include was using the deprecated nodejs key (#70) ([197df50](https://github.com/webpack-contrib/webpack-defaults/commit/197df50))


### Features

* add `webpack` as a `devDependency` (#76) ([bc8a415](https://github.com/webpack-contrib/webpack-defaults/commit/bc8a415))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/webpack-contrib/webpack-defaults/compare/v1.3.0...v1.4.0) (2017-06-10)


### Features

* Implement Travis stages (#69) ([841b9c4](https://github.com/webpack-contrib/webpack-defaults/commit/841b9c4))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/webpack-contrib/webpack-defaults/compare/v1.2.0...v1.3.0) (2017-06-09)


### Bug Fixes

* Adds missing appveyor task in config ([3bf7e89](https://github.com/webpack-contrib/webpack-defaults/commit/3bf7e89))


### Features

* Enforce peerDependencies via defaults (#64) ([4374571](https://github.com/webpack-contrib/webpack-defaults/commit/4374571))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/webpack-contrib/webpack-defaults/compare/v1.1.1...v1.2.0) (2017-06-08)


### Bug Fixes

* release script should not exec `npm run` (#61) ([542996c](https://github.com/webpack-contrib/webpack-defaults/commit/542996c))


### Features

* Adds appveyor build file (#55) ([b0f5110](https://github.com/webpack-contrib/webpack-defaults/commit/b0f5110))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/webpack-contrib/webpack-defaults/compare/v1.1.0...v1.1.1) (2017-06-07)


### Bug Fixes

* Uses serial exectuion for Jest in Travis (#60) ([896855e](https://github.com/webpack-contrib/webpack-defaults/commit/896855e))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/webpack-contrib/webpack-defaults/compare/v1.0.1...v1.1.0) (2017-06-06)


### Features

* Migrate to npm[@latest](https://github.com/latest) (#58) ([14bb0a7](https://github.com/webpack-contrib/webpack-defaults/commit/14bb0a7))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/webpack-contrib/webpack-defaults/compare/v1.0.0...v1.0.1) (2017-05-27)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/webpack-contrib/webpack-defaults/compare/v0.4.7...v1.0.0) (2017-05-22)


### Chores

* **package:** Update to Jest 20 (#52) ([5ec728b](https://github.com/webpack-contrib/webpack-defaults/commit/5ec728b))


### BREAKING CHANGES

* **package:** Jest v20.0.0 introduce several breaking changes
    the most notable is a move to a custom ( rewritten ) version of Jasmine 2.5.
    This is known to effect at minimum, the test suite for `css-loader/new-loader's parse.test.js`

- Forked Jasmine 2.5 into Jest's own test runner and rewrote large parts of Jasmine.
- Jest does not write new snapshots by default on CI.
- Moved the typescript parser from jest-editor-support into a separate jest-test-typescript-parser package.
- Replaced auto-loading of babel-polyfill with only regenerator-runtime, fixes a major memory leak.

See [Jest v20.0.0 Changelog](https://github.com/facebook/jest/blob/master/CHANGELOG.md#jest-2000) and migration paths.



<a name="0.4.7"></a>
## [0.4.7](https://github.com/webpack-contrib/webpack-defaults/compare/v0.4.6...v0.4.7) (2017-05-22)


### Bug Fixes

* **babelrc:** Preset node target should be a string (#53) ([2d00bc1](https://github.com/webpack-contrib/webpack-defaults/commit/2d00bc1))



<a name="0.4.6"></a>
## [0.4.6](https://github.com/webpack-contrib/webpack-defaults/compare/v0.4.2...v0.4.6) (2017-04-29)


### Bug Fixes

* **.babelrc:** enable modules ([e9694cb](https://github.com/webpack-contrib/webpack-defaults/commit/e9694cb))
* **src/tasks/babel:** enable modules ([f85ac12](https://github.com/webpack-contrib/webpack-defaults/commit/f85ac12))
* **src/tasks/package:** disable sourcemaps in build script ([7ea294b](https://github.com/webpack-contrib/webpack-defaults/commit/7ea294b))
* add missing cjs.js to filesOnce ([522205f](https://github.com/webpack-contrib/webpack-defaults/commit/522205f))
* comment issue template ([50065fb](https://github.com/webpack-contrib/webpack-defaults/commit/50065fb))



<a name="0.4.5"></a>
## [0.4.5](https://github.com/webpack-contrib/webpack-defaults/compare/v0.4.4...v0.4.5) (2017-03-29)


### Bug Fixes

* add missing cjs.js to filesOnce ([a52507a](https://github.com/webpack-contrib/webpack-defaults/commit/a52507a))



<a name="0.4.4"></a>
## [0.4.4](https://github.com/webpack-contrib/webpack-defaults/compare/v0.4.3...v0.4.4) (2017-03-21)


### Bug Fixes

* **src/tasks/babel:** enable modules ([931f764](https://github.com/webpack-contrib/webpack-defaults/commit/931f764))
* **src/tasks/package:** disable sourcemaps in build script ([47917b5](https://github.com/webpack-contrib/webpack-defaults/commit/47917b5))



<a name="0.4.3"></a>
## [0.4.3](https://github.com/webpack-contrib/webpack-defaults/compare/v0.4.2...v0.4.3) (2017-03-21)


### Bug Fixes

* **.babelrc:** enable modules ([f4ac207](https://github.com/webpack-contrib/webpack-defaults/commit/f4ac207))



<a name="0.4.2"></a>
## [0.4.2](https://github.com/webpack-contrib/webpack-defaults/compare/v0.4.1...v0.4.2) (2017-03-16)


### Bug Fixes

* **babel:** Adds object-rest-spread to env ([2d0f980](https://github.com/webpack-contrib/webpack-defaults/commit/2d0f980))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/webpack-contrib/webpack-defaults/compare/v0.4.0...v0.4.1) (2017-03-15)


### Bug Fixes

* overwrite .travis.yml ([577f6c7](https://github.com/webpack-contrib/webpack-defaults/commit/577f6c7))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/webpack-contrib/webpack-defaults/compare/v0.3.0...v0.4.0) (2017-03-15)


### Features

* add test:watch script ([a61621b](https://github.com/webpack-contrib/webpack-defaults/commit/a61621b)), closes [#31](https://github.com/webpack-contrib/webpack-defaults/issues/31)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/webpack-contrib/webpack-defaults/compare/v0.2.1...v0.3.0) (2017-03-15)


### Bug Fixes

* overwrite .eslintrc ([0806980](https://github.com/webpack-contrib/webpack-defaults/commit/0806980))
* target cjs.js in package template main prop ([d567b6d](https://github.com/webpack-contrib/webpack-defaults/commit/d567b6d))


### Features

* add commonjs proxy for es modules ([c770665](https://github.com/webpack-contrib/webpack-defaults/commit/c770665))



<a name="0.2.1"></a>
# [0.2.1](https://github.com/webpack-contrib/webpack-defaults/compare/v0.2.0...v0.2.1) (2017-03-06)


### Refactor

* **package:** removes all bithound references ([a2bb8ec](https://github.com/webpack-contrib/webpack-defaults/commit/a2bb8ec))


<a name="0.2.0"></a>
# [0.2.0](https://github.com/webpack-contrib/webpack-defaults/compare/v0.1.1...v0.2.0) (2017-03-06)


### Bug Fixes

* **package:** target proper security script ([18f6fd8](https://github.com/webpack-contrib/webpack-defaults/commit/18f6fd8))
* update package.json in user’s package folder, not in webpack-default’s ([4e4a396](https://github.com/webpack-contrib/webpack-defaults/commit/4e4a396))
* use mrm to update package.json, get rid of special check for webpack-defaults itself ([e2ed441](https://github.com/webpack-contrib/webpack-defaults/commit/e2ed441))


### Features

* incorporate standard-version ([519123a](https://github.com/webpack-contrib/webpack-defaults/commit/519123a))
* **babel:** convert to babel-preset-env ([99b4db5](https://github.com/webpack-contrib/webpack-defaults/commit/99b4db5))


<a name="0.1.1"></a>
## [0.1.1](https://github.com/webpack-contrib/webpack-defaults/compare/v0.1.0...v0.1.1) (2017-03-05)


### Bug Fixes

* Allow Node 4 at `engines` ([4ccb8f2](https://github.com/webpack-contrib/webpack-defaults/commit/4ccb8f2))


<a name="0.1.0"></a>
# [0.1.0](https://github.com/webpack-contrib/webpack-defaults/compare/52a5019...v0.1.0) (2017-03-05)


### Bug Fixes

* **templates:** publish GitHub templates templates to npm ([8897219](https://github.com/webpack-contrib/webpack-defaults/commit/8897219))
* **templates:** use sync version of cp-file ([46c94bd](https://github.com/webpack-contrib/webpack-defaults/commit/46c94bd))
* **travis:** overwrite matrix.include instead of appending new values ([5310ebf](https://github.com/webpack-contrib/webpack-defaults/commit/5310ebf))
* add prepublish script ([09aa855](https://github.com/webpack-contrib/webpack-defaults/commit/09aa855))
* do not overwrite change log, add template ([7c75f2b](https://github.com/webpack-contrib/webpack-defaults/commit/7c75f2b))
* README → README.md ([d11693a](https://github.com/webpack-contrib/webpack-defaults/commit/d11693a))
* try to wrap avatar in a link ([617b280](https://github.com/webpack-contrib/webpack-defaults/commit/617b280))
* tweak lint-staged command ([6afb2b8](https://github.com/webpack-contrib/webpack-defaults/commit/6afb2b8))
* update logo ([ab6d261](https://github.com/webpack-contrib/webpack-defaults/commit/ab6d261))
* wrap avatars in links ([dc33381](https://github.com/webpack-contrib/webpack-defaults/commit/dc33381))


### Features

* add Babel, Jest, etc. ([e624739](https://github.com/webpack-contrib/webpack-defaults/commit/e624739))
* add engines to package.json ([8d47669](https://github.com/webpack-contrib/webpack-defaults/commit/8d47669))
* add license and change log ([d2ce45d](https://github.com/webpack-contrib/webpack-defaults/commit/d2ce45d))
* add readme ([0bcffe0](https://github.com/webpack-contrib/webpack-defaults/commit/0bcffe0))
* GitHub templates ([52a5019](https://github.com/webpack-contrib/webpack-defaults/commit/52a5019))
* list-staged ([dfb9073](https://github.com/webpack-contrib/webpack-defaults/commit/dfb9073))
