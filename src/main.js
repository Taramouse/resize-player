import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'


Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
