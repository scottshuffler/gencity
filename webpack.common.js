const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query: {
         presets: ['react', 'es2015']
        } 
      },
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    HtmlWebpackPluginConfig,
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
 
};
