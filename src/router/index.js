import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../view/homePage.vue';
import aboutUs from '../view/aboutUs.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
        path:'/',
        component:homePage,
        name:"homePage"
    },
    {
        path:'/aboutUs',
        component:aboutUs,
        name:"aboutUs"
    }
  ]
});
