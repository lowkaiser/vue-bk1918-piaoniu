<template>
  <div class="messageboxContainer">
    <div class="messageBox_title">
      <div>{{title}}</div>
      <v-touch tag="div" @tap="handleClose()">X</v-touch>
    </div>
    <div class="messageBox_content">{{content}}</div>
    <div class="messageBox_btn">
      <v-touch tag="div" @tap="handleOk()">确定</v-touch>
    </div>
  </div>
</template>

<script>
export default {
   name:"MessageBox",
};
</script>

<style>
.messageboxContainer {
  width: 2.56rem;
  height: 1.59rem;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 20;
  background: #fff;
}
.messageBox_title {
  width: 100%;
  height: 0.43rem;
  background: #f8f8f8;
  padding: 0 0.1rem;
  line-height: 0.43rem;
  display: flex;
  justify-content: space-between;
}
.messageBox_content {
  padding: 0.2rem 1rem;
  text-align: center;
}
.messageBox_btn {
  height: 0.57rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>