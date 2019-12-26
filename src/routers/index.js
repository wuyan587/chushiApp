import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterTable from './routerTable'

Vue.use(VueRouter);

const router=new VueRouter({
    mode:'history',
    routes:RouterTable
})
export default router;
