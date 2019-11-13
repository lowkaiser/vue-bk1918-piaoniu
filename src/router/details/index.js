export default {
    path:"/details",
    component:_=>import("@components/details"),
    name:"details",
    meta:{
        flag:true,
        requriedAuth:false
    }
}