const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './code/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/i,
        type: 'asset/resource',
      },
      {
        test: /\.txt$/i,
        type: 'asset/source',
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource',
      },
    ],
  },
};
