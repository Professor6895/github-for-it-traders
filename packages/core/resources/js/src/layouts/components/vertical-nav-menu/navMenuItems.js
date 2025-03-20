/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import { getApplicationModules } from "@/utils";
import _ from "lodash";
let sidebarItems = [
  {
    url: "/admin/dashboard",
    name: "Dashboard",
    icon: "dashboard",
    slug: "admin-dashboard",
    i18n: "Dashboard",
    order: 0,
  }
];

let web_content_items = [
  {
    url: null,
    name: "User management",
    slug: "admin-user-management",
    icon: "group",
    rule: "admin",
    order: 10,
    submenu: [
      {
        url: "/admin/user-management",
        name: "Users",
        slug: "admin-user-management",
        permission: 'users-view'
      },
      {
        url: "/admin/user-roles",
        name: "Roles",
        slug: "admin-user-roles",
        permission: 'roles-view'
      },
    ],
  },
  {
    url: "/admin/contact-inquiries",
    name: "Contact Inquiries",
    slug: 'admin-contact-inquiries',
    permission: 'contacts-view',
    icon: 'sms',
    order: 8
  },
  {
    url: "/admin/redirects",
    name: "Redirects",
    slug: 'admin-redirects',
    permission: 'contacts-view',
    icon: 'refresh',
    order: 9
  }

]

let modules = getApplicationModules();
for (let module of modules) {
  if (module !== 'custom') {
    try {
      let siddeee = require(`./../../../../../../../${module}/resources/js/src/navs/navMenuItems`).default;
      siddeee.forEach(element => {
        if (element.section && element.section === 'content') {
          web_content_items = web_content_items.concat([element])
        } else {
          sidebarItems = sidebarItems.concat([element])
        }
      });
    } catch (error) {
    }
  } else {
    try {
      let siddeee = require(`./../../../../../../../../resources/js/dashboard/navs/navMenuItems`).default;
      siddeee.forEach(element => {
        if (element.section && element.section === 'content') {
          web_content_items = web_content_items.concat([element])
        } else {
          sidebarItems = sidebarItems.concat([element])
        }
      });
    } catch (error) {
    }
  }
}
web_content_items = _.orderBy(web_content_items, ["order"], ["asc"]);
sidebarItems = sidebarItems.concat([
  {
    header: "Web Contents",
    icon: "PackageIcon",
    i18n: "Web Contents",
    rule: 'admin',
    order: 30,
    items: web_content_items
  }
])
sidebarItems = _.orderBy(sidebarItems, ["order"], ["asc"]);

export default sidebarItems;
