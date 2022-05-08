import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://desafiojera-a1f2b-default-rtdb.firebaseio.com/'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
  }
})