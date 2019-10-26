import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
