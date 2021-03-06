import Vue from "vue";
import Vuex from "vuex";
import city from "./city";
import search from "./search";
import ticket from "./ticket"

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        city,
        search,
        ticket
    }
})