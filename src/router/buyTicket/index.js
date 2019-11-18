export default {
    path:"/buyTicket/:path",
    component:_=>import("@components/buyTicket"),
    name:"buyTicket",
    props:true,
    meta:{
        flag:false,
        requriedAuth:false
    }
}