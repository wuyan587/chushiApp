<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from './layout'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/_reset.scss';
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f8f8f8;
  height: 100%;
  
}
</style>
