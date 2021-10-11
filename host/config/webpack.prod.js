const { merge } = require('webpack-merge')
const { dependencies } = require('../package.json')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: dependencies,
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
