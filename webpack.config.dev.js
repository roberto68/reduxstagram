var path = require('path');
var webpack = require('webpack');

module.exports = {
//  devtool: 'source-map',
  devtool: 'eval',  
//  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxstagram'
  ],	
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
//    new webpack.NoErrorsPlugin(), 
  //  new BellOnBundlerErrorPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'client')
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'client'),
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
