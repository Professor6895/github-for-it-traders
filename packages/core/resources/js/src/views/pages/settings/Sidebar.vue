<!-- =========================================================================================
    File Name: EmailSidebar.vue
    Description: Email Application Sidebar(Filter) (Inbox)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Modules" class="dashboard--setting-sidebar">
    <!-- <div v-for="(setting, module) in dashboard_settings" :key="module">
      <router-link tag="span" class="flex mt-6 cursor-pointer" :to="`/admin/settings/${module}`">
        <span class="text-lg ml-3" :class="{'text-primary': module === active_tab}">{{ module }}</span>
      </router-link>
      <vs-divider></vs-divider>
    </div>-->
    <!-- <vs-sidebar-item index="1" icon="question_answer">
        Dashboard
    </vs-sidebar-item>-->
    <ul>
      <li
        class="p-2 font-medium items-center"
        v-for="(setting, module) in dashboard_settings"
        :key="module"
      >
        <router-link tag="span" class="flex cursor-pointer" :to="`/admin/settings/${module}`">
          <span :class="{'text-primary': module === active_tab}"><vs-icon style="color: black !important" icon="chevron_right" class="align-middle"></vs-icon>{{ module | title }}</span>
        </router-link>
      </li>
    </ul>
  </vx-card>
</template>
<style scoped>
/* .dashboard--setting-sidebar >>> .vx-card__body {
  padding: 10px !important;
} */
</style>
<script>
export default {
  data() {
    return {
      // active_tab: null
    };
  },
  computed: {
    dashboard_settings() {
      return this.$store.state.settings.dashboard_settings;
    },
    active_tab() {
      let url = location.href;
      let chunks = url.split("/");
      let module = chunks[chunks.indexOf("settings") + 1];
      return module;
    },
  },
};
</script>