<template>
   <div class="myname">
      <div style="margin:10px">
       <van-cell 
       icon="arrow-left"
       center
       arrow-direction="left"
       title="修改昵称" value="" 
       class="mine_top_setting"
       @click="goback"
       />
       <div class="input-all">
        <div class="input-border">
            <input type="" name="" placeholder="请输入您的称呼" v-model="name">
        </div>
        <i>好名字可以让您的生意伙伴更容易记住您哦。</i>
        <van-button round type="primary" size="large">完成</van-button>
       </div>
    </div>
   </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
                name:''
            }
        },
        mounted(){
            this.name=this.$route.params.name;
        },
        methods:{
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="scss">
.myname{
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
.input-all{
    display: flex;
    flex-direction: column;
    & .input-border{
        background:#f4f4f4;
        border-radius: 5% / 50%;
        display: flex;
        height:44px;
        align-items: center;
        justify-content: center;
        margin-top:.3rem;
        input{
            display:flex;
            width:60%;
            height:50%;
            border:none;
            background: transparent;
            text-align:center
        }
    }
    i{
        font-size: .14rem;
        color: gray;
        margin: .1rem 0 .3rem;
    }
}
</style>