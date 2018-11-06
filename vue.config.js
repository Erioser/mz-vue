
const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}


module.exports = {
    devServer: {
      port: 8000,
      proxy: {
        '/mz': {
          target: 'https://m.maizuo.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/mz': ''
          }
        }
      }
    },
    chainWebpack  (config)  {
       config
            .resolve
            .alias // 配置解析别名
            .set('@styles', resolve('src/stylesheets'))
            .set('@libs', resolve('src/libs'))
            .set('@util', resolve('src/util'))
            .set('@c', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
            
    }
}