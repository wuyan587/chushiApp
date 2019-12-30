<template>
 
   
    <div class='shopcart'>
        <h3>货单</h3>
        <div class="list" v-for="(item,index) of lists" :key="item.id" >
      

          <div class="list-top">
            <h4> {{item.Supplier}} </h4>
        <van-cell  @click="showPopup(index)" :round=true>x</van-cell>
        <van-popup v-model="show">
          <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
          <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>

        </van-popup>
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
        <div v-if = "!checkLisit" class="checkLisit">
          
        </div>
  </div>
  
 
</template>

<script>

export default {
   
  data(){
    return{
        show: false,
        flag: false,// 控制删除的用户交互
        activeIndex: 0,
        activeType: 'all',
        
     lists:[
        { id:1,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'20斤/元'},
          { id:2,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'20斤/元'},
          { id:3,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'20斤/元'},
          { id:4,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'20斤/元'},
        
     ],
     
    }     
  },
    methods: {
     
    showPopup(index) {
      this.show = true;
       this.activeIndex = index 
        console.log(this)
    },
     closeFlag () {
      this.show = false 
      
    },
    remove ( index ) {
      this.lists.splice( index, 1 )
      this.closeFlag()
      console.log(this)
    },
   
  },
  computed:{
     checkLisit () {
      return this.lists.length !=0 
    }
  }
}

</script>

<style lang="scss" scoped>
/* .shopcart{
width: 100%;
height: 100%
} */

.shopcart{
  // height: auto;
  // padding:.68rem .16rem 0 .16rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  padding: .16rem;
  display: flex;
  flex: 2;
  background: url('~@/assets/images/bg.jpg') no-repeat;
  background-size:contain;
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
}

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