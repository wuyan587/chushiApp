<template>
    <div class="classify">
        <van-tree-select
  height="100%"
>
  <template slot="content">
   <Floor :floors="items[activeIndex]"></Floor> 
 </template>
</van-tree-select>

    </div>
</template>
<script>
import request from '@/utils/request.js'
import Floor from './Floor'
export default {
     data() {
    return {
      activeIndex: 0,
      items: []
    }
  },
  components:{
      Floor
  },
  async mounted(){
      const result = await request({
          url:'/index.php',
          params:{
              r: 'class/category',
              type: 1
          }

      })
      const data=result.data.data.data.map(item=>{
          item.text=item.name
          return item
      })
      this.items=data
      
  }
  
}
</script>
<style scoped>
.classify{
 flex 1;
 height 100%;
 overflow hidden;
}




 
     

</style>