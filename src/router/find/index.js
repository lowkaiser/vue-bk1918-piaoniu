export default {
    path:'/find',
    component:_=>import("@pages/find"),
    name:"find",
    meta:{
        flag:true,
        requiredAuth:false,
    }
   
}