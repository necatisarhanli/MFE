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
      name: 'marketing', // global variable name for consuming project
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap',
      },
      shared: dependencies, // get sharing dependencies from package.json , not ideal if some exact version usage
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
