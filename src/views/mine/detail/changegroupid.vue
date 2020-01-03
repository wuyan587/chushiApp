<template>
   <div class="mygroupid">
      <div style="margin:10px">
       <van-cell 
       icon="arrow-left"
       center
       arrow-direction="left"
       title="请选择您的身份" value="" 
       class="mine_top_setting"
       @click="goback"
       />
        <div class="select-button">
             <van-button round type="default" size="normal" v-for="(item) of groupid" :key="item.id" :class="{active:selectid==item.id}" @click="changeactive(item.id)">{{item.val}}</van-button>
        </div>
         <van-button round type="primary" size="large">完成</van-button>
    </div>
   </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
                selectid:'0',
                groupid:[
                {
                    id:1,
                    val:'个体种植户'
                },
                 {
                    id:2,
                    val:'个体养殖户'
                },
                 {
                    id:3,
                    val:'企业种植户'
                },
                 {
                    id:4,
                    val:'企业养殖户'
                },
                 {
                    id:5,
                    val:'超市'
                },
                 {
                    id:6,
                    val:'餐饮店'
                },
                 {
                    id:7,
                    val:'酒店'
                },
                 {
                    id:8,
                    val:'中间商'
                },
                 {
                    id:9,
                    val:'家庭农场'
                },
                 {
                    id:10,
                    val:'批发商'
                },
                 {
                    id:11,
                    val:'电商'
                }, 
                 {
                    id:12,
                    val:'食堂'
                },
                  {
                    id:13,
                    val:'贸易公司'
                },
                  {
                    id:14,
                    val:'其他'
                },
                ]
            }
        },
        mounted(){
            // this.name=this.$route.params.groupid;
            let  temp =this.$route.params.groupid;
            for(let i in this.groupid){
                if(temp==this.groupid[i].val){
                    this.selectid=this.groupid[i].id;
                }
            }
        },
        methods:{
            goback(){
                this.$router.go(-1);
            },
            changeactive(key){
                this.selectid=key;
            }
        }
    }
</script>
<style lang="scss">
.mygroupid{
    background:white;
    height: 100%;
}
.mine_top_setting{
  display:flex;
  & .van-cell__value{
    flex:0
   }
& .van-cell__title{
    margin-left:-.1rem;
    font-size:.16rem;
    font-weight:500;
}
}
.select-button{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    & button{
        width:35%;
        background:#f9f9f9;
        margin:.1rem 0;
    }
    & button.active{
        background:#07c160;
    }
}
</style>