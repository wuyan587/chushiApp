<template>
  <div class="sort">
    <searchBox></searchBox>

    <van-tree-select
      height="100%"
      :items="items"
      :main-active-index.sync="activeIndex"
      class="active"
    >
      <template slot="content">
        <Floor :index="activeIndex"></Floor>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import searchBox from '../../components/searchBox'
import Floor from './Floor'
import request from '@/utils/request'

export default {
   data() {
    return {
         activeKey: 0,
      activeIndex: 0,
   items: []
    }
    },
    components:{
      searchBox,Floor
    },
    async mounted(){
const result=await request({
  url:'/selectProductLevel',
  // method:'POST',
  //  headers: { 'content-type': 'application/json' },
   params:{
     fid:1
   }

})
// console.log(result);

// this.items=result.data
 const data=result.data.map(item=>{
item.text=item.tname
return item
})
 this.items=data
// console.log(result);

    
    
  
},
  computed:{
        floorsData(){
            return this.result.data
        }
        
        
    },
}


</script>
<style lang='scss' soped>
@import "../../assets/stylesheets/constant.scss";
.sort {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
// .van-sidebar {
//     width: 0.85rem !important;
// }
.van-tree-select__nav {
  width: 0.85rem !important;
}
.van-sidebar-item {
  border-left: none;
}
.van-sidebar-item__text {
  &.active {
    border-bottom: 3px solid transparent;
    color: $mainColor;
    font-weight: 500;
    border-color: $mainColor;
  }
}
.van-sidebar-item--select {
  color: $mainColor;
  font-weight: 500;
  border-color: $mainColor;
  background-color: #fff;
}
</style>