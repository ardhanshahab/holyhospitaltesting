const { defineConfig } = require('@vue/cli-service')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://go-hospital-server.herokuapp.com'},
  transpileDependencies: true,
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
})

