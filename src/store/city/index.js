import { cityApi, hotCityApi } from "@api/city";
let state = {
    allcityList: JSON.parse(sessionStorage.getItem("allcityList"))||[],
    hotCity: JSON.parse(sessionStorage.getItem("hotCity")) || [],
    cityId:JSON.parse(sessionStorage.getItem("cityId")) || 2,
    cityName:JSON.parse(sessionStorage.getItem("cityName")) || "北京",
}
let actions = {
    async handleGetAllCity({commit},params) {
        let data = await cityApi();
        commit("handleGetComAllCity",data);
    },
    async hanldeGetHotCity({commit},params){
        let data = await hotCityApi();
        commit("handleGetComHotCity",data);
    }
}
let mutations = {
    handleComCity(state,child){
        state.cityId=child.cityId;
        state.cityName=child.cityName;
        sessionStorage.setItem("cityId",JSON.stringify(state.cityId))
        sessionStorage.setItem("cityName",JSON.stringify(state.cityName))
    },
    handleGetComAllCity(state,allCities){
        /*
            allcity:[
                {
                    index:A,
                    list:[{id:"",cityName:""}]
                }
            ]
        */
       let allcityList=[];
       for(var i=0;i<allCities.length;i++){
           //获取首字母  slice 提取首字母  
            let letterFirst = allCities[i].cityAbbrCode.slice(0,1).toUpperCase();
            if(isCityList(letterFirst)){
                //不存在
                allcityList.push({index:letterFirst,list:[{cityId:allCities[i].cityId,cityName:allCities[i].cityName}]})
            }else{
                //存在
                for(var j=0 ;j<allcityList.length;j++){
                    if(allcityList[j].index== letterFirst){
                        allcityList[j].list.push({cityId:allCities[i].cityId,cityName:allCities[i].cityName});
                        break;
                    }   
                }
            }
        }
        //判断城市表示时候在cityList中
        function isCityList(letterFirst){
            var bStop = true;
            for(var i=0;i<allcityList.length;i++){
                if(allcityList[i].index == letterFirst){
                    bStop =false;
                    break;
                }
            }
            return bStop;
        }
        //字典排序 
        allcityList.sort((a,b)=>{
            if(a.index>b.index){
                return 1;
            }else{
                return -1;
            }
        })
        state.allcityList=allcityList;
        //缓存 
        sessionStorage.setItem("allcityList",JSON.stringify(allcityList))
         
    },
    handleGetComHotCity(state,hotCities){
        state.hotCity=hotCities;
        sessionStorage.setItem("hotCities",JSON.stringify(hotCities))
    }
}
export default {
    state,
    actions,
    mutations,
    namespaced: true,
}