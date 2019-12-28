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
        component: Search
    }
]

export default routerTable