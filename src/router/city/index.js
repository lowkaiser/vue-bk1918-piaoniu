export default {
    path:"/city/:path",
    component:_=>import("@pages/city"),
    name:"city",
    props:true,
    meta:{
        flag:true,
        requriedAuth:false
    }
}