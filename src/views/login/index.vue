<template>
  <header>
    <div class="login">
      <div class="head">
        <i class="fa fa-angle-left" @click="goback"></i>
      </div>
      <p class="h2">登录</p>
      <div class="shuru">
        <div>
          <i class="fa fa-mobile fa-2x"></i>
          <input type="text" name="" id="" placeholder="请输入手机号码" />
          <button class="btn3">xxx</button>
        </div>
        <hr />
        <div class="l1">
          <i class="fa fa-envelope-open fa-2x"></i>
          <input type="text" name="" id="" placeholder="请输入验证码" />
          <button class="btn2" @click="send($event)">{{zt}}</button>
        </div>
        <hr />
        <div class="l2">
          <button class="btn1">登录</button>
        </div>
      </div>
      <div class="forget">
        <a href>忘记密码</a>
        <a href>立即注册</a>
      </div>
      <div class="info">
        <h3>第三方账号登录</h3>
        <a href>
          <img src="~assets/images/weixin.png" alt class="p1" />
        </a>
        <h3 class="weixin">微信登录</h3>
        <p class="s2">
          登录注册表示您同意
          <span class="s1">《助农汇服务协议》</span>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      zt: "获取验证码",
      flag: true,
      timer: null
    };
  },
  methods: {
    send($event) {
      console.dir($event.target)
      $event.target.disabled = true;
      let times = 60;
      this.timer = setInterval(() => {
        if(times>0&&times<=60){this.zt = times-- + "s后重新发送";}
        else{
          $event.target.disabled = false;
          this.zt="获取验证码";
          clearInterval(this.timer);
              this.timer = null;
        }
        
      }, 1000);
    },
	goback(){
      this.$router.go( -1 );
	}
  }
};
</script>

<style  scoped>
.head {
  text-align: left;
  /* background: red; */
  width: 3.75rem;
  font-size: 0.32rem;
  font-weight: 800;
  margin-top: 0.1rem;
}
.h2 {
  margin-top: -0.3rem;
  font-size: 0.22rem;
  font-weight: 800;
}
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  height: 6.67rem;
  background: rgb(248, 248, 248);
}
.l2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 0.85rem;
}

.shuru {
  margin-top: 1.6rem;
  width: 2.85rem;
  height: 1.6rem;
  background: white;
  border-radius: 0.1rem;
  font-size: 0.12rem;
  padding: 0.25rem;
  overflow: hidden;
}
/* .shuru div {
  width: 2.8rem;
  height: 0.62rem;
} */
input {
  border: none;
}
.fa {
  margin: 0 0.1rem;
}
.btn1 {
  width: 2.5rem;
  height: 0.35rem;
  border-radius: 0.16rem;
  background: rgb(76, 199, 155);
  color: white;
}
.btn2 {
  width: 0.93rem;
  height: 0.33rem;
  border-radius: 0.16rem;
  background: rgb(76, 199, 155);
  display: inline-block;
  color: white;
}
.btn3 {
  visibility: hidden;
  width: 0.93rem;
  height: 0.33rem;
  border-radius: 0.16rem;
  display: inline-block;
}
.forget {
  display: flex;
  width: 3.1rem;
  height: 0.31rem;
  justify-content: space-between;
}
.forget a {
  color: black;
  margin-top: 0.1rem;
}
.forget {
  margin: 0.1rem 0;
}
.info {
  margin-top: 0.8rem;
  width: 2.9rem;
  height: 1.7rem;
  /* background: blueviolet; */
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.14rem;
}
.fa-weixin {
  color: rgb(0, 200, 0);
  /* background: black; */
  font-size: 0.5rem;
}
.p1 {
  width: 0.6rem;
  margin: 0.05rem 0;
}
.s1 {
  color: rgb(160, 168, 252);
}
.s2 {
  margin-top: 0.45rem;
}
</style>