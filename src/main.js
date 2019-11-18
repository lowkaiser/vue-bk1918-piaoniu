import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch";
import store from "./store";
import "@common/components";
import "@common/filter";
import { Swipe, SwipeItem } from 'vant';
import { Sticky } from 'vant';
import { SubmitBar } from 'vant';
import { ActionSheet } from 'vant';
import { Toast } from 'vant';
import VueCookies from 'vue-cookies'





Vue.use(VueCookies);
Vue.use(ActionSheet);
Vue.use(SubmitBar);
Vue.use(Toast);
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);

Vue.use(Sticky);
import "./mock"
Vue.use(Swipe).use(SwipeItem);
Vue.use(VueTouch,{name:"v-touch"});
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
