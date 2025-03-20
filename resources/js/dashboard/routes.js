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
         // {
         //     path: "pages",
         //     name: "admin-pages",
         //     component: () => import("./views/pages/PageList"),
         //     meta: {
         //         rule: "admin",
         //         breadcrumb: [
         //             { title: "Home", url: "/admin/dashboard" },
         //             { title: "Pages", active: true }
         //         ],
         //         pageTitle: "Pages"
         //     }
         // },
         
     ]
 }
];

export default routes;
