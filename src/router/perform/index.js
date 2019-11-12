export default {
    path:"/perform",
    component:_=>import("@pages/perform"),
    name:"perform",
    meta:{
        flag:true,
        requiredAuth:false,
    }
}