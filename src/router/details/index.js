export default {
    path:"/details/:id/:properName",
    component:_=>import("@components/details"),
    name:"details",
    props:true,
    meta:{
        flag:false,
        requriedAuth:false
    }
}