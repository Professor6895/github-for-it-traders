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
                path: "data-import",
                name: "admin-data-import",
                component: () => import("./views/DataImport"),
                meta: {
                    rule: "admin",
                    permission: "access-data-import",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Data Import", active: true }
                    ],
                    pageTitle: "Data Import"
                }
            }
        ]
    }
];

export default routes;
