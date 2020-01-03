<template>
   <div class="realname">
      <div style="margin:10px">
       <van-cell 
       icon="arrow-left"
       center
       arrow-direction="left"
       title="企业认证" value="" 
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
               <p>上传营业执照</p>
           </div>
           <van-field
           v-model="businessname"
           rows="1"
           autosize
           label="企业名称"
           type="textarea"
           placeholder="请输入营业执照上的名称"
           />
           <van-field
           v-model="area_city"
           rows="1"
           autosize
           label="所在区域"
           type="textarea"
           is-link
           value="110101"
           placeholder="请选择"
           @click="showarealist"
           disabled
           />
           <van-area
           :area-list="areaList"
           :area-columns-placeholder="['请选择', '请选择', '请选择']"
           @confirm="onSave"
           @cancel="onDelete($event)"
           v-if="areaflag"
           />
           <van-field
           v-model="detail_area"
           rows="1"
           autosize
           label="详细地址"
           type="textarea"
           placeholder="(如小区名牌号)"
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
    import address from '@/utils/area.js';
    export default{
        data(){
            return {
                fileList:[

                ],//上传图片
                businessname:'',//企业名称
                areaList:address,//地址对象
                areaflag:false,//地区选择弹窗
                detail_area:'',//详细地址
                area_city:''//所在区域
            }
        },
        mounted(){
        },
        methods:{
            goback(){
                this.$router.go(-1);
            },
            onSave(ev) {
                this.area_city=ev[1].name+ev[2].name;
                this.areaflag=false;
            },
            onDelete() {
                 this.areaflag=false;
            },
            showarealist(){
                this.areaflag=true;
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
     justify-content: center;
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
    text-align: left;
}
.van-field__body{
  textarea{
    margin-left:.1rem
  }
}
.van-picker{
    width:100%
}
</style>