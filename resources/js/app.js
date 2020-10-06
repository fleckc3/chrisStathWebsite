require('./bootstrap');
import Vue from "vue";
import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";


window.Vue = require('vue');
Vue.use(VueRouter);


const app = new Vue({
    mode: 'history',
    el: '#app',
    router,
    components: {
        index: Index,
    }
});
