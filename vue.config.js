const { defineConfig } = require('@vue/cli-service')
process.env.Vue_APP_VERSION = require('./package.json').version
process.env.Vue_APP_NAME = require('./package.json').name
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map'
  },
})
