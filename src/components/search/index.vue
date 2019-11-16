<template>
  <div class="search">
    <Header title="返回" iconLeft iconRight />
    <!-- <div class="cancle">取消</div> -->

    <div class="default-search list-keyword" ref="search_Box" v-show="flag=='true'">
      <div v-show="flag">内容为空</div>
      <div class="row-title">热门搜索</div>
      <div class="hot-searches">
        <v-touch
          class="keyword"
          v-for="(item,index) in personList"
          :key="index"
          tag="div"
          @tap="hanldeSearchHot(item.keyword)"
        >{{item.keyword}}</v-touch>
      </div>
      <div class="row-title">搜索记录</div>
      <div class="search-history">
        <ul>
          <li v-for="(item,index) in searHistory" :key="index"
          >
            {{item.name}}
            <v-touch 
              tag="span"
              @tap="hanldeDelete(index)"
            class="remove">删除</v-touch >
          </li>
          <v-touch 
            tag="li"
            @tap="handleDeleteAll()"
          class="remove-all">清除历史记录</v-touch>
        </ul>
      </div>
    </div>
    <div class="guess-like-wrap" ref="searchResult" v-show="flag==false">
      <ul class="activity">
        <li class="box" v-for="(item,index) in searchList" :key="index">
          <img
            :src="item.poster">
          <div class="info">
            <div class="title-line">
              {{item.properName}}</div>
            <div class="time-address">
              <span class="time">{{item.timeRange}}</span>
              <span class="split">|</span>
              <span class="address">{{item.venueName}}</span>
            </div>
            <div class="no-rank">{{item.star}}</div>
            <div class="price-wrap">
              <span class="price">{{item.lowPrice}}</span>
              <span class="qi">元起</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { hotPerData, detailsData } from "@api/home";
import {mapState} from "vuex";
export default {
  name: "Search",
  data() {
    return {
      personList: [],
      searchList:[],
      flag:true,
    };
  },
  computed:{
    ...mapState({
        searHistory:state=>state.search.searHistory,
        searchList:state=>state.search.searData

    }),
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    async hanldeSearchHot(input) {
      let data = await detailsData(input);
      this.searchList=data;
    },
    hanldeDelete(index){
       this.$store.commit("search/hanldeMutations",index);
    },
    handleDeleteAll(){
      this.$store.commit("search/hanldeMutationsAll");
    }
  },
  async created() {
    let data = await hotPerData();
    this.personList = data;
  },
  updated(){
    let length=this.$store.state.search.searData.length;
    console.log(this.$store.state.search.searData)
    if(length=0){
      this.flag=false;
    }else{
      this.searchList=this.$store.state.search.searData;
      this.flag=true;
    }
    // this.searchList=thi
  }
};
</script>
<style scoped>
.search {
  height: 100%;
}
.ui-searchbox {
  height: 0.44rem;
  padding: 5px 0 5px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ui-inner {
  width: 100%;
  height: 100%;
  padding-right: 0.3rem;
}
.ui-wrap {
  width: 100%;
  height: 100%;
  border-radius: 0.17rem;
  position: relative;
  display: flex;
  align-items: center;
}
.ui-wrap .ui-icon {
  position: absolute;
  margin-left: 0.1rem;
}
.ui-wrap .ui-placeholder {
  width: 100%;
  height: 100%;
  line-height: 100%;
  text-align: center;
  background-color: #eee;
  outline: none;
  border: none;
  color: #fff;
  font-size: 0.15rem;
}
.ui-searchbox .cancle {
  margin: 0 0.1rem;
  width: 0.52rem;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
}
.ui-searchbox .back {
  width: 0.62rem;
  height: 0.44rem;
  text-align: center;
  line-height: 0.44rem;
  margin-right: 0.1rem;
}
.default-search {
  position: fixed;
  top: 0.44rem;
  bottom: 0;
  overflow: auto;
  width: 100%;
  z-index: 15;
  background-color: #fff;
  transition: all 0.2s linear;
  opacity: 1;
}
.row-title {
  background-color: #f2f2f2;
  height: 0.32rem;
  line-height: 0.32rem;
  padding-left: 0.15rem;
  color: #666;
}
.hot-searches {
  padding: 0.15rem 0 0 0.15rem;
  overflow: hidden;
}
.hot-searches .keyword {
  margin-right: 0.13rem;
  margin-bottom: 0.13rem;
  font-size: 0.14rem;
  padding: 0.09rem 0.13rem;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  float: left;
}

.search-history ul li {
  font-size: 0.14rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0 0.1rem 0 0.1rem;
  position: relative;
  border-bottom: 1px solid #e6e6e6;
}
.search-history ul li .remove {
  float: right;
  color: #ff5636;
  font-size: 0.14rem;
}
.search-history ul .remove-all {
  text-align: center;
  color: #ff5636;
}
.guess-like .guess-like-title{
    font-size: 0.18rem;
    color: #565656;
    padding: 0 0.18rem;
}
.guess-like-wrap{
 position: relative;
 background-color:#fff;
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