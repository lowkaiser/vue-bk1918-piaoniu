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
//全部 详情页面 
// https://m.piaoniu.com/api/v3/activities
// export const  detailsData = (pageIndex)=>http({
//     method:"get",
//         url:"/api/v3/activities",
//         data:{
//             pageIndex,
//             categoryId: 1,
//             seatMap: false,
//             snapUpActivity: false,
//             sort: "",
//             time: "",
//             highestPrice:"",
//             lowestPrice:"",
//             pageSize:10
//         }
// })
