import  Vue from "vue";
import VueRouter from "vue-router";
import home from  "./home";
import perform from "./perform";
import login from "./login";
import message from "./message";
import mine from "./mine";
import search from "./search";
import city from "./city";
import details from "./details";
import goodsOrder from "./goodsOrder";
import mainPerson from "./mainPerson";
import wantWatch from "./wantWatch";
import wantTo from "./wantTo";
import wantFan from "./wantFan";
import wantComment from "./wantComment";
import allComment from "./allComment";
import myaddr from "./address"
import buyTicket from "./buyTicket";
Vue.use(VueRouter);

const router =new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"home"
        },
        home,
        perform, 
        login,
        message,
        mine,
        search,
        city,
        details,
        goodsOrder,
        mainPerson,
        wantWatch,
        wantTo,
        wantFan,
        wantComment,
        allComment,
        myaddr,
        buyTicket
    ]
})

// 全局守卫
 router.beforeEach((to,from,next)=>{
     if(to.path !="/login" && to.meta.requiredAuth){
         if(localStorage.getItem("token")){
             next();
         }else{
             next({name:"logined",params:{to:to.path}})
         }
     }else{
         next();
     }
 })


export default router;
