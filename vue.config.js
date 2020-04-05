const path = require('path');
<<<<<<< HEAD
=======

>>>>>>> 7bdf8f909e7cc44a313808e1cc66817329bc88bb
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        app: {
<<<<<<< HEAD
          // page 的入口
          entry: 'src/main.js',
          // 模板来源
          template: 'index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html'
=======
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'app']
>>>>>>> 7bdf8f909e7cc44a313808e1cc66817329bc88bb
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
              '@assets': resolve('src/assets')
            }
        }
    }
};
