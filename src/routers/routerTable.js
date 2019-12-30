const Home = () =>
    import ( /* 首页 */ '../views/home/index.vue')
const Sort = () =>
    import ( /* 分类 */ '../views/sort/index.vue')
const Release = () =>
    import ( /* 发布 */ '../views/release/index.vue')
const Shopcart = () =>
    import ( /* 货单 */ '../views/shopcart/index.vue')
const Mine = () =>
    import ( /* 我的 */ '../views/mine/index.vue')
const Login = () =>
    import ( /* 登录*/ '../views/login/index.vue')
const Register = () =>
    import ( /* 注册 */ '../views/register/index.vue')
const Search = () =>
    import ( /* 搜索页 */ '../views/search/index.vue')





//77
const Supply = () =>
    import ( /* 我的 */ '../views/home/Supply.vue')
const Purchase = () =>
    import ( /* 我的 */ '../views/home/Purchase.vue')
const Detail = () =>
    import ( /* 我的 */ '../views/product/Detail.vue')
const Supplier = () =>
    import ( /* 我的 */ '../views/supplier/index.vue')
const Supply1 = () =>
    import ( /* 我的 */ '../views/supplier/Supply1.vue')
const Purchase1 = () =>
    import ( /* 我的 */ '../views/supplier/Purchase1.vue')
    //77



const routerTable = [{
        path: '/home',
        component: Home
    }, {
        path: '/sort',
        component: Sort
    }, {
        path: '/release',
        component: Release
    }, {
        path: '/shopcart',
        component: Shopcart
    }, {
        path: '/user',
        component: Mine
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    }, {
        path: '/sort',
        component: Sort
    }, {
        path: '/release',
        component: Release
    }, {
        path: '/shopcart',
        component: Shopcart
    }, {
        path: '/user',
        component: Mine
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/search',
        component: Search,
    }, {
        //............................................
        path: '/',
        redirect: '/home/supply', // 从  /  ->  /home 
    }, {
        path: '/home',
        redirect: '/home/supply',
        component: Home,
        name: 'home',
        children: [{
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
        name: 'detail',

    },
    {
        path: '/supplier',
        component: Supplier,
        name: 'supplier',
        redirect: '/supplier/supply1',
        children: [{
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
    //77  
    {
        path: '/sort',
        component: Sort,
        name: 'sort'
    }, {
        path: '/release',
        component: Release
    }, {
        path: '/shopcart',
        component: Shopcart,
        name: 'shopcart'
    }, {
        path: '/user',
        component: Mine,
        name: 'user'


    }
]

export default routerTable