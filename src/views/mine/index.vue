<template>
  <div class="mine">
    <div class="mine_top">
			<div class="setting-module"><i @click="cog" class="fas fa-cog"></i></div>
			<van-popup 
			v-model="showcog"
      close-icon="arrow-left"
      close-icon-position="top-left"
      position="left"
      :closeable="true"
      :style="{ height: '100%',width:'100%' }"
			>
     <div style="margin:10px">

        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
     
        <van-popup  v-model="show">内容</van-popup>
     </div>   
     </van-popup>
     <div  class="user_info_box" v-if="!token" @click="personal">
       <div class="user_left"><img src="~assets/images/head_img.jpg"></div>
         <div class="user_middle">
            <div class="user_name">点击登录</div>
         </div>
         <div class="user_right"><i class="fas fa-angle-right"></i></div>
     </div> 
     <div v-else class="user_info_box" @click="personal">
         <div class="user_left"><img :src="user.img"></div>
         <div class="user_middle">
            <div class="user_name">{{user.name}}
            <van-tag round  type="success" class="groupid">{{user.groupid}}</van-tag></div>
            <div class="user_introduce">
              {{user.introduce}}
            </div>
         </div>
         <div class="user_right"><i class="fas fa-angle-right"></i></div>
      </div> 
      <van-popup 
      v-model="showPersonal"
      position="left"
      :closeable="true"
      :style="{ height: '100%',width:'100%' }"
      >内容</van-popup>
      <div class="mine_operation">
        <div class="mine_operation_detail">
          <img src="~assets/images/supply.jpg" alt="" @click="my_supply">
          <span> 我的供应 </span>
        </div>
        <div class="mine_operation_detail">
          <img src="~assets/images/purchase.jpg" alt="">
          <span> 我的采购 </span>
        </div>
        <div class="mine_operation_detail">
          <img src="~assets/images/shop.jpg" alt="">
          <span> 我的店铺 </span>
        </div>
      </div>
  </div>
  <div class="mine_bottom">
      <div class="mine_CellGroup">
         <van-cell is-link @click="showPopup">
          <div><van-icon name="coupon-o" class="ver_middle"/>实名认证</div>
         <span class="check_auth active"  v-if="user.realname_auth">认证成功</span>
         <span class="check_auth" v-else>立即认证</span>
         </van-cell>
          <van-cell is-link @click="showPopup">
           <div><van-icon name="balance-list-o" class="ver_middle"/>企业认证 </div>
           <span class="check_auth active" v-if="user.business_auth">认证成功</span>
           <span class="check_auth" v-else>立即认证</span> 
          </van-cell>
      </div>
      <div class="mine_CellGroup">
          <van-cell is-link @click="showPopup">
          <div><van-icon name="clock-o" class="ver_middle" />浏览历史</div></van-cell>
          <van-cell is-link @click="showPopup"><div><van-icon name="bill-o" class="ver_middle"/>我的报价</div></van-cell>
      </div>
      <div class="mine_CellGroup">
          <van-cell is-link @click="showPopup">
          <div><van-icon name="envelop-o" class="ver_middle"/>意见反馈</div></van-cell>
          <van-cell is-link @click="showPopup">
            <div><van-icon name="manager-o" class="ver_middle" />专属客服</div><p class="customer_service" v-if='user.customer_service'>{{user.customer_service}}</p></van-cell>
      </div>
  </div> 
  </div>
</template>

<script>
import { getCookie } from '@/utils/cookie.js'
export default {
  data() {
    return {
      showPersonal: false, //个人中心弹出层flag
      showcog:false,//个人设置弹出层flag
      token:'',//用户token
      show:false,//测试弹出层
      user: {
        img:'',  //头像
        name:'',//姓名
        introduce:'',//介绍
        groupid:'',//分组 种植户 养殖户
        customer_service:'',//客服
        realname_auth:'',//实名验证
        business_auth:''//企业验证
      }
    }
  },
  mounted(){
   this.token=getCookie('token');//查看token是否存在 
   if(this.token){
     this.user={
      img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577507829105&di=627d71aa4a1bd01206771ef65ff01c12&imgtype=0&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-12-30%2F134534410.jpg',
      name:'居食坊有限公司',
      introduce:'主营牛肉,羊肉,猪肉',
      groupid:'种植户',
      customer_service:'小红',
      realname_auth:1,
      business_auth:0
    }
    }    
  },
  methods: {
    //齿轮弹出层触发
		cog(){
			this.showcog = true;
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
    showPopup() {
      this.show = true;
    },
    my_supply(){
      this.$router.push('my_supply');
    }
  }
}
</script>

<style lang="scss">
$themecolor:#C0F8D1;
.mine{
  height:100%;
  background-color: $themecolor;
  justify-content: unset!important;
}
.mine_top{
  padding:.06rem .18rem 0;
	&	.setting-module{
		height:.3rem;
		display:flex;
    justify-content: flex-end;
    & .fa-cog{
    color: white;
    display: flex;
    height: .18rem;
    width: .18rem;
    font-size: .18rem
    }
	}
}
.user_info_box{
  display:flex;
  justify-content:space-between;
  & .user_left{
    & img{
      width:.65rem;
      height:.65rem;
      border-radius:50%;
    }
  }
  & .user_middle{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: -.5rem;
    & .user_name{
      font-size:.18rem;
      font-weight:600;
      & .groupid{
        margin-left:.16rem
      }
    }
    & .user_introduce{
       text-align:left;
       font-size:.14rem;
       color:white;
    }
  }
  & .user_right{
    display:flex;
    align-items: center;
    & i{
      font-size:.2rem;
      color:white;
    }
  }
}
.mine_operation{
  height:1.15rem;
  background-color:white;
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius:5%/10%;
  margin-top:.2rem;
  & .mine_operation_detail{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  & img{
    display:block;
    height:.35rem;
    width:.35rem;
    margin-bottom:.18rem;
  }
}
.mine_bottom{
  .mine_CellGroup{
    margin:.18rem 0;
    & .van-cell__value{
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    & .check_auth{
      background:#989898;
      color:white;
      font-size:.08rem;
      height:.15rem;
      line-height:.15rem;
    }
    & .active{
      background:#6dd1ad
    }
    & .customer_service{
      float:right;
    }
    & .ver_middle{
        vertical-align:middle;
        margin-right:.1rem;
    }
  }
}

</style>