module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: [ 'style', 'raw' ],
      include: __dirname
    }]
  }
}


module.exports = {
  // OAuth info (copied from the FusionAuth admin panel)
  clientID: '85a03867-dccf-4882-adde-1a79aeec50df',
  clientSecret: 'JNlTw3c9B5NrVhF-cz3m0fp_YiBg-70hcDoiQ2Ot30I',
  redirectURI: 'http://localhost:9000/oauth-callback',
  applicationID: '85a03867-dccf-4882-adde-1a79aeec50df',

  // our FusionAuth api key
  apiKey: 'o9WngMh2AAp3zH7gvMYtML9sGG31A9xVY1bi3Oui-_Y',

  // ports
  clientPort: 8080,
  serverPort: 9000,
  fusionAuthPort: 9011
};
