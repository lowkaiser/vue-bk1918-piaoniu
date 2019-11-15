<template>
  <div class="confirm">
    <nav class="navbar">
      <img src />
      <div class="middle-title">确认订单</div>
    </nav>
    <div class="good-card-wrap">
      <div class="good-card">
        <div class="card-head">
          <div class="card-head__merchant">
            <span>商品提供：</span>
            <div class="card-head__merchant-desc">仔仔票务</div>
            <a href class="card-head__merchant-qualification"></a>
          </div>
          <div class="card-head__delivery">演出当天现场取票</div>
        </div>
        <!---->
        <div class="card-main">
          <div class="card-main__left">
            <div class="card-main__name">芭莎明星慈善夜</div>
            <div class="card-main__date-time">2019年11月16日 周六 18:00</div>
            <div class="card-main__venue">北京工人体育馆</div>
            <div class="ticket-category card-main__category">
              <div class="ticket-category__name">票档:看台1280元</div>
              <div class="ticket-category__area"></div>
              <div class="ticket-category__continue"></div>
              <div class="ticket-category__num">x1</div>
              <!---->
            </div>
            <div class="card-main__tip">
              <div class="card-main__tip-item">不支持退换</div>
              <div class="card-main__tip-item">无票赔付最高1280元</div>
            </div>
          </div>
          <div class="card-main__right">
            <div class="card-main__poster"></div>
          </div>
        </div>
      </div>
      <div class="good-card noHead">
        <!---->
        <!---->
        <div class="card-main">
          <div class="card-main__left">
            <div class="card-main__name">服务费 : 121</div>
            <div class="card-main__date-time"></div>
            <div class="card-main__venue"></div>
            <div class="ticket-category card-main__category">
              <div class="ticket-category__name">票档:服务费</div>
              <div class="ticket-category__area"></div>
              <div class="ticket-category__continue"></div>
              <div class="ticket-category__num">x1</div>
              <!---->
            </div>
            <!---->
          </div>
          <div class="card-main__right">
            <div class="card-main__poster"></div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>
<script>
export default {
  name: "GoodsOrder",
  data() {
    return {
    };
  },
  methods: {
    onSubmit() {
      console.log(123);
    },
  }
};
</script>
<style>
.confirm {
  height: 100%;
  padding: 0.44rem 0;
  background-color: #e0e0e0;
}

.navbar {
  width: 100%;
  height: 0.44rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar img {
  width: 0.11rem;
  height: 0.19rem;
  margin-left: 0.14rem;
}
.navbar .middle-title {
  color: #525252;
  font-size: 0.17rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  width: 100%;
  text-align: center;
}
.good-card-wrap {
  margin: 0.1rem 0.08rem;
  overflow: hidden;
}
.good-card {
  padding: 0.16rem;
  background-color: #fff;
  border-radius: 0.06rem;
  margin-bottom: 0.1rem;
}
.good-card:last-child {
  margin-bottom: 0;
}

.good-card {
  padding: 0.16rem;
  background-color: #fff;
  border-radius: 0.06rem;
  margin-bottom: 0.1rem;
}
.card-head {
  display: flex;
  content: space-between;
  justify-content: space-between;
  margin-bottom: 0.14rem;
  font-size: 0.11rem;
  color: #999;
  align-items: center;
}
.card-main {
  display: flex;
}
.card-head__merchant {
  display: flex;
  align-items: center;
}
.card-head__delivery {
  margin-right: 0.06rem;
}
.card-head__merchant-desc {
  max-width: 0.57rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #4b8feb;
}
.card-head__merchant-qualification {
  margin-left: 0.05rem;
  width: 0.56rem;
  height: 0.14rem;
  background-size: 100%;
}
.card-main__left {
  flex: 1;
}
.card-main__name {
  font-size: 0.17rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-main__date-time {
  font-size: 0.12rem;
  color: #999;
  margin-top: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-main__venue {
  font-size: 0.12rem;
  color: #999;
  margin-top: 0.06rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ticket-category {
  font-size: 0.12rem;
  display: flex;
  align-items: flex-start;
}

.card-main__category {
  font-size: 0.12rem;
  color: #999;
  margin-top: 0 6rem;
}
.ticket-category__name {
  margin-right: 0.08rem;
}
.ticket-category__area {
  flex-shrink: 0;
  margin-right: 0.08rem;
}
.ticket-category__continue {
  flex-shrink: 0;
  margin-right: 0.05rem;
}
.ticket-category__num {
  flex-shrink: 0;
  margin-right: 0.04rem;
}
.card-main__tip {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.14rem;
}
.card-main__tip-item {
  font-size: 0.11rem;
  color: #4b8feb;
  margin-right: 0.08rem;
  padding-left: 0.15rem;
  background-repeat: no-repeat;
}
.card-main__tip-item {
  font-size: 0.11rem;
  color: #4b8feb;
  margin-right: 0.08rem;
  padding-left: 0.15rem;
  background-repeat: no-repeat;
}
.card-main__poster {
  width: 0.4rem;
  height: 0.54rem;
  background-size: 100%;
}
.card-main {
  display: flex;
}
.card-main__left {
  flex: 1;
}
.card-main__name {
  font-size: 0.17rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-main__date-time {
  font-size: 0.12rem;
  color: #999;
  margin-top: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ticket-category {
  font-size: 0.12rem;
  display: flex;
  align-items: flex-start;
}

.card-main__category {
  font-size: 0.12rem;
  color: #999;
  margin-top: 0.06rem;
}
.card-main__poster {
  width: 0.4rem;
  height: 0.54rem;
}
</style>