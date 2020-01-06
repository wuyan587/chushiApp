<template>
  <div class="purchaser">
    <div class="title">
      <i class="fas fa-angle-left" @click="goBack"></i>
      <h2>采购详情</h2>
    </div>

    <div class="shop">
      <img src="@/assets/images/userpic.png" alt />
      <div class="shopinfo">
        <div class="shopname">
          <p class="farm">养殖户</p>
          <h3>{{detail.userNick?detail.userNick:''}}</h3>
        </div>
        <div class="comp">
          <p>实名</p>
          <p>企业</p>
        </div>
      </div>
    </div>
    <div class="question">
      <div class="first">
        <p class="first_1">采购</p>
        <p class="first_2">{{detail.name}}</p>
      </div>
      <div class="second">
        <p>单次</p>
        <p>{{detail.demand}}</p>
      </div>
    </div>
    <div class="details">
      <p>
        <strong>期望产地：</strong>{{detail.origin}}
      </p>
      <p>
        <strong>规格要求：</strong>{{detail.specReq}}
      </p>
      <p>
        <strong>品质要求：</strong>{{detail.quality}}
      </p>
      <p>
        <strong>其他要求：</strong>{{detail.otherReq}}
      </p>
    </div>
    <div class="delivery">
      <p>
        <strong>收货地：</strong>{{detail.province+detail.city}}
      </p>
      <p>
        <strong>送货时间：</strong>2019年5月28日-2019年8月28日
      </p>
    </div>
    <div class="quotation" @click="toQuotation">立即报价</div>
    <van-dialog v-model="show" title="提示" 
    message="您还没有发布过该采购需求中的产品"
    confirmButtonText='发供应'
    confirmButtonColor='#4cc79b'
    cancelButtonText='暂不报价'
    cancelButtonColor='#81d8b9'
    show-cancel-button></van-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      list:[]
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toQuotation() {
      this.show=true;
      // this.$router.push({
      //   name: 'quotation',
      // });
      
    }
  },
  async mounted() {
    let result =await this.$request({
      url:'selectAllUserProcure',
    })
    result=result.data;
    this.list=result;
    console.log(this.list);
  },
  computed:{
    detail(){
      return this.list[this.$route.query.fid-1];
    }
  }
};
</script>
<style scoped>
.purchaser {
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
  font-size: 0.14rem;
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
  margin-right: 0.1rem;
}
.first_2 {
  font-weight: bold;
}
.second {
  margin-top: 0.2rem;
  width: 1.1rem;
  justify-content: space-between;
  color: #ff6600;
}
.shop {
  width: 3.45rem;
  height: 0.6rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  padding: 0.15rem 0.15rem;
  display: flex;
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
h3 {
  font-weight: bold;
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
  margin-top: 0.1rem;
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

.details {
  width: 3.45rem;
  height: 1rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  padding: 0.15rem 0.15rem;
  font-size: 0.14rem;
  line-height: 0.2rem;
}
strong {
  font-weight: bold;
}
.delivery {
  width: 3.45rem;
  height: 0.45rem;
  border-bottom: 0.03rem solid #f4f4f4;
  text-align: left;
  padding: 0.15rem 0.15rem;
  font-size: 0.14rem;
  line-height: 0.2rem;
}
.quotation {
  width: 2.4rem;
  height: 0.35rem;
  border-radius: 0.2rem;
  color: white;
  line-height: 0.35rem;
  background: #3bc191;
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 1.8rem;
}
</style>