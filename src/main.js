import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'https://defix3.com:3071/api/v1'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
