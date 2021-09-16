const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const allowAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.html'),
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeRedundantAttributes: true,
    //     useShortDoctype: true,
    //     removeEmptyAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     keepClosingSlash: true,
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyURLs: true,
    //   },
  }),
  new WebpackManifestPlugin(),
  new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }),
];

if (allowAnalyze) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  );
}

module.exports = {
  target: 'web',
  entry: {
    bundle: './src/App.tsx',
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:6].js',
  },

  optimization: {
    usedExports: true,
    splitChunks: false,
  },

  performance: {
    hints: 'warning',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins,
};
