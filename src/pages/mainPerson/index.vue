<template>
    <div>
        <header> <!--背景是模糊的  必须定位上去  这是父级 -->
        <div class="top" >
             <!--  此处是设模糊 -->
            <div class="ctnter">
                <i>☣</i>
                <span>用户1234567</span>
            </div>
        </div>
         <div class="middle"> <!--定位到上面    1 -->
            <div class="left">
                <div class="L_img">
                </div>
            </div>
            <div class="right">
                <p><span>{{user}}</span><span>新手</span></p>
                <p>这家伙很懒 什么都没有留下</p>
            </div>
       
    </div>
        <div class="footer">
            <div class="left2">
                <div class="box">
                    <p>0</p>
                    <p>关注</p>
                </div>
                |
                <div class="box">
                        <p>0</p>
                        <p>关注</p>
                    </div>
            </div>
            <div class="right2">
                <div class="box2">
                     下载APP更新资料
                </div>
            </div>
        </div>
    </header>
    <main>
        <ul>
            <li class="li"> 全部</li>
            <li>评论</li>
            <li>想看</li>
        </ul>
        <div class="center1">
            <img src="pic" alt="">
            <p>没有结果</p>
        </div>
    </main>
    </div>
</template>

<script>
export default {
    data(){
    return{
            user:'',
            pic:''
           }
    },
     created() {
    
    this.user =this.$cookies.get("name");
    this.pic =this.$cookies.get("urlPic");
  },
}
</script>

<style scoped>
    
body{
    display: flex;
    flex-direction: column;
   
}
header {
    position: relative;
}
.top{
    width: 100%;
    height:1.9rem;
    z-index: 0;
    background-image: url("//static.piaoniu.com/m/static/img/defaultAvatar.99f8eed.png");
    background-size: cover;
    filter: blur(10px);
    background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.7));
   

   
}
/* .top_box{
    width: 100%;
    height:1.9rem;
  
} */

 .center{
    width:100%;
    height:0.44rem;
    position: relative;
    font-size:0.17rem;
    color: #525252;
    display: flex;
    justify-content: center;
    align-items: center; 
}
 .center i{
    width: 0.44rem;
    height:0.44rem;
    display: block;
    text-align: left;
    line-height: 0.44rem;
    position: absolute;
    left: 0.2rem;
}
 .center span{
    font-size: 0.17rem;
    white-space: nowrap;
    font-weight: 500;
    text-overflow: ellipsis;
}
 .middle{
    width:100%;
    height:0.85rem;

    position: absolute;
    top:0.44rem;;
    display: flex;
    
}
 .middle .left{
    width:0.8rem;
    height:1rem;

    margin-left:0.24rem;
    position: relative;
    
}
 .middle .left .L_img{
    width:0.8rem;
    height:0.8rem;
    position: absolute;
    bottom: 0;
    background: #000;
    background-size: cover;
    background-position: center;
    border: 2px solid #fff;
    box-sizing: border-box;
    border-radius: 50%;
    background-image: url(//static.piaoniu.com/m/static/img/defaultAvatar.99f8eed.png);
   z-index: 999;
}
.middle .right{
    width:2.16rem;
    height:0.85rem;
    display: flex;
    padding: 0.2rem 0.15rem 0;
    font-size:0.18rem;
    color: #fff; 
    flex-direction: column;
}
.middle .right p:nth-child(1){
    height:0.232rem;
    display: flex;
}
.middle .right p:nth-child(1) span:nth-child(1){
    width:1.1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    font-weight: 700;
}
.middle .right p:nth-child(1) span:nth-child(2){
    height: 0.2rem;
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.16);
    padding: 2px 7px;
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
    font-size: 0.12rem;
    background-color: rgba(255, 255, 255, 0.16);
    position: relative;
    bottom: -3px;
}
.middle .right p:nth-child(2){
    height:0.144rem;
    font-size: 0.12rem;
    color: #fff;
    margin-top:0.05rem;
}
.footer{
    width:100%;
    height:0.35rem;
    position: absolute;
    top:1.3rem;
    padding-left:0.15rem;
    margin:0.2rem 0 0.05rem 0;

    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    color: #fff;
    border-top: 0;
}
.footer .left2{
    display: flex;
    width:40%;
    height: 0.35rem;
   align-items: center;
}
.footer .left2 .box{
    width:0.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.footer .left2 .box:nth-child(1){
    margin-right:0.1rem;
}
.footer .left2 .box:nth-child(2){
    margin-left:0.1rem;
}
.footer .left2 .box p:nth-child(1){
    height:0.18rem;
    color: #fff;
    margin-bottom: 0.03rem;
    
}
.footer .left2 .box p:nth-child(2){
    font-size: 0.12rem;
    color: #fff;
}
.footer .right2{
    width:1.12rem;
    margin-right: 0.1rem;
    height: 0.3rem;
    line-height: 0.3rem;
    padding: 0 6px;
    border: 2px solid #fff;
    border-radius: 3px;
    font-size: 0.12rem;
}
main{
    flex: 1;
    -background: #f5f5f5;
}
main ul{
    width:100%;
    height:0.46rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
main ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    width:0.46rem;
    height: 100%;
    font-size: 0.16rem;
    color: #999;
    margin: 0 0.16rem;
}

.li{
    color: #ff2661;
    border-bottom: 1px solid #ff2661;
}
main .center1{
    display: block;
    position: static;
    background-color: transparent;
    width: 100%;
    bottom: 0;
    margin: 0 auto;
    margin-top: 40px;
    padding-top: 0;
    padding-bottom: 40px;
    z-index: 9;
    font-size: 0.16rem;
}
main .center1 img{
    margin: 0 auto;
    width: 37px;
    display: block;
}
main .center1 p{
    margin-top: 18px;
    color: #999;
    text-align: center;
}


</style>