import http from "@utils/request";

//近期热门 借口
export const HotData = (pageIndex) => http({
    method: "get",
    url: "/api/v1/activities/hot",
    data: {
        pageIndex,
        pageSize: 10
    }
})
//搜索接口
export const SearchData = (input) => http({
    method: "get",
    url: "/api/v2/activities/suggest",
    data: {
        input,
        size: 14
    }
})
//折扣专区
export const discountRate = (pageIndex) => http({
    method: "get",
    url: "/api/v1/activities/discount",
    data: {
        pageIndex,
        pageSize: 10
    }
})
//猜你喜欢
export const gussLike = (pageIndex) => http({
    method: "get",
    url: "/api/v2/home/recommends",
    data: {
        pageIndex,
        pageSize: 10
    }
})
//  详情页 接口
export const detailsData = (input) => http({
    method: "get",
    url: "/api/v2/activities/suggest",
    data: {
        input,
        size: 14
    }
})
// 艺人详情信息
export const personsData = (id) => http({
    method: "get",
    url: "/api/v1/actor/"+id,
    data: {
      
    }
})
//热门信息搜索
export const hotPerData = () => http({
    method: "get",
    url: "api/v1/activities/hottest",
    data: {
      
    }
})

