<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card
      id="loading--container"
      class="card-padding-5 vs-con-loading__container"
      v-else
    >
      <vs-table
        stripe
        :data="products.data"
        :max-items="products.per_page"
        :total="products.total"
        :sst="true"
        class="mt-4"
      >
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ products.total }} &nbsp; &nbsp;
          <router-link
            :to="{ name: 'ecommerce-vendor-product-detail'}"
          >
            <vs-button color="primary" size="small" type="border"
              >Add New Product</vs-button
            >
          </router-link>

          <div class="con-input-search vs-table--search">
            <vs-input class="inline-block" v-model="search_keyword"></vs-input>
            <vs-button
              type="filled"
              icon="search"
              @click="
                table_options.current_page = 1;
                fetchProducts();
              "
            ></vs-button>
          </div>
        </template>

        <template slot-scope="{ data }">
          <vs-tr
            class="p-4"
            :data="tr"
            :key="indextr"
            v-for="(tr, indextr) in data"
          >
            <vs-td style="width: 110px !important">
              <img
                :src="
                  tr.product_image.thumb
                    ? tr.product_image.thumb
                    : require('@assets/images/no-image-placeholder.jpg')
                "
                alt
                width="90px"
              />
            </vs-td>
            <vs-td style="vertical-align: top">
              <strong>{{ tr.name }}</strong>
              <br />
              <p class="mt-2 text-sm">
                <strong>
                  <span class="text-success" v-if="tr.status == 1"
                    >Enabled</span
                  >
                  <span class="text-danger" v-if="tr.status == 0"
                    >Inactive</span
                  >
                  <span class="text-warning" v-if="tr.status == 2">Draft</span>
                </strong>
              </p>
              <p class="mt-2 text-sm">{{ tr.quantity }} in stock</p>
            </vs-td>
            <vs-td>
              <div v-if="tr.price">
                <strong class="text-2xl">Rs. {{ tr.price }}</strong>
                <span class="text-lg text-strike" v-if="tr.original_price"
                  >Rs. {{ tr.original_price }}</span
                >
              </div>
              <div v-else>---</div>
            </vs-td>

            <vs-td>
              <strong>SKU:</strong>
              {{ tr.sku }}
            </vs-td>
            <vs-td>
              <div @click="toggleProductStatus(tr)">
                <strong>Status</strong>
                <br />
                <vs-icon
                  :icon="tr.status === 1 ? 'toggle_on' : 'toggle_off'"
                  class="icon-large"
                  :class="tr.status === 1 ? 'text-success' : 'text-danger'"
                ></vs-icon>
              </div>
            </vs-td>
            <vs-td>
              <vs-button size="small" @click="duplicateProduct(tr.id)"
                >Make Duplicate</vs-button
              >
            </vs-td>
            <vs-td>
              <router-link
                :to="{ name: 'ecommerce-vendor-product-detail', params: { id: tr.id } }"
              >
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="warning"
                  type="filled"
                  icon="create"
                ></vs-button>
              </router-link>
              <vs-button
                class="table-action--buttons"
                radius
                @click="deleteProduct(tr.id)"
                color="danger"
                type="filled"
                icon="delete"
              ></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <vs-pagination
        class="mt-6"
        :total="products.last_page"
        v-model="table_options.current_page"
      ></vs-pagination>
    </vx-card>

    <vs-popup title="Duplicate Product" :active.sync="duplicate_popup">
      <div id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-1/2 mb-4">
            <label for class="vs-input--label">Duplicate Images</label>
            <vs-switch
              vs-value="1"
              icon-pack="feather"
              vs-icon-on="icon-check-circle"
              vs-icon-off="icon-slash"
              v-model="duplicate_product.duplicate_images"
            >
              <span slot="on">Yes</span>
              <span slot="off">No</span>
            </vs-switch>
          </div>
          <div class="vx-col w-1/2 mb-4">
            <label for class="vs-input--label">Duplicate Variants</label>
            <vs-switch
              vs-value="1"
              icon-pack="feather"
              vs-icon-on="icon-check-circle"
              vs-icon-off="icon-slash"
              v-model="duplicate_product.duplicate_variants"
            >
              <span slot="on">Yes</span>
              <span slot="off">No</span>
            </vs-switch>
          </div>
        </div>
        <vs-button class="mr-3 mt-5" @click="processProductDuplication"
          >Submit</vs-button
        >
      </div>
    </vs-popup>
  </div>
</template>
<script>
import MetaFields from "@/components/Meta";
import { VueContext } from "vue-context";
export default {
  data() {
    return {
      loading: true,
      products: {
        data: [],
        per_page: 0,
        total: 0,
        last_page: 0,
      },
      table_options: {
        current_page: 1,
      },
      search_keyword: "",
      duplicate_popup: false,
      duplicate_product: {
        duplicate_images: false,
        duplicate_variants: false,
      },
    };
  },
  components: {
    MetaFields,
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      if (!this.loading) {
        this.$vs.loading({
          container: "#loading--container",
        });
      }
      try {
        let response = await this.$http.get("/api/vendor/products", {
          params: {
            page: this.table_options.current_page,
            search: this.search_keyword,
          },
        });
        this.products = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
        this.loading = false;
      }
    },

    // handlePagination(page) {
    //   this.table_options.current_page = page;
    //   this.fetchProducts();
    // },

    toggleProductStatus(product) {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: `Confirm`,
        text: "Are you sure you want to change the product status?",
        accept: async () => {
          let payload = {
            _method: "PATCH",
          };
          let response = await this.$http.post(
            `/api/admin/products/${product.id}/toggle-status`,
            payload
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            product.status = response.data.status;
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },

    duplicateProduct(product_id) {
      this.duplicate_product.product_id = product_id;
      this.duplicate_popup = true;
    },

    async processProductDuplication() {
      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let url = "/api/admin/product/make-duplicate";
        let response = await this.$http.post(url, this.duplicate_product);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.duplicate_popup = false;
          this.fetchProducts();
        } else {
          this.errorNotification(response.data.message);
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    deleteProduct(product_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete the product?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/products/${product_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchProducts();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    "table_options.current_page": function () {
      this.fetchProducts();
    },

    duplicate_popup(newVal) {
      if (!newVal) {
        this.duplicate_product = {
          duplicate_images: false,
          duplicate_variants: false,
        };
      }
    },
  },
};
</script>