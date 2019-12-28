<template>
  <div>
    <Header/>

    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="@/assets/images/banner.png" alt /></van-swipe-item>
      <van-swipe-item><img src="@/assets/images/banner1.jpg" alt /></van-swipe-item>
      <van-swipe-item><img src="@/assets/images/banner2.jpg" alt /></van-swipe-item>
      <van-swipe-item><img src="@/assets/images/banner3.png" alt /></van-swipe-item>
      </van-swipe>
    </div>
    <ul class="pics">
      <li>
        <img src="@/assets/images/1.png" alt="">
        <p>水果</p>
      </li>
      <li>
        <img src="@/assets/images/2.png" alt="">
        <p>蔬菜</p>
      </li>
      <li>
        <img src="@/assets/images/3.png" alt="">
        <p>粮油</p>
      </li>
      <li>
        <img src="@/assets/images/4.png" alt="">
        <p>食用菌</p>
      </li>
      <li>
        <img src="@/assets/images/5.png" alt="">
        <p>中药材</p>
      </li>
      <li>
        <img src="@/assets/images/6.png" alt="">
        <p>畜禽</p>
      </li>
      <li>
        <img src="@/assets/images/7.png" alt="">
        <p>水产</p>
      </li>
      <li>
        <img src="@/assets/images/8.png" alt="">
        <p>干果</p>
      </li>
      <li>
        <img src="@/assets/images/2.png" alt="">
        <p>茶叶</p>
      </li>
      <li>
        <img src="@/assets/images/9.png" alt="">
        <p>更多</p>
      </li>
      
    </ul>
  </div>
</template>
<script>
import Header from 'components/header'

export default {
  data() {
    return {
      
    }
  },
  components:{
    Header
  }
}
</script>
<style scoped>
.banner {
  width: 3.75rem;
}
.banner img {
  width: 3.45rem;
  height: 1.55rem;
  margin-bottom: .2rem;
  border-radius: .1rem;
}
.pics {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: .2rem
  /* justify-content: space-between; */
}
li {
  margin-right: .2rem;
  margin-bottom: .2rem
}
.pics img {
  width: .5rem;
  height:.5rem;
  margin-bottom: .1rem
}
.pics p {
  font-size: .12rem
  
}
</style>
