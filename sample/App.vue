<template>
  <vue-lazing :threshold="0.9" class="app__container">
    <div class="app__placeholder">
      <p class="placeholder__tips">scroll to bottom</p>
    </div>
    <img
      data-src="https://cn.vuejs.org/images/logo.png"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="logo"
      class="app__img"
    >
    <img
      data-src="https://cn.vuejs.org/images/logo.png"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="logo"
      class="app__img">
    <img
      data-src="https://cn.vuejs.org/images/logo.png"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="logo"
      class="app__img">
    <img
      data-src="https://cn.vuejs.org/images/logo.png"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="logo"
      class="app__img">
    <img
      data-src="https://cn.vuejs.org/images/logo.png"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="logo"
      class="app__img">
    <img
      data-src="https://cn.vuejs.org/images/logo.png"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="logo"
      class="app__img">
    <img
      data-src="https://cn.vuejs.org/images/logo.png"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
      alt="logo"
      class="app__img">
  </vue-lazing>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.app__placeholder
  position: relative
  height: 100vh
  background-color: whitesmoke

.placeholder__tips
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
  font-size: 50px
  font-weight: bold

.app__img
  display: block
  margin: 0 auto
  width: 500px
  height: 500px
</style>
