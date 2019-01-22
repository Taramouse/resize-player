<template>
  <div id="app">
    <carousel
      :autoplay="true"
      :autoplayHoverPause="false"
      :autoplayTimeout="2500"
      :loop="true"
      :centerMode="true"
      :perPage="1"
      :navigation="false"
      :paginationEnabled="false"
      :adjustableHeight="false"
    >
      <slide v-for="slide in slides" :key="slide.id">
        <h1>{{slide.title}}</h1>
        <img alt="slide image" :src="slide.imgUrl" :height="imageHeight">
        <h1>{{slide.message}}</h1>
      </slide>
    </carousel>
  </div>
</template>

<script>
import WindowInstanceMap from "./WindowinstanceMap.js"

export default {
  data() {
    return {
      slides: [
        { id: 0, title: 'Costa Coffee', imgUrl: './img/logo.png', message: 'Todays Special Offers' },
        { id: 1, title: 'Costa Coffee', imgUrl: './img/coffee-cup.jpg', message: 'Two for the price of one.' },
        { id: 2, title: 'Costa Coffee', imgUrl: './img/pizza.jpg', message: 'One childs meal free with two adults.' },
        { id: 3, title: 'Costa Coffee', imgUrl: './img/coffee-cups.jpeg', message: '30% off milky coffee.' }
      ]
    }
  },
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
