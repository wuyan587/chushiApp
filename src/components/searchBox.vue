<template>
  <div class="searchBox">
<van-search class="search"
  v-model="value"
  show-action
  placeholder="请输入搜索内容"
  left-icon=false
  shape="aquare"
  @search="onSearch"
  input-align='center'
  background='#fff'
>
  <div slot="action" @click="onSearch" class="ser_icon"><van-icon name="search" size=".16rem" class="ser_iconpic"/></div>
</van-search>
  </div>
</template>
<script>

export default {

  data(){
    return {
      value:'',
      f:false
    }
  },
  methods:{
    onSearch(){
      console.log(this.value);
      
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/constant.scss';
.searchBox{
  height:0.3rem;
  margin: .26rem 0 .26rem 0;
  display: flex;
  justify-content: center;
  .search{
    height: 100%;
    width: 3rem;
    background:$clickColor;
    position: relative;
    .ser_icon{
      position: absolute;
      right:0.2rem;
      top:10%;
      .ser_iconpic{
        font-weight: 500
      }

    }
  }

  
  
}
 </style>