import http from "@utils/request";

export const handleLogined = (tel, pwd) => http({
    method: "get",
    url: "/users/login?tel="+tel+"&pwd="+pwd,
    success:function(res){
        console.log(res)
    }
})

export const handleRegister = (tel,pwd)=> http({
    method:"get",
    url:"/users/register?tel="+tel+"&pwd="+pwd,
    success:function(res){
        console.log(res)
    }
})
