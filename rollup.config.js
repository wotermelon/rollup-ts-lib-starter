import path from 'path'
import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import { terser } from 'rollup-plugin-terser'
import progress from 'rollup-plugin-progress'
import replace from 'rollup-plugin-replace'
import visualizer from 'rollup-plugin-visualizer'
import eslint from '@rollup/plugin-eslint'
import pkg from './package.json'
import config from './config'

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx', '.json']

const ifProd = process.env.NODE_ENV !== 'development'

const getDepPath = (depObject) => Object.keys(depObject)
  .map(nodeModule => path.resolve(__dirname, 'node_modules', nodeModule))
const externalList = getDepPath({ ...pkg.dependencies, ...(pkg.peerDependencies || {}) })

export default defineConfig({
  input: "lib/index.ts",
  output: [{
    file: 'dist/main.esm.js',
    format: 'es',
    banner: config.banner
  }, {
    file: 'dist/main.js',
    format: config.resolve ? 'umd' : 'cjs',
    name: config.resolve ? config.libName : undefined,
    banner: config.banner,
    exports: 'default'
  }],
  external: (id, parent, isResolved) => {
    // 全打包进去
    if (config.resolve) return false

    const isMatch = externalList.find(p => id.indexOf(p) !== -1)
    return !!isMatch
  },
  plugins: [
    !ifProd && eslint({
      include: 'lib/**/*',
      exclude: '**/node_modules/**'
    }),
    resolve({
      extensions,
      browser: true,
      include: 'lib/**/*'
    }),
    // 将 json 文件处理成 es6 模块
    json(),
    // 将 CommonJS 模块转为 es6
    commonjs(),
    // babel
    babel({
      include: 'lib/**/*',
      exclude: '**/node_modules/**',
      babelHelpers: 'runtime',
      extensions
    }),
    // 打包进度条
    progress(),
    // 变量替换
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // es6 压缩
    ifProd && terser(),
    // 打包依赖分析
    (process.env.REPORT === 'true') && visualizer({
      filename: './analyze.html',
      title: 'My Bundle',
    }),
  ]
})