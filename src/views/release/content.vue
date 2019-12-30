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
      <ul class="fruits_type">
        <li :class="{ 'active':typeflag==index }" v-for="(item,index) of fruitstype" @click="typeChose(index)" :key="item.sid">{{item.name}}</li>
      </ul>
    </div>
     <!-- 发布供应 -->
    <div v-else-if="findex==4&&$route.query.type=='supply'">
      <PubSupply :fruitDetil='fruitDetil' />
    </div>
     <!-- 发布采购 -->
    <div v-else-if="findex==4&&$route.query.type=='purchase'">
        <van-cell-group>
        <van-cell title-class="titles" value-class="text" title="货品名称" :value="fruitDetil.fruitName" />
        <van-cell title-class="titles" value-class="text" title="规格" value="内容" />
        <van-cell title-class="titles" value-class="text" title="标题预览" value="内容" />
      </van-cell-group>
       <van-cell-group>
        <van-field label="采购数量" label-class="titles suffix_num" v-model="value" placeholder="请输入用户名" />
        <van-cell title="采购周期" title-class="titles" value-class="text" is-link value="内容" />
        <van-cell title="期望产地" title-class="titles" value-class="text" is-link value="内容" />
        <van-cell title="收货地址" title-class="titles" value-class="text" is-link value="内容" />
      </van-cell-group>
       <van-cell-group>
        <van-field
          v-model="message"
          label-class="titles"
          rows="2"
          label="其他要求(选填)"
          type="textarea"
          placeholder="请输入详情"
        />
      </van-cell-group>
       <van-cell-group>
        <van-field label="手机号码" label-class="titles" v-model="value" placeholder="请输入用户名" />
        <van-field
    v-model="sms"
    label-class="titles"
    center
    clearable
    label="短信验证码"
    placeholder="请输入短信验证码"
  >
    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
  </van-field>
        </van-cell-group>
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
export default {
  props: ["findex"],
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
              name:'苹果'
            },{
              sid:2,
              name:'橘子'
            },{
              sid:3,
              name:'醉金相葡萄'
            }],//水果类型目录
      fruitDetil:{
      //   fruitName:this.fruitsitems[this.fruitsflag].name,
      //   fruitType:this.fruitstype[this.typeflag].name,
      },
      fruitsflag:0,
      typeflag:0,
      value: "",
      price: 0,
      num: 0,
      areaList: {},
      searchResult: [],
      message: "",
      fileList: [],
      time: 5 * 1000,
      sms:'',    //短信验证
    };
  },
  components:{
    PubSupply,
  },
  methods: {
      finish(){
          this.$emit('reset');
          this.$router.push({name:'home'});
        },
      fruitChose(index){
        this.fruitsflag=index;
      },
      typeChose(index){
        this.typeflag=index;
      },
    },
  computed:{
   
  },
  watch:{
    findex(){
      console.log(this.fruitDetil);
      if(this.findex>2){
        this.$set(this.fruitDetil,'fruitName',this.fruitsitems[this.fruitsflag].name);
        this.$set(this.fruitDetil,'fruitType',this.fruitstype[this.typeflag].name);
        this.$emit('getitem',this.fruitDetil)
      }
        
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
.fruits_type {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: white;
  li {
    width: 1rem;
    height: 0.29rem;
    line-height: 0.29rem;
    border: 1px solid #4cc79b;
    border-radius: 0.1rem;
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
  font-size: 0.14rem;
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