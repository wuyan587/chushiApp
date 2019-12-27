<template>
  <div>
    <!-- <Header/> -->
    <keep-alive>
          <router-view></router-view>
    </keep-alive>

    <Tabbar/>
  </div>
</template>

<script>
// import Header from '../components/header'
import Tabbar from '../components/tabbar'
export default {
    components:{
        // Header,
        Tabbar
    }
}
</script>

<style lang='scss' scoped>
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
</style>