import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "admin-index",
            component: () => import("../views/IndexView.vue"),
            children: [
                {
                    path: "",
                    name: "dashboard",
                    alias: "/dashboard",
                    component: () => import("../views/DashboardView.vue")
                },
                {
                    path: "about",
                    name: "about",
                    component: () => import("../views/AboutView.vue")
                },
                {
                    path: "product",
                    name: "product",
                    component: () => import("../views/ProductView.vue")
                },
                {
                    path: "achievement",
                    name: "achievement",
                    component: () => import("../views/AchievementView.vue")
                },
                {
                    path: "news",
                    name: "news",
                    component: () => import("../views/NewsView.vue")
                },
                {
                    path: "contact",
                    name: "contact",
                    component: () => import("../views/ContactView.vue")
                }
            ]
        },
        {
            path: "/login",
            name: "user-login",
            component: () => import("../views/ProductView.vue")
        }

    ]
})

export default router