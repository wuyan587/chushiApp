<template>
  <div class="purchaser">
    <div class="title">
      <i class="fas fa-angle-left" @click="goBack"></i>
      <h2>采购详情</h2>
    </div>
    <div class="question">
      <div class="first">
        <p class="first_1">采购</p>
        <p>湖南有名的什么东西</p>
      </div>
      <div class="second">
        <p>单次</p>
        <p>100000斤</p>
      </div>
    </div>
    <div class="product"></div>
    <div class="money">报价金额</div>
    <div class="contact">联系方式</div>
    <div class="tips">
      <p>报价说明</p>
      <p class="tips_detail"></p>
    </div>
    <div class="quotation">立即报价</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.purchaserier {
  height: 100%;
  overflow: auto;
}
.title {
  display: flex;
  height: 0.5rem;
  align-items: center;
  padding: 0 0.15rem;
  border-bottom: 1px solid #f4f4f4;
}
.title i {
  line-height: 0.5rem;
  font-size: 0.3rem;
}
h2 {
  flex: 1;
  font-weight: bold;
  text-align: center;
  line-height: 0.5rem;
}
.question {
  width: 3.45rem;
  height: 0.45rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  display: flex;
  padding: 0.15rem 0.15rem;
  flex-direction: column;
}
.first,
.second {
  display: flex;
  font-size: .14rem;
}
.first_1 {
    width: 0.4rem;
  height: 0.14rem;
  background: #ff6600;
  font-size: 0.11rem;
  color: white;
  line-height: 0.14rem;
  text-align: center;
  border-radius: 0.1rem;
  margin-right: .1rem;
}
.second {
    margin-top: .2rem;
    width: 1.1rem;
    justify-content: space-between;
    color: #ff6600;
}
.product {
  width: 3.45rem;
  height: 1.05rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  display: flex;
  padding: 0.15rem 0.15rem;
}
.money {
  width: 3.45rem;
  height: 0.4rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  display: flex;
  padding: 0.15rem 0.15rem;
}
.contact {
  width: 3.45rem;
  height: 0.4rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  display: flex;
  padding: 0.15rem 0.15rem;
}
.tips {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0.15rem 0.15rem;
}
.tips p {
  text-align: left;
}
.tips .tips_detail {
  width: 3.3rem;
  height: 0.7rem;
  margin-top: 0.2rem;
  background: #f4f4f4;
  border-radius: 0.2rem;
  display: flex;
  align-self: center;
  text-align: left;
  font-size: 0.13rem;
  padding: 0.1rem 0.1rem;
  line-height: 0.2rem;
}
.quotation {
  width: 2.4rem;
  height: 0.35rem;
  border-radius: .2rem;
  color: white;
  line-height: .35rem;
  background: #3bc191;
  display: flex;
  align-self: center;
  justify-content: center;
  margin-bottom: .2rem;
}
</style>