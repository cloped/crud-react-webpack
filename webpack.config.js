const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [];

plugins.push(new HtmlWebpackPlugin({
  template: './main/index.html',
  chunks: ['app'],
  filename: 'index.html',
}));

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins
}
