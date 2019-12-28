<template>
  <div class="home">
    
      <top></top>
      <!-- <div class="content"> -->
      <ul class="tab">
        <li>
          <router-link :to="{name:'supply'}" active-class="active">最新供应信息</router-link>
        </li>
        <li>
          <router-link :to="{name:'purchase'}" active-class="active">最新采购信息</router-link>
        </li>
      </ul>
      <router-view></router-view>
      <!-- </div> -->
    </div>
  
</template>

<script>
import top from "components/top";
export default {
  components: {
    top
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  background: #f2f2f2;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  height: 100%;
  /* overflow: auto; */
}
.tab {
  display: flex;
  width: 3.45rem;
  border-bottom: 1px solid #ccc;
}
li {
  padding: 0.15rem;
  font-size: 0.16rem;
}
a {
  color: #666;
}
a.active {
  color: #3bc191;
  font-size: 0.2rem;
}
</style>