<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="coupon_discounts" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ coupon_discounts.length }} &nbsp; &nbsp;
          <router-link
            :to="{ name: 'admin-coupon-discounts-detail' }"
            v-if="checkPermission('discounts-add')"
          >
            <vs-button color="primary" size="small" type="border">Add Coupon Discount</vs-button>
          </router-link>
        </template>
        <template slot="thead">
          <vs-th>SN</vs-th>
          <vs-th>Title</vs-th>
          <vs-th>CODE</vs-th>
          <vs-th>Type</vs-th>
          <vs-th>Value</vs-th>
          <vs-th>From - To</vs-th>
          <vs-th>Status</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :state='!tr.is_active ? "danger":"success"' :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <i>#{{tr.id}}</i>
            </vs-td>
            <vs-td>{{ tr.title }}</vs-td>
            <vs-td>{{ tr.code }}</vs-td>
            <vs-td>{{ tr.discount_type === 1 ? "Money Value": "Percentage Value" }}</vs-td>
            <vs-td>{{ tr.discount_value }}</vs-td>
            <vs-td>{{ tr.start_date }} - {{ tr.end_date }}</vs-td>
            <vs-td>{{ tr.is_active ? 'Active' :"Inactive" }}</vs-td>
            <vs-td>
              <router-link
                :to="{name: 'admin-coupon-discounts-detail', params: {id: tr.id}}"
                v-if="checkPermission('discounts-edit')"
              >
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="warning"
                  type="filled"
                  size="small"
                  icon="create"
                ></vs-button>
              </router-link>
              <vs-button
                v-if="checkPermission('discounts-delete')"
                class="table-action--buttons"
                radius
                size="small"
                @click="deleteDiscount(tr.id)"
                color="danger"
                type="filled"
                icon="delete"
              ></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      coupon_discounts: [],
    };
  },
  mounted() {
    this.fetchCouponDiscounts();
  },
  methods: {
    async fetchCouponDiscounts() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/coupon-discounts");
        this.coupon_discounts = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    deleteDiscount(discount_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete discount?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/coupon-discounts/${discount_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchCouponDiscounts();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>