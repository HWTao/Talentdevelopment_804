import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/vant'

import 'amfe-flexible'

if (process.env.VUE_APP_SHOW_CONSOLE) {
  require('./plugins/vconsole')
}

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')