require('dotenv').config();
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'node',
  entry: {
    server: './src/server/index.ts',
    'public/home': './src/js/home.ts',
    'public/styles': './src/scss/base.scss',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin(),
  ],
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
