# Rollup TS Lib Starter

> This is an opinionated starter kit to start making an Library

## Install


```bash
# or npm install
yarn 
```
## Usage

#### To build with watch mode

```bash
yarn dev
```

#### To build the project

```bash
# test
yarn build:dev

# prod
yarn build:prod
```

## Config

> ./config.js

- `libName` - Default is `package.json` `name`

  Library name export when `resolve` is true. `window[libName]`

- `resolve` - Default is `true`

  Whether to put the node_modules packages into the library

  if `false`, Looks like this：
  
  ```js
  'use strict';
  var _asyncToGenerator = require('@babel/runtime-corejs2/helpers/esm/asyncToGenerator');
  var _regeneratorRuntime = require('@babel/runtime-corejs2/regenerator');
  var _Object$entries = require('@babel/runtime-corejs2/core-js/object/entries');
  ```
 
- `banner`

  Library banner annotation.

### feature

- [x] `typescript`（via: [@babel/preset-typescript](https://babel.dev/docs/en/babel-preset-typescript)）
- [x] check types and types export 
- [x] [`eslint`](https://github.com/eslint/eslint)
- [x] [`prettier`](https://github.com/prettier/prettier)
- [x] [`husky`](https://github.com/typicode/husky)
- [x] [`lint-staged`](https://github.com/okonet/lint-staged)
- [x] [`commitlint`](https://github.com/conventional-changelog/commitlint)
- [x] modules analyze（via: [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)）

