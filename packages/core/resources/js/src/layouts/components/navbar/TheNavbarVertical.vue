<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="relative">
    <div class="vx-navbar-wrapper" :class="classObj">
      <vs-navbar
        class="vx-navbar navbar-custom navbar-skelton"
        :color="navbarColorLocal"
        :class="textColor"
      >
        <!-- SM - OPEN SIDEBAR BUTTON -->
        <feather-icon
          class="sm:inline-flex xl:hidden cursor-pointer p-2"
          icon="MenuIcon"
          @click.stop="showSidebar"
        />
        <vs-spacer />
        <!-- <search-bar /> -->
        <router-link to="/" target="_blank">
          <feather-icon
            svgClasses="h-5 w-5"
            class="sm:inline-flex cursor-pointer p-2 mr-3"
            icon="GlobeIcon"
            @click.stop="showSidebar"
          />
        </router-link>

        <!-- <feather-icon
          svgClasses="h-5 w-5"
          class="sm:inline-flex cursor-pointer p-2 mr-3"
          :icon="currentTheme === 'light' ? 'MoonIcon' : 'SunIcon'"
          @click="toggleTheme"
        /> -->
        <notification-drop-down />
        <profile-drop-down />
      </vs-navbar>
    </div>
  </div>
</template>


<script>
import SearchBar from "./components/SearchBar.vue";
import NotificationDropDown from "./components/NotificationDropDown.vue";
import ProfileDropDown from "./components/ProfileDropDown.vue";
import { setCookie } from "@/utils.js";
export default {
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    SearchBar,
    NotificationDropDown,
    ProfileDropDown,
  },
  computed: {
    navbarColorLocal() {
      return this.$store.state.theme === "dark" && this.navbarColor === "#fff"
        ? "#10163a"
        : this.navbarColor;
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    textColor() {
      return {
        "text-white":
          (this.navbarColor != "#10163a" &&
            this.$store.state.theme === "dark") ||
          (this.navbarColor != "#fff" && this.$store.state.theme !== "dark"),
      };
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    },

    // NAVBAR STYLE
    classObj() {
      if (this.verticalNavMenuWidth == "default") return "navbar-default";
      else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced";
      else if (this.verticalNavMenuWidth) return "navbar-full";
    },

    currentTheme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    showSidebar() {
      this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
    },
    toggleTheme() {
      let theme = this.$store.state.theme === "light" ? "dark" : "light";
      setCookie('theme', theme, 1000)
      this.$store.dispatch("updateTheme", theme);
    },
  },
};
</script>

