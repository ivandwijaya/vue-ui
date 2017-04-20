import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./assets/js/pages/Home.vue')
    },
    {
        path: '/about',
        component: require('./assets/js/pages/About.vue')
    },
    {
        path: '/documentation',
        component: require('./assets/js/pages/Documentation.vue')
    },
    {
        path: '/faq',
        component: require('./assets/js/pages/Faq.vue')
    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    mode: 'history'
});