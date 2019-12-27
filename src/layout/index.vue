<template>
  <div class="head">
    <top></top>
    
    <keep-alive>
          <router-view></router-view>
    </keep-alive>

    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from 'components/tabbar'
import top from 'components/top'
export default {
    components:{
        Tabbar,
        top
    }
}
</script>

<style lang='scss' scoped>
  .div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
</style>