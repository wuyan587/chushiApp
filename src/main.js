import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import axios from '@/utils/request'
import {
    Popup,
    Search,
    TreeSelect,
    Image,
    Icon,
    Tab,
    Tabs,
    Sidebar,
    SidebarItem,
    DropdownMenu,
    DropdownItem,
    Switch,
    Button,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Dialog,
    Swipe,
    SwipeCell,
    SwipeItem,
    Field,
    AddressEdit,
    Uploader,
    CountDown,
    GoodsAction,
    GoodsActionButton,
    Tag,
    Area,
    NavBar,
    ImagePreview
} from 'vant'
import './utils/rem'
import './routers/globalRouter'
//把在上面应用的vant模块直接复制到这个vantObj里就行了

const vantObj={
    Popup,
    Search,
    TreeSelect,
    Image,
    Icon,
    Tab,
    Tabs,
    Sidebar,
    SidebarItem,
    DropdownMenu,
    DropdownItem,
    Switch,
    Button,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Dialog,
    Swipe,
    SwipeCell,
    SwipeItem,
    Field,
    AddressEdit,
    Uploader,
    CountDown,
    GoodsAction,
    GoodsActionButton,
    Tag,
    Area,
    NavBar,
    ImagePreview
}

    for(let key in vantObj){
        Vue.use(vantObj[key]);
    }

Vue.config.productionTip = false
Vue.prototype.$request=axios;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')