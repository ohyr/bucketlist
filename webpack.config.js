const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostcssPresetEnv = require('postcss-preset-env');

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
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    PostcssPresetEnv({
                      autoprefixer: { grid: true },
                      browsers: ['> 1%', 'last 2 versions'],
                    }),
                  ],
                },
              },
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
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    PostcssPresetEnv({
                      autoprefixer: { grid: true },
                      browsers: ['> 1%', 'last 2 versions'],
                    }),
                  ],
                },
              },
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
