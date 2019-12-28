import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import { Popup,Search,Icon,Cell,CellGroup,Tag} from 'vant';
import './utils/rem'

Vue.config.productionTip = false
Vue.use( Popup );
Vue.use( Search );
Vue.use( Icon );
Vue.use(Cell).use(CellGroup);
Vue.use(Tag);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
