<template>
  <!-- NOTIFICATIONS -->
  <div @click="markNotificationAsRead">
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <feather-icon
        icon="BellIcon"
        class="cursor-pointer mt-1 sm:mr-6 mr-2"
        :badge="unreadNotifications"
      />

      <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown">
        <div class="notification-top text-center p-5 bg-primary text-white">
        </div>

        <component
          :is="scrollbarTag"
          ref="mainSidebarPs"
          class="scroll-area--nofications-dropdown p-0 mb-10"
          :settings="settings"
          :key="$vs.rtl"
        >
          <ul class="bordered-items">
            <li
              v-for="ntf in notifications"
              :key="ntf.id"
              @click="notificationClicked(ntf.data.link)"
              class="flex justify-between px-4 py-4 notification cursor-pointer"
            >
              <div class="flex items-start">
                <vs-icon :icon="ntf.data.icon" class="mt-3"></vs-icon>
                <div class="mx-2">
                  <span class="font-medium block notification-title">{{ ntf.data.title }}</span>
                  <small>{{ ntf.data.msg }}</small>
                </div>
              </div>
              <small class="mt-1 whitespace-no-wrap">{{ ntf.created_at | date_format('timeago') }}</small>
            </li>
          </ul>
        </component>

        <div
          class="checkout-footer fixed bottom-0 rounded-b-lg text-primary w-full p-2 font-semibold text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer"
        >
          <span>View All Notifications</span>
        </div>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    VuePerfectScrollbar,
  },
  data() {
    return {
      unreadNotifications: 0,
      notifications: [],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },
  mounted() {
    this.fetchNotifications();
  },
  methods: {
    fetchNotifications() {
      try {
        this.$http
          .get(
            "/api/dashboard/notifications?guard=" +
              this.$store.state.AppActiveUser.userRole
          )
          .then((response) => {
            this.unreadNotifications = response.data.unread_notifications;
            this.notifications = response.data.notifications
          });
      } catch (error) {}
    },

    async markNotificationAsRead() {
      try {
        this.$http
          .post(
            "/api/dashboard/notifications/mark-as-read?guard=" +
              this.$store.state.AppActiveUser.userRole
          )
          .then((response) => {
            this.unreadNotifications = 0;
          });
      } catch (error) {}
    },
    notificationClicked(url) {
      if (url) {
        this.$router.push(url);
      }
    },
  },
};
</script>

