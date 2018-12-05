const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify('https://haven-ah-backend.herokuapp.com/api/v1')
      }
    })
  ]
});
