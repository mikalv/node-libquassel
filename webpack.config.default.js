const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'libquassel.js',
    library: 'libquassel',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      tls: path.resolve(__dirname, 'src/tls'),
    },
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              "babel-plugin-transform-decorators-legacy",
              "babel-plugin-transform-class-properties",
              "babel-plugin-transform-runtime",
              [
                "babel-plugin-transform-builtin-extend", {
                  globals: [ "Map" ]
                }
              ]
            ]
          }
        }
      }
    ]
  }
};