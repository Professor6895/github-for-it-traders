<template>
  <div>
    <vx-card class="vs-con-loading__container" id="vendor-loading--container">
      <div class="vx-row">
        <div class="vx-col text-center w-full md:w-2/12">
          <vs-avatar
            size="150px"
            :src="
              vendor.avatar
                ? vendor.avatar_image.thumb
                : require('@assets/images/default-avatar.png')
            "
          />
          <br />
          <div class="text-center">
            <router-link
              :to="{ name: 'admin-vendor-detail', params: { id: id } }"
            >
              <vs-button color="primary" size="small" type="border">
                Edit Details
              </vs-button>
            </router-link>
          </div>
        </div>
        <div class="vx-col w-full md:w-10/12">
          <vs-tabs class="tab-action-btn-fill-conatiner">
            <vs-tab label="Information" icon-pack="feather" icon="icon-info">
              <div class="tab-text">
                <div class="vx-row">
                  <div class="vx-col md:w-1/3">
                    <h3>{{ vendor.name }}</h3>
                    <p class="mt-3">
                      <strong>Email:</strong>
                      {{ vendor.email }}
                    </p>
                    <p class="mt-3">
                      <strong>Contact:</strong>
                      {{ vendor.contacts || "N/A" }}
                    </p>
                    <p class="mt-3">
                      <strong>Address:</strong>
                      {{ vendor.address }}
                    </p>
                  </div>

                  <div class="vx-col md:w-1/3">
                    <h4>Contact Person Information</h4>
                    <br />
                    <p>
                      <strong>Name:</strong>
                      {{ vendor.full_name }}
                    </p>
                    <p class="mt-3">
                      <strong>Contact Number:</strong>
                      {{ vendor.contact_person_phone }}
                    </p>
                    <p class="mt-3">
                      <strong>Address:</strong>
                      {{ vendor.contact_person_address }}
                    </p>
                  </div>
                </div>
              </div>
            </vs-tab>

            <vs-tab
              label="Business Information"
              icon-pack="feather"
              icon="icon-info"
            >
              <div class="tab-text">
                <div class="vx-row">
                  <div class="vx-col md:w-1/3">
                    <p class="mt-3">
                      <strong>Legal Business Name:</strong>
                      {{ vendor.legal_business_name || "N/A" }}
                    </p>

                    <p class="mt-3">
                      <strong>Inventory Location:</strong>
                      {{ vendor.inventory_location || "N/A" }}
                    </p>

                    <p class="mt-3">
                      <strong>PAN / VAT Number:</strong>
                      {{ vendor.pan_no || "N/A" }}
                    </p>
                  </div>

                  <div class="vx-col md:w-2/3">
                    <strong>PAN / VAT Document: </strong>
                    <br />
                    <img
                      :src="vendor.pan_document_image"
                      width="50%"
                      alt=""
                      class="mt-2"
                      v-if="vendor.pan_document"
                    />
                    <h5 class="mt-5" v-else>Not Uplaoded!!</h5>
                  </div>
                </div>
              </div></vs-tab
            >
            <vs-tab
              label="Bank Information"
              icon-pack="feather"
              icon="icon-info"
            >
              <div class="tab-text">
                <div class="vx-row">
                  <div class="vx-col w-full md:w-1/3">
                    <p class="mt-3">
                      <strong>Bank Name:</strong>
                      {{ vendor.bank_name || "N/A" }}
                    </p>

                    <p class="mt-3">
                      <strong>Branch:</strong>
                      {{ vendor.bank_branch || "N/A" }}
                    </p>
                    <p class="mt-3">
                      <strong>Account Name:</strong>
                      {{ vendor.bank_account_name || "N/A" }}
                    </p>

                    <p class="mt-3">
                      <strong>Account Number:</strong>
                      {{ vendor.bank_account_number || "N/A" }}
                    </p>
                  </div>

                  <div class="vx-col w-full md:w-2/3">
                    <strong>Bank Cheque Copy </strong>
                    <br />
                    <img
                      :src="vendor.bank_cheque_image"
                      width="50%"
                      alt=""
                      class="mt-2"
                      v-if="vendor.bank_cheque_copy"
                    />
                    <h5 class="mt-5" v-else>Not Uplaoded!!</h5>
                  </div>
                </div>
              </div>
            </vs-tab>
          </vs-tabs>
        </div>
      </div>
    </vx-card>
    <vx-card
      :title="`Products  (${products.length} Total)`"
      class="vs-con-loading__container mt-3"
      id="product-loading--container"
    >
      <vs-table search stripe :data="products" max-items="40" pagination>
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
              <strong>Status</strong>
              <br />
              <vs-icon
                :icon="tr.status === 1 ? 'toggle_on' : 'toggle_off'"
                class="icon-large"
                :class="tr.status === 1 ? 'text-success' : 'text-danger'"
              ></vs-icon>
            </vs-td>
            <vs-td>
              <a :href="`/product-detail/${tr.slug}`" target="_blank">
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="success"
                  type="filled"
                  icon="remove_red_eye"
                ></vs-button>
              </a>
              <router-link
                :to="{ name: 'admin-product-detail', params: { id: tr.id } }"
              >
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="warning"
                  type="filled"
                  v-if="checkPermission('edit-product')"
                  icon="create"
                ></vs-button>
              </router-link>
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
      id: "",
      vendor: {},
      products: [],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchVendor();
  },
  methods: {
    async fetchVendor() {
      this.$vs.loading({
        container: "#vendor-loading--container",
      });
      try {
        let response = await this.$http.get(`/api/admin/vendors/${this.id}`);
        if (response.data.success) {
          this.vendor = response.data.data;

          this.fetchVendorProducts();
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "error-404" });
        }
      } finally {
        this.$vs.loading.close("#vendor-loading--container > .con-vs-loading");
      }
    },

    async fetchVendorProducts() {
      this.$vs.loading({
        container: "#product-loading--container",
      });
      try {
        let response = await this.$http.get(
          `/api/admin/vendors/${this.id}/products`
        );
        if (response.data.success) {
          this.products = response.data.data;
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "error-404" });
        }
      } finally {
        this.$vs.loading.close("#product-loading--container > .con-vs-loading");
      }
    },
  },
};
</script>