const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

const resolve = p => path.resolve(__dirname, '../', p)

const config = {
  mode: 'development',
  context: resolve('./'),
  entry: {
    sample: resolve('sample/index.js')
  },
  output: {
    path: resolve('./docs'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      ROOT: resolve('./')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 5000,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: resolve('sample/index.html')
    }),
    new WebpackBar({
      done (sharedState, ctx) {
        const server = config.devServer
        console.log(`\nhttp://${server.host}:${server.port}\n`)
      }
    })
  ]
}

module.exports = config
