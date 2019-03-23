const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './source/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'snapterest.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['transform-class-properties'],
            },
          },
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'old_versions'),
        ],
      },
    ],
  },
};
