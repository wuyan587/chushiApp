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
const pDetail = ()=>
    import( /*采购详情*/ 'views/purchaser/index.vue' )
const Quotation = ()=>
    import( /*采购详情*/ 'views/purchaser/quotation.vue' )
    //77
const Mysupply= ()=>
    import( /*我的供应*/ '../views/mine/supply1.vue' )
const Myprovide= ()=>
    import( /*我的采购*/ '../views/mine/procurement.vue')



const Myshop= ()=>
    import( /*我的店铺*/ '../views/mine/myshop.vue' )
const Suggestion= ()=>
    import( /*我的建议*/ '../views/mine/detail/suggestion.vue' )
const Changename= ()=>
    import( /*修改名称*/ '../views/mine/detail/changename.vue' )
const Changegroupid= ()=>
    import( /*修改身份*/ '../views/mine/detail/changegroupid.vue' )
const Changephone= ()=>
    import( /*修改手机*/ '../views/mine/detail/changephone.vue' )
const RealnameAuth= ()=>
    import( /*实名认证*/ '../views/mine/detail/realname_auth.vue' )
const BusinessAuth= ()=>
    import( /*企业认证*/ '../views/mine/detail/business_auth.vue' )    
const routerTable = [
    {
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
        path: '/purchase/detail',
        component: pDetail,
        name: 'pdetail',
        meta:{
            include:'pDetail'
        }
    },
    {
        path: '/purchase/detail/quotation',
        component: Quotation,
        name: 'quotation',

    },
    {
        path: '/supply/detail/',
        component: Detail,
        name: 'detail',
        meta:{
            include:'Detail'
        }
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
        component: Release,
        name:'release'
    }, {
        path: '/shopcart',
        component: Shopcart,
        name: 'shopcart'
    }, {
        path: '/user',
        component: Mine,
        name: 'user'
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/search',
        component: Search,
    },{
        path:'/login',
        component:Login,
        name: 'login',
        meta: {
          include: 'Login'
      }
    },
    {
        path:'/my_supply',
        component:Mysupply,
        name: 'my_supply',
        meta: {
          include: 'my_supply'
      }
    },
    {
        path:'/my_provide',
        component:Myprovide,
        name: 'my_provide',
        meta: {
          include: 'my_provide'
      }
    },{path:'/my_shop',
    component:Myshop,
    name: 'my_shop',
    meta: {
      include: 'my_shop'
  }
},
{
    path:'/suggestion',
    component:Suggestion,
    name: 'suggestion',
    meta: {
      include: 'suggestion'
  }
},
{
    path:'/changename',
    component:Changename,
    name: 'changename',
    meta: {
      include: 'changename'
  }
},
{
    path:'/changegroupid',
    component:Changegroupid,
    name: 'changegroupid',
    meta: {
      include: 'changegroupid'
  }
},
{
    path:'/changephone',
    component:Changephone,
    name: 'changephone',
    meta: {
      include: 'changephone'
  }
},
 {
    path:'/realname_auth',
    component:RealnameAuth,
    name: 'realname_auth',
    meta: {
      include: 'realname_auth'
  }
},
 {
    path:'/business_auth',
    component:BusinessAuth,
    name: 'business_auth',
    meta: {
      include: 'business_auth'
  }
},

]

export default routerTable
