export default {
    path:"/perform/:path",
    component:_=>import("@pages/perform"),
    name:"perform",
    meta:{
        flag:true,
        requiredAuth:false,
    }
}