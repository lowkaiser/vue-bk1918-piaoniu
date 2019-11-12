export default {
    path:"/message",
    component:_=>import("@pages/message"),
    name:"message",
    meta:{
        flag:true,
        requiredAuth:true,
    }
}