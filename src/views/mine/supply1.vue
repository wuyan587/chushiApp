<template>
  <div class="supply1">
    <header>
      <p @click="goback"> &lt; </p>
      <h2> <span> 我的供应 </span> </h2>
    </header>
    <div class="content">      
      <van-tabs v-model="active">
        <van-tab title="上架中">
           <div class="list" v-for="(item,index) of lists" :key="item.id" >
      

          
          <div class="list-content">
            <div class="list-ing">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.Product }} </h4>
              <p> {{ item.Distance }} <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.location }} </p> 
             
              <p class="price">{{item.price}}</p>

              <div class="list-top">
              
                <van-cell  @click="SoldOut(index)" :round=true>下架</van-cell>
                <van-cell   :round=true>修改</van-cell>
                <van-cell  @click="showPopup(index)" :round=true>删除</van-cell>
                <van-popup v-model="xiajia">
                <p class="hint"> 确认下架吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "Cancel">取消</van-button>
                </div>

                </van-popup>
                <van-popup v-model="show">
                <p class="hint"> 确认删除吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
                </div>

                </van-popup>
            </div>
            </div>

          </div>
       
      </div>
        <div v-if = "!checkLisit" class="checkLisit">
          
        </div>
            <footer>
              <div>发布新供应 </div>
            </footer> 
        </van-tab>
        <van-tab title="下架中"> <div class="list" v-for="(item,index) of lists" :key="item.id" >
      

          
          <div class="list-content">
            <div class="list-ing">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.Product }} </h4>
              <p> {{ item.Distance }} <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.location }} </p> 
             
              <p class="price">{{item.price}}</p>

              <div class="list-top">
              
                <van-cell    :round=true>上架</van-cell>
                <van-cell   :round=true>修改</van-cell>
                <van-cell  @click="showPopup(index)" :round=true>删除</van-cell>
                <van-popup v-model="xiajia">
                <p class="hint"> 确认下架吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "Cancel">取消</van-button>
                </div>

                </van-popup>
                <van-popup v-model="show">
                <p class="hint"> 确认删除吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
                </div>

                </van-popup>
            </div>
            </div>

          </div>
       
      </div>
        <div v-if = "!checkLisit" class="checkLisit">
          
        </div>
            <footer>
              <div>发布新供应 </div>
            </footer> </van-tab>
        <van-tab title="未通过"> <div class="list" v-for="(item,index) of lists" :key="item.id" >
      

          
          <div class="list-content">
            <div class="list-ing">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.Product }} </h4>
              <p> {{ item.Distance }} <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.location }} </p> 
             
              <p class="price">{{item.price}}</p>

              <div class="list-top">
              
                 
                <van-cell   :round=true>修改</van-cell>
                <van-cell  @click="showPopup(index)" :round=true>删除</van-cell>
                <van-popup v-model="xiajia">
                <p class="hint"> 确认下架吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "Cancel">取消</van-button>
                </div>

                </van-popup>
                <van-popup v-model="show">
                <p class="hint"> 确认删除吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
                </div>

                </van-popup>
            </div>
            </div>

          </div>
          <div id="size">
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 </p>
          </div>
       
      </div>
        <div v-if = "!checkLisit" class="checkLisit">
          
        </div>
            <footer>
              <div>发布新供应 </div>
            </footer> </van-tab>
        <van-tab title="审核中"><div class="list" v-for="(item,index) of lists" :key="item.id" >
      

          
          <div class="list-content">
            <div class="list-ing">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.Product }} </h4>
              <p> {{ item.Distance }} <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.location }} </p> 
             
              <p class="price">{{item.price}}</p>

              <div class="list-top">
              
                 
                <van-cell   :round=true>修改</van-cell>
                <van-cell  @click="showPopup(index)" :round=true>删除</van-cell>
                <van-popup v-model="xiajia">
                <p class="hint"> 确认下架吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "Cancel">取消</van-button>
                </div>

                </van-popup>
                <van-popup v-model="show">
                <p class="hint"> 确认删除吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
                </div>

                </van-popup>
            </div>
            </div>

          </div>
       
      </div>
        <div v-if = "!checkLisit" class="checkLisit">
          
        </div>
            <footer>
              <div>发布新供应 </div>
            </footer> </van-tab>
      </van-tabs>
    </div>
   
  </div>
</template>
<script>
export default {
   
  data(){
    return{
        xiajia:false,
        show: false,
        flag: false,// 控制删除的用户交互
        activeIndex: 0,
        activeType: 'all',
        active:2,
        
     lists:[
        { id:1,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'200.00 斤 / 件'},
          { id:2,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'200.00 斤 / 件'},
          { id:3,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'200.00 斤 / 件'},
          { id:4,
          Supplier:'供应商名字',
        Product:'日本进口红富士',
        imgUrl:'http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg',
        Distance:'300km',
        location:'浙江杭州市',
        price:'200.00 斤 / 件'},
        
     ],
     
    }     
  },
    methods: {
      SoldOut(index){
         this.xiajia = true;
       this.activeIndex = index 

      },
     
    showPopup(index) {
      this.show = true;
       this.activeIndex = index 
        console.log(this)
    },
     closeFlag () {
      this.show = false 
      
    },
      Cancel () {
      this.xiajia = false 
      
    },
    remove ( index ) {
      this.lists.splice( index, 1 )
      this.closeFlag()
      console.log(this)
    },
    goback(){
      // console.log(this.$router)
      // this.$router.back()
      this.$router.go(-1)
    }
   
  },
  computed:{
     checkLisit () {
      return this.lists.length !=0 
    }
  }
}
</script>

<style lang="scss" scoped>

.supply1{
   
  display: flex;
  flex-direction: column;
  header{
    height: .4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .2rem;
    font-weight: 600;
    padding: .1rem .1rem;
    border-bottom: 0.2px solid #ccc;
    p{
     
      font-weight: bold;
    }
    h2{
      display: flex;
      flex: 1;
      justify-content: center;
       
    }
    
  }
  }
 .van-tab{
    font-size: .2rem;
  }






 

img{
    width: 1.2rem;
    height:1.2rem ;
  }

.list{
  display: flex;
  // flex: 1;
  flex-direction: column;
  padding:.13rem .16rem .13rem .16rem;
  margin-bottom: .14rem;
  background: #fff;
  border-radius: .1rem;
  margin-top: .1rem;
  #size{
  display: flex;
  p{
    text-align:inherit;
    color: red;
  }
}
  .list-top{
    display: flex;
    justify-content:space-between;
    margin-top: .13rem;
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
      margin-bottom: .1rem;
       
    }
   
    .price{
      font-size: .12rem;
      color: #ff3c00;
      font-weight: bold;
    }
    .list-top{
      p{
          padding: .1rem;
          font-size: .16rem;
      }
      
    }
    
  }
}


 
.van-popup{
  // background: none;
  border-radius: .2rem;

}
.checkLisit{
  height: 5rem;
  width:100%; 
  background: url("~@/assets/images/bg3.jpg") .1rem 2rem no-repeat;
  background-size: 100%;
   
}
.tabpanel{
  background: #fff;
}

.van-cell{
    
  margin: .1rem  .1rem 0;
  
   font-weight: bold;
   border-radius: .1rem;
   padding:.05rem;
   background:#4cc79b;
  .van-cell__value--alone{
    text-align: center;
    line-height: 0.17rem;
    color: #d7f0e6;
    padding: .02rem .05rem
   }
}


.van-popup{
  // border-radius: .2rem;
  
  .hint{
  margin: .2rem .4rem
}
  div{
    margin: .1rem;
     
  }
}

footer{
  display: flex;
  justify-content: center;
  margin: .4rem 0;
  div{
    padding: .1rem .5rem;
    background: #4cc79b;
    border-radius: .2rem;
    color: white;
  }
}


</style>
