import Vue from "vue";
import Header from "./header";
import Bscroll from "./bscroll";
import Mined from "./mine";
import Noresult from "./noresult"

let  componentMap=[
    Header,
    Bscroll,
    Mined,
    Noresult

];
componentMap.forEach(item=>{
    Vue.component(item.name,item)
})