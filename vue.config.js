// vue.config.js
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8085, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true
      },
      "/foo": {
        target: "<other_url>"
      }
    } // 配置多个代理
  }
};
// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
// module.exports = {
//   baseUrl: process.env.NODE_ENV === 'production' ? '/dist/' : './',
//   module: {
//   rules: [{
//   test: /\.less$/,
//   use: ['style-loader', 'css-loader', 'less-loader', {
//   loader: 'style-resources-loader',
//   options: {
//   patterns: path.resolve(__dirname, 'path/to/less/variables/*.less'),
//   injector: 'append'
//   }
//   }]
//   }]
//   },
//   outputDir: 'dist',
//   lintOnSave: true,
//   productionSourceMap: false,
//   devServer: {
//   port: 8085, // 端口号
//   host: 'localhost',
//   https: false, // https:{type:Boolean}
//   open: true, //配置自动启动浏览器
//   proxy: {
//   '/api': {
//   target: '<url>',
//   ws: true,
//   changeOrigin: true
//   },
//   '/foo': {
//   target: '<other_url>'
//   }
//   }, // 配置多个代理
//   },

//   pluginOptions: {
//   'style-resources-loader': {
//   preProcessor: 'less',
//   patterns: []
//   }
//   }
//   }
