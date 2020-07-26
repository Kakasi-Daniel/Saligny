const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './JS/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname,'./dist')
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(),new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css'
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
        postcss: [
            autoprefixer()
        ]
    }
})
]
}