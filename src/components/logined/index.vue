<template>
  <div class="login">
    <p class="count">账户密码登录</p>
    <input type="text" placeholder="请输入手机号" @input="handleAccount($event)" />
    <input type="text" placeholder="请输入密码" @input="handlePwd($event)" />
    <router-link tag="div" to="/login/register">没有账号，立即注册</router-link>
    <v-touch tag="p" @tap="handleLogin()">登录</v-touch>
  </div>
</template>

<script>
//import axios from "axios"
import { handleLogined } from "@api/user";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    handleAccount(e) {
      let account = e.target.value;
      this.name = account;
    },
    handlePwd(e) {
      let pwd = e.target.value;
      this.password = pwd;
    },
    async handleLogin() {
      let username = this.name;
      let password = this.password;
      let data = await handleLogined(username, password);
      console.log(data);
     if(data.data.code == 0){
          this.$toast(data.data.info);
      }else{
          this.$toast(data.data.info);
          console.log(data.data)
          if(this.$cookies.get("token")){
              this.$cookies.set("name",data.data.list.name)
              this.$cookies.set("urlPic",data.data.list.urlPic);
              this.$router.push("/mine");
          }
      }

      // if (data.data.code == 1) {
      //    this.$toast(data.data.info);
         

        // this.$router.push({
        //   name: "mine",
        //   query: { username: username, password: password }
         
        // });
      // } else {
      //    this.$toast(data.data.info);
      // }
      //  console.log(this.$route.query)
      //    this.$router.push({name:"mine",params:{tel:tel}})
      //    console.log(this.$route.params.tel)
    }
  }
  
};
</script>

<style scoped>
.login {
  padding: 0.3rem;
  padding-top: 0;
}
.count {
  font-size: 0.22rem;
  text-align: center;
  color: #262626;
}
.login div {
  text-align: center;
  padding: 0.1rem 0;
}
.login input {
  border: none;
  padding: 0.15rem 0;
  width: 100%;
  border-bottom: 1px solid #eee;
}
.login p:nth-of-type(2) {
  margin-top: 0.2rem;
  border-radius: 3px;
  font-size: 0.16rem;
  background-color: #ff2661;
  line-height: 0.4rem;
  color: #fff;
  text-align: center;
  opacity: 0.5;
}
</style>