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
                path: "menus",
                name: "admin-menus",
                component: () => import("./views/menus/MenuList"),
                meta: {
                    rule: "admin",
                    permission:'view-menus',
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Menus", active: true }
                    ],
                    pageTitle: "Menus"
                }
            },
            {
              path: "menu-builder/:id?",
              name: "admin-menu-detail",
              component: () => import("./views/menus/MenuDetail"),
              meta: {
                  rule: "admin",
                  permission:'add-menu',
                  parent: "admin-menus",
                  breadcrumb: [
                      { title: "Home", url: "/admin/dashboard" },
                      { title: "Menus",url: "/admin/menus"  },
                      { title: "Menu Builder", active: true }
                  ],
                  pageTitle: "Menu Builder"
              }
          }
        ]
    }
];

export default routes;
