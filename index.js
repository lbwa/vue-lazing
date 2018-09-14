import load from './lib/index'

load.install = function install (Vue) {
  Vue.component(`vue-lazing`, load)
}

if ((typeof window !== 'undefined') && window.Vue) window.Vue.use(load)

export default load
