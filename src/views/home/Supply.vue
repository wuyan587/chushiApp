<template>
  <ul class="supply">
    <li>
      <img src="@/assets/img/10.png" alt />
      <h3>湖南特产绿心猕猴桃</h3>
      <div class="address">
        <p>300km</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>杭州市</p>
      </div>
      <div class="ctf">
          <p>企业认证</p>
          <p>实名认证</p>
      </div>
      <p class="price">20斤/元</p>
    </li>
    <li>
      <img src="@/assets/img/10.png" alt />
      <h3>湖南特产绿心猕猴桃</h3>
      <div class="address">
        <p>300km</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>杭州市</p>
      </div>
      <div class="ctf">
          <p>企业认证</p>
          <p>实名认证</p>
      </div>
      <p class="price">20斤/元</p>
    </li>
    <li>
      <img src="@/assets/img/10.png" alt />
      <h3>湖南特产绿心猕猴桃</h3>
      <div class="address">
        <p>300km</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>杭州市</p>
      </div>
      <div class="ctf">
          <p>企业认证</p>
          <p>实名认证</p>
      </div>
      <p class="price">20斤/元</p>
    </li>
    <li>
      <img src="@/assets/img/10.png" alt />
      <h3>湖南特产绿心猕猴桃</h3>
      <div class="address">
        <p>300km</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>杭州市</p>
      </div>
      <div class="ctf">
          <p>企业认证</p>
          <p>实名认证</p>
      </div>
      <p class="price">20斤/元</p>
    </li>
  </ul>
</template>
<script>
export default {};
</script>

<style scoped>
.supply {
  margin-top: 0.15rem;
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
li {
  display: flex;
  flex-direction: column;
  height: 2.8rem;
  margin-bottom: .16rem;
  background: white;
  border-radius: .1rem;
  text-align: left
}
img {
  width: 1.65rem;
  height: 1.65rem;
}
h3 {
  font-size: 0.14rem;
  font-weight: bold;
  margin-top: 0.08rem;
  margin-left: .08rem;
  
}
.address {
    display: flex;
    font-size: .12rem;
    margin-top: 0.1rem;
    margin-left: .08rem;
    width: .95rem;
    justify-content: space-between;
}
.ctf {
    display: flex;
    margin-top: 0.2rem;
    margin-left: .08rem;
    width: 1.18rem;
    justify-content: space-between;
}
.ctf p {
    width: .5rem;
    height: .15rem;
    border: 1px solid #3bc191;
    border-radius: .2rem;
    color: #3bc191;
    line-height: .15rem;
    font-size: .11rem;
    text-align: center;
}
.price {
    margin-top: 0.1rem;
    color: red;
    font-size: .12rem;
    margin-left: .08rem;
}
</style>