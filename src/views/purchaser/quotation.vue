<template>
  <div class="purchaser">
    <div class="title">
      <i class="fas fa-angle-left" @click="goBack"></i>
      <h2>采购详情</h2>
    </div>
    <div class="question">
      <div class="first">
        <p class="first_1">采购</p>
        <p class="first_2">{{detail.name}}</p>
      </div>
      <div class="second">
        <p>单次</p>
        <p>{{detail.demand}}斤</p>
      </div>
    </div>
    <div class="product">
      <div class="pro_1">
        <p>报价产品</p>
        <p>更换产品</p>
      </div>
      <div class="pro_2">
        <img :src="imgs" alt="" v-if='imgs'>
        <img src="~@/assets/images/10.png" alt="" v-else>
        <div class="pro_3">
          <p class="pro_name">{{details.fruitName}}</p>
          <p class="pro_price">{{details.price}}斤/元</p>
        </div>
      </div>
      <div class="pro_1"></div>
    </div>
    <div class="money">报价金额 (元/斤)
      <input type="text" placeholder="请输入你的报价" v-model="price">
    </div>
    <div class="contact">联系方式
      <input type="text" placeholder="请输入你的联系方式" v-model="phone">
    </div>
    <div class="tips">
      <p class="tips_price">报价说明</p>
      <p class="tips_detail">你可以在说明规格，物流等补充说明</p>
    </div>
    <div class="quotation" @click="quote">立即报价</div>

    <div v-if='f' class="success">
         <h2>报价成功</h2>
         <img src="~assets/images/supplysuccess.jpg" alt="">
         <h3>您的报价已发送给采购商</h3>
         <span>
             (<van-count-down @finish="finish" :time="time" format="ss"/>)秒后跳转到首页
         </span>
         
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      f:false,
      time: 5 * 1000,
      list:[],
      price:'',
      phone:''
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    quote(){
      this.f=true
    },
    finish(){
          this.$router.push({name:'home'});
        },
  },
  async mounted() {
    let result =await this.$request({
      url:'selectAllUserProcure',
    })
    result=result.data;
    this.list=result;
  },
  computed:{
    detail(){
      return this.list[this.$route.query.fid-1]&&this.list[this.$route.query.fid-1]||'';
    },
    details(){
      let obj=this.$store.state.pub.Mine.supplylist.filter(item=>item.fruitName==this.detail.name)[0];
      return obj&&obj||'';
    },
    imgs(){
      let src='';
      if(this.details&&this.details.imgs.length!=0){
        src=this.details.imgs[0].content;
      }else{
        src='';
      }
      return src;
    }
  }
};
</script>
<style scoped>
.purchaser{
  display: flex;
  flex-direction: column;
}
.purchaserier {
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
.first_2 {
  font-weight: bold;
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
  flex-direction: column;
  padding: 0.15rem 0.15rem;
  font-size: .14rem;
}
.pro_1 {
  display: flex;
  justify-content: space-between;
  margin-bottom: .1rem;
  font-weight: bold;
}
.pro_2 {
  display: flex;
}
.pro_2 img {
  width: .8rem;
  height: .8rem;
  margin-right: .2rem;
}
.pro_3 .pro_price {
  color: #ff6600;
  margin-top: .4rem;

}
.money {
  width: 3.45rem;
  height: 0.4rem;
  font-size: .14rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  padding: 0.15rem 0.15rem;
}
input {
  font-weight: normal;
  text-align: center;
  margin-top: .1rem;
  border: none;
}

.contact {
  width: 3.45rem;
  height: 0.4rem;
  font-size: .14rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  padding: 0.15rem 0.15rem;
}

.tips {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0.15rem 0.15rem;
  font-size: .14rem;
  
}
.tips .tips_price {
  font-weight: bold;

}
.tips p {
  text-align: left;
  font-weight: normal;
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

.success{
    background: white;
    position: absolute;
    padding-top:.2rem;
    width: 100%;
    height: 100%;
    margin: 0;
    }

    .success h2{
        font-size: 0.2rem;
        color: #4cc79b;
    }
    .success h3{
        font-size: 0.14rem;
        margin-bottom: 0.25rem;
    }
    .success img{
        margin-top: 0.3rem;
        width: 2.15rem;
        height: 0.92rem;
        margin-bottom: 0.25rem;
    }
    
    .van-count-down{
        display: inline-block;
        color:#4cc79b;
    }

</style>