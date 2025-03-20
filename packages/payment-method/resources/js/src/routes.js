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
                path: "payment-methods",
                name: "admin-payment-methods-list",
                component: () => import("./views/payment-methods/PaymentMethods"),
                meta: {
                    rule: "admin",
                    permission: "access-payment-methods",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Payment Methods", active: true }
                    ],
                    pageTitle: "Payment Methods"
                }
            },


        ]
    }
];

export default routes;
