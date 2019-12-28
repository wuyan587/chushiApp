const Home=()=>import(/* 首页 */ 'views/home/index.vue')
const Sort=()=>import(/* 分类 */ 'views/sort/index.vue')
const Release=()=>import(/* 发布 */ 'views/release/index.vue')
const Shopcart=()=>import(/* 货单 */ 'views/shopcart/index.vue')
const Mine=()=>import(/* 我的 */ 'views/mine/index.vue')

const routerTable=[
    {
        path:'/',
        redirect:'/home'
    },{
        path:'/home',
        component:Home,
        name:'home'
    },{
        path:'/sort',
        component:Sort,
        name:'sort'
    },{
        path:'/release',
        component:Release
    },{
        path:'/shopcart',
        component:Shopcart,
        name:'shopcart'
    },{
        path:'/user',
        component:Mine,
        name:'user'
    }
]

export default routerTable