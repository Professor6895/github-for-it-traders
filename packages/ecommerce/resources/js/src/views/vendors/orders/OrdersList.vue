<template>
  <div>
    <vs-popup
      title="Order Items"
      class="popup-lg"
      :active.sync="order_items_popup"
    >
      <vs-table stripe :data="order_items" max-items="40" pagination>
        <template slot="thead">
          <vs-th>Image</vs-th>
          <vs-th>Product Name</vs-th>
          <vs-th>Attributes</vs-th>
          <vs-th>Quantity</vs-th>
          <vs-th>Price</vs-th>
        </template>

        <template slot-scope="{ data }">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td> 
                 <img
                    :src="tr.product.product_image.thumb"
                    width="60"
                    class="d-inline-block"
                  />
              </vs-td>
               <vs-td>{{ tr.product.name }}</vs-td>
              <vs-td>
                <div v-if="Object.keys(tr.product_attributes).length">
                  <p v-for="(value, key) in tr.product_attributes">
                    <strong>{{ key }} : </strong> {{ value }}
                  </p>
                </div>
                <div v-else>---</div>
              </vs-td>
              <vs-td>
                {{ tr.quantity }}
              </vs-td>
              <vs-td>
                Rs. {{ tr.product_price }}
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
      </vs-table>
    </vs-popup>

    <pageLoader v-if="loading"></pageLoader>
    <div class="vx-row" v-else>
      <div class="vx-col w-full">
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
      </div>
      <div class="vx-col w-full mt-2">
        <vx-card
          id="loading--container"
          class="card-padding-5 vs-con-loading__container"
        >
          <vs-table search stripe :data="orders" max-items="40" pagination>
            <template slot="thead">
              <vs-th>Invoice Number</vs-th>
              <vs-th sort-key="title">Customer Name</vs-th>
              <vs-th sort-key="title">Payment Type</vs-th>
              <vs-th>Order Price</vs-th>
              <vs-th>Status</vs-th>
              <vs-th>Order Date</vs-th>
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
                    <vs-button size="small" @click="showOrderItems(tr.id)"
                      >Show Order Items</vs-button
                    >
                  </vs-td>
                </vs-tr>
              </tbody>
            </template>
          </vs-table>
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
      orders: [],
      table_options: {
        current_page: 1,
      },
      search_keyword: "",
      order_items_popup: false,
      order_items: [],
    };
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      if (!this.loading) {
        this.$vs.loading({
          container: "#loading--container",
        });
      }
      try {
        let response = await this.$http.get("/api/vendor/orders/get-orders", {
          params: {
            page: this.table_options.current_page,
            search: this.search_keyword,
          },
        });
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

    async showOrderItems(order_id) {
      try {
        let response = await this.$http.get(
          `/api/vendor/orders/${order_id}/get-order-items`
        );
        this.order_items = response.data.data;
        this.order_items_popup = true;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
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