<template>
      <div class="register">
             <p class="count">注册</p>
            <input type="text" placeholder="请输入手机号" @input="handleAccount($event)"> 
            <input type="text" placeholder="请输入密码" @input="handlePwd($event)">
           <router-link tag="div" to="/login/logined">已有账号，立即登录</router-link>
            <v-touch tag="p" @tap="handleregister()" >注册</v-touch>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .register{
    padding:.3rem;
    padding-top:0
}
.count{
	font-size: 0.22rem;
    text-align: center;
    color:  #262626;
}
.register div{
    text-align: center;
    padding:0.1rem 0

}
.register input{
    border: none;
    padding: 15px 0;
    width: 100%;
    border-bottom: 1px solid #eee;
}
.register p:nth-of-type(2){
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