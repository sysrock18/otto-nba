const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './source/client.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/statics')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2016', 'es2017', 'react'],
            plugins: ['transform-es2015-modules-commonjs'],
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
  plugins: [
    new ExtractTextPlugin('../statics/styles.css')
  ]
};

module.exports = config;
