<template>
  <ul class="purchase" v-if="f">
    <li>
      <div class="name">
        <p class="buy">采购</p>
        <h3>湖南特产绿心猕猴桃</h3>
      </div>
      <p class="city">期望产地：浙江省宁波市</p>
      <p class="quality">品质要求：纯天然 无添加 保质保量</p>
      <div class="address">
        <p>300km</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>浙江杭州市</p>
        <p class="ctf">企业认证</p>
        <p class="ctf">实名认证</p>
      </div>
      <p class="quantity">20000斤</p>
    </li>
    <li>
      <div class="name">
        <p class="buy">采购</p>
        <h3>湖南特产绿心猕猴桃</h3>
      </div>
      <p class="city">期望产地：浙江省宁波市</p>
      <p class="quality">品质要求：纯天然 无添加 保质保量</p>
      <div class="address">
        <p>300km</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>浙江杭州市</p>
        <p class="ctf">企业认证</p>
        <p class="ctf">实名认证</p>
      </div>
      <p class="quantity">20000斤</p>
    </li>
    <li>
      <div class="name">
        <p class="buy">采购</p>
        <h3>湖南特产绿心猕猴桃</h3>
      </div>
      <p class="city">期望产地：浙江省宁波市</p>
      <p class="quality">品质要求：纯天然 无添加 保质保量</p>
      <div class="address">
        <p>300km</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>浙江杭州市</p>
        <p class="ctf">企业认证</p>
        <p class="ctf">实名认证</p>
      </div>
      <p class="quantity">20000斤</p>
    </li>
  </ul>
</template>
<script>
export default {
  data(){
    return{
      f:true
    }
  }
}
</script>
<style scoped>
.purchase {
  margin-top: 0.15rem;
  width: 3.45rem;
<<<<<<< HEAD
  /* height: 100%; */
  /* overflow: auto; */
=======
>>>>>>> 9be671b62b63ed22fafc50f47bfc4143f9a46c1c
  display: flex;
  padding: 0 0.15rem;
  padding-left: 0.15rem;
  background: #f2f2f2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
li {
  width: 100%;
  height: 1.2rem;
  background: white;
  border-radius: 0.2rem;
  margin-bottom: 0.15rem;
  text-align: left;
  padding-left: 0.2rem;
  padding-top: 0.15rem;
}
.name {
  display: flex;
  margin-bottom: 0.1rem;
}
.buy {
  width: 0.25rem;
  height: 0.14rem;
  background: #3bc191;
  font-size: 0.11rem;
  color: white;
  line-height: 0.14rem;
  text-align: center;
  border-radius: 0.1rem;
}
h3 {
  font-size: 0.15rem;
  font-weight: bold;
  margin-left: 0.1rem;
}
.city,
.quality {
  line-height: 0.2rem;
  font-size: 0.13rem;
}
.address {
  display: flex;
  font-size: 0.13rem;
  margin-top: 0.03rem;
  width: 2.2rem;
  font-size: 0.11rem;
  justify-content: space-between;
}
.ctf {
  width: 0.5rem;
  height: 0.14rem;
  border: 1px solid #3bc191;
  border-radius: 0.2rem;
  color: #3bc191;
  line-height: 0.14rem;
  font-size: 0.11rem;
  text-align: center;
}
.quantity {
  font-size: 0.13rem;
  color: red;
  margin-top: 0.16rem;
}
</style>
