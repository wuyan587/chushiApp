import Vue from 'vue'
import App from './App.vue'
import router from './routers'
// import { Popup,Search,Button, Dialog , SwipeCell,Cell,CellGroup  } from 'vant';
import {
  TreeSelect,Field,
  AddressEdit,Uploader,
  CountDown,Swipe,
  SwipeItem,GoodsAction,
  GoodsActionButton,Popup,
  Search,Button,
  Dialog,SwipeCell,
  Cell,CellGroup,
  Icon,Tag
 } from 'vant';
import './utils/rem'


Vue.use( Button )
Vue.use( Dialog  )
Vue.use( SwipeCell  )
Vue.use(Cell).use(CellGroup);
 

Vue.config.productionTip = false
Vue.use( Popup )
   .use( Search )
   .use( TreeSelect )
   .use( Button )
   .use(Cell)
   .use(CellGroup)
   .use( Field )
   .use(AddressEdit)
   .use(Uploader)
   .use(CountDown);
   //77
   Vue.use( Swipe );
   Vue.use( SwipeItem );
   Vue.use( GoodsAction );
   Vue.use( GoodsActionButton );
   //77
   Vue.use( Icon );
   Vue.use(Tag);
   //rabzhang
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
