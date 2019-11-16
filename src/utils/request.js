import axios from "axios";

const server= axios.create ({
    timeout:50000,
    withCreadentials:true 
})


//请求拦截
server.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params ={...config.data};
    }
    // config.headers["content-type"] = "applicetion/json";
    // config.headers["token"] = "";
    return config;
}),(err)=>{
    return Promise.reject(err);
}


server.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
}),(err)=>{
    return Promise.reject(err);
}



export default server;


