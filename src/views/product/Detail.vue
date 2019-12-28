<template>
  <div class="detail">
    <div class="photo">
      <i class="fas fa-arrow-circle-left" @click="goBack"></i>
      <img src="@/assets/images/banner3.png" alt />
    </div>
    <div class="detail_list">
      <h3>{{details.name}}</h3>
      <div class="address">
        <p>{{details.km}}</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>{{details.address}}</p>
      </div>
      <div class="price">
        <p class="unit_price">{{details.price}}斤/元</p>
        <p class="method">300斤起批</p>
        <p class="retail">零批</p>
        <p class="ship">包邮</p>
      </div>
    </div>
    <div class="delivery">
      <p>发货地</p>
      <p>浙江省杭州市</p>
    </div>
    <div class="nature">
      <h3>产品属性</h3>
      <img src="@/assets/images/table1.png" alt />
    </div>
    <div class="service">
      <h3>商家服务</h3>
      <img src="@/assets/images/table2.png" alt />
    </div>
    <div class="shop">
      <img src="@/assets/images/userpic.png" alt />
      <div class="shopinfo" @click='goSupplier'>
        <div class="shopname">
          <p class="farm">养殖户</p>
          <h3>宁波居食坊</h3>
        </div>
        <div class="comp">
          <p>实名</p>
          <p>企业</p>
        </div>
      </div>
    </div>
    <div class="description">
      <p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
    </div>
    <ul class="bigPic">
      <li>
        <img src="@/assets/images/10.png" alt />
      </li>
      <li>
        <img src="@/assets/images/10.png" alt />
      </li>
    </ul>
    <div class="similar">
      <h3>相类产品</h3>
      <ul class="smallpic">
        <li>
          <img src="@/assets/images/10.png" alt />
          <p class="s_name">产品名称</p>
          <p class="s_price">20元一斤</p>
        </li>
        <li>
          <img src="@/assets/images/10.png" alt />
          <p class="s_name">产品名称</p>
          <p class="s_price">20元一斤</p>
        </li>
        <li>
          <img src="@/assets/images/10.png" alt />
          <p class="s_name">产品名称</p>
          <p class="s_price">20元一斤</p>
        </li>
      </ul>
    </div>
    <p class="agreement">即一个被指定了main为id的对象。浏览器将对css选择器进行严格的解析，每一组样式均会被浏览器应用到对应的对象上。</p>
    <div class="number">
      <p class="num">产品编号：001</p>
      <p>询价时请将产品编号报告对方</p>
    </div>
    <van-goods-action>
      <van-goods-action-button color="#81d8b9" type="warning" text="加入进货单" />
      <van-goods-action-button color="#4cc79b" type="danger" text="立即询价"  />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      history.back();
    },
    goSupplier(){
      this.$router.push({
        name:'supplier'
      })
    }
  },
  computed: {
    details() {
      return this.$route.query;
    }
  }
};
</script>
<style scoped>
.detail {
  height: 100%;
  overflow: auto;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0.6rem;
  /* align-items: center */
}
.photo {
  position: relative;
}
.photo i {
  position: absolute;
  z-index: 999;
  left: 0.2rem;
  top: 0.2rem;
  font-size: 0.3rem;
  color: white;
}
img {
  width: 3.75rem;
  height: 2.1rem;
}
.detail .detail_list {
  text-align: left;
  padding: 0.15rem 0.15rem;
}

h3 {
  font-size: 0.14rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
}
.address {
  display: flex;
  font-size: 0.12rem;
  width: 1.1rem;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.price {
  display: flex;
  width: 2.2rem;
  justify-content: space-between;
}
.method {
  width: 0.6rem;
  height: 0.15rem;
  /* border: 1px solid #3bc191; */
  border-radius: 0.2rem;
  color: white;
  background: #3bc191;
  line-height: 0.15rem;
  font-size: 0.11rem;
  text-align: center;
}
.unit_price {
  color: red;
  font-size: 0.14rem;
}
.retail,
.ship {
  width: 0.4rem;
  height: 0.15rem;
  border: 1px solid #3bc191;
  border-radius: 0.2rem;
  color: #3bc191;
  line-height: 0.15rem;
  font-size: 0.11rem;
  text-align: center;
}
.delivery {
  width: 3.45rem;
  height: 0.2rem;
  padding: 0.1rem 0.15rem;
  display: flex;
  font-size: 0.12rem;
  line-height: 0.2rem;
  justify-content: space-between;
  border-top: 0.03rem solid #f4f4f4;
  border-bottom: 0.03rem solid #f4f4f4;
}
.nature {
  width: 100%;
  height: 1.2rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  padding: 0.15rem 0.15rem;
}
.nature img {
  width: 3.45rem;
  height: 0.8rem;
}
.service {
  width: 100%;
  height: 0.75rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  padding: 0.15rem 0.15rem;
}
.service img {
  width: 3.45rem;
  height: 0.4rem;
}
.shop,
.description {
  width: 3.45rem;
  height: 0.75rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  padding: 0.15rem 0.15rem;
}
.description {
  word-break: break-all;
  font-size: .13rem;
}
.shop {
  display: flex;
}
.shop img {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.2rem;
}
.shop .shopname {
  display: flex;
  width: 1.2rem;
  justify-content: space-between;
  margin-top: 0.1rem;
}
.shop .shopname .farm {
  width: 0.4rem;
  height: 0.14rem;
  background: #3bc191;
  font-size: 0.11rem;
  color: white;
  line-height: 0.14rem;
  text-align: center;
  border-radius: 0.1rem;
}
.shop .comp {
  display: flex;
  width: 1rem;
  justify-content: space-between;
}
.shop .comp p {
  width: 0.4rem;
  height: 0.15rem;
  border: 1px solid #3bc191;
  border-radius: 0.2rem;
  color: #3bc191;
  line-height: 0.15rem;
  font-size: 0.11rem;
  text-align: center;
}
.bigPic li {
  margin-top: 0.1rem;
  
}
.bigPic li img {
  width: 3.45rem;
}
.similar {
  width: 100%;
  height: 1.85rem;
  border-top: 0.03rem solid #f4f4f4;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  padding: 0.15rem 0.15rem;
  margin-top: 0.2rem;
}
.similar .smallpic {
  display: flex;
  width: 3.45rem;
  justify-content: space-between;
}
.similar .smallpic img {
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.1rem;
}

.s_name, .s_price {
  font-size: 0.12rem;
}
.s_name {
    margin-bottom: .1rem;
}
.s_price {
    color: red;
}
.agreement {
  width: 3.3rem;
  height: 0.7rem;
  margin-top: 0.2rem;
  background: #f4f4f4;
  border-radius: 0.2rem;
  display: flex;
  align-self: center;
  text-align: left;
  font-size: .13rem;
  padding: 0.1rem 0.1rem;
  line-height: 0.2rem;
}
.number {
  padding: 0.2rem;
  display: flex;
  width: 3.45rem;
  font-size: .14rem;
  justify-content: space-between;
}
.number .num{
    font-weight: bold;
}
</style>
