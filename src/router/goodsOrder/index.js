export default {
    path:"/goodsOrder",
    component:_=>import("@pages/goodsOrder"),
    name:"goodsOrder",
    props:true,
    meta:{
        flag:false,
        requriedAuth:false
    }
}