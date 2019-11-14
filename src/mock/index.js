import Mock from "mockjs"

const data = Mock.mock({
    "list|20": [
        {
            "id|+1": 1,
            "username": "@cname",
            "tel": /^1(3|5|7|8|9)\d{9}$/,
            "pwd": /^\w{6,16}$/,
            "userPic": "@image('100x100','#ccc','#fff','pic')",
            

        }
    ]
})

let dataList = data.list
console.log(dataList)

// function findOne(tel) {
//     var obj = {
//         code: 200,
//         errMsg: "",
//         data: {
//             info: ""
//         }
//     }

//     for (let i = 0; i < dataList.length; i++) {

//         if (tel == dataList[i].tel) {
//             //this.$router.push("/mine")
//             console.log("成功");
//             obj.data.info = "成功";
//             break;
//         } else {
//             obj.data.info = "失败";
//         }
//     }
//     return obj;
// }
// Mock.mock(/\/users\/list/,"get",(options)=>{
//     // /users/list?tel=1234&pwd=3423
//     console.log(options.url.split("?")[1].split("&")[0].split("=")[1])
//     var obj={
//         code:200,
//         errMsg:"",
//         data:{
//             list:[]
//         }
//     }

//     for(var i=0;i<data.list.length;i++){

//         obj.data.list.push(data.list[i])

//     }
//     return obj;
// })
Mock.mock(/\/users\/list/, "get", (options) => {
    console.log(options)
    let tel = options.url.split("?")[1].split("&")[0].split("=")[1];
    let pwd = options.url.split("?")[1].split("&")[1].split("=")[1];
    var obj = {
        code: 200,
        errMsg: "",
        data: {
            info: "",
            list: []
        }
    }

    for (let i = 0; i < dataList.length; i++) {

        if (tel == dataList[i].tel && pwd == dataList[i].pwd) {
            //this.$router.push("/mine")
            obj.data.list.push(dataList[i])
            obj.data.info = "成功";
            break;
        } else {
            obj.data.info = "失败";
        }
    }
    return obj;
})
// export default {
//     findOne
// }
