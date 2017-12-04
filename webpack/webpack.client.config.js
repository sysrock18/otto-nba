const fs = require('fs');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: ['babel-polyfill', './source/client.js'],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/statics'),
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
            presets: ['es2015', 'es2016', 'es2017', 'react'],
            plugins: ['transform-es2015-modules-commonjs'],
            env: {
              production: {
                plugins: ['transform-regenerator', 'transform-runtime'],
                presets: ['es2015']
              },
              development: {
                plugins: ['transform-es2015-modules-commonjs']
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
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.css', '.json'],
  },
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
