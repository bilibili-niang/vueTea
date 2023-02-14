import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/list",
        name: "List",
        component: () =>
            import("../views/List.vue"),
    }, {
        path: "/tea",
        name: "Tea",
        component: () =>
            import("../views/Tea.vue"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: () =>
            import("../views/Cart.vue"),
    },
    {
        path: "/my",
        name: "My",
        component: () =>
            import("../views/My.vue"),
    },
    {
        path: "/search",
        name: "Search",
        children: [
            {
                // 默认子路由
                path: '/',
                name: 'index',
                component: () =>
                    import("../views/search/SearchIndex.vue"),
            },
            {
                // 搜索结果子路由
                path: "/list",
                name: "list",
                component: () =>
                    import("../views/search/List.vue"),
            }
        ],
        component: () =>
            import("../views/Search.vue"),
    },
    {
        path: "/detail",
        name:'Detail',
        component: ()=>import('../views/Detail.vue')
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
