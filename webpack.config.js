const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 5000,
    contentBase: path.join(__dirname, '/dist'),
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'src/common'),
    },
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
        ],
      }, {
        test: /.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      }, {
        test: /.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      }],
  },
};
