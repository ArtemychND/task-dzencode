import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const moment = require('moment')
require('moment/locale/ru')
// sorry for using 'moment'. In future application I`d rather to use datejs instead moment

Vue.config.productionTip = false;
Vue.use(require('vue-moment'), { moment });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
