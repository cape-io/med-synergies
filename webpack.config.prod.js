const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'static/js'),
    filename: 'bundle.js',
    publicPath: '/js/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: false,
        warnings: false,
      },
      compressor: {
        drop_console: false,
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [ {
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loaders: [ 'babel?cacheDirectory' ],
    } ],
  },
}
