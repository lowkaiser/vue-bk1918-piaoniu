<template>
      <div class="login">
             <p class="count">账户密码登录</p>
            <input type="text" placeholder="请输入手机号" @input="handleAccount($event)"> 
            <input type="text" placeholder="请输入密码" @input="handlePwd($event)">
            <router-link tag="div" to="/login/register" >没有账号，立即注册</router-link>
            <v-touch tag="p" @tap="handleLogin()" >登录</v-touch>
        </div>
</template>

<script>
//import axios from "axios"
import {handleLogined} from "@api/user"
export default {
    data(){
        return {
            name:"",
            password:"",
        }
    },
    methods:{
         handleAccount(e){
            let account=e.target.value;
            this.name=account;
        },
        handlePwd(e){
            let pwd=e.target.value;
            this.password=pwd
        },
      async handleLogin(){
            let tel=this.name; 
            let pwd=this.password;
            //   console.log(account,pwd)
            //console.log("/users/list?tel="+tel+"&pwd="+pwd)
            let data=await handleLogined(tel,pwd);
            if(data.data.info=="成功"){
                console.log(data.data)
               this.$router.push({name:"mine",params:{tel:tel}})
               console.log(this.$route.params.tel)
           }
        }
    },
     created(){
}
}
</script>

<style scoped>
    .login{
    padding:.3rem;
    padding-top:0
}
.count{
	font-size: 0.22rem;
    text-align: center;
    color:  #262626;
}
.login div{
    text-align: center;
    padding:0.1rem 0

}
.login input{
    border: none;
    padding: 0.15rem 0;
    width: 100%;
    border-bottom: 1px solid #eee;
}
.login p:nth-of-type(2){
    margin-top: 0.2rem;
    border-radius: 3px;
    font-size: 0.16rem;
    background-color: #ff2661;
    line-height: 0.4rem;
    color:#fff;
    text-align: center;
    opacity: 0.5;
}

</style>