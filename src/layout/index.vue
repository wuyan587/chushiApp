<template>
  <div>
    <!-- <Header/> -->
    <keep-alive>
          <router-view></router-view>
    </keep-alive>

    <Tabbar v-if="tabBarFlag"/>
  </div>
</template>

<script>
// import Header from '../components/header'
import Tabbar from '../components/tabbar'
export default {
  data () {
    return {
      tabBarFlag: true 
    }
  },
  components:{
      // Header,
      Tabbar
  },
  watch: {
    $route: {
      deep: true,
      handler () {
        if ( this.$route.name == 'login') {
          this.tabBarFlag = false 
        } else {
          this.tabBarFlag = true 
        }
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
    justify-content: start;
    height: 100%;
  }
</style>