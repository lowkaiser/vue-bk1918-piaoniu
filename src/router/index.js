import  Vue from "vue";
import VueRouter from "vue-router";
import home from  "./home";
import perform from "./perform";
import find from "./find";
import login from "./login";
import message from "./message";
import mine from "./mine";
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
        find,
        login,
        message,
        mine
    ]
})

export default router;
