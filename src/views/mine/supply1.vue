<template>
  <div class="supply1">
    <!-- <header>
      <p> &lt; </p>
      <h2> <span> 我的供应 </span> </h2> -->
          <van-nav-bar
      title="我的供应"
      left-arrow
      @click-left="goback"
    />
    <!-- </header> -->
    <div class="content">      
      <van-tabs v-model="active">
        <van-tab title="上架中" >
        <div class="list" v-for="(item,index) of suplist" :key="item.sid" >
          <div class="list-content">
            <div class="list-ing">
              <img src="http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.fruitName+item.fruitTitle }} </h4>
              <p> 300km <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.area }} </p> 
             
              <p class="price">{{item.num}} 斤 / 件</p>

              <div class="list-top">
              
                <van-cell  @click="item.pub=false"  :round=true >下架</van-cell>
                <van-cell   :round=true @click="change(index,item.sid)">修改</van-cell>
                <van-cell  @click="showPopup(index,item.sid)" :round=true>删除</van-cell>
                <van-popup v-model="xiajia">
                <p class="hint"> 确认下架吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "item.pub=false">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "Cancel">取消</van-button>
                </div>

                </van-popup>
                <van-popup v-model="show">
                <p class="hint"> 确认删除吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex ,activeSid )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
                </div>

                </van-popup>
              </div>
            </div>
          </div>
        </div>
      <div v-if = "!checkLisit" class="checkLisit">     
      </div>
            
        </van-tab>
        <van-tab title="下架中"> 
          <div class="list" v-for="(item,index) of suplist" :key="item.sid" >
          <div class="list-content">
            <div class="list-ing">
              <img src="http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.fruitName }} </h4>
              <p> 300km <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.area }} </p> 
             
              <p class="price">{{item.num}} 斤 / 件</p>

              <div class="list-top">
              
                <van-cell  @click="item.pub=true" :round=true>上架</van-cell>
                <van-cell   :round=true @click="change(index,item.sid)">修改</van-cell>
                <van-cell  @click="showPopup(index,item.sid)" :round=true>删除</van-cell>
                <van-popup v-model="xiajia">
                <p class="hint"> 确认上架吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "item.pub=true">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "Cancel">取消</van-button>
                </div>

                </van-popup>
                <van-popup v-model="show">
                <p class="hint"> 确认删除吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex ,activeSid )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
                </div>

                </van-popup>
              </div>
            </div>
          </div>
        </div>
        <div v-if = "!checkLisit" class="checkLisit">
          
        </div>
            </van-tab>
        <van-tab title="未通过"> 
          <div class="list" v-for="(item,index) of suplist" :key="item.sid" >
          <div class="list-content">
            <div class="list-ing">
              <img src="http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.fruitName }} </h4>
              <p> 300km <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.area }} </p> 
             
              <p class="price">{{item.num}} 斤 / 件</p>

              <div class="list-top">
              
                <van-cell   :round=true>上架</van-cell>
                <van-cell   :round=true @click="change(index,item.sid)">修改</van-cell>
                <van-cell  @click="showPopup(index,item.sid)" :round=true>删除</van-cell>
                <van-popup v-model="xiajia">
                <p class="hint"> 确认上架吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "item.pub=true">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "Cancel">取消</van-button>
                </div>

                </van-popup>
                <van-popup v-model="show">
                <p class="hint"> 确认删除吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex,activeSid  )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
                </div>

                </van-popup>
              </div>
            </div>
          </div>
        </div>
        <div v-if = "!checkLisit" class="checkLisit">
          
        </div>
            </van-tab>
        <van-tab title="审核中">
          <div class="list" v-for="(item,index) of suplist" :key="item.sid" >
          <div class="list-content">
            <div class="list-ing">
              <img src="http://img5.imgtn.bdimg.com/it/u=3865526395,2512926950&fm=11&gp=0.jpg" alt="">
            </div>
            <div class="list-right">
              <h4> {{ item.fruitName }} </h4>
              <p> 300km <i class="fas fa-map-marker-alt"> </i> <span></span> {{ item.area }} </p> 
             
              <p class="price">{{item.num}} 斤 / 件</p>

              <div class="list-top">
              
                <van-cell   :round=true>上架</van-cell>
                <van-cell   :round=true @click="change(index,item.sid)">修改</van-cell>
                <van-cell  @click="showPopup(index,item.sid)" :round=true>删除</van-cell>
                <van-popup v-model="xiajia">
                <p class="hint"> 确认上架吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "item.pub=true">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "Cancel">取消</van-button>
                </div>

                </van-popup>
                <van-popup v-model="show">
                <p class="hint"> 确认删除吗？ </p>
                <div>
                  <van-button type="danger" class="button determine"  @click = "remove( activeIndex ,activeSid )">确定</van-button>
                  <van-button type="warning" class="button deselect"  @click = "closeFlag">取消</van-button>
                </div>

                </van-popup>
              </div>
            </div>
          </div>
        </div>
        <div v-if = "!checkLisit" class="checkLisit">
          
        </div>
            </van-tab>
      </van-tabs>
    </div>
   <footer><router-link to='/release?type=supply' tag='div'>发布新供应 </router-link></footer> 
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
   
  data(){
    return{
        xiajia:false,
        show: false,
        flag: false,// 控制删除的用户交互
        activeIndex: 0,
        activeType: 'all',
        active:2,
        activeSid:'',
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
       ...mapMutations(['removebuyitems','setinfo','setnum']),
      
    goback(){  //返回按钮
      this.$router.go(-1);
    },
    showPopup(index,sid) {
      this.show = true;
       this.activeIndex = index 
       this.activeSid = sid;

        console.log(this)
    },
     closeFlag () {
      this.show = false 
      
    },
      Cancel () {
      this.xiajia = false 
      
    },
    remove ( index,sid ) {
      this.$store.commit('removebuyitems',['supply',sid]);
      this.closeFlag()
      // console.log(this)
    },
    change(index,sid){
      this.$store.commit('setinfo',['supply',this.suplist[index]])
      this.$store.commit('removebuyitems',['supply',sid]);
      this.$store.commit('setnum',4);
      this.$router.push({
        name:'release',
        query:{
          type:'supply',

        }
      })
      
    }
   
  },
  computed:{
     checkLisit () {
      return this.lists.length !=0 
    },
    suplist(){
      switch(this.active){
          case 0:
            return this.$store.state.pub.Mine.supplylist.filter(item=>item.pub&&item.pass);
          case 1: 
            return this.$store.state.pub.Mine.supplylist.filter(item=>!item.pub&&item.pass);
          case 2: 
            return this.$store.state.pub.Mine.supplylist.filter(item=>item.pass);
          case 3: 
            return this.$store.state.pub.Mine.supplylist.filter(item=>!item.pass);
             
      }
      return this.$store.state.pub.Mine.supplylist;
    },
    
  }
}
</script>

<style lang="scss" scoped>

.supply1{
   
  display: flex;
  flex-direction: column;
  height: 100%;
  // .van-nav-bar{
 
  // }
  // header{
  //   height: .4rem;
  //   width: 100%;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   font-size: .2rem;
  //   font-weight: 600;
  //   padding: .1rem .1rem;
  //   border-bottom: 0.2px solid #ccc;
  //   p{
     
  //     font-weight: bold;
  //   }
  //   h2{
  //     display: flex;
  //     flex: 1;
  //     justify-content: center;
       
  //   }
    
  // }
  }
 .content{
   flex: 1;
   overflow: hidden;
  .van-tab__text, .van-tabs::v-deep {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    .van-tabs__content {
      flex: 1;
      overflow: auto;
      padding-bottom: 0.5rem;
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
          padding: .1rem 0;
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
  margin: .1rem 0;
  position: absolute;
  width: 100%;
  bottom: 0;

  div{
    padding: .1rem .5rem;
    background: #4cc79b;
    border-radius: .2rem;
    color: white;
  }
}


</style>
