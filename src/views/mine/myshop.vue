<template>
    <div class="myshop">
        <div style="margin:10px">
            <van-cell 
            icon="arrow-left"
            center
            arrow-direction="left"
            title="我的店铺" value="" 
            class="mine_top_setting"
            @click='goback'
            />
            <div class="suggestion_textarea" >
                <p>企业介绍</p>
                <textarea name="" style="border:none;width: 100%; border: none;resize: none;height: 1rem;" 
                placeholder="请输入对您企业规模以及企业实力的详细描述
                "
                @input="descInput"
                @blur="errorarea($event)"
                v-model="introduce"
                >
                </textarea>
                <i>{{remnant}}/200</i>
        </div>
          <div class="suggestion_textarea " >
                <p>企业图片</p>
                <div class='fileimg'>
                    <van-uploader v-model="fileList" multiple />
                </div>
                <i>{{fileList.length}}/9</i>
           </div>
             <van-button round type="primary" size="large">提交</van-button>
    </div>
</div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return {
              remnant:0,
              introduce:'',
              fileList: [
               { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
                { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
                 { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
                // Uploader 根据文件后缀来判断是否为图片文件
                // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                ],
            }
        },
        methods:{
            descInput(){
                this.remnant=this.introduce.length
            },
            errorarea(ev){
                if(this.remnant>200){
                    this.$dialog.alert({ message: '您输入的文字过长' });
                    ev.target.focus();
                }
            },
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="scss">
.myshop{
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
.suggestion_textarea{
    margin-top: .1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    border-radius: 5%;
    background-color: #ffffff;
    box-shadow: 8px 1px 10px 7px #f6f6f6;
    & p{
        text-align:left
    }
    i{
        float: right;
        color: #cccbcb;
    }
}
.fileimg{
  display:flex;
  & .van-uploader__wrapper{
    justify-content: space-between;
  }
}
</style>