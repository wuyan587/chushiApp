<template>
  <div class="layout">
    <!-- <Header/> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <Tabbar v-if="tabBarFlag"/>
  </div>
</template>

<script>
import Tabbar from "components/tabbar";
// import top from 'components/top'
export default {
  data() {
    return {
      tabBarFlag: true
    };
  },
  components: {
    Tabbar
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        if (this.$route.name == "detail") {
          this.tabBarFlag = false;
        } else {
          this.tabBarFlag = true;
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>

.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 100%;
}
</style>