<template>
  <div class="home">
    <ul class="tab">
      <li>
        <router-link :to="{name:'supply'}" active-class="active">最新供应信息</router-link>
      </li>
      <li>
        <router-link :to="{name:'purchase'}" active-class="active">最新采购信息</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.home {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}
.tab {
  display: flex;
  width: 3.45rem;
  border-bottom: 1px solid #ccc;
}
li {
  padding: .15rem;
  font-size: .16rem;
}
a {
  color: #666
}
a.active {
  color: #3bc191;
  font-size: .2rem
}
</style>