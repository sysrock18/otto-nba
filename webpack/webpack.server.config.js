const fs = require('fs');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const nodeModules = fs
  .readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .reduce(
    (modules, module) => Object.assign(modules, { [module]: `commonjs ${module}` }),
    {}
  )

const config = {
  entry: ['babel-polyfill', './source/server.js'],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server'),
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://otto-nba-sfs.now.sh/'
      : 'http://localhost:3001/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'latest-minimal', 'react'],
            env: {
              production: {
                plugins: ['transform-regenerator', 'transform-runtime'],
                presets: ['es2015']
              },
              development: {
                presets: ['latest-minimal']
              }
            }
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,  
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules',
        }),
      }
    ]
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.css', '.json'],
  },
  externals: nodeModules,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
      },
    }),
    new ExtractTextPlugin('../statics/styles.css')
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
        ie8: false,
        ecma: 5,
        warnings: false
      }
    })
  )
}

module.exports = config;