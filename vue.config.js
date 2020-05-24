const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        app: {
          // page 的入口
          entry: 'src/main.js',
          // 模板来源
          template: 'index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html'
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('src'),
              '@modules': resolve('src/modules'),
              '@configs': resolve('src/configs'),
              '@globals': resolve('src/globals'),
              '@vendors': resolve('src/vendors'),
              '@assets': resolve('src/assets'),
              'vue-design-core': resolve('src/core')
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'   //重写接口
                }
            }
        }
    }
};
