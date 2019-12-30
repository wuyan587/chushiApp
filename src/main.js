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
    CheckboxGroup
} from 'vant'
import './utils/rem'

Vue.config.productionTip = false
Vue.use(Popup);
Vue.use(Search);
Vue.use(TreeSelect);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Switch);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);









new Vue({
    router,
    render: h => h(App),
}).$mount('#app')