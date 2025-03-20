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
              path: "coupon-discounts",
              name: "admin-coupon-discounts-list",
              component: () => import("./views/discounts/Coupon/CouponDiscounts"),
              meta: {
                  rule: "admin",
                  breadcrumb: [
                      { title: "Home", url: "/admin/dashboard" },
                      { title: "Coupon Discounts", active: true }
                  ],
                  pageTitle: "Coupon Discounts"
              }
          },
          {
            path: "coupon-discount/:id?",
            name: "admin-coupon-discounts-detail",
            component: () => import("./views/discounts/Coupon/CouponDiscountDetail"),
            meta: {
                rule: "admin",
                permission: 'discounts-add',
                parent: "admin-coupon-discounts-list",
                breadcrumb: [
                    { title: "Home", url: "/admin/dashboard" },
                    { title: "Coupon Discounts", url: "/admin/coupon-discounts" },
                    { title: "Discount Detail", active: true }
                ],
                pageTitle: "Discount Detail"
            }
        }
        
      ]
  }
];

export default routes;
