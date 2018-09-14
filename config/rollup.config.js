const path = require('path')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const vue = require('rollup-plugin-vue').default
const version = process.env.version || require('../package.json').version

const resolve = p => path.resolve(__dirname, '../', p)

const banner =
`/*!
  * vue-lazing v${version}
  * (c) ${new Date().getFullYear()} Bowen<Github: lbwa>
  * @license MIT
  */`

const build = {
  'development': {
    entry: resolve('lib/index.vue'),
    dest: resolve('dist/vue-lazing.js'),
    format: 'umd',
    env: 'development',
    banner
  },

  'production': {
    entry: resolve('lib/index.vue'),
    dest: resolve('dist/vue-lazing.min.js'),
    format: 'umd',
    env: 'production',
    banner
  }
}

function createConfig (opts) {
  const options = build[opts]
  const config = {
    input: options.entry,
    output: {
      file: options.dest,
      format: options.format,
      banner: options.banner,
      name: options.moduleName || 'vue-lazing' // global name in window
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      vue()
    ]
  }

  if (options.env) {
    config.plugins.push(
      replace({
        exclude: 'node_modules/**',
        'process.env.NODE_ENV': JSON.stringify(options.env)
      })
    )
  }

  return config
}

module.exports = createConfig(process.env.TARGET)
