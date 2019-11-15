<template>
  <div>
    <!-- <header>
      <div class="head">
        <img src="http://static.piaoniu.com/m/static/img/back-grey.b0b2b3e.png" />
        <p>全部评论</p>
        <p>我要评论</p>
      </div>
    </header> -->
    <mined title="全部评论" />

    <!-- 评论 -->
    <div class="comment_box">
      <div class="hang">
        <img
          src="https://img.piaoniu.com/poster/7f153930860643e632ca9e34ef91a7b5b62ef5fe.jpg?imageView2/2/w/76/h/102/format/jpg/q/60"
          alt
        />
        <div>
          <p>张信哲佛山演唱会</p>
          <p>2019.11.16 19:30</p>
        </div>
      </div>

      <li class="feed-item">
        <div class="feed-head">
          <img
            src="https://img.piaoniu.com/user/354011/avatar/1514455284331.jpg?imageView2/2/w/72/h/72/format/jpg/q/100"
          />
          <div class="head-info">
            <div class="name">票牛福利汪</div>
            <div class="text">官方</div>
          </div>
        </div>
        <div class="feed-content">
          <div class="feed-review-content">
            <div class="rank-row">
              <div class="text">我评论：</div>
              <ul class="stars">
                <li>
                  <img src="http://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png" />
                </li>
                <li>
                  <img src="http://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png" />
                </li>
                <li>
                  <img src="http://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png" />
                </li>
                <li>
                  <img src="http://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png" />
                </li>
                <li>
                  <img src="http://static.piaoniu.com/m/static/img/starYellow.b0a4b5a.png" />
                </li>
              </ul>
            </div>
            <div class="content-row">
              <div class="content">
                <span class="title">#周杰伦麦田音乐节#</span>
                <span>
                  由于没人准确猜对小公举的着装，所以本汪从积极参与的用户中挑选比较接近答案并且用心分享的用户送上 周杰伦专辑 恭喜@DanielWu
                  @魔法下馆子...
                </span>
              </div>
              <a href="javascript(0)" class="more">全文</a>
            </div>
            <div class="image-list">
              <img
                src="https://img.piaoniu.com/review/05933d65c85d883c8be04bda203172f3ff6dbea7_ts.jpg?imageView/2/w/360/h/540/format/jpg"
              />
            </div>
            <div class="activity-card">
              <img
                src="https://img.piaoniu.com/poster/1490645c8a7457e0674c19007d3feaa549dfb81e.jpg?imageView2/2/w/76/h/102/format/jpg/q/60"
              />
              <div class="activity-right">
                <div class="activity-name" style="-webkit-line-clamp: 1;">周杰伦 蔡依林2019麦田音乐节 北京站</div>
                <div class="time-range">2019.05.25 - 05.26</div>
              </div>
            </div>
          </div>
          <div class="feed-interaction">
            <div class="time">5月27日 19:03</div>
            <div class="interaction-button interaction-support">
              <img src="http://static.piaoniu.com/m/static/img/icon-like-white.15350f3.png" />
              <span class="num">20000</span>
            </div>
            <div class="interaction-button interaction-reject">
              <img src="http://static.piaoniu.com/m/static/img/icon-like-white.15350f3.png" />
              <span class="num">3333</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.head {
  height: 0.44rem;
  width: 100%;
  background: #fff;
  display: flex;
  padding: 0.12rem;
  justify-content: space-between;
}
.head img {
  width: 0.11rem;
  height: 0.19rem;
}
.head p:nth-of-type(1) {
  font-size: 0.17rem;
  margin-left: 0.28rem;
}
.head p:nth-of-type(2) {
  font-size: 0.16rem;
  color: #5fb7fc;
}

/* 评论 */
.comment_box {
  margin-top: 0.44rem;
}
.hang {
  display: flex;
  padding: 0.05rem;
}
.hang img {
  width: 0.38rem;
  height: 0.5rem;
  margin-right: 0.05rem;
}
.hang div p:nth-child(1) {
  font-size: 0.14rem;
}
.hang div p:nth-child(2) {
  font-size: 0.12rem;
  margin-top: 0.05rem;
}

.feed-item {
  padding: 0.15rem 0.15rem 0.1rem 0.15rem;
}
.feed-head {
  height: 0.36rem;
  margin-bottom: 0.12rem;
  display: flex;
}
.feed-head img {
  width: 0.36rem;
  height: 0.36rem;
}
.head-info {
  height: 0.42rem;
  display: flex;
  align-items: center;
}

.head-info .name {
  line-height: 0.42rem;
  height: 0.42rem;
  font-size: 0.15rem;
  margin-right: 0.04rem;
  color: #262626;
}
.head-info .text {
  width: 0.3rem;
  height: 0.14rem;
  font-size: 0.1rem;
  background-color: #ff2661;
  border-radius: 0.1rem;
  color: #fff;
  text-align: center;
  line-height: 0.14rem;
}

.feed-content {
  height: 4.32rem;
}
.feed-content .feed-review-content {
  height: 3.79rem;
}
.feed-content .feed-review-content .rank-row {
  height: 0.18rem;
  display: flex;
}
.feed-content .feed-review-content .rank-row .text {
  font-size: 0.12rem;
  color: #999;
}
.feed-content .feed-review-content .rank-row .stars {
  display: flex;
}
.feed-content .feed-review-content .rank-row .stars li img {
  width: 0.13rem;
  height: 0.13rem;
}

/* 文字 */

.feed-content .feed-review-content .content-row {
  height: 1rem;
  margin: 0.06rem 0 0.08rem;
}

.feed-content .feed-review-content .content-row .content {
  font-size: 0.14rem;
  word-break: break-all;
  color: #262626;
  line-height: 0.2rem;
}
.feed-content .feed-review-content .content-row .content .title {
  color: #4b8feb;
}
.feed-content .feed-review-content .content-row .more {
  font-size: 0.14rem;
  color: #5fb7fc;
  margin-left: 5px;
}
.feed-content .feed-review-content .image-list {
  height: 1.84rem;
  margin: 0.05rem 0 0.08rem;
}
.feed-content .feed-review-content .image-list img {
  width: 2.7rem;
  height: 1.8rem;
}
.feed-content .feed-review-content .activity-card {
  height: 0.6rem;
  padding: 0.05rem 0;
  display: flex;
  background-color: #ece9e9;
  margin-right: 0.05rem;
}
.feed-content .feed-review-content .activity-card img {
  width: 0.38rem;
  height: 0.5rem;
  margin: 0 0.05rem;
}
.feed-content .feed-review-content .activity-card .activity-name {
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.feed-content .feed-review-content .activity-card .time-range {
  font-size: 0.12rem;
  color: #999;
  margin-top: 0.05rem;
}
.feed-content .feed-interaction {
  height: 0.38rem;
  margin-top: 0.15rem;
  padding-top: 0.1rem;
  border-top: 1px solid #ece9e9;
  display: flex;
  justify-content: space-between;
}
.feed-interaction .time {
  color: #999;
  font-size: 0.12rem;
  margin-top: 0.07rem;
}

.feed-content .feed-interaction .interaction-button {
  display: flex;
  padding: 0 0 0 0.11rem;
  margin-left: 0.1rem;
  height: 0.28rem;
}
.feed-content .feed-interaction .interaction-button img {
  width: 0.24rem;
  height: 0.28rem;
}
.feed-content .feed-interaction .interaction-button .num {
  color: #999999;
  font-size: 0.12rem;
  display: block;
  margin-left: 0.08rem;
  text-align: left;
  height: 0.26rem;
  line-height: 0.26rem;
}
.feed-content .feed-interaction .interaction-reject {
  margin-right: 0.15rem;
}
</style>