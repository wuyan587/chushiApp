import Vue from 'vue'
import App from './App.vue'
import router from './routers'
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
    GoodsActionButton
} from 'vant'
import './utils/rem'

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
    GoodsActionButton
}

    for(let key in vantObj){
        Vue.use(vantObj[key]);
    }

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')