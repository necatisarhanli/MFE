const { merge } = require('webpack-merge')
const { devPort, dependencies } = require('../package.json')
const commonConfig = require('./webpack.common')

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
      name: 'host',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
      },
      shared: dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, devConfig) //right overrides to left
