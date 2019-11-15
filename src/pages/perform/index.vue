<template>
  <div class="page">
    <Header iconRight :title="this.$store.state.city.cityName"/>
    <div class="category-home-list">
      <div class="category-menu-wrap">
        <ul class="category-menu-item-container">
          <v-touch
            :class="navListActive==index?'menu-item-active':''"
            tag="li"
            @tap="handleNavList(index)"
            v-for="(item,index) in navList"
            :key="index"
            ref="navPosition"
          >{{item.navTitle}}</v-touch>
        </ul>
      </div>
    </div>
    <van-sticky>
      <div class="listing-filter-item-wrap">
        <div class="listing-filter-item listing-filter-item--pop">综合排序</div>

        <div class="listing-filter-item listing-filter-item--pop">全部时间</div>
        <div class="listing-filter-pop" style="display:none;"></div>
        <a href="/sz-concerts/seatMap" class="listing-filter-item">在线选座</a>
      </div>
    </van-sticky>
    <Kaiser-scroll ref="scroll">
      <div class="activity-list-container">
        <div class="ui-list">
          <ul class="activities">
            <div class="bimg">
              <img
                src="https://img.piaoniu.com/searchBanner/67f75d69e260738648adad6b66872f4b38af7907.png"
              />
            </div>
            <li class="box" v-for="(item,index) in detailsContent" :key="index" :href="'https://m.piaoniu.com/activity/'+item.recommendContent.id">
              <img :src="item.recommendContent.poster" />
              <div class="info">
                <div class="title-line">
                  <span>[{{$store.state.city.cityName}}]</span>
                  <span>{{item.recommendContent.properName}}</span>
                </div>
                <div class="time-address">
                  <span class="time">{{item.recommendContent.timeRange}}</span>
                  <span class="split">|</span>
                  <span class="address">{{item.recommendContent.venueName}}</span>
                </div>
                <div class="no-rank">{{item.recommendContent.star}}</div>
                <div class="price-wrap">
                  <span class="price">{{item.recommendContent.lowPrice}}</span>
                  <span class="qi">元起</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Kaiser-scroll>
  </div>
</template>

<script>
import { gussLike } from "@api/home";

export default {
  name: "Perform",
  data() {
    return {
      detailsContent: [],
      navListActive: 0,
      navList: [
        {
          navTitle: "全部分类"
        },
        {
          navTitle: "演唱会"
        },
        {
          navTitle: "话剧歌剧"
        },
        {
          navTitle: "休闲展览"
        },
        {
          navTitle: "体育赛事"
        },
        {
          navTitle: "旅游玩乐"
        },
        {
          navTitle: "音乐会"
        },
        {
          navTitle: "儿童亲子"
        },
        {
          navTitle: "舞蹈芭蕾"
        },
        {
          navTitle: "戏曲综艺"
        }
      ],
      typeId:1,
      randomIndex:2,
    };
  },
  watch: {
    detailsContent() {
      this.$refs.scroll.handlefinishPullDown();
      this.$refs.scroll.handlefinishPullUp();
    }
  },
  created() {
    console.log(this.$route);
    console.log(this.navListActive)
    this.navListActive=this.$route.params.path;
    console.log(this.navListActive)
    this.handleGetDetailsData(2);
  },

  methods: {
    handleNavList(index) {
      this.navListActive = index;
    },
    async handleGetDetailsData(pageIndex) {
      let data = await gussLike(pageIndex);
      this.detailsContent = data.data;
      // 原生数据跟现有数据相结合
      // this.detailsContent = [...this.detailsContent,...data.data.detailsContent];
   }
  },
  activated(){
    if(this.typeId==this.randomIndex){
        this.GussLike=JSON.parse(sessionStorage.getItem("gussLike"))
    }else{
      this.handleGetDetailsData(this.randomIndex);
      this.typeId=this.randomIndex;
    }
  },
  mounted() {
    // this.$refs.navPosition[this.navListActive].offsetLeft=15;
    this.$refs.scroll.handlepullingDown(() => {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var index = parseInt(0 + Math.random() * 10);
      this.randomIndex = index;
      this.handleGetDetailsData(arr[index]);
    });

    // this.$refs.scroll.handlepullingUp(()=>{
    //   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //   var index = parseInt(0 + Math.random() * 10);
    //   this.handleGetDetailsData(arr[index]);
    // })
    this.$refs.scroll.handleScroll();
  }
};
</script>
<style>
.category-menu-wrap {
  height: 0.4rem;
  background-color: #fff;
  position: relative;
  z-index: 10;
}

.category-menu-item-container {
  width: 100%;
  height: 0.4rem;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
}
.category-menu-item-container > li {
  height:0.4rem;
  margin: 0  0.15rem;
  padding: 0.1rem 0 0;
}
.menu-item-active {
  border-bottom: 3px solid #ff2661;
  color: #ff2661;
  font-size: 0.15rem;
}
.van-sticky{
  height:0.36rem;
}
.listing-filter-item-wrap {
  width: 100%;
  position: absolute;
  z-index: 10;
  background-color: #fff;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
}
.listing-filter-item {
  font-size: 0.12rem;
  color: #666;
  text-align: center;
  padding: 0.1rem 0;
}
.wrapper {
  height: 100%;
}
.activity-list-container {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-bottom: 0.44rem;
}
.ui-list {
}
.ui-list .activities {
  margin: 0 0.15rem;
}
.activities .bimg {
  height: 0.9rem;
}
.activities .bimg img {
  height: 0.9rem;
  padding-top: 0.15rem;
}

.activities .box {
  height: 1.46rem;
  padding-top: 0.15rem;
  display: flex;
}
.activities .box img {
  width: 0.75rem;
  height: 1rem;
}
.activities .box .info {
  width: 1.98rem;
  height: 100%;
  margin-left: 0.2rem;
  border-bottom: 1px solid hsla(0, 0%, 90%, 0.5);
}
.activities .box .info .title-line {
  font-size: 0.15rem;
  color: #333;
  line-height: 0.22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}
.activities .box .info .time-address {
  font-size: 0.12rem;
  color: #999;
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.activities .box .info .no-rank {
  font-size: 0.1rem;
  color: #999;
  margin: 0.04rem 0 0.16rem;
}

.activities .box .info .price-wrap .price {
  color: #ff2661;
  font-size: 0.18rem;
  font-weight: 700;
}
.activities .box .info .price-wrap .qi {
  font-size: 0.1rem;
  color: #999;
}
</style>