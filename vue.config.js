const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  devServer: {
    port: 8099,
    proxy: {
      '/proxy': {
        target: process.env.VUE_APP_PROXY_TARGET,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '',
        },
      },
    },
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
      },
    },
  },
};
