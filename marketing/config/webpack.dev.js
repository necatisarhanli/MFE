const { merge } = require('webpack-merge')
const { devPort, dependencies } = require('../package.json')
const commonConfig = require('./webpack.common')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const devConfig = {
  mode: 'development',
  devServer: {
    port: devPort,
    historyApiFallback: {
      index: 'index.html', // something about navigation
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing', // global variable name for consuming project
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: dependencies, // get sharing dependencies from package.json , not ideal if some exact version usage
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, devConfig) //right overrides to left
