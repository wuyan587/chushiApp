import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import { Popup,Search,Swipe, SwipeItem,GoodsAction,GoodsActionButton } from 'vant';
import './utils/rem'

Vue.config.productionTip = false
Vue.use( Popup );
Vue.use( Search );
Vue.use( Swipe );
Vue.use( SwipeItem );
Vue.use( GoodsAction );
Vue.use( GoodsActionButton );
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
