<template>
  <div class='search'>
    <div class="search_top">
      <p @click="goback"><i class="fas fa-angle-left"></i></p>
       <div class="search_r">
        <van-search
       v-model="value"
      placeholder="请输入搜索内容"
      show-action
     shape="round"
         @search="onSearch"
>
      <div slot="action" @click="onSearch">搜索</div>
</van-search>
  </div>
  
</div>
<DropdownMenu></DropdownMenu>
<shoplist></shoplist>

  </div>
</template>

<script>
import DropdownMenu from './dropdownMenu'
import shoplist from './shoplist'
export default {
  data(){
    return {
      value:''
    }
  },
  components:{
    DropdownMenu,shoplist
  },
methods:{
  async onSearch(){
    // console.log(this.value); 
    const result=await this.$request({
      url:'/search',
      params:{
        searchContent:this.value
      }
    })
    console.log(result);
    
  },
    goback(){
       this.$router.go(-1)
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/borderstyle.scss';
.van-search{
  background: none!important
}
//  van-search--show-action
.search{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  .search_top{
    height: 0.72rem;
  display: flex;
  flex-direction:row;
   justify-content: space-between;
    border:0 0 1px 0 ,#d8d8d8;
p{
 width: .5rem;

 i{
   font-size: .18rem;line-height: .64rem
 }
}
.search_r{
  flex: 1
}
}
}


</style>