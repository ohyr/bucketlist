const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        oneOf: [
          {
            issuer: /\.html$/,
            use: [
              {
                loader: 'css-loader',
                options: {
                  onlyLocals: true,
                  modules: true,
                  importLoaders: 2,
                },
              },
              'postcss-loader',
              'sass-loader',
            ],
          },
          {
            use: [
              MiniCssExtractPlugin.loader,
              // {
              //   loader: MiniCssExtractPlugin.loader,
              // },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 2,
                },
              },
              'postcss-loader',
              'sass-loader',
              // {
              //   loader: 'sass-loader',
              // },
            ],
          },
        ],
      },
    ],
  },
};
