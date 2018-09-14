const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

const resolve = p => path.resolve(__dirname, '../', p)

const devMode = process.env.NODE_ENV === 'development'

const config = {
  mode: devMode ? 'development' : 'production',
  context: resolve('./'),
  entry: {
    sample: resolve('sample/index.js')
  },
  output: {
    path: resolve('./docs'),
    filename: devMode ? '[name].[hash].js' : '[name].[contenthash:8].js'
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
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: resolve('sample/index.html')
    }),
    new WebpackBar({
      done (sharedState, ctx) {
        if (!devMode) return
        const server = config.devServer
        console.log(`\nhttp://${server.host}:${server.port}\n`)
      }
    })
  ]
}

if (devMode) {
  config.devtool = 'cheap-module-eval-source-map',
  config.devServer = {
    host: '127.0.0.1',
      port: 5000,
        overlay: {
      warnings: false,
        errors: true
    }
  }
} else {
  config.optimization = {
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor'
        }
      }
    }
  }
}

module.exports = config
