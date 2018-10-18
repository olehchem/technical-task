/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',

  entry: {
    app: ['./src/index.jsx'],
  },

  module: {
    rules: [{ test: /.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  devServer: {
    quiet: false,
    open: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: './dist',
  },
};
