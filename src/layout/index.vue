<template>
  <div>
    <!-- <Header/> -->
    <keep-alive>
          <router-view></router-view>
    </keep-alive>

    <Tabbar v-if="flag"/>
  </div>
</template>

<script>
// import Header from '../components/header'
import Tabbar from '../components/tabbar'
export default {
    data(){
      return {
        flag:true,//控制底部栏出不出现
      }
    },
    components:{
        // Header,
        Tabbar
    },
    watch:{
      $route:{
        deep:true,
        handler(){
          if(this.$route.path.match("/release" )|| this.$route.name == "detail"|| this.$route.name == "pdetail")
            this.flag=false;
          else 
            this.flag=true;
        }
      }
    }
}
</script>

<style lang='scss' scoped>
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // height: 100%;
  }
</style>