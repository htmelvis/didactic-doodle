const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const stylelint = require('stylelint')

const TARGET = process.env.npm_lifecycle_event

process.env.BABEL_ENV = TARGET

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.css$/,
        loaders: [ 'postcss' ],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: [ 'eslint' ],
        include: PATHS.app
      }
    ],
    loaders: [
      { test: /\.css$/, loaders: [ 'style', 'css', 'myth' ], include: PATHS.app },
      {
        test: /\.jsx?$/,
        loaders: [ 'babel?cacheDirectory' ],
        /* dont run babel on the whole project just the changes */
        include: PATHS.app
      }
    ]
  },
  postcss: function () {
    return [stylelint({
      rules: {
        'color-hex-case': 'lower'
      }
    })]
  }
}

if(TARGET === 'start' || !TARGET ){
  module.exports = merge(common, {
  devtool: 'eval-source-map',
   devServer: {
     contentBase: PATHS.build,
     historyApiFallback: true,
     hot: true,
     inline: true,
     progress: true,
     stats: 'errors-only',
     host: process.env.HOST,
     port: process.env.PORT
   },
   plugins: [
     new webpack.HotModuleReplacementPlugin()
   ]
  })
}
if (TARGET === 'build' || !TARGET ){
  module.exports = merge(common, {})
}
