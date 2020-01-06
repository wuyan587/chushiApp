<template>
  <div class="shoplist">
    <div class="list" v-for="(item) of list" :key="item.id" >
      

          <div class="list-top">
            <h4> {{item.Supplier}} </h4>
    
       
          </div>
          <div class="list-content">
            <div class="list-ing">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.Product }} </h4>
              <p> {{ item.Distance }} <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.location }} </p> 
              <div>
              <van-button color="#aee6d2" plain>企业认证</van-button>
              <van-button color="#aee6d2" plain>实名认证</van-button>
              </div>
              <p class="price">{{item.price}}</p>
            </div>
          </div>
       
      </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      lists:[
         { id:1,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'200km',
        location:'浙江杭州市',
        price:'20斤/元'},
          { id:2,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'100km',
        location:'浙江温州市',
        price:'10斤/元'},
          { id:3,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'150km',
        location:'浙江杭州市',
        price:'30斤/元'},
          { id:4,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'5斤/元'},
      ]
    }
  },
  computed:{
    list(){
      let arr=JSON.parse(JSON.stringify(this.lists));
      switch(this.$store.state.search.typelist.type1){
        case '全国':
        break;
        default:
        arr=arr.filter(item=>item.location.match(this.$store.state.search.typelist.type1)!=null);
        console.log(arr);
        
      }
      switch(this.$store.state.search.typelist.type2){
        case 'a':
            return arr;
        case 'b':
          arr.sort((a,b)=>{
            return parseInt(a.Distance)-parseInt(b.Distance);
        
          })
          return arr;
      case 'c':
          arr.sort((a,b)=>{
            return parseInt(a.price)-parseInt(b.price);
        
          })
          return arr;
      }
      return '';
    }

  }
}
</script>
<style lang="scss" scoped>
.list{
  display: flex;
  // flex: 1;
  flex-direction: column;
  padding:.13rem .16rem 0 .16rem;
  margin-bottom: .14rem;
  background: #fff;
  border-radius: .1rem;
  .list-top{
    display: flex;
    justify-content:space-between;
    margin-bottom: .08rem;
    align-items: center;
    h4{
      font-size: .14rem;
      font-weight: bold;        
    }
    .button{
        margin: 0 .1rem;
        border-radius: .1rem
    }
    
    
  }    
}
 h3{
    width: 100%;
    text-align: left;
    font-size: .16rem;
    font-weight: bold;
    margin:.16rem .13rem;
  }
  img{
    width: .95rem;
    height:.95rem ;
  }
  .list-content{
    display: flex;
    .list-right{
    display: flex;
    flex-direction: column;
    margin-left: .18rem;
    align-items: flex-start;
    h4{
      font-size: .14rem;
      font-weight: bold;
      margin-bottom: .08rem;
    }
    p{
      font-size: .1rem;
      margin-bottom: .18rem;
    }
    button{
      width: .52rem;
      height: .15rem;
      line-height: .15rem;
      font-size: .1rem;
      padding: 0;
      margin-right: .1rem;
      margin-bottom: .16rem;
      color: #d7f3e9;
      border-color: #d7f3e9;
      font-weight: bold;
    }
    .price{
      font-size: .12rem;
      color: #ff3c00;
      font-weight: bold;
    }
  }
}
.van-popup{
  background: none;
}
.checkLisit{
  height: 5rem;
  width:100%; 
  background: url("~@/assets/images/bg2.jpg") .1rem 2rem no-repeat;
  background-size: 100%;
}

.van-cell{
   width: 0.2rem;
   height: 0.2rem;
   line-height: .15rem;
   border: 1.5px solid black;
   font-weight: bold;
   border-radius: 50%;
   padding:0;
   .van-cell__value--alone{
     text-align: center;
     line-height: 0.17rem;
   }
}
</style>