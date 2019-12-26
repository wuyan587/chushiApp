<template>
  <footer>
      <ul>
          <router-link :to=' item.path ' tag='li' v-for='item of tabbar' :key='item.id'>
              <span>
                  {{item.name}}
              </span>
          </router-link>
      </ul>
  </footer>
</template>

<script>
export default {
    data(){
        return {
            tabbar:[
                {
                    id:1,
                    name:'首页',
                    path:'/home'
                },{
                    id:2,
                    name:'分类',
                    path:'/sort'
                },{
                    id:3,
                    name:'发布',
                    path:'/release'
                },{
                    id:4,
                    name:'货单',
                    path:'/shopcart'
                },{
                    id:5,
                    name:'我的',
                    path:'/user'
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    footer{
        height: 0.3rem;
        ul{
            height: 100%;
            display: flex;
            li{
                height: 100%;
                flex:1;
            }
        }
    }
</style>