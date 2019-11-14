<template>
    <div class="scroll_container">
        <div class="scroll_loading" v-if="loadingFlag">
            <i class="fa fa-spinner fa-pulse"></i>
        </div>
        <div class="wrapper" ref="wrapper">
            <!-- 插槽 -->
            <slot></slot>  
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name:"Kaiser-scroll",
    data(){
        return{
            loadingFlag:false
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            //开启下拉刷新
            pullDownRefresh:{
                threshold:50,

            },
            //开启上拉加载更多 
            pullUpLoad:true
        })
    },
    methods:{
        handleScroll(){
            this.scroll.on("scroll",this.handleScrollCb)
        },
        handleScrollCb(){
            this.scroll.on("scroll",({y})=>{
                if(y>50){
                    this.loadingFlag=true;
                }
            })
        },
        //下拉刷新
        handlepullingDown(callback){
            this.scroll.on("pullingDown",()=>{
                callback();
            })
        },
        //下一次更新 使用的方法
        handlefinishPullDown(){
            //通知 进行下一次刷新
            this.scroll.finishPullDown();
            //重新计算better-scroll;
            this.scroll.refresh();
            setTimeout(()=>{
                this.loadingFlag=false;
            },500)
        } ,
        //上拉加载更多
         handlepullingUp(callback){
             this.scroll.on("pullingUp",()=>{
                 callback();
             })   
         },
         handlefinishPullUp(){
             //通过 better-scroll 可以进行下一次加载
             this.scroll.finishPullUp();
             //重新计算better-scroll
             this.scroll.refresh();
         }

    }
}
</script>
<style>
    .wrapper,.scroll_container{
        height:100%;
        overflow: hidden;
    }
    .scroll_loading{
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.2rem;
    }
</style>