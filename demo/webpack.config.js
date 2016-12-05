var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  debug: true,
  devtool: '#inline-source-map',
  entry: [
    './index.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'remaps': path.join(__dirname, '..', 'src/index.js')
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: [
        __dirname,
        path.join(__dirname,  '..', 'src'),
        // path.join(__dirname,  '..', 'node_modules', 'recharts-scale')
      ]
    }]
  }
};
