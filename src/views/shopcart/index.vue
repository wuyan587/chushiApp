<template>
  <div class="shopcart">
    <h3>货单</h3>
    <div class="list" v-for='(item,index) of lists' :key='(item.id+index)'>
      <div class="list-top">
        <h4>供应商名字</h4>
        <van-cell @click="showPopup(index)" :round="true">x</van-cell>
        <van-popup v-model="show">
          <p class="hint"> 确认删除吗？ </p>
          <div>
            <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
            <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
          </div>

        </van-popup>
      </div>
      <div class="list-content">
        <div class="list-ing">
          <img src="@/assets/images/10.png" alt />
        </div>
        <div class="list-right">
          <h4>{{ item.name }}</h4>
          <p>
            {{ item.km }}
            <i class="fas fa-map-marker-alt"></i>
            <span></span>
            {{ item.address }}
          </p>
          <div>
            <van-button color="#aee6d2" plain>企业认证</van-button>
            <van-button color="#aee6d2" plain>实名认证</van-button>
          </div>
          <p class="price">{{item.price}}元/斤</p>
        </div>
      </div>
    </div>
    <div v-if="!checkLisit" class="checkLisit"></div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      show: false,
      flag: false, // 控制删除的用户交互
      activeIndex: 0,
      activeType: "all",
    };
  },
  methods: {
    ...mapMutations(['removebuyitems']),
    showPopup(index) {
      this.show = true;
      this.activeIndex = index;
      console.log(this);
    },
    closeFlag() {
      this.show = false;
    },
    remove(index) {
      this.$store.commit('removebuyitems',index);
      // this.lists.splice(index, 1);
      this.closeFlag();
      console.log(this);
    }
  },
  computed: {
    checkLisit() {
      return this.lists.length != 0;
    },
    lists(){
      console.log(this.$route.query)
      return this.$store.state.pub.Mine.buylist&&this.$store.state.pub.Mine.buylist||[];
    }
  }
};
</script>

<style lang="scss" scoped>
/* .shopcart{
width: 100%;
height: 100%
} */

.shopcart {
  // height: auto;
  // padding:.68rem .16rem 0 .16rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  padding: 0.16rem;
  display: flex;
  flex: 2;
  background: url("~@/assets/images/bg.jpg") no-repeat;
  background-size: contain;
  h3 {
    width: 100%;
    text-align: left;
    font-size: 0.16rem;
    font-weight: bold;
    margin: 0.16rem 0.13rem;
  }
  img {
    width: 0.95rem;
    height: 0.95rem;
  }
}

.list {
  display: flex;
  // flex: 1;
  flex-direction: column;
  padding: 0.13rem 0.16rem 0 0.16rem;
  margin-bottom: 0.14rem;
  background: #fff;
  border-radius: 0.1rem;
  .list-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.08rem;
    align-items: center;
    h4 {
      font-size: 0.14rem;
      font-weight: bold;
    }
    .button {
      margin: 0 0.1rem;
      border-radius: 0.1rem;
    }
  }
}
.list-content {
  display: flex;
  .list-right {
    display: flex;
    flex-direction: column;
    margin-left: 0.18rem;
    align-items: flex-start;
    h4 {
      font-size: 0.14rem;
      font-weight: bold;
      margin-bottom: 0.08rem;
    }
    p {
      font-size: 0.1rem;
      margin-bottom: 0.18rem;
    }
    button {
      width: 0.52rem;
      height: 0.15rem;
      line-height: 0.15rem;
      font-size: 0.1rem;
      padding: 0;
      margin-right: 0.1rem;
      margin-bottom: 0.16rem;
      color: #d7f3e9;
      border-color: #d7f3e9;
      font-weight: bold;
    }
    .price {
      font-size: 0.12rem;
      color: #ff3c00;
      font-weight: bold;
    }
  }
} 
.checkLisit {
  height: 5rem;
  width: 100%;
  background: url("~@/assets/images/bg2.jpg") 0.1rem 2rem no-repeat;
  background-size: 100%;
}
.van-cell {
  width: 0.2rem;
  height: 0.2rem;
  line-height: 0.15rem;
  border: 1.5px solid black;
  font-weight: bold;
  border-radius: 50%;
  padding: 0;
  .van-cell__value--alone {
    text-align: center;
    line-height: 0.17rem;
  }
}


.van-popup{
  border-radius: .2rem;
  
  .hint{
  margin: .2rem .4rem
}
  div{
    margin: .1rem;
     
  }
}
</style>