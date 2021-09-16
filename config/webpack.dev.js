const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  performance: {
    hints: 'warning',
  },

  watchOptions: {
    ignored: ['node_modules/**'],
    aggregateTimeout: 600,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    compress: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
});
