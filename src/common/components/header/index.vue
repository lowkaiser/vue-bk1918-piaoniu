<template>
  <div class="head">
    <div class="topbar">
      <v-touch class="city-picker iconfont" v-html="iconLeft+title"
        tag="div"
        @tap="handleHeadBtn(title)"
      >
      </v-touch>
      <div class="ui-searchbox" >
        <div class="ui-inner">
          <router-link class="ui-wrap"
            tag="div"
            to="/search"
            >
            <div class="ui-icon iconfont icon-search">&#xe630;</div>
          <input class="ui-placeholder" placeholder="搜索明星、演出、场馆" @change="handleSearch($event)"/>
        </router-link>
        </div>
      </div >
      <div class="person-wrap">
        <router-link 
          tag="div"
          to="/mine"
        class="person-icon iconfont" v-html="iconRight"></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"Header",
    props:{
        title:{
            type:String,
            default:"北京"
        },
        iconLeft:{
          type:String,
          default:"&#xe61e;"
        },
        iconRight:{
          type:String,
          default:"&#xe614;"
        },
    },
    methods:{
      handleHeadBtn(params){
        if(params=="返回"){
          this.$router.back();
        }else{
          this.$router.push("/city"+this.$route.path);
          // this.$router.push({name:"city",params:{path:this.$route.path}})
        }
      },
      handleSearch(e){
        let val=e.target.value;
        this.$store.dispatch("search/handleActionsData",val)
      }
    }
}
</script>
<style lang="scss">
.head{
    height:0.44rem;
    position: relative;;
    left:0;
    top:0;
    background-color: #fff;
    z-index:10;
}
.topbar{
    height:0.44rem;
    display:flex;
}
.topbar .city-picker{
    width:0.56rem;
    height:0.44rem;
    font-size:0.14rem;
    color:#262626;
    text-align:center;
    line-height:0.44rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.topbar .city-wrap{
    display: block;
}
.topbar .ui-searchbox{
    flex:1;
    height:0.44rem;
    padding:5px 0 5px 8px;
}
.topbar  .ui-inner{
    height:100%;
}
.topbar .ui-wrap{
    width:100%;
    height:100%;
    border-radius:0.17rem;
    background-color:#eee;
    display:flex;
    align-items:center;
}
.topbar .ui-wrap .ui-icon{
    margin: 0 0.1rem;
    color:#262626;
    font-size:0.16rem;
}
.topbar .ui-wrap .ui-placeholder{
     color:#262626;
    font-size:0.15rem;
    outline:none;
    border:none;
    background-color:#eee;
}

.topbar .person-wrap{
    width:0.44rem;
    height:0.44rem;
    display: flex;
    justify-content:center;
    align-items:center;
}
.topbar .person-icon{
    width:100%;height:100%;
    text-align:center;
    line-height:0.44rem;
    font-size:0.23rem;
}



</style>