export default {
    path:"/login",
    component:_=>import("@pages/login"),
    name:"login",
    meta:{
        flag:false,
        requiredAuth:false,
    },
    
    
    children:[
        {
         path:"",
         redirect:"logined",
        },
        
        {
        path:"logined",
        component:_=>import("@components/logined"),
        name:"logined",
        
        meta:{
            flag:false,
            requiredAuth:false,
        },
        }, {
        path:"register",
        component:_=>import("@components/register"),
        name:"register",
        meta:{
            flag:false,
            requiredAuth:false,
        },
    }
       
    ]
} 