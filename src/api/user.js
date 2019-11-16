import http from "@utils/request";


export const handleRegister = (username,password) => http({
    method: "get",
    url: "/users/register",
    data: {
        username,
        password
    },
    
})

export const handleLogined = (username,password) => http({
    method: "get",
    url: "/users/login",
    data: {
        username,
        password
    }
})




