<template>
  <div id="app">
    <carousel
      :autoplay="true"
      :autoplayHoverPause="false"
      :autoplayTimeout="2000"
      :loop="true"
      :centerMode="true"
      :perPage="1"
      :navigation="false"
      :paginationEnabled="false"
      :adjustableHeight="false"
    >
      <slide>
        <h1>Costalot Coffee</h1>
        <img alt="Vue logo" src="./assets/logo.png" :height="imageHeight">
        <h1>Special Offers Today</h1>
      </slide>
      <slide>
        <h1>Costalot Coffee</h1>
        <img alt="Vue logo" src="./assets/coffee-cup.jpg" :height="imageHeight">
        <h1>Buy One Get One Free</h1>
      </slide>
      <slide>
        <h1>Costalot Coffee</h1>
        <img alt="Vue logo" src="./assets/logo.png" :height="imageHeight">
        <h1>Two Adults One Child Free</h1>
      </slide>
      <slide>
        <h1>Costalot Coffee</h1>
        <img alt="Vue logo" src="./assets/logo.png" :height="imageHeight">
        <h1>30% Off Pot Of Tea</h1>
      </slide>
    </carousel>
    <footer>
      <div>Window Size = {{ windowWidth }} x {{ windowHeight }}</div>
    </footer>
  </div>
</template>

<script>
import WindowInstanceMap from "./WindowinstanceMap.js"

export default {
  computed: {
    windowWidth() {
      let width = WindowInstanceMap.windowWidth
      document.body.style.setProperty('--windowWidth', width + 'px')
      return width
    },
    windowHeight() {
      let height = WindowInstanceMap.windowHeight
      document.body.style.setProperty('--windowHeight', height + 'px')
      return height
    },
    imageWidth() {
      return WindowInstanceMap.windowWidth * 0.50 +'px'
    },
    imageHeight() {
      return WindowInstanceMap.windowHeight * 0.50 +'px'
    }
  }
}
</script>

<style>
body {
  --windowWidth: 600;
  --windowHeight: 300;
}
html, body {
  max-width: --windowWidth;
  max-height: --windowHeight;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
