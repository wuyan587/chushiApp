const Home = () => import(/* 首页 */ '../views/home/index.vue')
const Sort = () => import(/* 分类 */ '../views/sort/index.vue')
const Release = () => import(/* 发布 */ '../views/release/index.vue')
const Shopcart = () => import(/* 货单 */ '../views/shopcart/index.vue')
const Mine = () => import(/* 我的 */ '../views/mine/index.vue')
const Supply = () => import(/* 我的 */ '../views/home/Supply.vue')
const Purchase = () => import(/* 我的 */ '../views/home/Purchase.vue')
const Detail = () => import(/* 我的 */ '../views/product/Detail.vue')
const Supplier = () => import(/* 我的 */ '../views/supplier/index.vue')
const Supply1 = () => import(/* 我的 */ '../views/supplier/Supply1.vue')
const Purchase1 = () => import(/* 我的 */ '../views/supplier/Purchase1.vue')

const routerTable = [
    {
        path: '/', // http://localhost:8080/
        redirect: '/home/supply',  // 从  /  ->  /home 
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'supply',
                component: Supply,
                name: 'supply'
            },
            {
                path: 'purchase',
                component: Purchase,
                name: 'purchase'
            },

        ]
    },
    {
        path: '/detail',
        component: Detail,
        name:'detail',
        
    },  
    {
        path: '/supplier',
        component: Supplier,
        name:'supplier',
        redirect: '/supplier/supply1',
        children: [
            {
                path: 'supply1',
                component: Supply1,
                name: 'supply1'
            },
            {
                path: 'purchase1',
                component: Purchase1,
                name: 'purchase1'
            },

        ]
    },  
    {
        path: '/sort',
        component: Sort
    }, 
    {
        path: '/release',
        component: Release
    }, 
    {
        path: '/shopcart',
        component: Shopcart
    }, 
    {
        path: '/user',
        component: Mine
    }
]

export default routerTable