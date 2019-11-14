import http from "@utils/request";

export const handleLogined = (tel, pwd) => http({
    method: "get",
    url: "/users/list?tel="+tel+"&pwd="+pwd,
    success:function(res){
        console.log(res)
    }
   
})
