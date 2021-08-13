const pkg = require('./package.json')

module.exports = {
  presets: [
    // 用于编译 ES2015+ 语法
    [
      '@babel/preset-env',
      {
        // 设为 false, 否则 rollup 会将模块转换为 CommonJS
        targets: {
          android: "5",
          ios: '5'
        },
        modules: false,
        loose: true
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        // corejs2 会转译 Object.entries 等静态方法，需要装 @babel/runtime-corejs2
        // corejs3 会转译 [].include 等原型方法，需要装 @babel/runtime-corejs3
        corejs: 2,
        useESModules: true,
        helpers: true,
        version: (pkg.dependencies['@babel/runtime-corejs2'] ||
          pkg.dependencies['@babel/runtime-corejs3']).replace(/^[^0-9]*/, '')
      }
    ]
  ]
}