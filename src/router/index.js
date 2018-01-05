import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../view/homePage.vue';
import assortment from '../view/assortment.vue';
import scene from '../view/scene.vue';
import news from '../view/news.vue';
import technique from '../view/technique.vue';
import map from '../view/map.vue';
import aboutUs from '../view/aboutUs.vue';
import about from '../view/aboutUs/about.vue';
import connect from '../view/aboutUs/connect.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path:'/',
        component:homePage,
        name:"homePage"
    },
    {
        path:'/assortment',
        component:assortment,
        name:"assortment"
    },
    {
        path:'/scene',
        component:scene,
        name:"scene"
    },
    {
        path:'/news',
        component:news,
        name:"news"
    },
    {
        path:'/technique',
        component:technique,
        name:"technique"
    },
    {
        path:'/map',
        component:map,
        name:"map"
    },
    {
        path:'/aboutUs',
        component:aboutUs,
        name:"aboutUs",
        children:[
            {
                path:'about',
                component:about,
                name:"about"
            },
            {
                path:'connect',
                component:connect,
                name:"connect"
            }
        ]
    }
  ]
});
