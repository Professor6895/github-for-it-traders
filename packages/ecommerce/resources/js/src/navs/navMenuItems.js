export default [
  {
    header: "E-Commerce",
    icon: "PackageIcon",
    i18n: "E-Commerce",
    rule: 'admin',
    order: 2,
    items: [
      {
        url: null,
        name: "Catalog",
        slug: "ecommerce-catalog",
        icon: "storage",
        order: 3,
        rule: "admin",
        submenu: [
          {
            url: "/admin/product-categories",
            name: "Categories",
            slug: "admin-product-categories",
            permission: "view-product-categories"
          },
          {
            url: "/admin/product-brands",
            name: "Brands",
            slug: "admin-product-brands",
            permission: "view-brands"
          },
          {
            url: "/admin/products",
            name: "Products",
            slug: "admin-products",
            permission: 'view-products',
          },
          {
            url: "/admin/product-classes",
            name: "Attributes & Classes",
            slug: "admin-product-classes",
            permission: 'view-products',
          },
          {
            url: "/admin/product-reviews",
            name: "Product Reviews",
            slug: "ecommerce-admin-product-reviews",
          },
        ],
      },
      {
        url: "/admin/orders",
        name: "Orders",
        icon: "shopping_cart",
        slug: "ecommerce-admin-orders",
        permission: 'access-orders',
        order: 2,
      },
      {
        url: "/admin/faqs",
        name: "FAQs",
        icon: "help",
        slug: "ecommerce-admin-faqs",
        // permission: 'access-orders',
        order: 2,
      },
      {
        url: "/admin/discount-campaigns",
        name: "Campaigns",
        icon: "shopping_cart",
        slug: "ecommerce-admin-discount-campaigns",
        permission: 'access-campaigns',
        order: 2,
      },
      {
        url: "/admin/shipping-charges",
        name: "Shippings",
        icon: "local_shipping",
        slug: "ecommerce-admin-discount-campaigns",
        permission: 'access-shippings',
        order: 2,
      },
    ]
  },

  {
    url: "/vendor/dashboard",
    name: "Dashboard",
    icon: "group",
    slug: "ecommerce-vendor-dashboard",
    order: 1,
  },

  {
    url: "/vendor/products",
    name: "Products",
    icon: "inventory",
    slug: "ecommerce-vendor-products",
    order: 2,
  },

  {
    url: "/vendor/orders",
    name: "Orders",
    icon: "shopping_cart",
    slug: "ecommerce-vendor-orders",
    order: 2,
  },

  {
    url: "/vendor/store-decoration",
    name: "Store Decoration",
    icon: "store",
    slug: "ecommerce-vendor-store-decoration",
    order: 2,
  },

  // {
  //   header: "Promotions",
  //   icon: "PackageIcon",
  //   i18n: "Promotions",
  //   rule: 'vendor',
  //   order: 2,
  //    items: [
  //     {
  //       url: "/admin/pre-orders",
  //       name: "Pre Orders",
  //       icon: "shopping_cart",
  //       slug: "ecommerce-admin-pre-orders",
  //       permission: 'access-orders',
  //       order: 2,
  //     },
  //    ]
  // },

  {
    url: "/vendor/profile",
    name: "Profile",
    icon: "person",
    slug: "ecommerce-vendor-orders",
    order: 2,
  },

  {
    url: "/vendor/logout",
    name: "Logout",
    icon: "logout",
    slug: "ecommerce-vendor-logout",
    order: 2,
  },

  
]