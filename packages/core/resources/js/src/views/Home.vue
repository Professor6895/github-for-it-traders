<template>
  <div>
    <!-- ROW 2 -->
    <div class="vx-row">
      <div class="vx-col w-full mb-4 sm:w-1/4">
        <statistics-card-line
          icon="UsersIcon"
          :statistic="stats.total_users"
          :iconRight="true"
          :loading="loading_stats"
          link="/admin/user-management"
          statisticTitle="Total Users"
          color="success"
        />
      </div>
      <div class="vx-col w-full mb-4 sm:w-1/4">
        <statistics-card-line
          icon="MessageSquareIcon"
          :statistic="stats.new_contacts"
          :iconRight="true"
          :loading="loading_stats"
          link="/admin/contact-inquiries"
          statisticTitle="New Contact Inquiries"
        />
      </div>
      <div class="vx-col w-full mb-4 sm:w-1/4" v-if="modules.includes('pages')">
        <statistics-card-line
          icon="LayoutIcon"
          color="danger"
          :loading="loading_stats"
          :statistic="stats.total_pages"
          :iconRight="true"
          statisticTitle="Total Pages"
          link="/admin/page"
          linkLabel="Add New"
        />
      </div>

      <div class="vx-col w-full mb-4 sm:w-1/4" v-if="modules.includes('blogs')">
        <statistics-card-line
          icon="LayoutIcon"
          color="orange"
          :loading="loading_stats"
          :statistic="stats.total_blogs"
          :iconRight="true"
          statisticTitle="Total Blogs"
          link="/admin/blog"
          linkLabel="Add New"
        />
      </div>
    </div>
    <div v-for="module in modules">
      <component :is="getComponentName(module)" />
    </div>
  </div>
</template>

<script>
import { getApplicationModules } from "@/utils.js";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";

export default {
  components: {
    StatisticsCardLine,
  },
  data() {
    return {
      loading_stats: true,
      stats: {
        total_users: 0,
        new_contacts: 0,
        total_pages: 0,
      },
      modules: [],
    };
  },
  mounted() {
    this.modules = getApplicationModules();
    this.getDashboardData();
  },
  methods: {
    getComponentName(module) {
      try {
        return require(`./../../../../../${module}/resources/js/src/views/admin/Dashboard`)
          .default;
      } catch (error) {}
    },

    async getDashboardData() {
      this.loading_stats = true;
      try {
        let response = await this.$http.get("/api/admin/dashboard-data");
        this.stats = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading_stats = false;
      }
    },
  },
};
</script>
