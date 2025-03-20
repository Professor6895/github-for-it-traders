<template>
  <div class="the-navbar__user-meta flex items-center">
    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.full_name }}</p>
      <small>Available</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="con-img ml-3">
        <img
          key="onlineImg"
          :src="activeUserInfo.avatar ? activeUserInfo.avatar_image.thumb : require('@assets/images/default-avatar.png')"
          alt="user-img"
          width="40"
          height="40"
          class="rounded-full shadow-md cursor-pointer block"
        />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="goToProfile"
          >
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <li v-if="$acl.check('admin') && checkPermission('access-settings')"
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/admin/settings/core').catch(() => {})"
          >
            <feather-icon icon="SettingsIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Settings</span>
          </li>
           <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout"
          >
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  methods: {
    logout() {
      let userRole = this.$store.state.AppActiveUser.userRole;
      let path = `/${userRole}/login`;
      // If JWT login
      this.$acl.change("admin");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("accessToken");
      this.$router.push({ path: path }).catch(() => {});
    },

     goToProfile() {
      const role = this.$store.state.AppActiveUser.userRole;
      let url = `/${role}/profile`;
      this.$router.push({ path: url }).catch(() => {});
    }
  }
};
</script>
