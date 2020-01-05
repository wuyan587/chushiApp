<template>
   <div class="myphone">
      <div style="margin:10px">
       <van-cell 
       icon="arrow-left"
       center
       arrow-direction="left"
       title="修改手机" value="" 
       class="mine_top_setting"
       @click="goback"
       />
       <div class="input-all">
        <div class="input-border">
            <input type="" name="" placeholder="请输入您的手机号" style="margin-left: -102px" v-model="phone">
        </div>
        <div class="input-border"  style="margin-bottom: .3rem">
            <input type="" name="" placeholder="点击输入验证码">
            <van-button round type="primary" size="normal">获取验证码</van-button>
        </div>
        <van-button round type="primary" size="large">立即修改</van-button>
       </div>
    </div>
   </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
                phone:''
            }
        },
        mounted(){
            this.phone=this.$route.params.phone;
        },
        methods:{
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="scss">
.myphone{
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
        }
    }
}
</style>