<template>
  <div id="app">
    <carousel
      :autoplay="true"
      :autoplayHoverPause="false"
      :autoplayTimeout="2000"
      :loop="true"
      :centerMode="true"
      :perPage="1"
      :perPageCustom="[[768, 1], [1024, 2]]"
      :navigation="false"
      :paginationEnabled="false"
    >
      <slide>
        <h1>Costalot Coffee</h1>
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Special Offers Today</h1>
      </slide>
      <slide>
        <h1>Costalot Coffee</h1>
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Buy One Get One Free</h1>
      </slide>
      <slide>
        <h1>Costalot Coffee</h1>
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Two Adults One Child Free</h1>
      </slide>
      <slide>
        <h1>Costalot Coffee</h1>
        <img alt="Vue logo" src="./assets/logo.png">
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
    }
  }
};
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
