<template>
  <div class="search">
      <Header title="返回" iconLeft="" iconRight=""/>
      <!-- <div class="cancle">取消</div> -->
    
    <div class="default-search list-keyword">
      <div class="row-title">热门搜索</div>
      <div class="hot-searches">
        <div class="keyword">周传雄</div>
        <div class="keyword">吴青峰</div>
        <div class="keyword">刘德华</div>
        <div class="keyword">张韶涵</div>
        <div class="keyword">周杰伦</div>
        <div class="keyword">李荣浩</div>
        <div class="keyword">巴萨VS皇马</div>
        <div class="keyword">脱口秀</div>
        <div class="keyword">艺博会</div>
        <div class="keyword">罗纳尔多，欧文</div>
      </div>
      <div class="row-title">搜索记录</div>
      <div class="search-history">
        <ul>
          <li>
            艺博会
            <span class="remove">删除</span>
          </li>
          <li>
            吴青峰
            <span class="remove">删除</span>
          </li>
          <li class="remove-all">清除历史记录</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  methods:{
      handleBack(){
          this.$router.back();
      }
  }
};
</script>
<style scoped>
.search{
    height:100%;
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
  padding-right:0.3rem;
}
.ui-wrap {
  width: 100%;
  height: 100%;
  border-radius: 0.17rem;
    position:relative;
  display: flex;
  align-items: center;
}
.ui-wrap .ui-icon{
    position:absolute;
    margin-left: 0.1rem;
}
.ui-wrap .ui-placeholder {
  width: 100%;
  height: 100%;
  line-height:100%;
  text-align:center;
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
</style>