import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import { Popup,Search } from 'vant';
import './utils/rem'

Vue.config.productionTip = false
Vue.use( Popup );
Vue.use( Search );
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
