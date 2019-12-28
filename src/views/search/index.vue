<template>
  <div class='search'>
    <div class="search_top">
      <p><i class="fas fa-angle-left"></i></p>
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
  </div>
</template>

<script>
import DropdownMenu from './dropdownMenu'
export default {
  data(){
    return {
      value:''
    }
  },
  components:{
    DropdownMenu
  },
methods:{
  onSearch(){
    console.log(this.value);
    
  }
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/stylesheets/borderstyle.scss';
.search{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  .search_top{
    height: 0.64rem;
  display: flex;
  flex-direction:row;
   justify-content: space-between;
    border:0 0 1px 0 , blue ;
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