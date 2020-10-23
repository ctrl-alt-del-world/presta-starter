const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cwd = process.cwd()
const { NODE_ENV } = process.env

module.exports = {
  mode: NODE_ENV ? 'production' : 'development',
  entry: {
    client: './client/index.js',
    style: `./src/style.scss`,
  },
  output: {
    path: path.join(cwd, './build')
  },
  performance: { hints: false },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer'),
                require('cssnano')({ preset: 'advanced' }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                importer: require('node-sass-glob-importer')(),
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),

  ],
  resolve: {
    alias: {
      '@': cwd
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
}