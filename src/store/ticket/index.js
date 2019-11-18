
let state = {
    goodsAddress:JSON.parse(sessionStorage.getItem("goodsAddress")) || [],
    goodsTime:JSON.parse(sessionStorage.getItem("goodsTime")) || [],
    goodsPrice:JSON.parse(sessionStorage.getItem("goodsPrice")) || 0,
    goodsNum:JSON.parse(sessionStorage.getItem("goodsNum")) || 1,
    goodsName:JSON.parse(sessionStorage.getItem("goodsName")) || [],
}
let actions = {
  
}
let mutations = {
    handleMutationTime(state,time){
        state.goodsTime=time
        sessionStorage.setItem("goodsTime",JSON.stringify(state.goodsTime))
    },
    handleMutationPrice(state,price){
        state.goodsPrice=price
        sessionStorage.setItem("goodsPrice",JSON.stringify(state.goodsPrice))
    },
    handleMutationNum(state,num){
        state.goodsNum=num
        sessionStorage.setItem("goodsNum",JSON.stringify(state.goodsNum))
    },
    handleMutationSendAdd(state,address){
        state.goodsAddress=address;
        sessionStorage.setItem("goodsAddress",JSON.stringify(state.goodsAddress))
    },
    handleMutationSendName(state,name){
        state.goodsName=name
        sessionStorage.setItem("goodsName",JSON.stringify(state.goodsName))
    }
}
let getters = {
    countPrice(){
        let sPrice=0,sCount=0;
        sPrice = (state.goodsPrice * 10 * Number(state.goodsNum))/10;
        sCount = Number(state.goodsNum)
        return {sPrice,sCount}
    }
}
export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}