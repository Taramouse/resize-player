<template>
  <div id="app">
    <router-view/>
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
