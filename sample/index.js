import Vue from 'vue'
import VueLazing from 'ROOT/dist/vue-lazing'
import App from './App'

Vue.use(VueLazing)

new Vue({
  el: '#root',
  render (h) {
    return h(App)
  }
})
