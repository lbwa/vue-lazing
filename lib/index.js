export default {
  name: 'vue-lazing',

  render (h) {
    return h('div', {
      'class': {
        'lazing__wrapper': true
      },
      ref: 'box'
    }, this.$slots.default)
  },

  props: {
    root: {
      type: Object,
      default: null // viewport
    },
    rootMargin: {
      type: String,
      default: '0px'
    },
    threshold: {
      type: Number,
      default: 0.1
    }
  },

  data () {
    return {
      imgBox: []
    }
  },

  mounted () {
    this.imgBox = [...this.$refs.box.querySelectorAll('img')]
    this.iterator()
  },

  methods: {
    buildObserver () {
      return new IntersectionObserver(this.replaceRunner, {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      })
    },

    iterator () {
      this.imgBox.forEach(img => {
        this.buildObserver().observe(img)
      })
    },

    replaceRunner (entries, ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const img = entry.target
        img.src = img.getAttribute('data-src')
      })
    }
  }
}
