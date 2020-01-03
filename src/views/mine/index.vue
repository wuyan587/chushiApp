<template>
  <div class="mine">
    <div class="mine_top">
      <div class="setting-module">
        <i @click="cog" class="fas fa-cog"></i>
      </div>
      <van-popup
        v-model="showcog"
        close-icon="arrow-left"
        close-icon-position="top-left"
        position="left"
        :style="{ height: '100%',width:'100%'}"
      >
        <div style="margin:10px">
          <van-cell
            icon="arrow-left"
            center
            arrow-direction="left"
            title="系统设置"
            value
            class="mine_top_setting"
            @click="cog"
          />
          <van-cell
            is-link
            left
            title="意见反馈"
            size="large"
            :title-style="{'text-align':'left','font-size':'.14rem'}"
            @click="showsuggestion"
          />
          <van-cell
            is-link
            left
            title="退出账户"
            size="large"
            :title-style="{'text-align':'left','font-size':'.14rem'}"
            @click="logout"
          />
        </div>
      </van-popup>
      <div class="user_info_box" v-if="!token" @click="personal">
        <div class="user_left">
          <img src="~assets/images/head_img.jpg" />
        </div>
        <div class="user_middle">
          <div class="user_name">点击登录</div>
        </div>
        <div class="user_right">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div v-else class="user_info_box" @click="personal">
        <div class="user_left">
          <img :src="user.img" />
        </div>
        <div class="user_middle">
          <div class="user_name">
            {{user.name}}
            <van-tag round type="success" class="groupid">{{user.groupid}}</van-tag>
          </div>
          <div class="user_introduce">{{user.introduce}}</div>
        </div>
        <div class="user_right">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <van-popup
        v-model="showPersonal"
        close-icon="arrow-left"
        close-icon-position="top-left"
        position="left"
        :style="{ height: '100%',width:'100%','background-color':'#f5f5f5'}"
      >
        <van-cell
          icon="arrow-left"
          center
          arrow-direction="left"
          title="个人信息"
          class
          @click="closePersonal"
        />
        <div class="my_detail">
          <div class="my_detail_headimg">
            <span>头像</span>
            <div @click="showpreviewheadimg">
              <img :src="user.img" class="headimg_size" />
              <van-image-preview v-model="showheadimg" :images="user.images"></van-image-preview>
            </div>
          </div>
          <div class="my_detail_group">
            <van-cell is-link title="身份" :value="user.groupid" @click="changegroupid" />
            <van-cell is-link title="称呼" :value="user.name" @click="changename" />
            <van-cell is-link title="联系方式" :value="user.phone" @click="changephone" />
          </div>
          <div class="my_detail_group">
            <van-cell is-link title="主营业务" :value="user.introduce" />
            <van-cell is-link title="绑定微信" value="1325465459" />
          </div>
          <div class="my_detail_group">
            <van-cell is-link title="退出账户" value @click="logout" />
          </div>
        </div>
      </van-popup>
      <div class="mine_operation">
        <div class="mine_operation_detail">
          <img src="~assets/images/supply.jpg" alt @click="my_supply" />
          <span>我的供应</span>
        </div>
        <div class="mine_operation_detail">
          <img src="~assets/images/purchase.jpg" alt @click="my_procurement"/>
          <span>我的采购</span>
        </div>
        <div class="mine_operation_detail" @click="my_shop">
          <img src="~assets/images/shop.jpg" alt />
          <span>我的店铺</span>
        </div>
      </div>
    </div>
    <div class="mine_bottom">
      <div class="mine_CellGroup">
        <van-cell is-link @click="my_realname">
          <div>
            <van-icon name="coupon-o" class="ver_middle" />实名认证
          </div>
          <span
            class="check_auth"
            :class="[{active : user.realname_auth}]"
          >{{user.realname_auth&&'认证成功'||'立即认证'}}</span>
        </van-cell>
        <van-cell is-link @click="my_business">
          <div>
            <van-icon name="balance-list-o" class="ver_middle" />企业认证
          </div>
          <span
            class="check_auth"
            :class="[{active : user.business_auth}]"
          >{{user.business_auth&&'认证成功'||'立即认证'}}</span>
        </van-cell>
      </div>
      <div class="mine_CellGroup">
        <van-cell is-link @click="showPopup">
          <div>
            <van-icon name="clock-o" class="ver_middle" />浏览历史
          </div>
        </van-cell>
        <van-cell is-link @click="showPopup">
          <div>
            <van-icon name="bill-o" class="ver_middle" />我的报价
          </div>
        </van-cell>
      </div>
      <div class="mine_CellGroup">
        <van-cell is-link @click="showsuggestion">
          <div>
            <van-icon name="envelop-o" class="ver_middle" />意见反馈
          </div>
        </van-cell>
        <van-cell is-link @click="showPopup">
          <div>
            <van-icon name="manager-o" class="ver_middle" />专属客服
          </div>
          <p class="customer_service" v-if="user.customer_service">{{user.customer_service}}</p>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
// import { getCookie,remove } from '@/utils/cookie.js'
export default {
  data() {
    return {
      showPersonal: false, //个人中心弹出层flag
      showcog:false,//个人设置弹出层flag
      // token:'',//用户token
      show:false,//测试弹出层
      showheadimg:false,
      fileList: [
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
      images:[],
      user: {
        img:'',  //头像
        name:'',//姓名
        introduce:'',//介绍
        groupid:'',//分组 种植户 养殖户
        customer_service:'',//客服
        realname_auth:'',//实名验证
        business_auth:'',//企业验证
        phone:'',
        wechat:''
      }
    }
  },
  mounted(){
  //  this.token=getCookie('token');//查看token是否存在 
   if(this.token){
     this.user={
      img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577507829105&di=627d71aa4a1bd01206771ef65ff01c12&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-12-30%2F134534410.jpg',
      images:[
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577507829105&di=627d71aa4a1bd01206771ef65ff01c12&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-12-30%2F134534410.jpg'],
      name:'居食坊有限公司',
      introduce:'主营牛肉,羊肉,猪肉',
      groupid:'个体种植户',
      customer_service:'小红',
      realname_auth:1,
      business_auth:0,
      phone:1325465459,
      wechat:1325465459
     }
    }    
  },
  methods: {
    //齿轮弹出层触发
    cog(){
      this.showcog = !this.showcog;
    },
    //个人中心弹出层触发
    personal() {
      if(this.token){
         this.showPersonal = true;
      }
      else{
        this.$router.push('/login')
      }
    },
    closePersonal(){
      this.showPersonal = false;
    },
    //意见反馈弹出层
    showsuggestion(){
      this.$router.push('/suggestion')
    },
    showPopup() {
      this.show = true;
    },
    showpreviewheadimg(){
      this.showheadimg=true;//显示弹窗 头像
    },
    logout(){
    if(this.token){
      this.$dialog.confirm({
      message: '您确定要退出登录么？'
      }).then(async ()=>{
        let obj=this.$store.state.pub.Mine;
        await this.$request({
                url:'/update',
                method:'post',
                data:obj,
                headers:{
                    'Content-Type':'application/json'
                  }
            })
        this.cog();
        this.$toast({
          message: '正在前往首页...',
          forbidClick: true
        });
      location.href="/"
      }).catch(()=>{
        return 
      });
     }else{
        this.$toast('您还未登录');
    }
    },
     my_supply(){
      this.$router.push('my_supply');//跳转我的供应
     },
     my_procurement(){
       this.$router.push('my_provide');//跳转我的供应
     },
     my_shop(){
      this.$router.push('my_shop'); //跳转我的店铺
     },
     changegroupid(){
      this.$router.push({name: 'changegroupid',params: {groupid: this.user.groupid}})//修改身份
     },
     changename(){
      this.$router.push({name: 'changename',params: {name: this.user.name}})//修改昵称
     },
     changephone(){
      this.$router.push({name: 'changephone',params: {phone: this.user.phone}})//修改手机
     },
     my_realname(){
      this.$router.push('realname_auth');//实名验证
     },
     my_business(){
      this.$router.push('business_auth');//企业认证
     }
  },
  computed:{
    token(){
      return this.$store.state.pub.Mine._id&&this.$store.state.pub.Mine._id
    }
  }
}
</script>

<style lang="scss">
$themecolor: #c0f8d1;
.mine {
  height: 100%;
  justify-content: unset !important;
  overflow: hidden;
}
.mine_top {
  background-image: url("~assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0.06rem 0.18rem 0;
  & .setting-module {
    height: 0.3rem;
    display: flex;
    justify-content: flex-end;
    & .fa-cog {
      color: white;
      display: flex;
      height: 0.18rem;
      width: 0.18rem;
      font-size: 0.18rem;
    }
  }
}
.user_info_box {
  display: flex;
  justify-content: space-between;
  & .user_left {
    & img {
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
    }
  }
  & .user_middle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: -0.5rem;
    & .user_name {
      font-size: 0.18rem;
      font-weight: 600;
      & .groupid {
        margin-left: 0.16rem;
      }
    }
    & .user_introduce {
      text-align: left;
      font-size: 0.14rem;
      color: white;
    }
  }
  & .user_right {
    display: flex;
    align-items: center;
    & i {
      font-size: 0.2rem;
      color: white;
    }
  }
}
.mine_operation {
  height: 1.15rem;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5%/10%;
  margin-top: 0.2rem;
  & .mine_operation_detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & img {
    display: block;
    height: 0.35rem;
    width: 0.35rem;
    margin-bottom: 0.18rem;
  }
}
.mine_bottom {
  .mine_CellGroup {
    margin: 0.18rem 0;
    & .van-cell__value {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & .check_auth {
      background: #989898;
      color: white;
      font-size: 0.08rem;
      height: 0.15rem;
      line-height: 0.15rem;
    }
    & .active {
      background: #6dd1ad;
    }
    & .customer_service {
      float: right;
    }
    & .ver_middle {
      vertical-align: middle;
      margin-right: 0.1rem;
    }
  }
}
.mine_top_setting {
  display: flex;
  & .van-cell__value {
    flex: 0;
  }
  & .van-cell__title {
    margin-left: -0.1rem;
    font-size: 0.16rem;
    font-weight: 500;
  }
}
.suggestion_textarea {
  margin-top: 0.1rem;
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
}
.fileimg {
  display: flex;
}
.my_detail {
  & .my_detail_headimg {
    display: flex;
    margin-bottom: 0.18rem;
    padding: 10px 16px;
    justify-content: space-between;
    align-items: center;
    background: white;
    & .headimg_size {
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 50%;
    }
  }
  & .my_detail_group {
    text-align: left;
    margin-bottom: 0.18rem;
  }
}
</style>
