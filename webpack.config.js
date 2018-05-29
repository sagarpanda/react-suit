/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PUB_DIR = path.resolve(__dirname, 'public');
const EXAMPLE_DIR = path.resolve(__dirname, 'example');

function htmlPublish() {
  return new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, 'index-build.html')
  })
}

var config = {
  entry: EXAMPLE_DIR + '/index.js',
  output: {
    path: PUB_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        include: [
          path.resolve(__dirname, 'example'),
          path.resolve(__dirname, 'src')
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            modules: true,
            sourceMap: true
          }
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      rootSource: path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    htmlPublish()
  ],
  devtool: 'source-map',
  devServer: { inline: true, port: 3000 }
};

module.exports = config;
