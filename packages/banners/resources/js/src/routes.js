const routes = [
    {
        // =============================================================================
        // MAIN LAYOUT ROUTES
        // =============================================================================
        path: "/admin",
        component: () => import("@/layouts/main/Main.vue"),
        meta: {
            authRequired: true
        },

        children: [
            {
                path: "banners",
                name: "admin-banners",
                component: () => import("./views/banners/BannerList"),
                meta: {
                    permission: 'view-banners',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Banners", active: true }
                    ],
                    pageTitle: "Banners"
                }
            },
            {
                path: "banner/:id?",
                name: "admin-banner-detail",
                component: () => import("./views/banners/BannerDetail"),
                meta: {
                    rule: "admin",
                    permission: 'add-banner',
                    parent: "admin-banners",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Banners", url: "/admin/banners" },
                        { title: "Banner Detail", active: true }
                    ],
                    pageTitle: "Banner Detail"
                }
            }
        ]
    }
];

export default routes;
