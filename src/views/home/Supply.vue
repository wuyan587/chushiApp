<template>
  <ul class="supply">
    <li v-for="item of dataList" :key="item.pid">
      <router-link
        :to="{
              name: 'detail',
              query: {
                fid: item.pid
              },
            }"
          >
        <img :src="item.image" alt />
        <h3>{{item.name}}</h3>
        <div class="address">
          <p>300km</p>
          <i class="fas fa-map-marker-alt"></i>
          <p>浙江杭州市</p>
        </div>
        <div class="ctf">
          <p>企业认证</p>
          <p>实名认证</p>
        </div>
        <p class="price">{{item.price}}斤/元</p>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
      ]
    };
  },
  async mounted(){
    let result =await this.$request({
      url:'selectAllProduct',
    })
    result=result.data;
    this.dataList=result;
    // console.log(result);
    
  },
};
</script>

<style scoped>
.supply {
  margin-top: 0.15rem;
  /* height: 100%; */
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
  margin-bottom: 0.16rem;
  background: white;
  border-radius: 0.1rem;
  text-align: left;
}
li a {
  color: black;
}
img {
  width: 1.65rem;
  height: 1.65rem;
}
h3 {
  font-size: 0.14rem;
  font-weight: bold;
  margin-top: 0.08rem;
  margin-left: 0.08rem;
}
.address {
  display: flex;
  font-size: 0.11rem;
  margin-top: 0.1rem;
  margin-left: 0.08rem;
  width: 1.06rem;
  justify-content: space-between;
}
.ctf {
  display: flex;
  margin-top: 0.2rem;
  margin-left: 0.08rem;
  width: 1.18rem;
  justify-content: space-between;
}
.ctf p {
  width: 0.5rem;
  height: 0.15rem;
  border: 1px solid #3bc191;
  border-radius: 0.2rem;
  color: #3bc191;
  line-height: 0.15rem;
  font-size: 0.11rem;
  text-align: center;
}
.price {
  margin-top: 0.1rem;
  color: red;
  font-size: 0.12rem;
  margin-left: 0.08rem;
}
</style>