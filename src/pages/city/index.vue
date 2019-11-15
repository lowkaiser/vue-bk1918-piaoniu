<template>
    <div class="city_box" ref="city_container">
        <Kaiser-scroll ref="scroll">
            <div>
                <div class="hot_city">
                    <div class="hot_title">
                        <span>热门城市</span>
                        </div>
                    <div class="hot_city_list">
                        <v-touch class="hot_city_name" 
                        v-for="(item,index) in hotCity" :key="index"
                        tag="div"
                        @tap="handleHotCity(item)"
                        >{{item.cityName}}</v-touch>
                    </div>
                </div>
                <!-- 城市列表 -->
                <div class="city_list" ref="allcityList">
                    <div class="city_list_item"
                    v-for="(item,index) in allcityList" :key="index"
                    >
                        <div class="city_title_letter">{{item.index}}</div>
                        <v-touch class="city_list_name" 
                        v-for="(child) in item.list" :key="child.id"
                        tag="div"
                        @tap="handleCity(child)"
                        >
                            <div class="city_list_name_item">{{child.cityName}}</div>
                        </v-touch>
                    </div>
                </div>
            </div>
        </Kaiser-scroll>
        <!-- 城市 列表下表 -->
        <div class="city_list_index">
            <v-touch class="index_item" 
                tag="div"
                @tap="handleto(index)"
            v-for="(item,index) in allcityList" :key="index">{{item.index}}</v-touch>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex";
export default {
    name:"City",
    created(){
        if(!(sessionStorage.getItem("hotCity")&&sessionStorage.getItem("allcityList"))){
            this.$store.dispatch("city/handleGetAllCity");
            this.$store.dispatch("city/hanldeGetHotCity");
        }
    },
    computed:{
        ...mapState({
            allcityList:state=>state.city.allcityList,
            hotCity:state=>state.city.hotCity,
        })
    },
    methods:{

        handleto(index){
            
            let t=this.$refs.allcityList.querySelectorAll(".city_list_item")[index].offsetTop;
            this.$refs.city_container.scrollTop=t;
            this.$refs.scroll.handleScrollTo(-t);
        },
        handleCity(child){
            let path=this.$route.params.path || "/home";
            this.$router.push("/"+path);
            this.$store.commit("city/handleComCity",child)
            // this.$router.push("./home");
        },
        handleHotCity(child){
            let path=this.$route.params.path || "/home";
            this.$router.push("/"+path);
            this.$store.commit("city/handleComCity",child)
            // this.$router.push("./home");
        }
      
    }
}
</script>
<style>
.city_body{
    background:#ebebeb;
}
.city_box {
    height:100%;
    overflow:auto;
}
.hot_title , .city_title_letter{
    line-height:0.3rem;
    padding-left:.13rem;
    font-size:0.14rem;
}

.hot_city_list,.city_list_name{
    width:96%;
    background:#f5f5f5;
    padding-bottom:0.08rem;
    padding-right:0rem;
    display:flex;
    flex-wrap:wrap;
}
.hot_city_name{
    margin-top:0.15rem;
    margin-left:0.12rem;
    width:0.90rem;
    height:0.30rem;
    background:#fff;
    text-align:center;
    line-height:0.30rem;
    font-size:0.14rem;
    border:2px solid #e6e6e6;
}

.city_list>div{
    width:100%;
}
.city_list_name_item{
    line-height:0.45rem;
    margin-left:0.13rem;
    width:100%;
    border-bottom:2px solid #e6e6e6;
    font-size:0.14rem;
}


.city_list_index{
    position:fixed;
    right:0;
    top:0.25rem;
}
.city_list_index>div{
    padding:0.05rem 0.05rem;
    font-size:0.07rem;
}




</style>