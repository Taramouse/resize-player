import Vue from 'vue'

const WindowInstanceMap = new Vue({
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0,
    }
  },
  created() {
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight

    window.addEventListener('resize', e => {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    })
  }
})

export default WindowInstanceMap
