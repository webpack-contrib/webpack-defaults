# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.0.0"></a>
# [4.0.0](https://github.com/webpack-contrib/webpack-defaults/compare/v3.1.2...v4.0.0) (2019-04-26)


### Features

* migrate on azure pipelines ([#172](https://github.com/webpack-contrib/webpack-defaults/issues/172)) ([6f77d5f](https://github.com/webpack-contrib/webpack-defaults/commit/6f77d5f))


### BREAKING CHANGES

* now we use `azure-pipelines` for CI



<a name="3.1.2"></a>
## [3.1.2](https://github.com/webpack-contrib/webpack-defaults/compare/v3.1.1...v3.1.2) (2019-04-23)


### Bug Fixes

* replace prepublish npm script with prepare



<a name="3.1.1"></a>
## [3.1.1](https://github.com/webpack-contrib/webpack-defaults/compare/v3.1.0...v3.1.1) (2019-03-28)


### Bug Fixes

* remove `[@babel](https://github.com/babel)/polyfill` due problem with corejs@2 ([4ee960b](https://github.com/webpack-contrib/webpack-defaults/commit/4ee960b))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/webpack-contrib/webpack-defaults/compare/v3.0.5...v3.1.0) (2019-03-18)


### Bug Fixes

* ci test script ([#164](https://github.com/webpack-contrib/webpack-defaults/issues/164)) ([b859e88](https://github.com/webpack-contrib/webpack-defaults/commit/b859e88))
* commit linting ([#166](https://github.com/webpack-contrib/webpack-defaults/issues/166)) ([6addc2d](https://github.com/webpack-contrib/webpack-defaults/commit/6addc2d))


### Features

* `test:only` script ([5c1a5b8](https://github.com/webpack-contrib/webpack-defaults/commit/5c1a5b8))
* add `cjs` test ([#161](https://github.com/webpack-contrib/webpack-defaults/issues/161)) ([d6c9531](https://github.com/webpack-contrib/webpack-defaults/commit/d6c9531))



<a name="3.0.5"></a>
## [3.0.5](https://github.com/webpack-contrib/webpack-defaults/compare/v3.0.3...v3.0.5) (2018-12-22)


### Bug Fixes

* allow failures for canary builds ([#159](https://github.com/webpack-contrib/webpack-defaults/issues/159)) ([96d1d3c](https://github.com/webpack-contrib/webpack-defaults/commit/96d1d3c))
* appveyor job name fro canary tests ([#158](https://github.com/webpack-contrib/webpack-defaults/issues/158)) ([d9d6aca](https://github.com/webpack-contrib/webpack-defaults/commit/d9d6aca))



<a name="3.0.3"></a>
## [3.0.3](https://github.com/webpack-contrib/webpack-defaults/compare/v3.0.2...v3.0.3) (2018-12-21)


### Bug Fixes

* increase nodejs version for canary builds ([#157](https://github.com/webpack-contrib/webpack-defaults/issues/157)) ([0a93c3c](https://github.com/webpack-contrib/webpack-defaults/commit/0a93c3c))



<a name="3.0.2"></a>
## [3.0.2](https://github.com/webpack-contrib/webpack-defaults/compare/v3.0.1...v3.0.2) (2018-12-20)


### Bug Fixes

* relax minimum required nodejs ([#154](https://github.com/webpack-contrib/webpack-defaults/issues/154)) ([11cabb6](https://github.com/webpack-contrib/webpack-defaults/commit/11cabb6))
* relax minimum required webpack version ([#155](https://github.com/webpack-contrib/webpack-defaults/issues/155)) ([acca23e](https://github.com/webpack-contrib/webpack-defaults/commit/acca23e))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/webpack-contrib/webpack-defaults/compare/v3.0.0...v3.0.1) (2018-12-12)


### Bug Fixes

* change job order for appveyor (from low to high `nodejs` version)
* use `node@6` for canary testing on CircleCI
* use `@webpack-contrib/defaults` in package ([bb43bdf](https://github.com/webpack-contrib/webpack-defaults/commit/bb43bdf))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/webpack-contrib/webpack-defaults/compare/v2.6.0...v3.0.0) (2018-12-12)


### Bug Fixes

* typo in `security` command (`scripts`) ([#148](https://github.com/webpack-contrib/webpack-defaults/issues/148)) ([7df6f45](https://github.com/webpack-contrib/webpack-defaults/commit/7df6f45))
* ignore IntelliJ IDEA files (`*.iml`) ([#146](https://github.com/webpack-contrib/webpack-defaults/issues/146)) ([565c814](https://github.com/webpack-contrib/webpack-defaults/commit/565c814))
* `husky` hooks setup ([#142](https://github.com/webpack-contrib/webpack-defaults/issues/142)) ([cd50463](https://github.com/webpack-contrib/webpack-defaults/commit/cd50463))
* switch from `webpack-defaults` to `[@webpack-contrib](https://github.com/webpack-contrib)/defaults` ([#147](https://github.com/webpack-contrib/webpack-defaults/issues/147)) ([29a7013](https://github.com/webpack-contrib/webpack-defaults/commit/29a7013))
* bin field problem ([91f54d2](https://github.com/webpack-contrib/webpack-defaults/commit/91f54d2))
* remove commitlint from templates ([f96786f](https://github.com/webpack-contrib/webpack-defaults/commit/f96786f))


### Features

* new pull request template ([#140](https://github.com/webpack-contrib/webpack-defaults/issues/140)) ([4fcadf5](https://github.com/webpack-contrib/webpack-defaults/commit/4fcadf5))
* update deps and required configuration

### BREAKING CHANGE

* switch to `babel@7`



<a name="2.6.0"></a>
## [2.6.0](https://github.com/webpack-contrib/webpack-defaults/compare/v2.5.0...v2.6.0) (2018-09-05)


### Bug Fixes

* use `schema-utils` instead `@webpack-contrib/schema-utils` to validate options ([#128](https://github.com/webpack-contrib/webpack-defaults/issues/128)) ([63644e1](https://github.com/webpack-contrib/webpack-defaults/commit/63644e1))
* skip canary tests on `appveyor` when it is not required ([f97c678](https://github.com/webpack-contrib/webpack-defaults/commit/f97c678))
* correct link in README on `CONTRIBUTING.md` and `LICENSE` ([3307b05](https://github.com/webpack-contrib/webpack-defaults/commit/3307b05))

### Features

* add issues templates (bug, docs, feature, modification, support) ([9a97478](https://github.com/webpack-contrib/webpack-defaults/commit/9a97478))
* add npm size badge to README ([a094e1f](https://github.com/webpack-contrib/webpack-defaults/commit/a094e1f))
* add and use `node@10` for `appveyor` and `CircleCI` ([f97c678](https://github.com/webpack-contrib/webpack-defaults/commit/f97c678))
* use `npm audit` instead `nsp` ([42e14e3](https://github.com/webpack-contrib/webpack-defaults/commit/42e14e3))
* use `npm ci` where it is possible ([42e14e3](https://github.com/webpack-contrib/webpack-defaults/commit/42e14e3))
* enable `cache` for `appveyor`

### Internal

* remove `codecov` config file, default configuration is enough ([9f4f9fc]((https://github.com/webpack-contrib/webpack-defaults/commit/9f4f9fc))
* simplify CircleCI config ([42e14e3](https://github.com/webpack-contrib/webpack-defaults/commit/42e14e3))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/webpack-contrib/webpack-defaults/compare/v2.2.1...v2.3.0) (2018-04-03)


### Features

* **templates:** add contributing guidelines ([#109](https://github.com/webpack-contrib/webpack-defaults/issues/109)) ([43a2114](https://github.com/webpack-contrib/webpack-defaults/commit/43a2114))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/webpack-contrib/webpack-defaults/compare/v2.2.0...v2.2.1) (2018-04-03)


### Bug Fixes

* **package:** Tighten engines version to disclude dev majors ([46021cb](https://github.com/webpack-contrib/webpack-defaults/commit/46021cb))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/webpack-contrib/webpack-defaults/compare/v2.1.5...v2.2.0) (2018-04-02)


### Features

* **circle:** Add dist-tag version check to canary suite ([c64fae7](https://github.com/webpack-contrib/webpack-defaults/commit/c64fae7))



<a name="2.1.5"></a>
## [2.1.5](https://github.com/webpack-contrib/webpack-defaults/compare/v2.1.4...v2.1.5) (2018-04-02)


### Bug Fixes

* **package:** copy existing bin property ([#108](https://github.com/webpack-contrib/webpack-defaults/issues/108)) ([de92db1](https://github.com/webpack-contrib/webpack-defaults/commit/de92db1))
* **typo:** fix issue template path ([#107](https://github.com/webpack-contrib/webpack-defaults/issues/107)) ([43867c4](https://github.com/webpack-contrib/webpack-defaults/commit/43867c4))



<a name="2.1.4"></a>
## [2.1.4](https://github.com/webpack-contrib/webpack-defaults/compare/v2.1.3...v2.1.4) (2018-04-01)


### Bug Fixes

* **package:** Use proper Node engines range ([c4b066d](https://github.com/webpack-contrib/webpack-defaults/commit/c4b066d))



<a name="2.1.3"></a>
## [2.1.3](https://github.com/webpack-contrib/webpack-defaults/compare/v2.1.2...v2.1.3) (2018-04-01)


### Bug Fixes

* add keywords to package, replace name in issue template ([#105](https://github.com/webpack-contrib/webpack-defaults/issues/105)) ([c5bed3c](https://github.com/webpack-contrib/webpack-defaults/commit/c5bed3c))



<a name="2.1.2"></a>
## [2.1.2](https://github.com/webpack-contrib/webpack-defaults/compare/v2.1.1...v2.1.2) (2018-04-01)


### Code Refactoring

* **Readme:** update readme with modern style and convention (#100) ([a300517](https://github.com/webpack-contrib/webpack-defaults/commit/a300517))

- npmjs.org now left-aligns all content except images by default;
  aligns section headers left
- removes maintainers section: rarely kept up to date across the org
- simplifies the Examples section, replaces lorem with [ placeholder ]
- adds License section to point to LICENSE file for convenience
- refactors the Options sections with simpler layout and easier to
  read modern convention
- adds package name header
- moves badges below the webpack logo
- uses github asset for webpack logo
- adds Requirements section
- replaces Usage with Getting Started and friendly text, direction
- removed unnecessary multiple, copied Examples and Options

<a name="2.1.1"></a>
## [2.1.1](https://github.com/webpack-contrib/webpack-defaults/compare/v2.1.0...v2.1.1) (2018-03-28)


### Bug Fixes

* **commitlint:** fix type-enum options ([#99](https://github.com/webpack-contrib/webpack-defaults/issues/99)) ([c301bbc](https://github.com/webpack-contrib/webpack-defaults/commit/c301bbc)), closes [#94](https://github.com/webpack-contrib/webpack-defaults/issues/94) [#98](https://github.com/webpack-contrib/webpack-defaults/issues/98)



<a name="2.1.0"></a>
# [2.1.0](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0...v2.1.0) (2018-03-28)


### Features

* **dotfile:** add .editorconfig to templates ([#96](https://github.com/webpack-contrib/webpack-defaults/issues/96)) ([8e43fd4](https://github.com/webpack-contrib/webpack-defaults/commit/8e43fd4))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/webpack-contrib/webpack-defaults/compare/v1.6.0...v2.0.0) (2018-03-26)


### Code Refactoring

* Webpack Defaults 2.x merge ([#88](https://github.com/webpack-contrib/webpack-defaults/issues/88)) ([979bdfd](https://github.com/webpack-contrib/webpack-defaults/commit/979bdfd))


### Features

* **tasks:** add `codecov.yml` ([#77](https://github.com/webpack-contrib/webpack-defaults/issues/77)) ([66e266b](https://github.com/webpack-contrib/webpack-defaults/commit/66e266b))


### BREAKING CHANGES

* Drops support for NodeJS 4.x

refactor: Use non-deprecated config type

 - Moves to non-deprecated eslint config  format

refactor: Prettier integration

 - Leverages Prettier to manage code style
 - Migrates to eslint-config-webpack 2.x ( Prettier support)
 - Updates code style per the above
 - Adds `.prettierrc` to enforce development configs
* Implements Prettier & modifies suported Eslint
configuration that transfers applicable rule responsibility to Prettier

feat: Adds testing boilerplate
 - Adds contrib standard testing config

feat: Adds schema enforcement
 - Installs schema utils dependency
 - Creates `options.json` template
 - Updates build script to accommodate `options.json`

ci: Migrates to CircleCI 2.0 & custom build containers

 - Migrates to CircleCI & a full continuous delivery workflow
* Drops TravisCI in favor of CircleCI 2.0
* Drops support for Webpack 2.x & adds 4.x support
* Enforces existing commit message format
in pre-commit as it's required for release automation



<a name="2.0.0-rc.4"></a>
# [2.0.0-rc.4](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-rc.3...v2.0.0-rc.4) (2017-12-22)


### Bug Fixes

* Post install set script incorrect ([214b4e5](https://github.com/webpack-contrib/webpack-defaults/commit/214b4e5))


### Features

* Adds vscode Jest debug configuration ([f05533b](https://github.com/webpack-contrib/webpack-defaults/commit/f05533b))



<a name="2.0.0-rc.3"></a>
# [2.0.0-rc.3](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2017-12-21)


### Bug Fixes

* Set correct script on post-install ([79f71f2](https://github.com/webpack-contrib/webpack-defaults/commit/79f71f2))



<a name="2.0.0-rc.2"></a>
# [2.0.0-rc.2](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2017-12-20)


### Bug Fixes

* **templates:** Generate cache from lock file ([e0bad7c](https://github.com/webpack-contrib/webpack-defaults/commit/e0bad7c))



<a name="2.0.0-rc.1"></a>
# [2.0.0-rc.1](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-rc.0...v2.0.0-rc.1) (2017-12-20)


### Bug Fixes

* **templates:** Fix test generation condition ([fcb49e2](https://github.com/webpack-contrib/webpack-defaults/commit/fcb49e2))



<a name="2.0.0-rc.0"></a>
# [2.0.0-rc.0](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-beta.1...v2.0.0-rc.0) (2017-12-19)


### Bug Fixes

* Update demo options property ([36d7e09](https://github.com/webpack-contrib/webpack-defaults/commit/36d7e09))



<a name="2.0.0-beta.1"></a>
# [2.0.0-beta.1](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-beta.0...v2.0.0-beta.1) (2017-12-15)


### Bug Fixes

* Type in package ([8966c78](https://github.com/webpack-contrib/webpack-defaults/commit/8966c78))


### Features

* Adds codeowners template ([#89](https://github.com/webpack-contrib/webpack-defaults/issues/89)) ([30a2e3b](https://github.com/webpack-contrib/webpack-defaults/commit/30a2e3b))



<a name="2.0.0-beta.0"></a>
# [2.0.0-beta.0](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-alpha.2...v2.0.0-beta.0) (2017-12-15)


### Bug Fixes

* Do no initialize test example if directory exists ([f4bcc3e](https://github.com/webpack-contrib/webpack-defaults/commit/f4bcc3e))



<a name="2.0.0-alpha.2"></a>
# [2.0.0-alpha.2](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2017-12-15)


### Bug Fixes

* Limit branch validation range ([ed5e000](https://github.com/webpack-contrib/webpack-defaults/commit/ed5e000))
* Limit commit linting range ([2896b57](https://github.com/webpack-contrib/webpack-defaults/commit/2896b57))



<a name="2.0.0-alpha.1"></a>
# [2.0.0-alpha.1](https://github.com/webpack-contrib/webpack-defaults/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2017-12-15)


### Bug Fixes

* incorrect eslint config name ([8258ad5](https://github.com/webpack-contrib/webpack-defaults/commit/8258ad5))
* Readme template badge file extension ([ead2b33](https://github.com/webpack-contrib/webpack-defaults/commit/ead2b33))
* Run coverage in CircleCI ([05d122a](https://github.com/webpack-contrib/webpack-defaults/commit/05d122a))
* Update readme template with CircleCI badge ([d1bb56e](https://github.com/webpack-contrib/webpack-defaults/commit/d1bb56e))


### Features

* Adds commit lint configuration ([14ac5ac](https://github.com/webpack-contrib/webpack-defaults/commit/14ac5ac))



<a name="2.0.0-alpha.0"></a>
# [2.0.0-alpha.0](https://github.com/webpack-contrib/webpack-defaults/compare/v1.6.0...v2.0.0-alpha.0) (2017-12-15)


*  refactor: Prettier & CircleCI initial conversion (#86) ([c64d846](https://github.com/webpack-contrib/webpack-defaults/commit/c64d846)), closes [#86](https://github.com/webpack-contrib/webpack-defaults/issues/86)


### Bug Fixes

* Add eslintrc to files array ([ac33c43](https://github.com/webpack-contrib/webpack-defaults/commit/ac33c43))
* Remove appveyor template from config ([ca86566](https://github.com/webpack-contrib/webpack-defaults/commit/ca86566))


### Features

* **tasks:** add `codecov.yml` ([#77](https://github.com/webpack-contrib/webpack-defaults/issues/77)) ([66e266b](https://github.com/webpack-contrib/webpack-defaults/commit/66e266b))


### BREAKING CHANGES

* Drops support for NodeJS 4.x
* Implements Prettier & modifies suported Eslint configuration that transfers applicable rule responsibility to Prettier
* Drops TravisCI in favor of CircleCI 2.0
* Drops support for Webpack 2.x
* Enforces existing commit message format in pre-commit as it's required for release automation



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
