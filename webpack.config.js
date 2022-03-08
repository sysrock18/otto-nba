const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./source/index.html",
  filename: "./index.html"
});
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  devServer: {
    port: 3010,
  },
  entry: path.resolve(__dirname, 'source', 'index.js'),
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        }]
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new CopyWebpackPlugin({
      patterns: [
        { from: 'source/assets', to: 'assets' }
      ]
    })
  ]
};
