import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import { Popup,Search,Button, Dialog , SwipeCell,Cell,CellGroup  } from 'vant';
import './utils/rem'


Vue.use( Button )
Vue.use( Dialog  )
Vue.use( SwipeCell  )
Vue.use(Cell).use(CellGroup);
 

Vue.config.productionTip = false
Vue.use( Popup );
Vue.use( Search );
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
