const path = require('path');

const config = {
  entry: './source/server.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server')
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: {
          loader: 'json'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest-minimal', 'react']
          }
        }
      }
    ]
  },
  target: 'node'
};

module.exports = config;