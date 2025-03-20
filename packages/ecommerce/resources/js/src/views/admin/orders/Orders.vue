<template>
  <div>
    <vx-card class="mb-3" title="Filters">
      <div class="vx-row">
        <div class="vx-col md:w-2/5">
          <label for class="vs-input--label">Customer Name or Order ID..</label>
          <vs-input
            @keyup.enter="
              table_options.current_page = 1;
              fetchOrders();
            "
            class="w-full"
            placeholder="Customer Name or Order ID.."
            v-model="search_keyword"
            icon="search"
          ></vs-input>
        </div>
        <div class="vx-col md:w-1/5">
          <label for class="vs-input--label">Date Range</label>
          <flat-pickr
            v-model="filters.date_range"
            :config="{ enableTime: false, mode: 'range' }"
            class="w-full"
            name="publish_date"
          />
        </div>

        <div class="vx-col md:w-1/5">
          <label for style="color: white" class="vs-input--label">Brand</label>
          <br />
          <vs-button
            @click="
              loading = true;
              fetchOrders();
            "
            color="primary"
            type="filled"
            >Apply Filter</vs-button
          >
        </div>

        <div class="vx-col md:w-1/5">
          <label for style="color: white" class="vs-input--label">Brand</label>
          <br />
          <vs-button
            color="primary"
            type="border"
            icon="get_app"
            class="float-right mr-4"
            @click="exportOrders()"
            >Export Orders</vs-button
          >
        </div>
      </div>
    </vx-card>
    <pageLoader v-if="loading"></pageLoader>
    <div class="vx-row" v-else>
      <!-- <div class="vx-col w-full">
        <div class="con-input-search vs-table--search">
          <vs-input class="inline-block" v-model="search_keyword"></vs-input>
          <vs-button
            type="filled"
            icon="search"
            @click="
              table_options.current_page = 1;
              fetchOrders();
            "
          ></vs-button>
        </div>
      </div> -->
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
            @sort="handleSort"
            class="mt-4"
          >
            <template slot="thead">
              <vs-th sort-key="id">Invoice Number</vs-th>
              <vs-th>Customer Name</vs-th>
              <vs-th>Payment Type</vs-th>
              <vs-th>Order Price</vs-th>
              <vs-th>Status</vs-th>
              <vs-th sort-key="created_at">Order Date</vs-th>
              <vs-th>Actions</vs-th>
            </template>

            <template slot-scope="{ data }">
              <tbody>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td>
                    <i>#{{ tr.invoice_number }}</i>
                  </vs-td>
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
                    {{ tr.payment_type | title }}
                  </vs-td>
                  <vs-td> Rs. {{ tr.total }} </vs-td>
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
                        name: 'ecommerce-admin-order-detail',
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
import fileDownload from "js-file-download";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
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
      sort: {},
      filters: {},
    };
  },
  components: {
    flatPickr,
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    handleSort(key, active) {
      if (key) {
        this.loading = false;
        this.sort[key] = active;
        this.fetchOrders();
      }
    },
    async exportOrders() {
      this.$vs.loading();
      try {
        let payload = {
          page: this.table_options.current_page,
            search: this.search_keyword,
            sort: JSON.stringify(this.sort),
            filters: JSON.stringify(this.filters),
        };
        let response = await this.$http.post(
          "/api/admin/orders/export-excel",
          payload,
          {
            headers: {
              "Content-Disposition": "attachment; filename=testfile.xlsx",
              "Content-Type":
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/json",
            },
            responseType: "arraybuffer",
          }
        );
        fileDownload(response.data, "orders_export.xlsx");
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close();
      }
    },

    async fetchOrders() {
      if (!this.loading) {
        this.$vs.loading({
          container: "#loading--container",
        });
      }
      try {
        let response = await this.$http.get("/api/admin/orders/get-orders", {
          params: {
            page: this.table_options.current_page,
            search: this.search_keyword,
            sort: this.sort,
            filters: JSON.stringify(this.filters),
          },
        });
        this.orders = response.data.data;
        this.selectedOrder = response.data.data.data[0];
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
        this.loading = false;
      }
    },

    getOrderStatus(status) {
      switch (status) {
        case 1:
          return "Pending";
        case 2:
          return "Confirmed";
        case 3:
          return "Dispatched";
        case 4:
          return "Completed";
        case 5:
          return "Cancelled";
        default:
          return "";
      }
    },

    getOrderStatusColor(status) {
      switch (status) {
        case 1:
          return "text-warning";
        case 2:
          return "text-success";
        case 3:
          return "text-priamry";
        case 4:
          return "text-success";
        case 5:
          return "text-danger";
        default:
          return "";
      }
    },
  },
  watch: {
    "table_options.current_page": function () {
      this.fetchOrders();
    },
  },
};
</script>