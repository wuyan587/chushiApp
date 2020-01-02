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
          <input
            type="text"
            name=""
            id="phoneNumber"
            placeholder="请输入手机号码"
            v-model="phone"
          />
          <button class="btn3">xxx</button>
        </div>
        <hr />
        <div class="l5">
          <i class="fa fa-envelope-open fa-2x"></i>
          <input
            type="text"
            name=""
            id="pic"
            placeholder="请输入图片中的字符"
            @keyup.enter="pic"
          />
          <div class="btn4" @click="num">{{ testcode }}</div>
        </div>
        <hr />
        <div class="l1">
          <i class="fa fa-envelope-open fa-2x"></i>
          <input
            type="text"
            name=""
            id="check"
            placeholder="请输入验证码"
            @keyup.enter="check"
          />
          <button class="btn2" @click="send($event)">{{ zt }}</button>
        </div>
        <hr />
        <div class="l2">
          <button class="btn1" @click="login">登录</button>
        </div>
      </div>
      <div class="forget">
        <a href>忘记密码</a>
        <a @click="regist">立即注册</a>
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
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      zt: "获取验证码",
      flag: true,
      timer: null,
      testcode: "获取字符",
      count: 0,
      phone:''
    };
  },
  methods: {
    ...mapMutations(['login']),
    send($event) {
      // console.dir($event.target);
      $event.target.disabled = true;
      let times = 60;
      let btn = document.querySelector(".btn2");
      this.timer = setInterval(() => {
        if (times > 0 && times <= 60) {
          this.zt = "已发送(" + times-- + ")";
          btn.style.background = "rgb(216, 216, 216)";
        } else {
          $event.target.disabled = false;
          this.zt = "获取验证码";
          clearInterval(this.timer);
          this.timer = null;
          btn.style.background = "rgb(76, 199, 155)";
        }
      }, 1000);
    },
    goback() {
      this.$router.go(-1);
    },
    regist() {
      this.$router.push("./register");
    },
    num() {
      function getNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      let btn = document.querySelector(".btn4");
      function getColor() {
        var randomNumber; //保存随机数
        var color = "#"; //定义变量 连接字符串
        for (var i = 0; i < 6; i++) {
          //循环6次
          randomNumber = parseInt(Math.random() * 16); // 生成一个0-15的随机数、
          color += randomNumber.toString(16); //字符串拼接
        }
        return color;
      }
      btn.style = "background:" + getColor() + ";";

      function sj() {
        let code = "";
        for (var i = 0; i < 4; i++) {
          var type = getNumber(1, 3);
          switch (type) {
            case 1:
              code += String.fromCharCode(getNumber(48, 57));
              break;
            case 2:
              code += String.fromCharCode(getNumber(65, 90));
              break;
            case 3:
              code += String.fromCharCode(getNumber(97, 122));
              break;
          }
        }

        return code;
      }

      this.testcode = sj();
    },
    async login(){
     let result= await this.$request({
        url:'/login',
        method:'post',
        data:{
          username:this.phone,
          password:'123'
        },
        headers:{
                   'Content-Type':'application/json' 
        }
      })
    console.log(result);
    if(result.data.state&&result.data.state==2)
      alert('？我怀疑你真的有号吗');
    else 
      this.$store.commit('login',result.data[0]);
    }
  }
  // pic(){
  //   let pic = document.querySelector('#pic')
  // if(pic.value == this.testcode){
  //  count++
  // }
  // }
};
</script>

<style scoped>
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
.l1,.l5 {
  display: flex;
}
.l2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  height: 0.85rem;
}

.shuru {
  margin-top: 1.6rem;
  width: 2.85rem;
  height: 2.0rem;
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
.btn4 {
  width: 0.93rem;
  height: 0.33rem;
  /* border-radius: 0.16rem; */
  background: rgb(160, 160, 160);
  display: inline-block;
  color: white;
  line-height: 0.33rem;
  text-align: center;
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
