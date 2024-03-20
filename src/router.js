import Vue from "vue";
import Router from "vue-router";
import HomeViews from "./views/HomeViews.vue";


Vue.use(Router);

export default new Router({
    routes:[
        {
            path:"/",
            component: HomeViews,
        },
    ]
})