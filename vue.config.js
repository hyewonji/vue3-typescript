const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
        alias: {
          '@': path.join(__dirname, 'src/')
        }
    }
  },
  transpileDependencies: true,
});
