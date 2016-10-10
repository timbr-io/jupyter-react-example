var version = require('./package.json').version;
var path = require( 'path' );

const babelSettings = {
  plugins: [
    'add-module-exports',
    'transform-regenerator',
    'transform-decorators-legacy'
  ],
  presets: [ 'es2015', 'react', 'stage-1' ]
};


module.exports = [
    {
      entry: './src/index.js',
      output: {
          filename: 'index.js',
          path: '../example/static',
          libraryTarget: 'umd'
      },
      module : {
        loaders : [
          {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: [`babel?${JSON.stringify( babelSettings )}`]
          },
          { test: /\.css$/, loader: "style-loader?sourceMap!css-loader?importLoaders=1" },
          {
            test: /\.json$/, loader: 'json-loader'
          }
        ]
      }
    }
];
