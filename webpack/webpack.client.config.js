const path = require('path');

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
      }
    ],
  },
  target: 'web'
};

module.exports = config;
