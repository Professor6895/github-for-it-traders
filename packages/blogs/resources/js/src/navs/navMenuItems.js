export default [
    {
        header: "Blog",
        icon: "PackageIcon",
        rule: "admin",
        order: 1,
        items: [
            {
                url: '/admin/blog-categories',
                name: "Categories",
                slug: "admin-blog-categories",
                icon: "category",
                order: 1,
                permission: "view-blog-categories"
            },
            {
                url: '/admin/blogs',
                name: "All Blogs",
                slug: "admin-blogs",
                order: 2,
                icon: "create",
                permission: "view-blogs"
            }
        ]
    }
]