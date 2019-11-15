<template>
  <div class="page">
    <Header></Header>
    <!-- banner -->
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://img.piaoniu.com/misc/e453722b21bd9efc579ea324dc5b07f442e11a7e.png?imageView2/2/w/750/h/350/format/jpg/q/80"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img.piaoniu.com/misc/648d551c214f9af8a2a775e99fe17adbbe04f585.jpg?imageView2/2/w/750/h/350/format/jpg/q/80"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img.piaoniu.com/misc/81862c24bc06ab7929f03b9b2157765fbdd03b87.png?imageView2/2/w/750/h/350/format/jpg/q/80"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img.piaoniu.com/misc/648d551c214f9af8a2a775e99fe17adbbe04f585.jpg?imageView2/2/w/750/h/350/format/jpg/q/80"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- middle nav -->
    <div class="home-entries">
      <ul class="main-categories">
        <router-link class="entry" v-for="item in iconImg" :key="item.id" to="/perform">
          <img src="http://assets.piaoniu.com/home/icons/category-live-large.png" />
          <div class="title">演唱会</div>
        </router-link>
      </ul>
      <ul class="sub-categories">
        <li class="entry-sub" v-for="item in iconImg" :key="item.id">
          <img src="http://assets.piaoniu.com/home/icons/category-live-large.png" />
          <div class="title">演唱会</div>
        </li>
      </ul>
    </div>
    <!-- 免费抽奖 -->
    <div class="operating-position">
      <div class="operating-left">
        <div class="title-wrap">
          <p class="title-h">免费抽奖</p>
          <p class="title-b">0元看演出</p>
        </div>
        <div class="img-wrap">
          <img src="https://img.piaoniu.com/misc/dae9abe27089b8d80f4ab01d78a2e7fc4f72af71.png" />
        </div>
      </div>
      <div class="operating-left">
        <div class="title-wrap">
          <p class="title-h">百元好戏</p>
          <p class="title-b">限量抢购</p>
        </div>
        <div class="img-wrap">
          <img src="https://img.piaoniu.com/misc/dae9abe27089b8d80f4ab01d78a2e7fc4f72af71.png" />
        </div>
      </div>
    </div>
    <!-- 售后服务 -->
    <div class="service-entry">
      <ul class="service-box">
        <li class="service-title">服务保障</li>
        <li>|</li>
        <li class="service-title">无票赔付</li>
        <li>|</li>
        <li class="service-title">出票保真</li>
        <li>|</li>
        <li class="service-title">配送保障</li>
      </ul>
    </div>
    <!--  -->
    <div class="middle-banner">
      <img src="https://img.piaoniu.com/misc/796e985716a3083dbff581bfcc37506affb7bc3f.jpg" />
    </div>
    <!-- 近期热门 -->
    <div class="hot-activities">
      <div class="activity-floor">
        <div class="header">
          <div class="title">近期热门</div>
          <div class="more">全部 ></div>
        </div>
        <div class="activities">
          <ul class="wrap">
            <li class="activity-floor-item" v-for="(item,index) in hotContent" :key="index">
              <div class="item-img">
                <img :src="item.poster" />
              </div>
              <div class="name">{{item.properName}}</div>
              <div class="price">
                <span class="price-num">￥{{item.lowPrice}}</span>
                <span class="price-asc">起</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="hot-activities">
      <div class="activity-floor">
        <div class="header">
          <div class="title">折扣专区</div>
          <div class="more">全部 ></div>
        </div>
        <div class="activities">
          <ul class="wrap">
            <li class="activity-floor-item" v-for="(item,index) in Discount" :key="index">
              <div class="item-img">
                <img :src="item.poster" />
              </div>
              <div class="name">{{item.properName}}</div>
              <div class="price">
                <span class="price-num">￥{{item.lowPrice}}</span>
                <span class="price-asc">
                  <s>￥{{item.originPrice}}</s>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 更多精彩内容 -->
    <div class="piaoquan">
      <router-link to="/details" tag="span">更多精彩内容待你发现</router-link>
      <span class="arrow">></span>
    </div>
    <!-- 猜你喜欢 -->
    <div class="guess-like">
      <div class="guess-like-title">猜你喜欢</div>
      <div class="guess-like-wrap">
        <ul class="activity">
          <li class="box" v-for="(item,index) in GussLike" :key="index">
            <img
              :src="item.recommendContent.poster"
            />
            <div class="info">
              <div class="title-line">
                <span>[深圳]</span>
                <span> {{item.recommendContent.properName}}</span>

                </div>
              <div class="time-address">
                <span class="time">{{item.recommendContent.timeRange}}</span>
                <span class="split">|</span>
                <span class="address">{{item.recommendContent.venueName}}</span>
              </div> 
              <div class="no-rank" >{{item.recommendContent.star}}</div>
              <div class="price-wrap">
                <span class="price">{{item.recommendContent.lowPrice}}</span>
                <span class="qi">元起</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { HotData,discountRate,gussLike} from "@api/home";
export default {
  name: "Home",
  data() {
    return {
      iconImg: [
        {
          text: "",
          icon: "&#xe737",
          path: ""
        },
        {
          text: "",
          icon: "&#xe612",
          path: ""
        },
        {
          text: "",
          icon: "&#xf0022",
          path: ""
        },
        {
          text: "",
          icon: "&#xe6b0",
          path: ""
        },
        {
          text: "",
          icon: "&#xe60c",
          path: ""
        }
      ],
      hotContent: [],
      Discount:[],
      GussLike:[],
    };
  },
  created() {
    this.handleGetHotData(2);
    this.handleDiscountRate(2);
    this.handleGussLike(2);
  },

  methods: {
    async handleGetHotData(pageIndex) {
      let data = await HotData(pageIndex);
      this.hotContent = data.data;
    },
    async handleDiscountRate(pageIndex) {
      let data = await discountRate(pageIndex);
      this.Discount = data.data;
    },
    async handleGussLike(pageIndex) {
      let data = await gussLike(pageIndex);
      this.GussLike = data.data;
    },
  }
};
</script>
<style>
.page .banner {
  height: 0.88rem;
  margin: 0.16rem 0.16rem 0;
  background-color: aqua;
  overflow: hidden;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.van-swipe img {
  width: 100%;
  height: 100%;
}

.home-entries {
  height: 1.66rem;
  padding: 0.02rem 0.16rem 0;
}
.home-entries .main-categories {
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
}
.home-entries .main-categories .entry {
  margin-top: 0.22rem;
  height: 0.68rem;
}
.home-entries .main-categories .entry img {
  width: 0.42rem;
  height: 0.42rem;
}
.home-entries .main-categories .entry .title {
  height: 0.26rem;
  font-size: 0.13rem;
  color: #444;
  line-height: 0.26rem;
  text-align: center;
}
.home-entries .sub-categories {
  height: 0.74rem;
  display: flex;
  justify-content: space-between;
}
.home-entries .entry-sub {
  margin-top: 0.22rem;
  height: 0.52rem;
}
.home-entries .entry-sub img {
  width: 0.26rem;
  height: 0.26rem;
  margin: 0 auto;
}
.home-entries .entry-sub .title {
  height: 0.26rem;
  line-height: 0.26rem;
  font-size: 0.13rem;
  text-align: center;
  color: #444;
}
.operating-position {
  margin: 0.2rem 0.13rem 0;
  height: 0.58rem;
  display: flex;
  justify-content: space-between;
}
.operating-position .operating-left {
  width: 1.4rem;
  height: 0.58rem;
  background-color: #fff;
  box-shadow: 0 0.02rem 0.06rem 0 rgba(0, 0, 0, 0.07);
  border-radius: 0.08rem;
  overflow: hidden;
  display: flex;
}
.operating-position .operating-left .title-wrap {
  width: 0.78rem;
  height: 0.45rem;
  margin: 0.13rem 0 0 0.1rem;
}
.operating-position .operating-left .title-wrap .title-h {
  font-size: 0.14rem;
  color: #262626;
  font-weight: 800;
  margin-bottom: 0.05rem;
}
.operating-position .operating-left .title-wrap .title-b {
  font-weight: 400;
  color: #666;
  font-size: 0.12rem;
  max-width: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.operating-position .operating-left .img-wrap {
  width: 0.72rem;
  height: 0.51rem;
  padding-top: 0.07rem;
}
.operating-position .operating-left .img-wrap img {
  width: 0.72rem;
  height: 0.51rem;
}
/* 售后服务 */
.service-entry {
  height: 0.32rem;
  margin: 0.2rem 0.16rem 0;
  padding: 0 0.08rem;
  background: hsla(0, 0%, 96%, 0.53);
  border-radius: 2px;
}
.service-entry .service-box {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.service-entry .service-box li {
  font-size: 0.12rem;
  color: #666;
}
.service-entry .service-box .service-title {
  font-size: 0.12rem;
  font-weight: 500;
  color: #666;
}
.middle-banner {
  height: 0.78rem;
  margin: 0.2rem 0.16rem 0;
}
.middle-banner img {
  width: 2.88rem;
  height: 0.78rem;
}

/* 近期 热门 */
.hot-activities {
  height: 2.58rem;
}
.hot-activities .activity-floor {
  padding-bottom: 0.08rem;
  padding-top: 0.32rem;
  height: 2.58rem;
}
.hot-activities .activity-floor .header {
  height: 0.37rem;
  overflow: hidden;
  padding: 0 0.14rem 0.14rem;
  display: flex;
  justify-content: space-between;
}
.hot-activities .activity-floor .header .title {
  font-weight: 700;
  color: #565656;
  font-size: 0.18rem;
}
.hot-activities .activity-floor .header .more {
  font-size: 0.14rem;
  color: #999;
  height: 0.17rem;
  line-height: 0.17rem;
}
.hot-activities .activity-floor .activities {
  height: 100%;
  padding-bottom: 0.44rem;
}
.hot-activities .activity-floor .activities .wrap {
  padding-left: 0.14rem;
  height: 1.9rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
}
.hot-activities .activity-floor .activities .wrap .activity-floor-item {
  height: 100%;
  width: 1.02rem;
  margin-right: 0.1rem;
}
.hot-activities
  .activity-floor
  .activities
  .wrap
  .activity-floor-item
  .item-img {
  width: 1.02rem;
  height: 1.37rem;
}
.hot-activities
  .activity-floor
  .activities
  .wrap
  .activity-floor-item
  .item-img
  img {
  width: 1.02rem;
  height: 1.37rem;
}
.hot-activities .activity-floor .activities .wrap .activity-floor-item .name {
  font-size: 0.14rem;
  margin: 0.05rem 0 0.03rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hot-activities .activity-floor .activities .wrap .activity-floor-item .price {
  height: 0.14rem;
}
.hot-activities
  .activity-floor
  .activities
  .wrap
  .activity-floor-item
  .price
  .price-num {
  color: #ff2661;
  font-size: 0.12rem;
}
.hot-activities
  .activity-floor
  .activities
  .wrap
  .activity-floor-item
  .price
  .price-asc {
  height: 0.14rem;
  font-size: 0.12rem;
  margin-left: 0.01rem;
  transform: scale(0.8);
  display: inline-block;
  color: #999;
}

/* 更多精彩内容 */
.piaoquan {
  height: 0.42rem;
  margin: 0.24rem 0.14rem;
  border-radius: 4px;
  border: 1px solid #f5f5f5;
  color: #262626;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  line-height: 0.42rem;
}
.piaoquan .arrow {
  margin-left: 0.1rem;
}

/* 猜你喜欢 */


.guess-like .guess-like-title {
  font-size: 0.18rem;
  color: #565656;
  padding: 0 0.18rem;
}
.guess-like-wrap {
  position: relative;
  left:0;
  right:0;
  top:0;
  bottom:0;
  padding-bottom:0.44rem;
}
.guess-like-wrap .activity {
  margin: 0 0.15rem;
}
.guess-like-wrap .box {
  height: 1.46rem;
  padding-top: 0.15rem;
  display: flex;
}
.guess-like-wrap .box img {
  width: 0.75rem;
  height: 1rem;
}
.guess-like-wrap .box .info {
  width: 1.98rem;
  height: 100%;
  margin-left: 0.2rem;
  border-bottom: 1px solid hsla(0, 0%, 90%, 0.5);
}
.guess-like-wrap .box .info .title-line {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}
.guess-like-wrap .box .info .time-address {
  font-size: 0.12rem;
  color: #999;
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.guess-like-wrap .box .info .no-rank {
  font-size: 0.1rem;
  color: #999;
  margin: 0.04rem 0 0.16rem;
}

.guess-like-wrap .box .info .price-wrap .price {
  color: #ff2661;
  font-size: 0.18rem;
  font-weight: 700;
}
.guess-like-wrap .box .info .price-wrap .qi {
  font-size: 0.1rem;
  color: #999;
}

.footer {
  width: 100%;
  height: 0.44rem;
  position: fixed;
  bottom: 0;
}
.footer .footer-box {
  height: 100%;
  display: flex;
  background-color: #f4f4f4;
  justify-content: space-around;
  align-items: center;
}
.footer .footer-box .footer-icon {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer .footer-box .footer-icon .title {
  font-size: 0.1rem;
}


.piaoquan{
    height:0.42rem;
    margin:0.24rem 0.14rem;
    border-radius: 4px;
    border: 1px solid #f5f5f5;
    color: #262626;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    line-height:0.42rem;
}
.piaoquan .arrow{
    margin-left:0.1rem;
}


/* 猜你喜欢 */


.guess-like .guess-like-title{
    font-size: 0.18rem;
    color: #565656;
    padding: 0 0.18rem;
}

.guess-like-wrap .activity{
    margin:0 0.15rem;
}
.guess-like-wrap .box{
    height:1.46rem;
    padding-top:0.15rem;
    display: flex;
}
.guess-like-wrap .box img{
    width:0.75rem;
    height:1rem;
}
.guess-like-wrap .box .info{
    width:1.98rem;
    height:100%;
    margin-left:0.2rem;
    border-bottom: 1px solid hsla(0,0%,90%,.5);
}
.guess-like-wrap .box .info .title-line{
    font-size: 0.15rem;
    color: #333;
    line-height: 0.22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
}
.guess-like-wrap .box .info .time-address{
    font-size: 0.12rem;
    color: #999;
    margin-top: 9px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.guess-like-wrap .box .info .no-rank{
    font-size: 0.1rem;
    color: #999;
    margin:0.04rem 0 0.16rem;
}

.guess-like-wrap .box .info .price-wrap .price{
    color: #ff2661;
    font-size: 0.18rem;
    font-weight: 700;
}
.guess-like-wrap .box .info .price-wrap .qi{
    font-size: 0.1rem;
    color: #999;
}

</style>