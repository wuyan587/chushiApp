<template>
  <header>
      <img src="@/assets/img/logo.png" alt="">
      <div class="search">
          <i class="fas fa-search"></i>
          <p>搜好货</p>
      </div>
      <div class="location">
          <i class="fas fa-map-marker-alt"></i>
          <p>杭州市</p>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped >
    header{
        height: 0.32rem;
        background: #f2f2f2;
        display: flex;
        font-size: .16rem;
        padding: .2rem .15rem;
    }
    img {
        width: .4rem;
        height: .18rem;
        margin-right: .08rem;
        margin-top: .08rem
    }
    .search {
        display: flex;
        width: 2.2rem;
        height:100%;
        line-height: .32rem;
        border-radius: .2rem;
        background: white;
        margin-right: .08rem
    }
    .location {
        display: flex;
        height: 100%;
        line-height: .32rem;

    }
    .fa-search {
        margin-left: .08rem
    }
    i {
        line-height: .32rem;
        margin-right: .08rem
    
    }
</style>