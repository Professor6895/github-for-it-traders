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
                path: "pages",
                name: "admin-pages",
                component: () => import("./views/pages/PageList"),
                meta: {
                    permission: 'pages-view',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Pages", active: true }
                    ],
                    pageTitle: "Pages"
                }
            },
            {
                path: "page/:id?",
                name: "admin-page-detail",
                component: () => import("./views/pages/PageDetail"),
                meta: {
                    rule: "admin",
                    permission: 'pages-add',
                    parent: "admin-pages",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Pages", url: "/admin/pages" },
                        { title: "Page Detail", active: true }
                    ],
                    pageTitle: "Page Detail"
                }
            }
        ]
    }
];

export default routes;
