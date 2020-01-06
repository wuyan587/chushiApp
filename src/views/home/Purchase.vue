<template>
  <ul class="purchase">
   <li v-for="(item,index) of dataList" :key="item.name">
      <router-link
            :to = "{
              name: 'pdetail',
              query: {
                fid:index+1
              }
            }"
          >
      <div class="name">
        <p class="buy">采购</p>
        <h3>{{item.name}}</h3>
      </div>
      <p class="city">期望产地：{{item.origin}}</p>
      <p class="quality">品质要求：{{item.quality}}</p>
      <div class="address">
        <p>300km</p>
        <i class="fas fa-map-marker-alt"></i>
        <p>{{item.province+item.city}}</p>
        <p class="ctf">企业认证</p>
        <p class="ctf">实名认证</p>
      </div>
      <p class="quantity">{{item.demand}}斤</p>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data(){
    return{
      dataList:[
        
      ]

    }
  },
  methods:{
    // goPurchaser(){
    //   this.$router.push({
    //     name:'pdetail'
    //   })
    // }
  },
  async mounted(){
    let result =await this.$request({
      url:'/selectAllUserProcure',
    })
    result=result.data;
    this.dataList=result;
  },
}
</script>
<style scoped>
.purchase {
  margin-top: 0.1rem;
  width: 3.4rem;
  /* height: 100%; */
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.purchase li {
  width: 100%;
  height: 1.2rem;
  background: white;
  border-radius: 0.2rem;
  margin-bottom: 0.15rem;
  text-align: left;
  padding-left: .2rem;
  padding-top: .15rem;
}
a {
  color:black;
}
.name {
    display: flex;
    margin-bottom: .1rem;
}
.buy {
    width: .25rem;
    height: .14rem;
    background: #3bc191;
    font-size: .11rem;
    color: white;
    line-height: .14rem;
    text-align: center;
    border-radius: .1rem;
}
h3 {
    font-size: .15rem;
    font-weight: bold;
    margin-left: .1rem;
}
.city, .quality {
    line-height: .2rem;
    font-size: .13rem;
}
.address {
    display: flex;
    font-size: .13rem;
    margin-top: .03rem;
    width: 2.2rem;
    font-size: .11rem;
    justify-content: space-between;
}
.ctf {
    width: .5rem;
    height: .14rem;
    border: 1px solid #3bc191;
    border-radius: .2rem;
    color: #3bc191;
    line-height: .14rem;
    font-size: .11rem;
    text-align: center;

}
.quantity {
    font-size: .13rem;
    color: red;
    margin-top: .16rem;
}

</style>
