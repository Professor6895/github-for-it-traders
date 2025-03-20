
<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full mb-4 sm:w-1/4">
        <statistics-card-line
          icon="ShoppingBagIcon"
          :statistic="stats.products_count"
          :iconRight="true"
          :loading="loading_stats"
          link="/admin/product"
          statisticTitle="Total Products"
          color="blue"
        />
      </div>

      <div class="vx-col w-full mb-4 sm:w-1/4">
        <statistics-card-line
          icon="ShoppingCartIcon"
          :statistic="stats.orders_count"
          :iconRight="true"
          :loading="loading_stats"
          link="/admin/orders"
          linkLabel="View Orders"
          statisticTitle="Total Orders"
          color="warning"
        />
      </div>

      <div class="vx-col w-full mb-4 sm:w-1/4">
        <statistics-card-line
          icon="DollarSignIcon"
          :statistic="`Rs. ${stats.total_revenue}`"
          :iconRight="true"
          :loading="loading_stats"
          link="/admin/orders"
          linkLabel="View Orders"
          statisticTitle="Revenue"
          color="success"
        />
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full sm:w-1/3">
        <vx-card title="Most Viewed Products (Last 7 Days)">
          <vs-list>
            <vs-list-item
              v-for="product_ in stats.most_viewd_products"
              :key="`most-viewed-${product_.id}`"
              :title="product_.name"
              :subtitle="`Total Views: ${product_.views_count}`"
            >
              <template slot="avatar">
                <img
                  :src="product_.product_image.thumb"
                  alt=""
                  width="70px"
                  class="mr-4"
                />
              </template>
            </vs-list-item>
          </vs-list>
        </vx-card>
      </div>

      <div class="vx-col w-full sm:w-1/3">
        <vs-card>
          <div slot="header">
            <span style="font-size: 18px; font-weight: 600">Recent Orders</span>
            <vs-button
              size="small"
              class="float-right"
              @click="redirectTo('/admin/orders')"
              >View All</vs-button
            >
          </div>
          <vs-list>
            <vs-list-item
              class="mt-2 mb-2"
              v-for="order in stats.orders"
              :key="`new-order-${order.id}`"
              :title="order.user.name"
              :subtitle="order.created_at | date_format"
            >
              <template slot="avatar">
                <vs-avatar
                  color="transparent"
                  size="50px"
                  :src="
                    order.user.avatar
                      ? order.user.avatar
                      : require('@assets/images/default-avatar.png')
                  "
                />
              </template>
              <strong>Rs:</strong>
              {{ order.total }}
            </vs-list-item>
          </vs-list>
        </vs-card>
      </div>

      <div class="vx-col w-full sm:w-1/3">
        <vx-card title="New Registrations">
          <vs-list>
            <vs-list-item
              v-for="user in stats.new_registrations"
              :key="`new-register-${user.id}`"
              :title="user.name"
              :subtitle="user.email"
            >
              <template slot="avatar">
                <vs-avatar
                  color="transparent"
                  size="50px"
                  :src="
                    user.avatar
                      ? user.avatar
                      : require('@assets/images/default-avatar.png')
                  "
                />
              </template>
              <strong>Joined:</strong>
              {{ user.created_at | date_format("timeago") }}
            </vs-list-item>
          </vs-list>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
export default {
  components: {
    StatisticsCardLine,
  },
  data() {
    return {
      loading_stats: true,
      stats: {
        products_count: 0,
        orders_count: 0,
        total_revenue: 0,
        most_viewd_products: [],
        new_registrations: [],
        orders: [],
      },
    };
  },
  mounted() {
    this.getDashboardData();
  },
  methods: {
    async getDashboardData() {
      this.loading_stats = true;
      try {
        let response = await this.$http.get(
          "/api/admin/ecommerce-dashboard-data"
        );
        this.stats = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading_stats = false;
      }
    },

    redirectTo(link) {
      return this.$router.push({ path: link });
    },
  },
};
</script>