<template>
  <div>
    <div class="vx-row vs-con-loading__containerrr" id="loading--container">
      <div class="vx-col md:w-1/4">
        <vx-card title="Add Products">
          <div class="vx-row">
            <div class="vx-col w-full mb-2">
              <vs-select
                class="w-full"
                label="Select Type"
                v-model="product_data.select_type"
                name="select_type"
                v-validate="'required'"
              >
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in [
                    { text: 'Category', value: 'category' },
                    { text: 'Product', value: 'product' },
                  ]"
                />
              </vs-select>
              <span
                class="text-danger text-sm"
                v-if="errors.has('select_type')"
                >{{ errors.first("select_type") }}</span
              >
            </div>

            <div
              class="vx-col w-full mb-4"
              v-if="product_data.select_type == 'product'"
            >
              <label for class="vs-input--label">Product</label>
              <v-select
                :options="products"
                label="name"
                value="id"
                v-model="product_data.product_id"
                :reduce="(cat_) => cat_.id"
                name="product_id"
              />

              <span
                class="text-danger text-sm"
                v-if="errors.has('product_id')"
                >{{ errors.first("product_id") }}</span
              >
            </div>

            <div
              class="vx-col w-full mb-4"
              v-else-if="product_data.select_type == 'category'"
            >
              <label for class="vs-input--label">Category</label>
              <v-select
                :options="dropdown_categories"
                label="category_full_name"
                value="id"
                v-model="product_data.category_id"
                :reduce="(cat_) => cat_.id"
                name="category_ids"
              />
            </div>

            <div class="vx-col w-full mb-2">
              <vs-select
                name="discount_type"
                class="w-full"
                label="Discount Type"
                v-validate="'required'"
                v-model="product_data.discount_type"
              >
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in [
                    { value: 1, text: 'Money Value' },
                    { value: 2, text: 'Percentage Value' },
                  ]"
                />
              </vs-select>
              <span
                class="text-danger text-sm"
                v-if="errors.has('discount_type')"
                >{{ errors.first("discount_type") }}</span
              >
            </div>

            <div class="vx-col w-full">
              <vs-input
                name="discount_value"
                v-model="product_data.discount_value"
                class="w-full"
                label="Discount Value"
                type="number"
                v-validate="'required'"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('discount_value')"
                >{{ errors.first("discount_value") }}</span
              >
            </div>
            <div class="vx-col w-full mt-2">
              <vs-button
                size="small"
                type="relief"
                color="primary"
                @click="addProductOnCampaign"
                >Save</vs-button
              >
            </div>
          </div>
        </vx-card>
      </div>

      <div class="vx-col md:w-3/4">
        <vx-card title="Products">
          <vs-table
            search
            stripe
            :data="campaign_products"
            max-items="40"
            pagination
          >
            <template slot="header">
              <strong>Total :</strong>
              &nbsp;{{ campaign_products.length }} &nbsp; &nbsp;
            </template>
            <template slot="thead">
              <vs-th sort-key="email">Image</vs-th>
              <vs-th>Title</vs-th>
              <vs-th>Price</vs-th>
              <vs-th>Actions</vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td>
                  <img
                    :src="tr.product.product_image.thumb"
                    width="50px"
                    alt=""
                  />
                </vs-td>
                <vs-td>{{ tr.product.name }}</vs-td>
                <vs-td
                  >Rs. {{ tr.product.discounted_price }}
                  <small style="  text-decoration: line-through;">Rs. {{ tr.product.original_price ? tr.product.original_price : tr.product.price }}</small>
                  <br />
                  (<span v-if="tr.discount_type == 1">Rs. </span>
                  {{ tr.discount_value
                  }}<span v-if="tr.discount_type == 2">% </span> Off)
                </vs-td>
                <vs-td>
                  <vs-button
                    @click="removeCampaignProduct(tr.id)"
                    size="small"
                    class="table-action--buttons"
                    radius
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
    </div>
  </div>
</template>

<script>
import { renderServerErrors } from "@/utils.js";

import vSelect from "vue-select";
export default {
  data() {
    return {
      products: [],
      dropdown_categories: [],
      product_data: {
        select_type: "",
      },
      campaign_id: "",
      campaign_products: [],
    };
  },
  components: {
    "v-select": vSelect,
  },
  mounted() {
    this.campaign_id = this.$route.params.id;
    this.getProducts();
    this.getCategories();
    this.getCampaignProducts();
  },
  methods: {
    async getCategories() {
      try {
        let url = `/api/admin/product-categories-dropdown`;
        let response = await this.$http.get(url);
        this.dropdown_categories = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async getCampaignProducts() {
      try {
        let url = `/api/admin/discount-campaigns/${this.campaign_id}/get-products`;
        let response = await this.$http.get(url);
        this.campaign_products = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async getProducts() {
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get("/api/admin/vendors/0/products");
        this.products = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async addProductOnCampaign() {
      this.$vs.loading({
        container: "#loading--container",
      });
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      try {
        let response = await this.$http.post(
          `/api/admin/discount-campaigns/${this.campaign_id}/add-products`,
          this.product_data
        );

        if (response.data.success) {
          this.successNotification(response.data.message);
          this.getCampaignProducts();
          this.product_data = {
            select_type: "",
          };
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
    removeCampaignProduct(id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to remove product from Campaign?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/discount-campaigns/product/${id}/remove`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.getCampaignProducts();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>