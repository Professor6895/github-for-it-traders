export default [
  {
    header: "Data Administration",
    icon: "PackageIcon",
    i18n: "Data",
    rule: 'admin',
    order: 20,
    items: [
      {
        url: "/admin/data-import",
        name: "Data Import",
        icon: "swap_vertical_circle",
        slug: "admin-data-imports",
        order: 30,
        permission: "access-data-import"
      },
    ]
  },
]