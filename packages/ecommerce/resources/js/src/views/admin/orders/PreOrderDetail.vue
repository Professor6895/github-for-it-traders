<template>
  <div class="vx-card p-4">
    <div v-if="!order_loading">
      <!-- <vs-popup title="Order Detail" :active.sync="order_detail_popup">
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
      </vs-popup> -->

      <!-- <div>
        <div class="vx-row mb-4">
          <div class="vx-col w-1/2">
            <p>
              <strong>Order Status</strong> :

              <span :class="getOrderStatusColor()">{{
                this.order.order_status
              }}</span>
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
      </div> -->

      <table class="emi--detail-table">
        <tr>
          <th>Product</th>
          <td>
            {{ order.product.name }}
          </td>
        </tr>
        <tr>
          <th>Customer Name</th>
          <td>
            {{ order.name }}
          </td>
        </tr>

        <tr>
          <th>Contact Number</th>
          <td>
            {{ order.phone }}
          </td>
        </tr>

        <tr>
          <th>Email Address</th>
          <td>
            {{ order.user.email }}
          </td>
        </tr>

        <tr>
          <th>Message</th>
          <td>
            {{ order.message }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.emi--detail-table {
  width: 100%;

  border: 1px solid #f8f8f8;
  border-collapse: collapse;
  th {
    border: 1px solid #f8f8f8;
  }
  td {
    padding: 13px 20px;
    min-width: 200px;
    border: 1px solid #f8f8f8;
  }
}
.reply--area {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      pre_order_id: "",
      order: {},
      order_loading: true,
      order_detail_popup: false,
    };
  },
  mounted() {
    this.pre_order_id = this.$route.params.id;
    this.fetchOrderDetail();
  },
  methods: {
    async fetchOrderDetail() {
      this.order_loading = true;

      try {
        let response = await this.$http.get(
          `/api/admin/orders/${this.pre_order_id}/get-pre-order-detail`
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
          notify_via_email: this.order.notify_via_email,
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
  },
};
</script>