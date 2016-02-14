var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'src/app.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  module: {
    loaders: [{
     // test: /\.js$/,
      test: /\.ts$/, loader: 'ts-loader',

      // There is not need to run the loader through
      // vendors
      exclude: [node_modules_dir],
      noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    }]
  }
};

module.exports = config;
