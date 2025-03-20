import store from '@/store/store'

const routes = [
  {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    path: "/admin",
    component: () => import("./layouts/main/Main.vue"),
    meta: {
      authRequired: true,
    },
    // beforeEnter(to, from, next) {
    //   store.dispatch("settings/fetchSettings", {next});
    // },
    children: [
      {
        path: "dashboard",
        name: "admin-dashboard",
        component: () => import("@/views/Home.vue"),
        meta: {
          rule: "admin",
        },
      },

      //USER MANAGEMENT
      {
        path: "user-management",
        name: "admin-user-management",
        component: () =>
          import("@/views/pages/UserManagement/Users.vue"),
        meta: {
          rule: "admin",
          permission: 'users-view',
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "User Management", active: true },
          ],
          pageTitle: "User Management",
        },
      },
      {
        path: "user-detail/:id?",
        name: "admin-user-detail",
        component: () => import("@/views/pages/UserManagement/UserDetail.vue"),
        meta: {
          parent: "admin-user-management",
          permission: 'admins-add',
          rule: "admin",
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "User Management", url: "/admin/user-management" },
            { title: "User Detail", active: true },
          ],
          pageTitle: "User Detail",
        },
      },

      //USER ROLES
      {
        path: "user-roles",
        name: "admin-user-roles",
        component: () =>
          import("@/views/pages/UserRoles/Roles.vue"),
        meta: {
          rule: "admin",
          permission: 'roles-view',
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "Roles", active: true },
          ],
          pageTitle: "Roles",
        },
      },
      {
        path: "user-role/:id?",
        name: "admin-user-role",
        component: () => import("@/views/pages/UserRoles/Role.vue"),
        meta: {
          parent: "admin-user-roles",
          rule: "admin",
          permission: 'roles-add',
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "User Roles", url: "/admin/user-roles" },
            { title: "Role Detail", active: true },
          ],
          pageTitle: "Role Detail",
        },
      },

      //CONTACT INQUIREES
      {
        path: "contact-inquiries",
        name: "admin-contact-inquiries",
        component: () =>
          import("@/views/pages/contact-inquiries/contacts.vue"),
        meta: {
          rule: "admin",
          permission: 'contacts-view',
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "Contact Inquiries", active: true },
          ],
          pageTitle: "Contact Inquiries",
        },
      },

      {
        path: "redirects",
        name: "admin-redirects",
        component: () =>
          import("@/views/pages/Redirects/redirects.vue"),
        meta: {
          rule: "admin",
          permission: 'contacts-view',
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "301 Redirects", active: true },
          ],
          pageTitle: "301 Redirects",
        },
      },

      {
        path: "contact-inquiry/:id?",
        name: "admin-contact-inquiry-detail",
        component: () =>
          import("@/views/pages/contact-inquiries/ContactDetail.vue"),
        meta: {
          rule: "admin",
          permission: 'contacts-view',
          parent: "admin-contact-inquiries",
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "Contact Inquiries", url: "/admin/contact-inquiries" },
            { title: "Contact Detail", active: true },
          ],
          pageTitle: "Contact Detail",
        },
      },

      //SETTINGS
      {
        path: "settings/core",
        name: "admin-core-settigs",
        component: () => import("@/views/pages/settings/Settings.vue"),
        meta: {
          rule: "admin",
          permission: 'access-settings',
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "Core Settings", active: true },
          ],
          pageTitle: "Core Settings",
        }
      },
      {
        path: "settings/email_settings",
        name: "admin-email-settigs",
        component: () => import("@/views/pages/settings/EmailSettings.vue"),
        meta: {
          rule: "admin",
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "Email Settings", active: true },
          ],
          pageTitle: "Email Settings",
        }
      },
      {
        path: "settings/sms_settings",
        name: "admin-sms-settigs",
        component: () => import("@/views/pages/settings/SMSSettings.vue"),
        meta: {
          rule: "admin",
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "SMS Settings", active: true },
          ],
          pageTitle: "SMS Settings",
        }
      },
      {
        path: "settings/social_settings",
        name: "admin-social-settigs",
        component: () => import("@/views/pages/settings/SocialSettings.vue"),
        meta: {
          rule: "admin",
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "Social Settings", active: true },
          ],
          pageTitle: "Social Settings",
        }
      },
      {
        path: "settings/custom_scripts",
        name: "admin-custom-scripts",
        component: () => import("@/views/pages/settings/CustomScripts.vue"),
        meta: {
          rule: "admin",
          breadcrumb: [
            { title: "Home", url: "/admin/dashboard" },
            { title: "Email Settings", active: true },
          ],
          pageTitle: "Email Settings",
        }
      },

      //PROFILE
      {
        path: "profile",
        name: "admin-profile",
        component: () => import("./views/pages/Profile/Profile"),
        meta: {
          rule: "admin",
          breadcrumb: [
            { title: "Home", url: "/teacher/dashboard" },
            { title: "Profile", active: true }
          ],
          pageTitle: "Profile"
        }
      },
    ],
  },
  // =============================================================================
  // FULL PAGE LAYOUTS
  // =============================================================================
  {
    path: "/admin",
    component: () => import("@/layouts/full-page/FullPage.vue"),

    children: [
      {
        path: "login",
        name: "admin-login",
        component: () => import("@/views/auth/Login.vue"),
        meta: {
          rule: "public",
          noAuth: true,
          userType: "admin",
        },
      },
    ],
  },

  {
    path: "",
    component: () => import("@/layouts/full-page/FullPage.vue"),
    children: [
      {
        path: "/pages/error-404",
        name: "page-error-404",
        component: () => import("@/views/pages/Error404.vue"),
        meta: {
          rule: "public",
        },
      },

      {
        path: "/pages/not-authorized",
        name: "page-not-authorized",
        component: () => import("@/views/pages/NotAuthorized.vue"),
        meta: {
          rule: "public",
        },
      },
    ],
  },
  // Redirect to 404 page, if no match found
  {
    path: "*",
    redirect: "/pages/error-404",
  },
];
export default routes;
