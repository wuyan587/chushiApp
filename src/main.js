import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import { Popup,Search } from 'vant';
import './utils/rem'

//引用vant图标
import {
  Button
} from 'vant'

//全局注册使用
Vue.use( Button )

Vue.config.productionTip = false
Vue.use( Popup );
Vue.use( Search );
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
