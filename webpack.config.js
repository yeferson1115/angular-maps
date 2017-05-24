var path = require("path");
var webpack = require('webpack');

var config = {
  entry: {
    '@ngui/map': path.join(__dirname, 'src', 'index.ts')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.html']
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "map.umd.js",
    library: ["map"],
    libraryTarget: "umd"
  },
  externals: [
    /^rxjs\//,    //.... any other way? rx.umd.min.js does work?
    /^@angular\//
  ],
  devtool: 'source-map',
  module: {
    rules: [
      { // Support for .ts files.
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader']
      }
    ]
  }
};

//Different Environment Setup

if (process.env.NODE_ENV === 'prod') {
  config.module.rules.push({
    test: /\.ts$/, use: 'strip-loader?strip[]=debug,strip[]=console.log'
  });
}

module.exports = config;
