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
            //blogs routes
            {
                path: "blogs",
                name: "admin-blogs",
                component: () => import("./views/blogs/AllBlogs"),
                meta: {
                    rule: "admin",
                    permission: "view-blogs",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Blogs", active: true }
                    ],
                    pageTitle: "Blogs"
                }
            },
            {
                path: "blog/:id?",
                name: "admin-blog-form",
                component: () => import("./views/blogs/BlogForm"),
                meta: {
                    rule: "admin",
                    parent: "admin-blogs",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Blogs", url: "/admin/blogs" },
                        { title: "Blog Form", active: true }
                    ],
                    pageTitle: "Blog Form"
                }
            },

            //blog categories routes
            {
                path: "blog-categories",
                name: "admin-blog-categories",
                component: () => import("./views/blog-categories/AllBlogCategories"),
                meta: {
                    rule: "admin",
                    permission: "view-blog-categories",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Blog Categories", active: true }
                    ],
                    pageTitle: "Blog Categories"
                }
            },
            {
                path: "blog_category/:id?",
                name: "admin-blog-category-form",
                component: () => import("./views/blog-categories/BlogCategoriesForm"),
                meta: {
                    rule: "admin",
                    parent: "admin-blog-categories",
                    breadcrumb: [
                        { title: "Home", url: "/admin/dashboard" },
                        { title: "Blog Categories", url: "/admin/blog-categories" },
                        { title: "Blog Cateogry Form", active: true }
                    ],
                    pageTitle: "Blog Category Form"
                }
            }

        ]
    }
];

export default routes;
