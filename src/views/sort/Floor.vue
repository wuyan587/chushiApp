<template>
 <div class="Floor">
   <div v-for="(item) of goodslist" :key="item.sid" class="hot">
              <p>{{item.name}}</p>
     <ul>
           <li v-for="(ele) of item.list" :key="ele.sid">
             <a>
                 <img :src="ele.url" alt="">
                <span>{{ele.title}}</span>
              </a>
          </li>
     </ul>
     </div>
     <div class="others" v-for="(item) of otherList" :key="item.sid">
       <p>{{item.name}}</p>
      <ul>
        <li v-for="(ele) of item.list" :key="ele.sid">
         <a href="#"><strong>{{ele.title}}</strong></a>
        </li>
      
      </ul>
     </div>
 </div>
</template>
<script>
export default {
 data(){
   return {
     goodslist:[

       {name:'当季最热',
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
     }
    
     ],
     otherList:[ {name:'其他',sid:2,list:[
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
        url:"https://img.alicdn.com/imgextra/i3/2053469401/O1CN0120xXfv2JJhzih36oA_!!2053469401.png",title:"葡萄"}]}]
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