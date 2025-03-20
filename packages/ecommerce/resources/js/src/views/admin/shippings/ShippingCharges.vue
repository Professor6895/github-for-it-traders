<template>
  <div>
    <vs-popup
      title="Shipping Charge"
      :active.sync="shipping_popup"
      class="popup-lg no-overflow"
    >
      <div id="loading--container" class="vs-con-loading__container">
        <div>
          <div class="w-full mt-4" v-if="!shipping_charge.id">
            <label for class="vs-input--label">Province</label>
            <v-select
              :options="addresses"
              label="name"
              value="id"
              v-model="shipping_charge.province_id"
              :reduce="(province) => province.id"
              name="province_id"
            />
            <span
              class="text-danger text-sm"
              v-show="errors.has('province_id')"
              >{{ errors.first("province_id") }}</span
            >
          </div>

          <div class="w-full mt-4" v-if="!shipping_charge.id">
            <label for class="vs-input--label">District</label>
            <v-select
              :options="districts"
              label="name"
              value="name"
              v-model="shipping_charge.district"
              :reduce="(district) => district.name"
              name="district_id"
            />
            <span
              class="text-danger text-sm"
              v-show="errors.has('district_id')"
              >{{ errors.first("district_id") }}</span
            >
          </div>
          <div class="w-full mt-4">
            <vs-input
              class="w-full"
              name="shipping_charge"
              label="Shippng Charge"
              type="number"
              v-validate="'required'"
              v-model="shipping_charge.shipping_charge"
            />
            <p>
              <span
                class="text-danger text-sm"
                v-if="errors.has('shipping_charge')"
                >{{ errors.first("shipping_charge") }}</span
              >
            </p>
          </div>
          <vs-button class="mr-3 mt-5" @click="saveShippingCharge"
            >Submit</vs-button
          >
        </div>
      </div>
    </vs-popup>

    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table
        search
        stripe
        :data="shipping_charges"
        max-items="40"
        pagination
      >
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ shipping_charges.length }} &nbsp; &nbsp;
          <vs-button
            color="primary"
            @click="shipping_popup = true"
            size="small"
            type="border"
            >Add Shipping Charge</vs-button
          >
        </template>
        <template slot="thead">
          <vs-th sort-key="name">District</vs-th>
          <vs-th>Shipping Charge</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>{{ tr.district }}</vs-td>
            <vs-td>Rs. {{ tr.shipping_charge }}</vs-td>
            <vs-td>
              <vs-button
                class="table-action--buttons"
                radius
                color="warning"
                type="filled"
                size="small"
                @click="editShippingCharge(tr)"
                icon="create"
              ></vs-button>
              <vs-button
                class="table-action--buttons"
                radius
                size="small"
                @click="deleteShippingCharge(tr.id)"
                color="danger"
                type="filled"
                v-if="tr.id != 1"
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
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import vSelect from "vue-select";

export default {
  data() {
    return {
      loading: true,
      shipping_charges: [],

      shipping_charge: {},
      //ADD AND EDIT
      shipping_popup: false,
      addresses: [],
    };
  },
  components: {
    "v-select": vSelect,
  },

  computed: {
    districts() {
      if (this.addresses.length) {
        let address_ = this.addresses.filter(
          (province) => province.id === this.shipping_charge.province_id
        );
        if (address_.length) {
          return address_[0].districts;
        }
      }
      return [];
    },
  },
  mounted() {
    this.getLocalAddresses();
    this.fetchShippingCharges();
  },
  methods: {
    async getLocalAddresses() {
      try {
        let response = await this.$http.get("/api/local-addresses");
        this.addresses = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchShippingCharges() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/shipping-charges");
        this.shipping_charges = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveShippingCharge() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      //   this.$vs.loading({
      //     container: "#loading--container",
      //   });

      try {
        let params = {
          district: this.shipping_charge.district,
          shipping_charge: this.shipping_charge.shipping_charge,
        };

        let url = `/api/admin/shipping-charges`;
        if (this.shipping_charge.id) {
          url = `/api/admin/shipping-charges/${this.shipping_charge.id}`;
          params["_method"] = "PATCH";
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchShippingCharges();
          this.shipping_popup = false;
        } else {
          this.errorNotification(response.data.message);
        }
      } catch (error) {
        console.log(error);
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    editShippingCharge(shipping_charge) {
      this.shipping_charge = _.cloneDeep(shipping_charge); 
      this.shipping_popup = true;
    },

    deleteShippingCharge(id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete the shipping charge?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/shipping-charges/${id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchShippingCharges();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    shipping_popup(val) {
      if (!val) {
        this.shipping_charge = {};
        this.errors.clear();
      }
    },
  },
};
</script>
