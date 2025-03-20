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
            //CATEGORIES
            {
                path: "product-categories",
                name: "admin-product-categories",
                component: () => import("./views/admin/product-categories/Categories"),
                meta: {
                    permission: 'view-product-categories',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Categories", active: true }
                    ],
                    pageTitle: "Categories"
                }
            },
            {
                path: "product-categories/:id/images",
                name: "admin-product-categories-images",
                component: () => import("./views/admin/product-categories/CategoryImages"),
                meta: {
                    permission: 'view-product-categories',
                    parent: 'admin-product-categories',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Category Images", active: true }
                    ],
                    pageTitle: "Category Images"
                }
            },

            // PRODUCT BRANDS
            {
                path: "product-brands",
                name: "admin-product-brands",
                component: () => import("./views/admin/product-brands/BrandsList"),
                meta: {
                    permission: 'view-brands',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Brands", active: true }
                    ],
                    pageTitle: "Brands"
                }
            },
            {
                path: "product-brands/:id/images",
                name: "admin-product-brands-images",
                component: () => import("./views/admin/product-brands/BrandImages"),
                meta: {
                    permission: 'view-brands',
                    parent: 'admin-product-brands',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Brand Images", active: true }
                    ],
                    pageTitle: "Brand Images"
                }
            },


            // PRODUCTS
            {
                path: "products",
                name: "admin-products",
                component: () => import("./views/admin/products/ProductsList"),
                meta: {
                    permission: 'view-products',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Products", active: true }
                    ],
                    pageTitle: "Products"
                }
            },
            {
                path: "product/:id?",
                name: "admin-product-detail",
                component: () => import("./views/admin/products/ProductDetail"),
                meta: {
                    permission: 'add-product',
                    parent: 'admin-products',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Products", url: '/admin/products' },
                        { title: "Product Detail", active: true }
                    ],
                    pageTitle: "Product Detail"
                }
            },

            {
                path: "product-classes",
                name: "admin-product-classes",
                component: () => import("./views/admin/product-classes/ProductClasses"),
                meta: {
                    permission: 'view-products',
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Product Classes", active: true }
                    ],
                    pageTitle: "Product Classes"
                }
            },

            //Campaigns
            {
                path: "discount-campaigns",
                name: "ecommerce-admin-discount-campaigns",
                component: () => import("./views/admin/discounts/DiscountCampaigns"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Discount Campaigns", active: true }
                    ],
                    pageTitle: "Discount Campaigns"
                }
            },
            {
                path: "discount-campaign/:id?",
                name: "ecommerce-admin-discount-campaign-detail",
                component: () => import("./views/admin/discounts/DiscountCampaignProducts"),
                meta: {
                    rule: "admin",
                    parent: "ecommerce-admin-discount-campaigns",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Discount Campaigns", url: "/admin/discount-campaigns" },
                        { title: "Discount Campaign Products", active: true }
                    ],
                    pageTitle: "Discount Campaign Products"
                }
            },

            {
                path: "shipping-charges",
                name: "ecommerce-admin-shipping-charges",
                component: () => import("./views/admin/shippings/ShippingCharges"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Shipping Charges", active: true }
                    ],
                    pageTitle: "Shipping Charges"
                }
            },



            //VENDORS
            {
                path: "vendors",
                name: "admin-vendors",
                component: () => import("./views/admin/vendors/VendorsList"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Vendors", active: true }
                    ],
                    pageTitle: "Vendors"
                }
            },
            {
                path: "vendor/:id?",
                name: "admin-vendor-detail",
                component: () => import("./views/admin/vendors/VendorDetail"),
                meta: {
                    rule: "admin",
                    parent: "admin-vendors",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Vendors", url: "/admin/vendors" },
                        { title: "Vendor Detail", active: true }
                    ],
                    pageTitle: "Vendor Detail"
                }
            },
            {
                path: "vendor/:id/detail",
                name: "admin-vendor-detail-view",
                component: () => import("./views/admin/vendors/VendorViewDetail"),
                meta: {
                    rule: "admin",
                    parent: "admin-vendors",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Vendors", url: "/admin/vendors" },
                        { title: "Vendor Detail", active: true }
                    ],
                    pageTitle: "Vendor Detail"
                }
            },


            //ORDERS
            {
                path: "orders",
                name: "ecommerce-admin-orders",
                component: () => import("./views/admin/orders/Orders"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Orders", active: true }
                    ],
                    pageTitle: "Orders"
                }
            },
            {
                path: "order/:id?",
                name: "ecommerce-admin-order-detail",
                component: () => import("./views/admin/orders/OrderDetail"),
                meta: {
                    rule: "admin",
                    parent: "ecommerce-admin-orders",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Orders", url: "/admin/orders" },
                        { title: "Order Detail", active: true }
                    ],
                    pageTitle: "Order Detail"
                }
            },

            //ORDERS
            {
                path: "pre-orders",
                name: "ecommerce-admin-pre-orders",
                component: () => import("./views/admin/orders/PreOrders"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Pre Orders", active: true }
                    ],
                    pageTitle: "Pre Orders"
                }
            },
            {
                path: "pre-order/:id?",
                name: "ecommerce-admin-pre-order-detail",
                component: () => import("./views/admin/orders/PreOrderDetail"),
                meta: {
                    rule: "admin",
                    parent: "ecommerce-admin-pre-orders",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Pre Orders", url: "/admin/orders" },
                        { title: "Pre Order Detail", active: true }
                    ],
                    pageTitle: "Pre Order Detail"
                }
            },

            {
                path: "faqs",
                name: "ecommerce-admin-faqs",
                component: () => import("./views/admin/faqs/faqs"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "FAQs", active: true }
                    ],
                    pageTitle: "FAQs"
                }
            },

            //EMI BANKS
            {
                path: "emi-banks",
                name: "ecommerce-admin-emi-banks",
                component: () => import("./views/admin/emi/Banks"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Banks", active: true }
                    ],
                    pageTitle: "Banks"
                }
            },

            //EMI REQUESTS
            {
                path: "emi-requests",
                name: "ecommerce-admin-emi-requests",
                component: () => import("./views/admin/emi/EmiRequests"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "EMI Requests", active: true }
                    ],
                    pageTitle: "EMI Requests"
                }
            },
            {
                path: "emi-request/:id",
                name: "ecommerce-admin-emi-request-detail",
                component: () => import("./views/admin/emi/EmiRequestDetail"),
                meta: {
                    rule: "admin",
                    parent: "ecommerce-admin-emi-requests",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "EMI Request Detail", active: true }
                    ],
                    pageTitle: "EMI Request Detail"
                }
            },


            //Product Reviews 
            {
                path: 'product-reviews',
                name: 'ecommerce-admin-product-reviews',
                component: () => import('./views/admin/reviews/Reviews'),
                meta: {
                    rule: 'admin',
                    breadcrumb: [
                        { title: 'Home', url: '/' },
                        { title: 'Reviews', active: true },
                    ],
                    pageTitle: 'Reviews',
                },
            },


            //SETTINGS
            {
                path: "settings/ecommerce",
                name: "admin-ecommerce-settigs",
                component: () => import("./views/admin/settings/Settings.vue"),
                meta: {
                    rule: "admin",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Ecommerce Setting", active: true }
                    ],
                    pageTitle: "Ecommerce Setting"
                }
            }


        ]
    },



    //VENDOR DASHBOARD ROUES
    {
        // =============================================================================
        // MAIN LAYOUT ROUTES
        // =============================================================================
        path: "/vendor",
        component: () => import("@/layouts/main/Main.vue"),
        meta: {
            authRequired: true,
            userType: "vendor"
        },
        children: [
            {
                path: "profile",
                name: "vendor-profile",
                component: () => import("./views/vendors/Profile/Profile"),
                meta: {
                    rule: "vendor",
                    breadcrumb: [
                        { title: "Home", url: "/vendor/dashboard" },
                        { title: "Profile", active: true }
                    ],
                    pageTitle: "Profile"
                }
            },
            {
                path: "dashboard",
                name: "ecommerce-vendor-dashboard",
                component: () => import("./views/vendors/Dashboard"),
                meta: {
                    rule: "vendor"
                }
            },

            {
                path: "products",
                name: "ecommerce-vendor-products",
                component: () => import("./views/vendors/products/ProductsList"),
                meta: {
                    rule: "vendor",
                    breadcrumb: [
                        { title: "Home", url: "/vendor/dashboard" },
                        { title: "Products", active: true }
                    ],
                    pageTitle: "Products"
                }
            },
            {
                path: "product/:id?",
                name: "ecommerce-vendor-product-detail",
                component: () => import("./views/vendors/products/ProductDetail"),
                meta: {
                    parent: 'ecommerce-vendor-products',
                    rule: "vendor",
                    breadcrumb: [
                        { title: "Home", url: "/vendor/dashboard" },
                        { title: "Product Detail", active: true }
                    ],
                    pageTitle: "Product Detail"
                }
            },

            {
                path: "orders",
                name: "ecommerce-vendor-orders",
                component: () => import("./views/vendors/orders/OrdersList"),
                meta: {
                    rule: "vendor",
                    breadcrumb: [
                        { title: "Home", url: "/vendor/dashboard" },
                        { title: "Orders", active: true }
                    ],
                    pageTitle: "Orders"
                }
            },


            {
                path: "store-decoration",
                name: "ecommerce-vendor-store-decoration",
                component: () => import("./views/vendors/StoreDecoration/StoreDecoration"),
                meta: {
                    rule: "vendor",
                    breadcrumb: [
                        { title: "Home", url: "/vendor/dashboard" },
                        { title: "Store Decoration", active: true }
                    ],
                    pageTitle: "Store Decoration"
                }
            },

            {
                path: "logout",
                name: "ecommerce-vendor-logout",
                component: () => import("./views/vendors/Logout"),
                meta: {
                    rule: "vendor",
                    breadcrumb: [
                        { title: "Home", url: "/vendor/logout" },
                        { title: "Logging Out", active: true }
                    ],
                    pageTitle: "Logging Out"
                }
            },
        ]
    },

    //VENDOR LOGIN ROUTES
    {
        path: "/vendor",
        component: () => import("@/layouts/full-page/FullPage.vue"),
        children: [
            {
                path: "login",
                name: "vendor-login",
                component: () => import("./views/vendors/auth/Login"),
                meta: {
                    rule: "public",
                    noAuth: true,
                    userType: "vendor"
                }
            }
        ]
    },
];

export default routes;
