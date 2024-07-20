import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './Views/AppHome.vue';
import AppBoolfolio from './Views/AppBoolfolio.vue';
import AppAbout from './Views/AppAbout.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/boolfolio',
            name: 'Boolfolio',
            component: AppBoolfolio
        },
        {
            path: '/about',
            name: 'About',
            component: AppAbout
        },
    ]
});
export { router };
