<template>
 <div class="Floor">
   <!-- <div v-for="(item) of goodslist" :key="item.sid" class="hot">
              <p>{{item.name}}</p>
     <ul>
           <li v-for="(ele) of item.list" :key="ele.tid" @click="chose([ele.tid,ele.tname])">
             <a>
                 <img :src="ele.url" alt="">
                <span>{{ele.tname}}</span>
              </a>
          </li>
     </ul>
  </div> -->
     <div class="others" v-for="(item) of otherList" :key="item.sid">
       <p>{{item.name}}</p>
      <ul>
        <li v-for="(ele) of item.list" :key="ele.tid" :class="{active:fruitType==ele.tname}" @click="chose([ele.tid,ele.tname])">
         <a href="javascript:;"><strong>{{ele.tname}}</strong></a>
        </li>
      
      </ul>
     </div>
 </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props:['index'],
  data(){
   return {
     goodslist:[

       {
         name:'当季最热',
        sid:1,
        list:[
        {  sid:1,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         },
           {sid:2,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         },
           {sid:3,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         },
           {sid:4,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         },
           {sid:5,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         },
           {sid:6,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         },
           {sid:7,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         },
           {sid:8,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         },
           {sid:9,
         url:"https://img.alicdn.com/imgextra/i4/2053469401/O1CN01MeXEEF2JJhzeoqBBw_!!2053469401.png",title:"123"
         }
         ]
     }],
     otherList:[ {name:'热门',sid:2,list:[
      { sid:1,
        url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN0120xXfv2JJhzih36oA_!!2053469401.png",title:"葡萄"},
      {sid:2,
        url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN0120xXfv2JJhzih36oA_!!2053469401.png",title:"葡萄"},
      { sid:3,
        url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN0120xXfv2JJhzih36oA_!!2053469401.png",title:"葡萄"},
      { sid:4,
        url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN0120xXfv2JJhzih36oA_!!2053469401.png",title:"葡萄"},
      { sid:5,
        url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN0120xXfv2JJhzih36oA_!!2053469401.png",title:"葡萄"},
      { sid:6,
        url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN0120xXfv2JJhzih36oA_!!2053469401.png",title:"葡萄"}]}],
      fruitType:''
   }
 },
 async mounted(){
    let result =await this.$request({
      url:'selectProductLevel',
      params:{
        fid:this.index+1
      }
    })
    result=result.data;
    this.otherList[0].list=result;
  },
 watch:{
  async index(){
      let result =await this.$request({
      url:'selectProductLevel',
      params:{
        fid:this.index+1
      }
    })
    result=result.data;
    // result.forEach(item=>{
    //   item.text=item.tname;
    // })
    // this.items=result;
    console.log(result);
    this.otherList[0].list=result;
   }
 },
 methods:{
   ...mapMutations(['setType']),
   chose(val){
     this.fruitType=val[1];
     console.log(val,this.fruitType);
     
     this.$store.commit('setType',val);
   }
 }
  }

</script>
<style lang='scss' scoped>
.Floor{

 padding :.2rem;
 .hot{
  margin-bottom: .4rem;
  p{  font-size: .14rem;
   font-weight :bold;
   margin-bottom: .2rem;
   text-align: left
   }
    ul{
 display :flex;
   flex-wrap :wrap;
   li{
      width :33.33%;
      margin-bottom: 0.1rem;
    display: flex;
       a{
     display :flex;
     flex-direction :column;
     justify-content :center;
  img {
  height :.65rem;
      width :.65rem;
      margin-bottom :.1rem
     };
         span {
 color :#696969;
      font-size :.12rem;
      text-align :center 
     }
     

    }
    }
  }
 }
 .others{
    margin-bottom: .4rem;
     p{  font-size: .14rem;
   font-weight :bold;
   margin-bottom: .2rem;
   text-align: left
   }
    ul{
 display :flex;
   flex-wrap :wrap;
   li{
      width :33.33%;
       margin-bottom:.19rem ;
       box-sizing: border-box;
       padding-right:.17rem; 
       &.active{
         a{
           color: white;
           background: #4cc79b;
           strong{
             color: white;
           }
         }
      
      }

      a{
        
        display: flex;
        justify-content: center;
        align-items: center;
      // width:0.65rem;
      height: 0.3rem;
      border:1px solid #4cc79b;
      border-radius: 0.04rem;
     
      strong{
        color: #333333;
        line-height: .12rem
      }
      }
      }
  }
  
 }

  
 
 
  
   
   
   
   
   
    
 
}

</style>