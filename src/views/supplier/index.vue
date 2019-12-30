<template>
  <div class="supplier">
    <div class="title">
      <i class="fas fa-angle-left" @click="goBack"></i>
      <h2>商家详情</h2>
    </div>
    <div class="shop">
      <img src="@/assets/images/userpic.png" alt />
      <div class="shopinfo">
        <div class="shopname">
          <p class="farm">养殖户</p>
          <h3>宁波居食坊</h3>
        </div>
        <div class="list">
          <p>主营：鸡，鸭，鱼，青菜，西红柿，葡萄，芒果</p>
        </div>
      </div>
    </div>
    <div class="cname">
      <p>实名认证</p>
      <div class="_right">
        <p class="green">认证成功</p>
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="ccomp">
      <p>企业认证</p>
      <div class="_right">
        <p class="green">立即成功</p>
        <i class="fas fa-angle-right"></i>
      </div>
    </div>
    <div class="production">
      <h3>企业介绍</h3>
      <p>我们的理念，基于互联网+农业的中国新锐农业电商品牌服务商，成立于2013年9月。秉承推动中国农业现代化、产业化、品牌化的理念，为政府、农企提供县域电商服务、品牌整合、事件营销策划、品牌传播、地方馆代运营、自有平台合作等服务。团队核心成员皆来自中国主流农业媒体，对中国农业有着深刻认知，具备丰富的专业经验。</p>
    <ul class="pic_box">
        <li>
            <img src="@/assets/images/10.png" alt="">
        </li>
        <li>
            <img src="@/assets/images/10.png" alt="">
        </li>
        <li>
            <img src="@/assets/images/10.png" alt="">
        </li>
        <li>
            <img src="@/assets/images/10.png" alt="">
        </li>
        <li>
            <img src="@/assets/images/10.png" alt="">
        </li>
        <li>
            <img src="@/assets/images/10.png" alt="">
        </li>
    </ul>
    
    </div>
    <ul class="tab">
        <li>
          <router-link :to="{name:'supply1'}" active-class="active">最新供应信息</router-link>
        </li>
        <li>
          <router-link :to="{name:'purchase1'}" active-class="active">最新采购信息</router-link>
        </li>
      </ul>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
    //   history.back();
    this.$router.go( -1 )
    }
  }
};
</script>

<style scoped>
.supplier {
  /* height: 100%; */
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
  font-size:.3rem;
}
h2 {
  flex: 1;
  font-weight: bold;
  text-align: center;
  line-height: 0.5rem;
}
.shop {
  width: 3.45rem;
  height: 0.75rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  display: flex;
  padding: 0.15rem 0.15rem;
}

.shop img {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.2rem;
}
.shop .shopname {
  display: flex;
  width: 1.3rem;
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
.shop .list p {
  margin-top: 0.15rem;
  font-size: 0.14rem;
  line-height: 0.2rem;
}
.cname,
.ccomp {
  width: 3.45rem;
  height: 0.3rem;
  border-bottom: 0.03rem solid #f4f4f4;
  display: flex;
  line-height: 0.3rem;
  font-size: 0.14rem;
  padding: 0 0.15rem;
  justify-content: space-between;
}
.green {
  width: 0.6rem;
  height: 0.15rem;
  color: white;
  background: #3bc191;
  line-height: 0.15rem;
  font-size: 0.11rem;
  text-align: center;
}
._right {
    display: flex;
    width: .75rem;
    justify-content: space-between;
    align-items: center;
}
.production {
  padding: 0.15rem 0.15rem;
  border-bottom: 0.03rem solid #f4f4f4;
}
.production h3 {
  text-align: left;
}
.production p {
    margin-top: .1rem;
    font-size: .12rem;
    text-align: left;
    line-height: .17rem;
}
.production img {
    margin-top: .1rem;
    width: 1.05rem;
    height: 1.05rem;
}
.pic_box {
    display: flex;
    width: 3.45rem;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
.tab {
  display: flex;
  width: 3.45rem;
  margin: 0 auto;
  text-align: left;
  /* padding: 0 .15rem; */
  /* align-self: center; */
  /* background: #f2f2f2; */
  border-bottom: 1px solid #f4f4f4;
}
.tab li {
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
