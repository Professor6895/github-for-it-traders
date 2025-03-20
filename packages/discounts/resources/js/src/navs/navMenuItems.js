
export default [
  {
    header: "Discounts",
    icon: "PackageIcon",
    i18n: "Discounts",
    rule: 'admin',
    order: 4,
    items: [
     
      {
        url: "/admin/coupon-discounts",
        name: "Discounts",
        icon: "file_copy",
        slug: "admin-pages",
        permission: 'discounts-view',
        order: 1,
      },
    ]
  },
];