<template>
  <div>
    <div class="vx-row">
       <div class="vx-col mb-4 w-full" v-if="!account_status">
        <vs-alert
          title="Account Disabled"
          active="true"
          color="danger"
          icon="new_releases"
        >
          <span>
            Your account has not been activated. Please contact your administrator.
          </span>
        </vs-alert>
      </div>
      <div class="vx-col mb-4 w-full" v-if="!kyc_updated">
        <vs-alert
          title="Please Update KYC !!!"
          active="true"
          color="danger"
          icon="new_releases"
        >
          <span>
            Your KYC is not fully updated. Please update your KYC to get full
            access to features.
          </span>
          &nbsp; &nbsp; &nbsp;
          <vs-button
            size="small"
            @click="$router.push('/vendor/profile')"
            color="primary"
            >Update KYC</vs-button
          >
        </vs-alert>
      </div>

      <div class="vx-col w-full mb-4 sm:w-1/4">
        <statistics-card-line
          icon="PackageIcon"
          :statistic="dashboard_data.products_count || 0"
          :iconRight="true"
          :loading="loading_stats"
          link="/vendor/product"
          statisticTitle="Total Products"
          linkLabel="Add New"
          color="success"
        />
      </div>

      <div class="vx-col w-full mb-4 sm:w-1/4">
        <statistics-card-line
          icon="ShoppingBagIcon"
          :statistic="dashboard_data.order_count"
          :iconRight="true"
          :loading="loading_stats"
          link="/vendor/orders"
          statisticTitle="Total Orders"
          linkLabel="View All"
        />
      </div>

      <div class="vx-col w-full mb-4 sm:w-1/4">
        <statistics-card-line
          icon="DollarSignIcon"
          :statistic="`Rs. ${dashboard_data.total_sale}`"
          :iconRight="true"
          :loading="loading_stats"
          link="/vendor/orders"
          statisticTitle="Total Sale"
          linkLabel="View Detail"
          color="success"
        />
      </div>
    </div>
  </div>
</template>
<script>
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";

export default {
  data() {
    return {
      dashboard_data: {},
      loading_stats: true,
      kyc_updated: false,
      account_status: false
    };
  },
  components: {
    StatisticsCardLine,
  },
  mounted() {
    this.getDashboardData();
    this.geVendorDetail();
    let user = this.$store.state.AppActiveUser;
    if (this.$store.state.AppActiveUser.data_updated) {
      this.kyc_updated = true;
    }

    if (user.status) {
      this.account_status = true;
    }
  },
  methods: {
    async getDashboardData() {
      this.loading_stats = true;
      try {
        let response = await this.$http.get("/api/vendor/dashboard-data");
        this.dashboard_data = response.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading_stats = false;
      }
    },

    async geVendorDetail() {
      try {
        let response = await this.$http.get("/api/vendor/vendor-detail");

        this.$store.commit("UPDATE_USER_INFO", response.data.userInfo, {
          root: true,
        });
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      }
    },
  },
};
</script>