const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/Index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
  },
  plugins: [new Dotenv()],
};

