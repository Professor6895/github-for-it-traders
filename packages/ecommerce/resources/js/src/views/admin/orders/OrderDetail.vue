<template>
  <div class="vx-card p-4">
    <div v-if="!order_loading">
      <vs-popup title="Order Detail" :active.sync="order_detail_popup">
        <div id="loading--container" class="vs-con-loading__container">
          <div class="vx-row">
            <div class="vx-col w-full mb-4">
              <vs-select
                class="w-full"
                label="Order Status"
                v-model="order.status"
              >
                <vs-select-item
                  :key="`order${index}`"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in [
                    { text: 'Placed', value: 1 },
                    { text: 'Confirmed', value: 2 },
                    { text: 'Dispatched', value: 3 },
                    { text: 'Completed', value: 4 },
                    { text: 'Canceled', value: 5 },
                  ]"
                ></vs-select-item>
              </vs-select>
              <span
                class="text-danger text-sm"
                v-show="errors.has('parent_id')"
                >{{ errors.first("parent_id") }}</span
              >
            </div>
            <div
              class="vx-col w-full mb-4"
              v-if="order.status !== 1"
            >
              <vs-checkbox v-model="order.notify_user">Notify User</vs-checkbox>
              <vs-checkbox v-model="order.notify_via_email" v-if="order.notify_user" class="mt-2">Via Email</vs-checkbox>
              <vs-checkbox class="mt-2" v-model="order.notify_via_sms" v-if="order.notify_user">Via SMS</vs-checkbox>
            </div>
            <div class="vx-col w-full">
              <vs-button
                size="small"
                class="mr-3 mt-5"
                @click="updateOrderDetail"
                >Submit</vs-button
              >
            </div>
          </div>
        </div>
      </vs-popup>

      <div>
        <div class="vx-row mb-4">
          <div class="vx-col w-1/2">
            <p>
              <strong>Order Status</strong> :

              <span :class="getOrderStatusColor()">{{
                this.order.order_status
              }}</span>
            </p>
            <p class="mt-2">
              <strong>Invoice Number</strong> :
              <i>#{{ order.invoice_number }}</i>
            </p>
          </div>
          <div class="vx-col w-1/2">
            <vs-button
              color="warning"
              class="float-right"
              @click="order_detail_popup = true"
              size="small"
              icon="create"
              >Edit Order</vs-button
            >
          </div>
        </div>
      </div>

      <div class="vx-row mt-4">
        <div class="vx-col md:w-1/3">
          <div class="order-detail--wrapper p-3">
            <h6 class="mb-3">Order Details</h6>
            <p>
              <strong>Order Date</strong> :
              {{ order.created_at | date_format("MMMM Do YYYY, h:mm a") }}
            </p>
            <p class="mt-2">
              <strong>Payment Method</strong> : {{ order.payment_type }}
            </p>
          </div>
        </div>
        <div class="vx-col md:w-1/3">
          <div class="order-detail--wrapper p-3">
            <h6 class="mb-3">Customer Details</h6>
            <p><strong>Full Name : </strong> {{ order.user.name }}</p>
            <p><strong>Email : </strong> {{ order.user.email }}</p>
            <p><strong>Contact : </strong> {{ order.user.contact_number }}</p>
          </div>
        </div>
        <div class="vx-col md:w-1/3">
          <div class="order-detail--wrapper p-3">
            <h6 class="mb-3">Shipping Address</h6>
            <p>
              <strong>Full Name : </strong>
              {{ order.shipping_address.full_name }}
            </p>
            <p>
              <strong>Contact : </strong>
              {{ order.shipping_address.contact_number }}
            </p>
            <p>
              {{ order.shipping_address.province_detail.name }},
              {{
                order.shipping_address.district +
                " " +
                order.shipping_address.country
              }}
            </p>
            <p>
              <strong>City : </strong>
              {{ order.shipping_address.city }} ({{
                order.shipping_address.landmark
              }})
            </p>
          </div>
        </div>
      </div>

      <div class="vx-row mt-4">
        <div class="vx-col w-full">
          <vs-table stripe :data="order.items" max-items="40">
            <template slot="thead">
              <vs-th>Image</vs-th>
              <vs-th>Product</vs-th>
              <vs-th>Attribute</vs-th>
              <vs-th>Unit Price</vs-th>
              <vs-th>Qty</vs-th>
              <vs-th>Warranty Serial</vs-th>
              <vs-th>Total</vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td>
                  <img
                    :src="tr.product.product_image.thumb"
                    width="40"
                    class="d-inline-block"
                  />
                </vs-td>
                <vs-td>
                  <span class="d-inline-block">{{ tr.product.name }}</span>
                </vs-td>
                <vs-td>
                  <div v-if="Object.keys(tr.product_attributes).length">
                    <p v-for="(value, key) in tr.product_attributes">
                      <strong>{{ key }} : </strong> {{ value }}
                    </p>
                  </div>
                  <div v-else>---</div>
                </vs-td>

                <vs-td> Rs. {{ tr.product_price }} </vs-td>
                <vs-td>
                  {{ tr.quantity }}
                </vs-td>
                <vs-td>
                  <div v-if="tr.warranty_token">
                    {{ tr.warranty_token }}
                  </div>
                  <div v-else>
                    <vs-button
                      color="warning"
                      @click="generateWarrantySerial(tr)"
                      size="small"
                      >Generate Warranty Serial</vs-button
                    >
                  </div>
                </vs-td>
                <vs-td> Rs. {{ tr.product_price * tr.quantity }} </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </div>
      </div>

      <div class="vx-row mt-3">
        <div class="vx-col w-full md:w-2/3 text-right"></div>
        <div class="vx-col w-full md:w-1/3">
          <table class="order-price-table">
            <tr>
              <th>Order Total</th>
              <td>Rs. {{ order.order_total }}</td>
            </tr>
            <tr>
              <th>Shipping Cost</th>
              <td>Rs. {{ order.shipping_cost }}</td>
            </tr>
            <tr>
              <th>Grand Total</th>
              <td>Rs. {{ order.total }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-detail--wrapper {
  border: 1px solid #e5e5e5;
  border-radius: 15px;
}

.order-price-table {
  font-size: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      order_id: "",
      order: {},
      order_loading: true,
      order_detail_popup: false,
    };
  },
  mounted() {
    this.order_id = this.$route.params.id;
    this.fetchOrderDetail();
  },
  methods: {
    async fetchOrderDetail() {
      this.order_loading = true;

      try {
        let response = await this.$http.get(
          `/api/admin/orders/${this.order_id}/get-order-detail`
        );
        if (response.data.success) {
          this.order = response.data.data;
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "page-error-404" });
        }
      } finally {
        this.order_loading = false;
      }
    },

    async updateOrderDetail() {
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let payload = {
          status: this.order.status,
          notify_user: this.order.notify_user,
          notify_via_email:  this.order.notify_via_email,
          notify_via_sms: this.order.notify_via_sms,
        };
        let response = await this.$http.post(
          `/api/admin/orders/${this.order_id}/update-order-status`,
          payload
        );
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.order_detail_popup = false;
          this.fetchOrderDetail();
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "page-error-404" });
        }
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    getOrderStatusColor() {
      let status = this.order.status;
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

    async generateWarrantySerial(order_item) {
        let response = await this.$http.post(
          `/api/admin/orders/order-item/${order_item.id}/generate-warranty-serial`,
        );
      if (response.data.success) {
          this.fetchOrderDetail();
        }
    }
  },
};
</script>