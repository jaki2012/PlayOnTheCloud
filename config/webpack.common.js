var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
//用于将原来模板的资源直接拷贝到dist目录中
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts',
    // 'jquery': './public/js/jquery.min.js',
    // 'jquery.scrolly' : './public/js/jquery.scrolly.min.js',
    // 'main':'./public/js/main.js',
    // 'util':'./public/js/util.js',
    // 'skel':'./public/js/skel.min.js'
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)\??.*$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      // {
      //   test: /\.js$/,
      //   include: helpers.root('public','js'),
      //   loader:'file?name=static/js/[name].[ext]'
      // },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon:'public/images/favicon.ico'
    }),

    new CopyWebpackPlugin([{
      //from: __dirname + '../public',
      from: helpers.root('public'),
      to:helpers.root('dist','static')
    }]),
  ]
};
