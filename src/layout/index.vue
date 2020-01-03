<template>
  <div class="layout">
    <!-- <Header/> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <Tabbar v-if="flag"/>
  </div>
</template>

<script>
import Tabbar from "components/tabbar";
// import top from 'components/top'
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
          if(this.$route.path.match("/release" )|| 
          this.$route.name == "detail"|| this.$route.name == "pdetail"||
          this.$route.name == "supply1"||this.$route.name == "purchase1"||this.$route.name == "quotation"||
          this.$route.path.match("/login" )||this.$route.path.match("/search")
<<<<<<< HEAD
          ||this.$route.path.match("/register" )||this.$route.path.match("/my_supply" ) ||this.$route.path.match("/my_provide" ))
=======
          ||this.$route.path.match("/register" )||this.$route.path.match("/my_supply" )||this.$route.path.match("/my_shop" )||this.$route.path.match("/suggestion" )||this.$route.path.match("/changephone" )||this.$route.path.match("/changename" )||this.$route.path.match("/changegroupid" )||this.$route.path.match("/realname_auth" )||this.$route.path.match("/business_auth" ))
>>>>>>> master
            this.flag=false;
          else 
            this.flag=true;
        }
      }
    }
  }

</script>

<style lang='scss' scoped>
  .layout{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
</style>
