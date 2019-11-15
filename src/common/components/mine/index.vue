<template>
  <div>
    <div class="header_box">
      <div class="header">
        <v-touch class="header_btn" tag="div" @tap="handleback()">
          <div class="iconfont" v-html="imgB"></div>
        </v-touch>
        <div class="header_title">
          <p>{{title}}</p>
          <p>{{comment}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mined",
  props: {
    title: {
      type: String,
      default: "我的"
    },
    imgB: {
      type: String,
      default: "&#xe62f;"
    },
    comment:{
      type:String,
      default:"我要评论"
    }
  },
  methods: {
    handleback() {
      this.$router.back();
    }
  }
};
</script>
    
<style scoped>
.header_box {
  background: #fff;
  -height: 0.44rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.header {
  display: flex;
}
.header_btn {
  -width: 0.44rem;
  -height: 0.44rem;
  -padding-left: 0.14rem;
  -display: flex;
  -align-items: center;
  position: absolute;
  top:30%;
  left:0.1rem
}
/* .header_btn img {
  width: 0.11rem;
  height: 0.19rem;
  position: absolute;
  top: 30%;
  left: 0.17rem;
} */
.header_title {
  height: 0.44rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:1px solid #ccc;
}
.header_title p {
  font-size: 0.17rem;
  color: #525252;
}
.header_title p:nth-child(2){
  position: absolute;
  top:30%;
  right:0.1rem;
  color:#5fb7fc;
}

.center {
  height: 100%;
  margin-top: 0.44rem;
}
</style>