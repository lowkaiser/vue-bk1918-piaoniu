<template>
    <div>
        <div class="hot_city">
            <div class="hot_title">
                <span>热门城市</span>
                </div>
            <div class="hot_city_list">
                <div class="hot_city_name">北京</div>
                <div class="hot_city_name">北京</div>
                <div class="hot_city_name">北京</div>
                <div class="hot_city_name">北京</div>
                <div class="hot_city_name">北京</div>
            </div>
        </div>
        <div class="city_list">
            <div class="city_list_item">
                <div class="city_title_letter">A</div>
                <div class="city_list_name">
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                </div>
            </div>
            <div class="city_list_item">
                <div class="city_title_letter">A</div>
                <div class="city_list_name">
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                </div>
            </div>
            <div class="city_list_item">
                <div class="city_title_letter">A</div>
                <div class="city_list_name">
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                    <div class="city_list_name_item">北京</div>
                </div>
            </div>
        </div>
        <div class="city_list_index">
            <div class="index_item">A</div>
            <div class="index_item">A</div>
            <div class="index_item">A</div>
            <div class="index_item">A</div>
            <div class="index_item">A</div>
            <div class="index_item">A</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"City",
}
</script>
<style>
.city_body{
    background:#ebebeb;
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
    padding-right:0.3rem;
    display:flex;
    flex-wrap:wrap;
}
.hot_city_name{
    margin-top:0.15rem;
    margin-left:0.13rem;
    width:0.95rem;
    height:0.33rem;
    background:#fff;
    text-align:center;
    line-height:0.33rem;
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
    top:0.5rem;
}
.city_list_index>div{
    padding:0.1rem 0.05rem;
    font-size:0.14rem;
}




</style>