<template>
  <div class="content">
      <!-- 1级发布 -->
    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="activeIndex"
      v-if="findex==1"
    >
      <template slot="content">
      <!-- 内容 -->
      </template>
    </van-tree-select>
      <!-- 2级发布 -->
    <div v-else-if="findex==2">
      <ul class="fruits">
        <li :class="{ 'active':fruitsflag==index }" v-for="(item,index) of fruitsitems" @click="fruitChose(index)" :key="item.sid">{{item.name}}</li>
      </ul>
    </div>
      <!-- 3级发布 -->
    <div v-else-if="findex==3">
      <div v-for='item of fruitstype' :key="item.sid" class="type_warp">
        <h2>{{item.name}}</h2>
        <ul class="fruits_type">
            <li :class="{ 'active':typeFlag(item.sid,items.val) }" v-for="(items) of item.list" @click="typeChose(item.sid,items.val)" :key="items.sid">{{items.val}}</li>
        </ul>
      </div>
      
    </div>
     <!-- 发布供应 -->
    <div v-else-if="findex==4&&$route.query.type=='supply'">
      <PubSupply/>
    </div>
     <!-- 发布采购 -->
    <div v-else-if="findex==4&&$route.query.type=='purchase'">
        <PubPurchase/>
    </div>
     <!--发布完成-->
     <div v-else-if="findex==5" class="success">
         <h2>发布完成</h2>
         <img src="~assets/images/supplysuccess.jpg" alt="">
         <h3>您的商品正在审核中</h3>
         <span>
             (<van-count-down @finish="finish" :time="time" format="ss"/>)秒后跳转到首页
         </span>
         
     </div>
  </div>
</template>

<script>
import PubSupply from './supply'
import PubPurchase from './purchase'
import { mapMutations } from 'vuex'
export default {
  // props: ["findex"],
  data() {
    return {
      activeIndex: 0,
      items:[{ text: "水果", list: [{}] }, { text: "分组 2" }],//水果总目录
      fruitsitems:[{
            sid:1,
              name:'苹果'
            },{
              sid:2,
              name:'橘子'
            },{
              sid:3,
              name:'醉金相葡萄'
            }
      ],//水果详细目录
      fruitstype:[{
              sid:1,
              name:'储存方式',
              list:[{
                sid:1,
                val:'冷藏'
              },{
                sid:2,
                val:'鲜果'
              },{
                sid:3,
                val:'窖藏'
              },],
            },{
              sid:2,
              name:'果型',
              list:[{
                sid:1,
                val:'高桩'
              },{
                sid:2,
                val:'矮桩'
              },],
            },{
              sid:3,
              name:'单果重',
              list:[{
                sid:1,
                val:'250g'
              },{
                sid:2,
                val:'150g'
              },{
                sid:3,
                val:'120g'
              },{
                sid:4,
                val:'220g'
              },{
                sid:5,
                val:'110g'
              },{
                sid:6,
                val:'190g'
              },],
            },{
              sid:4,
              name:'是否贴字',
              list:[{
                sid:1,
                val:'不贴字'
              },{
                sid:2,
                val:'贴字'
              },],
            },{
              sid:5,
              name:'包装',
              list:[{
                sid:1,
                val:'纸袋'
              },{
                sid:2,
                val:'膜袋'
              },{
                sid:3,
                val:'光果'
              },{
                sid:4,
                val:'纸+膜袋'
              },],
            }],//水果规格目录
      fruitsflag:0,
      typeflag:{
          reserve:'',
          model:'',
          weight:'',
          paste:'',
          pack:''
      },
      value: "",
      price: 0,
      num: 0,
      areaList: {},
      searchResult: [],
      time: 5 * 1000,
      
    };
  },
  components:{
    PubSupply,
    PubPurchase 
  },
  methods: {
      ...mapMutations(['setType','setName','setSpecification','reset']),
      finish(){
          // this.$emit('reset');
          this.$store.commit('reset');
          this.$router.push({name:'home'});
        },
      fruitChose(index){
        this.fruitsflag=index;
      },
      typeChose(sid,val){
        // this.typeflag=index;
        switch(sid){
            case 1:
               this.typeflag.reserve=val;
              break;
            case 2:
               this.typeflag.model=val;
              break;
            case 3:
               this.typeflag.weight=val;
              break;
            case 4:
               this.typeflag.paste=val;
              break;
            case 5:
               this.typeflag.pack=val;
              break;
          }
      },
    },
  computed:{
    findex(){
      return this.$store.state.release.flagNum;
    },
    typeFlag(){
      return (sid,val)=>{
        switch(sid){
            case 1:
              return this.typeflag.reserve==val;
              // break;
            case 2:
              return this.typeflag.model==val;
              // break;
            case 3:
              return this.typeflag.weight==val;
              // break;
            case 4:
              return this.typeflag.paste==val;
              // break;
            case 5:
              return this.typeflag.pack==val;
              // break;
          }
      }
    }
  },
  watch:{
    findex(){
      // console.log(this.fruitDetil);
      if(this.findex==2)
      //  this.$store.commit('setType',this.fruitstype[this.typeflag].name) 
      ''
      else if (this.findex==3)
       this.$store.commit('setName',this.fruitsitems[this.fruitsflag].name)
      else if (this.findex==4)
       this.$store.commit('setSpecification',this.typeflag)
      else if (this.findex>=4)
        ''
        // this.$store.state.release.fruit.fruitName=this.fruitsitems[this.fruitsflag].name;
      
        // this.$set(this.fruitDetil,'fruitName',this.fruitsitems[this.fruitsflag].name);
        // this.$set(this.fruitDetil,'fruitType',this.fruitstype[this.typeflag].name);
        // this.$emit('getitem',this.fruitDetil)
    }
  }
}
</script>

<style lang='scss'>

.content {
  background: #f6f6f6;
}
.van-tree-select {
  margin-top: 0.13rem;
}
.fruits {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: white;
  li {
    width: 1rem;
    border: 1px solid #4cc79b;
    height: 0.29rem;
    line-height: 0.29rem;
    border-radius: 0.1rem;
    margin-top: 0.13rem;
    font-size: 0.13rem;
    &.active {
      color: white;
      background: #4cc79b;
    }
  }
}
.type_warp{
  padding:0.1rem 0.15rem;
  background: white;
  h2{
    text-align: left;
    font-weight: bold;
  }
}
.fruits_type {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  
  // margin-bottom: 0.2rem;
  li {
    width: 1rem;
    height: 0.29rem;
    line-height: 0.29rem;
    border: 1px solid #4cc79b;
    border-radius: 0.1rem;
    margin: 0 0.06rem;
    margin-top: 0.13rem;
    font-size: 0.13rem;
    &.active {
      color: white;
      background: #4cc79b;
    }
  }
}
.van-sidebar {
  width: 0.95rem;
  flex: none;
  .van-sidebar-item--select {
    color: #4cc79b;
    border: none;
  }
}
.van-field__label {
  min-width: 0.6rem;
}
.titles {
  text-align: left;
  width: 0.9rem;
  line-height: 0.12rem;
  flex: none;
  font-size: 0.13rem;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.van-field__body {
  height: 100%;
}
.text,
.van-field__control {
  display: flex;
  box-sizing: border-box;
  line-height: 0.12rem;
  font-size: 0.12rem;
  min-height: 0.2rem;
  display: flex;
  align-items: center;
}
.suffix_price::after {
  content: "元/斤";
  display: inline-block;
  position: absolute;
  right: 0.6rem;
}
.suffix_num::after {
  content: "斤";
  display: inline-block;
  position: absolute;
  right: 0.8rem;
}
.van-cell {
  height: 0.32rem;
  align-items: center;
}
.van-cell__right-icon{
  line-height: 0.12rem;
}
.van-cell-group {
  margin-bottom: 0.1rem;
}
.van-uploader__preview,.van-uploader__upload{
    margin: 0.22rem;
}
.van-uploader__upload{
    border: 1px solid #ccc;
}
//详情相关
.van-field--min-height{
    flex-direction: column;
    align-items: center;
    height: 1.02rem;
    .titles{
        width: 100%;
        height: 0.32rem;
        line-height: 0.32rem;
    }
    
    .van-cell__value{
        width: 95%;

    }
    textarea{
        background: #f6f6f6;
        border-radius: 0.1rem;
        height: 0.6rem;
        padding: 0.1rem 0.1rem;
        font-size: 0.1rem;
        line-height: 0.2rem;
    }
}
//发布完成
.success{
    margin-top: 0.7rem;
    background: white;
    h2{
        font-size: 0.3rem;
        color: #4cc79b;
    }
    h3{
        font-size: 0.14rem;
        margin-bottom: 0.25rem;
    }
    img{
        margin-top: 0.3rem;
        width: 2.15rem;
        height: 0.92rem;
        margin-bottom: 0.25rem;
    }
    
    .van-count-down{
        display: inline-block;
        color:#4cc79b;
    }
}
</style>
