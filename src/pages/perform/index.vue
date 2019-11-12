<template>
    <div class="page">
        <Header iconRight=""/>
         <div class="category-home-list">
                <div class="category-menu-wrap">
                    <ul class="category-menu-item-container">
                        <li class="category-menu-item category-menu-item-select">全部分类</li>
                        <li class="category-menu-item">演唱会</li>
                        <li class="category-menu-item">话剧歌剧</li>
                        <li class="category-menu-item">休闲展览</li>
                        <li class="category-menu-item">体育赛事</li>
                        <li class="category-menu-item">旅游玩乐</li>
                        <li class="category-menu-item">音乐会</li>
                        <li class="category-menu-item">儿童亲子</li>
                        <li class="category-menu-item">舞蹈芭蕾</li>
                        <li class="category-menu-item">戏曲综艺</li>
                    </ul>
                </div>
            </div>
            <div class="listing-filter-item-wrap">
                <div class="listing-filter-item listing-filter-item--pop">综合排序</div>

                <div class="listing-filter-item listing-filter-item--pop">全部时间</div>
                <div class="listing-filter-pop" style="display:none;"></div>
                <a href="/sz-concerts/seatMap" class="listing-filter-item">在线选座</a>

            </div>
            <div class="activity-list-container">
                <div class="ui-list">
                    <ul class="activities">
                        <div class="bimg">
                            <img
                                src="https://img.piaoniu.com/searchBanner/67f75d69e260738648adad6b66872f4b38af7907.png">
                        </div>
                        <li class="box">
                            <img
                                src="https://img.piaoniu.com/poster/3abd82ea4a0adb225a0ed6227ca78a809b98de9e.jpg?imageView2/2/w/164/h/220/format/jpg/q/60">
                            <div class="info">
                                <div class="title-line">
                                    [深圳]廖昌永独唱音乐会系列之《难忘的旋律》
                                </div>
                                <div class="time-address">
                                    <span class="time">2019.12.24 20:00</span>
                                    <span class="split">|</span>
                                    <span class="address">深圳大剧院大剧场</span>
                                </div>
                                <div class="no-rank">暂无评分</div>
                                <div class="price-wrap">
                                    <span class="price">904</span>
                                    <span class="qi">元起</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"Perform",

}
</script>
<style>
.category-menu-wrap {
    height:0.4rem;
    
}

.category-menu-item-container {
    width:100%;
    height:0.4rem;
    overflow-x: auto;
    white-space:nowrap;
    display: flex;
}
.category-menu-item {
    display:block;
    color: #333;
    margin: 0 0.15rem;
    padding: 0.1rem 0;
}


.listing-filter-item-wrap{
    border-top:1px solid #ccc;
    display:flex;
    justify-content:space-around;
    align-items:center;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.15);
} 
.listing-filter-item {
    font-size: 0.12rem;
    color: #666;
    text-align: center;
    padding: 0.1rem 0;
}

.ui-list{
    width:100%;
}
.ui-list  .activities {
    margin:0 0.15rem;
}
.activities .bimg{
    height:0.9rem;
}
.activities .bimg img {
    height:0.9rem;
    padding-top: 0.15rem;
}

.activities .box{
    height:1.46rem;
    padding-top:0.15rem;
    display: flex;
}
.activities .box img{
    width:0.75rem;
    height:1rem;
}
.activities .box .info{
    width:1.98rem;
    height:100%;
    margin-left:0.2rem;
    border-bottom: 1px solid hsla(0,0%,90%,.5);
}
.activities .box .info .title-line{
    font-size: 0.15rem;
    color: #333;
    line-height: 0.22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
}
.activities .box .info .time-address{
    font-size: 0.12rem;
    color: #999;
    margin-top: 9px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.activities .box .info .no-rank{
    font-size: 0.1rem;
    color: #999;
    margin:0.04rem 0 0.16rem;
}
.activities .box .info .price-wrap{

}
.activities .box .info .price-wrap .price{
    color: #ff2661;
    font-size: 0.18rem;
    font-weight: 700;
}
.activities .box .info .price-wrap .qi{
    font-size: 0.1rem;
    color: #999;
} 


</style>