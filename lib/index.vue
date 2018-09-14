<template>
  <div class="lazing__wrapper" :ref="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vue-lazing',
  imgBox: [],

  mounted () {
    this.imgBox = [...this.$refs.box.querySelectorAll('img')]
  },

  methods: {
    buildObserver () {
      return new IntersectionObserver(this.replaceRunner, {
        root: null, //viewport
        rootMargin: '0px',
        threshold: 1.0
      })
    },

    iterator () {
      this.imgBox.forEach(img => {
        this.buildObserver().observe(img)
      })
    },

    replaceRunner (entries, ) {
      entries.forEach(entry => {
        const img = entry.target
        if (entry.isIntersecting) {
          img.src = img.getAttribute('data-src')
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
