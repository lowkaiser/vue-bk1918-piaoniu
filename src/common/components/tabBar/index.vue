<template>
  <div id="footer" class="footer">
    <ul class="footer-box">
      <router-link tag="li" 
            v-for="(item,index) in navs" 
            :key="index" 
            :to="item.path"  
      >
        <i class="iconfont" v-html="item.icon"></i>
        <span class="title">{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      navs: [
        {
          id: 0,
          text: "推荐",
          icon: "&#xe665",
          path: "/home"
        },
        {
          id: 1,
          text: "演出",
          icon: "&#xe647",
          path: "/perform"
        },
        {
          id: 2,
          text: "消息",
          icon: "&#xe634",
          path: "/message"
        },
        {
          id: 3,
          text: "我的",
          icon: "&#xe614",
          path: "/mine"
        }
      ]
    };
  }
};
</script>
<style>
.footer {
  width: 100%;
  height: 0.44rem;
  position: fixed;
  bottom: 0;
  left:0;
  border-top:1px solid #ccc;
}
.footer .footer-box {
  height: 100%;
  display: flex;
  background-color: #f4f4f4;
  justify-content: space-around;
  align-items: center;
}
.router-link-active{
    color:red;
}
.footer .footer-box .iconfont {
  width: 100%;
  height: 100%;
    font-size:0.22rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer .footer-box .title {
  font-size: 0.12rem;
}

</style>