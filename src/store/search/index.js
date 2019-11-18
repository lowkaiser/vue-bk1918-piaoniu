import { SearchData,detailsData } from "@api/home";
let state = {
    searData:[],
    searchList:[],
    searHistory:JSON.parse(sessionStorage.getItem("searHistory"))||[],
}
let actions = {
    async handleActionsData({commit},input) {
        let data = await SearchData(input);
        commit("handleMutationsData",{data,input});
    },
    async handleActionHot({commit},input){
        let data = await detailsData(input);
        console.log(data);
        commit("handleMutationsHot",data);
    }
   
}
let mutations = {
    handleMutationsHot(state,params){
        state.searchList=params;
    },
    handleMutationsData(state,params){
        let {data,input}=params;
        let obj={}
        obj.name=input;
       
        function isExist(){
            let has=true;
            for(var i=0;i<state.searHistory.length;i++){
                if(state.searHistory[i].name==input){
                    has=false;
                    break;
                }else{
                    has=true;
                }
            }
            return has;
        }
        if(isExist()){
            state.searHistory.push(obj);
        }
        state.searData=data;
        sessionStorage.setItem("searHistory",JSON.stringify(state.searHistory))
    },
    hanldeMutations(state,index){
        state.searHistory.splice(index,1);
        sessionStorage.setItem("searHistory",JSON.stringify(state.searHistory))
    },
    hanldeMutationsAll(state){
        state.searHistory.splice(0);
        sessionStorage.setItem("searHistory",JSON.stringify(state.searHistory))
    },
    handleMutationSend(state,params){
        console.log(params);
    }
}
export default {
    state,
    actions,
    mutations,
    namespaced: true,
}