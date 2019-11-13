<template>
    <div class="page">
        <div class="down">
        <div class="down_left">
            <img src="http://static.piaoniu.com/nuxt-static/img/logo.8f74deb.png" alt="">
            <div>
                <p>下载票牛App</p>
                <p>领188元新人礼包</p>
            </div>
        </div>
        <div class="down_right">立即下载</div>
    </div>


    <div class="login_box">
        <v-touch class="back" tag="div" @tap="handleback()">
            <img src="http://static.piaoniu.com/m/static/img/back-grey.b0b2b3e.png" alt="">
        </v-touch>
        <div class="login">
             <p class="count">账户密码登录</p>
            <input type="text" placeholder="请输入手机号" @input="handleAccount($event)"> 
            <input type="text" placeholder="请输入密码" @input="handlePwd($event)">
            <v-touch tag="p" @tap="handleLogin()">登录</v-touch>
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:"Login",
    data(){
        return{
            name:"",
            password:"",
            lib:[]

        }
    },
    methods:{
        handleback(){
            this.$router.back()
        },
        handleAccount(e){
            let account=e.target.value;
            console.log(account)
            this.name=account
        },
        handlePwd(e){
            let pwd=e.target.value;
            console.log(pwd)
            this.password=pwd
        },
        handleLogin(){
            console.log(this.lib[2])
            for(let i=0;i<this.lib.length;i++){
                console.log(111)
                if(this.name==this.lib[i].tel && this.password==this.lib[i].pwd){
                    this.$router.push("/mine")
                }else{
                    console.log(222)
                }
            }
        }
    },
    created(){
        axios({
        method:"get",
        url:"/users/list",
        // data:{
        //     account,
        //     pwd
        // }
     
    }).then((data)=>{
      console.log(data)
      this.lib=data.data.data.list;


    })
  
}
   
}
</script>
<style scoped>
body{
    background:#f6f7f9;
}
.down{
    background: #fff;
    height:0.5rem;
    background: rgba(0,0,0,.7);
    display: flex;
    color:#fff;
    justify-content: space-between;
    align-items: center;
    padding:0 0.15rem;
}
.down p{
    color:#fff;
}
.down_left{
    display: flex;
}
.down_left img{
    height:0.34rem;
    width:0.34rem;
    border-radius: 5px;
    margin-right:0.15rem;
}
.down_left div p:nth-child(1){
    font-size: 0.11rem;
    margin-bottom: 0.03rem;
}
.down_left div p:nth-child(2){
    font-size: 0.14rem;
}
.down_right{
    background-color: #ff2661;
    border-radius: 15px;
    color: #fff;
    width: 0.8rem;
    height:0.3rem;
    line-height: 0.3rem;
    text-align: center;
    font-size: 0.14rem;
}

.back{
	height: 0.5rem;
	display: flex;
	justify-content: start;
	align-items: center;
}
.back img{
	width: 0.16rem;
	height: 0.16rem;
     margin-left:0.15rem
}
.login{
    padding:.3rem;
    padding-top:0
}
.count{
	font-size: 0.22rem;
    text-align: center;
    color:  #262626;
}
.login input{
    border: none;
    padding: 15px 0;
    width: 100%;
    border-bottom: 1px solid #eee;
}
.login p:nth-of-type(2){
    margin-top: 0.32rem;
    border-radius: 3px;
    font-size: 0.16rem;
    background-color: #ff2661;
    line-height: 0.4rem;
    color:#fff;
    text-align: center;
    opacity: 0.5;
}

</style>