<template>
    <div class="page">
        
        <div class="header_box">
        <div class="header">
            <!-- <div class="header_btn"><img src="http://static.piaoniu.com/m/static/img/back-grey.b0b2b3e.png" alt="">
            </div> -->
            <div class="header_title">
                <p>我的</p>
            </div>
        </div>
    </div>

    <div class="center">

        <!-- 个人主页 -->
        <div class="person_box">
            <div class="person">
                <div class="person_info">
                    <img src="http://static.piaoniu.com/m/static/img/defaultAvatar.99f8eed.png" alt=""
                        class="person_img">
                    <div class="person_info_rig">
                        <div class="person_per">
                            <router-link tag="p" to="/login">登录</router-link>
                        </div>
                        <div class="person_btn">
                            <p>个人主页</p>
                            <img src="http://static.piaoniu.com/m/static/img/arr-right.1655c6a.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="person_counts">
                <div class="count_box">
                    <p class="count_num">0</p>
                    <p class="count_text">想看</p>
                </div>
                <div class="count_box">
                    <p class="count_num">0</p>
                    <p class="count_text">评论</p>
                </div>
                <div class="count_box">
                    <p class="count_num">0</p>
                    <p class="count_text">关注</p>
                </div>
                <div class="count_box">
                    <p class="count_num">0</p>
                    <p class="count_text">粉丝</p>
                </div>
            </div>
        </div>

        <!-- 我的订单 -->
        <div class="myOrder_box">
            <div class="myOrder">
                <p>我的订单</p>
                <div class="allOrder">
                    <p>查看全部订单</p>
                    <img src="http://static.piaoniu.com/m/static/img/arr-right.1655c6a.png" alt="">
                </div>
            </div>
            <div class="orderGoods">
                <div class="order_text">
                    <img src="http://static.piaoniu.com/m/static/img/order-topay.4cf62ce.png" alt="">
                    <p>待付款</p>
                </div>
                <div class="order_text">
                    <img src="http://static.piaoniu.com/m/static/img/order-topay.4cf62ce.png" alt="">
                    <p>待发货</p>
                </div>
                <div class="order_text">
                    <img src="http://static.piaoniu.com/m/static/img/order-topay.4cf62ce.png" alt="">
                    <p>待收货</p>
                </div>
            </div>
        </div>

        <!-- 优惠 -->
        <div class="free_box">
            <div class="free">
                <p>0</p>
                <p>优惠券</p>
            </div>
            <div class="free">
                    <p>0</p>
                    <p>礼品卡</p>
            </div>

        </div>

        <!-- 我的福利 -->
        <div class="myWelfare">
            <p>我的福利</p>
           <div class="welfare_box">
                <div class="welfare">
                    <img src="http://static.piaoniu.com/m/static/img/icon-redpackage.e078ab8.png" alt="">
                    <div class="invite">
                        <p>邀请好友</p>
                        <p>返10元现金</p>
                    </div>
                </div>
                <div class="welfare">
                        <img src="http://static.piaoniu.com/m/static/img/icon-redpackage.e078ab8.png" alt="">
                        <div class="invite">
                            <p>圈圈俱乐部</p>
                            <p>达人专享奖励</p>
                        </div>
                </div>
           </div>
        </div>


        <!-- 地址管理 -->
        <div class="manage_box">
            <div class="manage">
                <p>地址管理</p>
                <img src="http://static.piaoniu.com/m/static/img/arr-right.1655c6a.png" alt="">
            </div>
            <div class="manage">
                    <p>客服与帮助</p>
                    <img src="http://static.piaoniu.com/m/static/img/arr-right.1655c6a.png" alt="">
                </div>
                <div class="manage">
                        <p>买家招募</p>
                        <img src="http://static.piaoniu.com/m/static/img/arr-right.1655c6a.png" alt="">
                    </div>
        </div>

        <!-- 退出登录 -->
        <div class="quit">
            <p>退出登录</p>
        </div>

        <!-- 关于我们 -->
        <div class="footer">
               
                    <div>
                        <a href="/about/aboutUs.html">关于我们&nbsp;&nbsp;|&nbsp;&nbsp;</a>
                        <a href="/about/contactUs.html">联系我们</a>
                    </div>
                    <div>Copyright©2015-2018</div>
                </div>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    name:"Mine",
}
</script>
<style scoped>
    body{
    background:#f6f7f9;
}
/* header start */
.header_box{
    background: #fff;
    -height:0.44rem;
    width:100%;
    position: fixed;
    top:0;
    left:0;
}
.header{
    display: flex;
    
}
.header_btn{
    width:0.44rem;
    height:0.44rem;
    padding-left:0.14rem;
    display: flex;
    align-items: center;
}
.header_btn img{
    width:0.11rem;
    height:0.19rem;
   
}
.header_title{
    height:0.44rem;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    -padding-right:0.44rem;
}
.header_title p{
    font-size: 0.17rem;
    color:#525252;
}

.center{
    height:100%;
    margin-top:0.44rem;
}
/* 个人主页 */
.person_box{
    
    width:100%;
    background:linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
}
.pserson{
    display: flex;
}
.person_img{
    width:0.56rem;
    height:0.56rem;
    border-radius: 50%;
    margin:0 0.18rem;
}
.person_info{
    display: flex;
    height:1.22rem;
   align-items: center;
    
}
.person_info_rig{
    display: flex;
    flex:1;
    justify-content: space-between

}
.person_per{
    color:#ffffff;
}
.person_per p:nth-child(1){
    font-size: 0.18rem;
}
.person_per p:nth-child(2){
    border-radius: 10px;
    background:  rgba(255, 255, 255, 0.16);
    border:1px solid rgba(255, 255, 255, 0.16);
    font-size: 0.12rem;
    padding:0.02rem 0.07rem;
    width:0.4rem;
    margin-top:0.07rem;

}
.person_btn{
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.16rem;
    border-bottom-left-radius: 0.16rem;
    background-color: rgba(0, 0, 0, 0.13);
    width: 0.79rem;
    color: #fff;
    height:0.32rem;
    
}
.person_btn p{
    font-size: 0.12rem;
    padding-right:0.08rem;
    
}
.person_btn img{
    width:0.05rem;
    height:0.1rem;
    -align-self: center;
}

.person_counts{
    display: flex;
    color:#ffffff;
    width:100%;
    height:0.49rem;
    
}
.count_box{
    width:0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.person_counts p:nth-child(1){
    font-size: 0.15rem;
    line-height: 1.3;
    color:#fff;
}
.person_counts p:nth-child(2){
    font-size: 0.12rem;
    color:#fff;
}

/* 我的订单 */
.myOrder_box{
    background:#fff;
}
.myOrder{
    display: flex;
    justify-content: space-between;
    padding:0 0.19rem;
    height:0.45rem;
    align-items: center;
}
.myOrder p{
    font-size: 0.16rem;
}
.allOrder{
    display: flex;
    justify-content: center;
}
.allOrder p{
    font-size: 0.14rem;
    color: #999;
    margin-right:0.08rem;
}
.allOrder img{
    width:0.06rem;
    height:0.12rem;
    align-self: center;
    
}
.orderGoods{
    display:flex;
    height:0.68rem;
    align-items: center;
}
.order_text{
    width:33%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.order_text img{
    height:0.22rem;
    width:0.22rem;
    margin-bottom: 0.08rem;
}
.order_text p{
    font-size: 0.12rem;
}

/* 优惠 */
.free_box{
    margin-top:0.1rem;
    display: flex;
    background: #fff;
}
.free{
    width:50%;
    height:0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.free p:nth-child(1){
    font-size: 0.16rem;
    color:#ff2661;
    margin-bottom: 0.08rem;
}
.free p:nth-child(2){
    font-size: 0.12rem;
}

/* 我的福利 */
.myWelfare{
    background: #fff;
    margin-top:0.1rem;
    -display: flex;
    -flex-direction: column;
}
.myWelfare>p{
    font-size: 0.16rem;
    height:0.39rem;
    line-height: 0.39rem;
    color:#262626;
    padding-left:0.19rem;
}
.welfare_box{
    display: flex;
}
.welfare{
    width:50%;
    display: flex;
    height:0.79rem;
    align-items: center;
    justify-content: center;
}
.welfare img{
    width:0.48rem;
    height:0.48rem;
    border-radius: 50%;
    margin-right: 0.1rem;
}
.invite p:nth-child(1){
    font-size: 0.14rem;
    margin-bottom: 0.09rem;
}
.invite  p:nth-child(2){
    font-size: 0.11rem;
    color:#999;
}


/* 地址管理三栏 */
.manage_box{
    margin-top:0.1rem;
    background: #fff;
}
.manage{
    display: flex;
    justify-content: space-between;
    margin:0 0.19rem;
    height:0.44rem;
    align-items: center;
   
}
.manage img{
    width:0.06rem;
    height:0.12rem;
}
.manage p{
    color:#262626;
}

/* 退出登录 */
.quit{
    margin-top:0.1rem;
    background: #fff;
    display: flex;
    justify-content: center;
}
.quit p{
    color: #ff2661;
    font-size:0.14rem;
    line-height:0.44rem;

}

/* 关于我们 */
.footer{
    margin-top:0.25rem;
    font-size: 0.11rem;
    color:#ccc;
    text-align: center;

}
.footer a{
    font-size: 0.11rem;
    color:#ccc;
}



</style>