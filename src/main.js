import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components'

import './styles/index.less'
import './assets/icons'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
