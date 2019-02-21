var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src'),
  devServer: {
      contentBase: path.resolve(__dirname, 'src'),
      hot: true,
      watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,  
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                ['@babel/preset-env']
              ]
            }
          }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          { loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, 'src/styles/global.scss'),
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/']),
    new CopyWebpackPlugin([
      { from: './src/img', to: 'img' },
      { from: './src/data', to: 'data' },
    ]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      title: 'Ally FCC'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    resolve: {
      alias: {
        Styles: path.resolve(__dirname, 'src/styles/'),
      }
    }
};