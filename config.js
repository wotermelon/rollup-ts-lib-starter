import pkg from './package.json'

export default {
  // 库名称
  libName: pkg.name,
  // 是否要将 node_modules 全打包进去
  resolve: true,
  banner: `/**
 * ${pkg.name}
 * version: ${pkg.version}
 * author: ${pkg.author}
 */`,
  
}