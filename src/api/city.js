import http from "@utils/request";
/*
    所有城市
    接口城市列表
*/
export const cityApi = ()=>http({
    method:"get",
    url:"/api/v1/cities/",
})
/*
    热门城市
    接口城市列表
*/
export const hotCityApi = ()=>http({
    method:"get",
    url:"/api/v1/cities/hot",
    data:{}
})
