<template>
   <div class="floor">
     <div v-for="(item,index) of floorsData" :key="index">
              <h3>{{item.name}}</h3>
     <ul>
           <li v-for="ele of item.list" :key="ele.api_cid">
             <router-link 
             :to="{
                 name:'goodslist',
                 params:{
                  id:ele.api_cid   
                 }
                 
             }">
                 <img :src="ele.img" alt="">
                <span>{{ele.name}}</span>
              </router-link>
          </li>
     </ul>
     </div>
   </div>
</template>
<script>
export default {
    // data(){
    //     return {
    //         floorsData:[]
    //     }
    // },
    props:['floors'],
    computed:{
        floorsData(){
            return this.floors&&this.floors.floors
        }
    },
    // mounted(){
// this.floorsData=this.floors.floors
    
    // }


    
}
</script>
<style lang="stylus" scoped>
.floor
 padding .1rem
 div
  margin-bottom .4rem
  h3
   font-size .16rem
   font-weight bold
   margin-bottom .2rem
  ul
   display flex
   flex-wrap wrap
   li
    width 33.33%
    a
     display flex
     flex-direction column
     justify-content center
     img 
      height .65rem
      width .65rem
      margin-bottom .1rem
     span 
      color #696969
      font-size .12rem
      text-align center 
      
     
     
    
 

  
  
 
</style>