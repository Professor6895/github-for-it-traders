<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <div class="vx-row" v-else>
      <div class="vx-col w-full">
        <!-- <div class="con-input-search vs-table--search">
          <vs-input class="inline-block" v-model="search_keyword"></vs-input>
          <vs-button
            type="filled"
            icon="search"
            @click="
              table_options.current_page = 1;
              fetchPreOrders();
            "
          ></vs-button>
        </div> -->
      </div>
      <div class="vx-col w-full mt-2">
        <vx-card
          id="loading--container"
          class="card-padding-5 vs-con-loading__container"
        >
          <vs-table
            :data="orders.data"
            stripe
            :max-items="orders.per_page"
            :total="orders.total"
            :sst="true"
            class="mt-4"
          >
            <template slot="thead">
              <vs-th sort-key="title">Customer Name</vs-th>
              <vs-th>Product</vs-th>
              <vs-th>Contact Number</vs-th>
              <vs-th>Email</vs-th>
              <vs-th>Status</vs-th>
              <vs-th>Pre Order Date</vs-th>
            </template>

            <template slot-scope="{ data }">
              <tbody>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td>
                    <vs-chip>
                      <vs-avatar
                        color="transparent"
                        size="50px"
                        :src="
                          tr.user.avatar
                            ? tr.user.avatar_image.thumb
                            : require('@assets/images/default-avatar.png')
                        "
                      />
                      {{ tr.user.name }}
                    </vs-chip>
                  </vs-td>
                   <vs-td>
                    {{ tr.product.name }}
                  </vs-td>
                  <vs-td>
                    {{ tr.phone }}
                  </vs-td>
                  <vs-td>
                    {{ tr.email }}
                  </vs-td>
                 
                  <vs-td>
                    <span :class="getOrderStatusColor(tr.status)">{{
                      getOrderStatus(tr.status)
                    }}</span>
                  </vs-td>
                  <vs-td>
                    {{ tr.created_at | date_format("timeago") }}
                  </vs-td>

                  <vs-td>
                    <router-link
                      :to="{
                        name: 'ecommerce-admin-pre-order-detail',
                        params: { id: tr.id },
                      }"
                    >
                      <vs-button size="small">View Detail</vs-button>
                    </router-link>
                  </vs-td>
                </vs-tr>
              </tbody>
            </template>
          </vs-table>
          <vs-pagination
            class="mt-6"
            :total="orders.last_page"
            v-model="table_options.current_page"
          ></vs-pagination>
        </vx-card>
      </div>
      <!-- <div class="vx-col md:w-9/12 mt-3">
        <vx-card>
          <div v-if="!Object.keys(selectedOrder).length" class="mt-4 mb-4 pt-4 pb-4">
            <h4 class="text-center mt-4 mb-4">
              No order selected
            </h4>
          </div>
          <div v-else>
            <order-detail
              :key="`selected-order-${selectedOrder.id}`"
              :order_id="selectedOrder.id"
            ></order-detail>
          </div>
        </vx-card>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.each--order {
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  margin: 4px 0px;
  display: inline-block;
  width: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      loading: true,
      orders: {
        data: [],
        per_page: 0,
        total: 0,
        last_page: 0,
      },
      table_options: {
        current_page: 1,
      },
      search_keyword: "",
    };
  },

  mounted() {
    this.fetchPreOrders();
  },
  methods: {
    async fetchPreOrders() {
      if (!this.loading) {
        this.$vs.loading({
          container: "#loading--container",
        });
      }
      try {
        let response = await this.$http.get(
          "/api/admin/orders/get-pre-orders",
          {
            params: {
              page: this.table_options.current_page,
              search: this.search_keyword,
            },
          }
        );
        this.orders = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
        this.loading = false;
      }
    },

    getOrderStatus(status) {
      switch (status) {
        case 0:
          return "Pending";
        case 1:
          return "Confirmed";
        case 2:
          return "Rejected";
        default:
          return "";
      }
    },

    getOrderStatusColor(status) {
      switch (status) {
        case 0:
          return "text-warning";
        case 1:
          return "text-success";
        case 2:
          return "text-danger";

        default:
          return "";
      }
    },
  },
  watch: {
    "table_options.current_page": function () {
      this.fetchPreOrders();
    },
  },
};
</script>