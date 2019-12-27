<template>
 
   
    <div class='shopcart'>
     <h3>货单</h3>
      <div v-for="(item,index) of lists" :key=index class="list">
        <div class="list-top">
          <h4> {{item.Supplier}} </h4>
         <van-button type="default">X</van-button>
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
    return{
     lists:[
       { Supplier:'供应商名字',
       Product:'日本进口红富士',
      imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
      Distance:'300km',
      location:'浙江杭州市',
      price:'20斤/元'},
      { Supplier:'供应商名字',
       Product:'日本进口红富士',
      imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
      Distance:'300km',
      location:'浙江杭州市',
      price:'20斤/元'}
     ]
     
     
      
    }
     
  }
  
}

</script>

<style lang="scss" scoped>
/* .shopcart{
width: 100%;
height: 100%
} */
.data{

}
.shopcart{
  height: auto;
  margin: .16rem;
  display: flex;
  flex: 2;
  // background: url('~@/assets/images/bg.jpg')
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
  .list{
    display: flex;
    flex: 1;
    flex-direction: column;
    margin:0 .16rem .13rem .16rem;
    margin-bottom: .14rem;
    .list-top{
      display: flex;
      justify-content:space-between;
      margin-bottom: .08rem;
      h4{
        font-size: .14rem;
        font-weight: bold;
         
      }
      button{
        border-radius: 50%;
         border-color: black;
          height: .15rem;
          line-height: .15rem;
          padding: 0 .025rem;
         
          
         
        // background: #fff;
        // text-align: center;
        
      }
    }
    
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
</style>