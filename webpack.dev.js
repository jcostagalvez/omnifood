const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.css/,
          use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
            }
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: './index.html',
          template: './src/index.html',
          favicon: './src/Resources/img/logos/logo.png',
          inject: true
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    ]
};
