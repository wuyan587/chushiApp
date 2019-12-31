<template>
<div class="dropdownMenu">
 <van-dropdown-menu active-color="#4cc79b">
  <van-dropdown-item v-model="value1" :options="option1[1].children">
    <!-- <van-dropdown-menu>
<van-dropdown-item v-model="value3" :options="items">
  </van-dropdown-item>
    </van-dropdown-menu> -->
  <van-tree-select
  :items="option1[1]"
  :active-id.sync="activeId"
  :main-active-index.sync="activeIndex"
/>

  
  </van-dropdown-item>
  <van-dropdown-item v-model="value2" :options="option2" />
  <van-dropdown-item title="筛选" ref="item">
 <div>
   <p>认证</p>
   <div>
     <van-button round size="mini" v-bind:class="{checked:btnflag1}" @click="changebtn1">实名认证</van-button>
     <van-button round size="mini" v-bind:class="{checked:btnflag2}" @click="changebtn2">企业认证</van-button>
   </div>
 </div>
 <div>
   <p>价格</p>
 <div class="piclist">
   <van-search placeholder="请输入最低价" v-model="minPic" left-icon=false class="pic"/>
   <van-search placeholder="请输入最高价" v-model="maxPic" left-icon=false class="pic"/>
 </div>
 </div>
 <van-checkbox-group v-model="result" checked-color="#4cc79b">
  <van-cell-group>
    <van-cell
      v-for="(item, index) in list"
      clickable
      :key="item"
      :title="`${item}`"
      @click="toggle(index)"
    >
      <van-checkbox
        :name="item"
        ref="checkboxes"
        slot="right-icon"
      />
    </van-cell>
  </van-cell-group>
</van-checkbox-group>
<div class="surebox">  <van-button block round @click="onConfirm" color="#4cc79b" class="sure_btn">确定</van-button></div>
      
  </van-dropdown-item>
</van-dropdown-menu>
</div>
  
</template>
<script>
export default {
     data() {
    return {
        value1: 0,
      btnflag1:false,
      btnflag2:false,

      value2: 'a',
      value3:0,
      minPic:'',//最低价
      maxPic:'',//最高价
      
       activeId: 1,
      activeIndex: 0,
      result: [],
     
      list:['包运费','支持零售'],
      option1: [[  { text: '全国', value: 0 },
        ],
        [{text:'全国',value: 0},{
        text:'浙江省',value: 1,
      children:[{text:'杭州',id:1},{text:'温州',id:2}]
      },
      {
        text:'江苏省',value: 2,
      children:[{text:'南京',id:1},{text:'苏州',id:2}]
      },
      {
        text:'广东省',value: 3,
      children:[{text:'广州',id:1},{text:'深圳',id:2}]
      },
      ]  
      ],
      option2: [{ text: '综合排序', value: 'a' },
        { text: '距离排序', value: 'b' },
        { text: '价格排序', value: 'c' },
       
      ]
    }
  },

  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
      toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
  changebtn1(){
    this.btnflag1=!this.btnflag1
},
  changebtn2(){
    this.btnflag2=!this.btnflag2
},
    
  },
  mounted(){
  //  const v=this.items.map(ele=>{
  //        return ele.value
  //      })
  }

}
</script>
<style lang="scss" scoped>


  .checked{
  background: #4cc79b;
  color:white;
 };
.surebox{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .sure_btn{
  width: 2.4rem;
  height: 0.35rem;

}
}
p{
  text-align: left
}
.piclist{
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .pic{
    // width: 1.07rem;
    height: .5rem;
  }
}
//   input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
//   color: red;
//   font-size: .12rem;
// };

</style>