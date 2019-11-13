import Mock from "mockjs"

const data=Mock.mock({
    "list|20":[
        {
            "id|+1":1,
            "username":"@cname",
            "tel":/^1(3|5|7|8|9)\d{9}$/,
            "pwd":/^\w{6,16}$/,
            "userPic":"@image('100x100','#ccc','#fff','pic')",
            
        }
    ]
})

//console.log(data)

Mock.mock(/\/users\/list/,"get",(options)=>{
    //console.log(options)
    var obj={
        code:200,
        errMsg:"",
        data:{
            list:[]
        }
    }

    for(var i=0;i<data.list.length;i++){
        obj.data.list.push(data.list[i])

    }
    return obj;
})

