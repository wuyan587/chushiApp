<template>
   <div class="realname">
      <div style="margin:10px">
       <van-cell 
       icon="arrow-left"
       center
       arrow-direction="left"
       title="实名认证" value="" 
       class="mine_top_setting"
       @click="goback"
       />
      </div>
        <div class="title"><p>上传的资料仅用于认证审核，公司会严格保密不会外传。</p></div>
        <div class="tagname"><p>上传照片</p></div>
       <div class="box">
         <div class="content">
           <div class="fileimg img1">
               <van-uploader v-model="fileList" multiple    :max-count="1"/>
               <i class="fas fa-credit-card"></i>
               <p>身份证国徽面</p>
           </div>
           <div class="fileimg img2">
               <van-uploader v-model="fileList2" multiple    :max-count="1"/>
               <i class="fas fa-id-card"></i>
               <p>身份证照片面</p>
           </div>
           <van-field
           v-model="name"
           rows="1"
           autosize
           label="姓名"
           type="textarea"
           placeholder="请输入您的真实姓名"
           />
           <van-field
           v-model="idcard"
           rows="1"
           autosize
           label="身份证号码"
           type="textarea"
           placeholder="请输入您的身份证号码"
           is-link
           />
         </div>
         <div class="nextbutton">
              <p>为避免审核不通过,请仔细阅读如歌提交实名验证？</p>
             <van-button round type="primary" size="large">下一步</van-button>
         </div>
       </div>
   </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
                name:'',
                fileList:[

                ],
                fileList2:[

                ],
                username:'',
                idcard:''
            }
        },
        mounted(){
        },
        methods:{
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="scss">
.realname{
    background:white;
    height: 100%;
    overflow: hidden;
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
.title{
    font-size: .1rem;
    color: gray;
    background: #f1f9fd;
    height: .25rem;
    text-align: center;
    line-height: 0.25rem;
}
.tagname{
    width:100%;
    text-align:left;
    text-indent:.08rem;
    margin:.12rem;
    color:gray;
    font-size:.1rem;
}
.box{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75%;
  & .content{
     display: flex;
     width:100%;
     flex-wrap: wrap;
     & .fileimg{
      display: flex;
      flex-direction:column;
      align-items: center;
      width:50%;
      & .van-uploader__upload{
        width: 150px;
        height: 150px;
      }
      & .van-uploader__preview-image{
         width: 150px;
        height: 150px;
      }
      i{
        font-size:.3rem;
        color: gray; 
      }
      p{
        margin:.2rem 0;
        font-size:.1rem;
        color:gray;
      }
    }
  }
 
}
.nextbutton{
  p{
    width:100%;
    margin:.12rem;
    color:gray;
    font-size:.1rem;
  }
}
.van-field__label {
    text-align-last: justify;
}
.van-field__body{
  textarea{
    margin-left:.1rem
  }
}
</style>