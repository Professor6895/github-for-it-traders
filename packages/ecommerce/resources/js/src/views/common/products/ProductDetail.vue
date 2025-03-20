  <template>
  <div class="vx-row">
    <div class="vx-col md:w-2/3 w-full mb-4">
      <vx-card>
        <div class="vx-row">
          <div class="vx-col w-full md:w-2/3 mb-4">
            <vs-input
              name="name"
              class="w-full"
              label="Product Title"
              v-model="product.name"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('name')">{{
              errors.first("name")
            }}</span>
          </div>
          <div class="vx-col w-full md:w-1/3 mb-4">
            <vs-input
              name="sku"
              v-model="product.sku"
              class="w-full"
              label="SKU"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('sku')">{{
              errors.first("sku")
            }}</span>
          </div>

          <div class="vx-col w-full mb-4">
            <vs-input
              name="short_description"
              v-model="product.short_description"
              class="w-full"
              label="Short Description"
            />
            <span
              class="text-danger text-sm"
              v-if="errors.has('short_description')"
              >{{ errors.first("short_description") }}</span
            >
          </div>

          <div class="vx-col w-full mb-4">
            <label for class="vs-input--label">Category</label>
            <v-select
              :options="dropdown_categories"
              label="category_full_name"
              value="id"
              multiple
              v-model="product.category_ids"
              :reduce="(cat_) => cat_.id"
              name="category_ids"
              v-validate="'required'"
            />

            <span
              class="text-danger text-sm"
              v-if="errors.has('category_ids')"
              >{{ errors.first("category_ids") }}</span
            >
          </div>

          <div class="vx-col w-full mb-4">
            <label for class="vs-input--label">Description</label>
            <q-editor
              :id="`product-detal`"
              v-model="product.description"
            ></q-editor>
            <span
              class="text-danger text-sm"
              v-if="errors.has('description')"
              >{{ errors.first("description") }}</span
            >
          </div>


          <div class="vx-col w-full mb-4">
            <label for class="vs-input--label">Warranty Description</label>
            <q-editor
              :id="`product-detal`"
              v-model="product.warranty_description"
            ></q-editor>
            <span
              class="text-danger text-sm"
              v-if="errors.has('warranty_description')"
              >{{ errors.first("warranty_description") }}</span
            >
          </div>
        </div>
      </vx-card>
    </div>
    <div class="vx-col md:w-1/3 w-full mb-4">
      <vx-card title="Details">
        <label for class="vs-input--label">Brand</label>
        <v-select
          :options="brands"
          class="mb-3"
          label="name"
          value="id"
          v-model="product.brand_id"
          :reduce="(brand) => brand.id"
          name="brand_id"
        />
        <span class="text-danger text-sm" v-show="errors.has('brand_id')">{{
          errors.first("brand_id")
        }}</span>

        <label v-if="isadmin" for class="vs-input--label">Vendor</label>
        <v-select
          v-if="isadmin"
          :options="vendors"
          class="mb-3"
          label="name"
          value="id"
          v-model="product.vendor_id"
          :reduce="(vendor) => vendor.id"
          name="vendor_id"
        />
        <span class="text-danger text-sm" v-show="errors.has('vendor_id')">{{
          errors.first("vendor_id")
        }}</span>

        <label for class="vs-input--label">Product highlights</label>
        <vs-textarea
          name="highlights"
          v-model="product.highlights"
          class="w-full"
          label="Short Description"
        />
        <p>
          <small>Seperate values by | symbol in case of multiples.</small>
        </p>
        <span class="text-danger text-sm" v-if="errors.has('highlights')">{{
          errors.first("highlights")
        }}</span>

        <vs-input
          name="product_video_url"
          v-model="product.product_video_url"
          class="w-full mt-4"
          label="Product Video URL (Youtube)"
        />
        <span
          class="text-danger text-sm"
          v-if="errors.has('product_video_url')"
          >{{ errors.first("product_video_url") }}</span
        >
      </vx-card>
      <vx-card title="Availability & Config" class="mt-3">
        <label for class="vs-input--label">Product status</label>
        <div class="text-center mt-2 mb-2" v-if="product.status == 2">
          <vs-button size="small" color="success" @click.native="enableProduct"
            >Enable Product</vs-button
          >
        </div>
        <div v-else class="mb-4">
          <vs-switch
            color="success"
            v-model="product.status"
            vs-value="1"
            class="mt-3"
          >
            <span slot="on">Enabled</span>
            <span slot="off">Disabled</span>
          </vs-switch>
        </div>
        <label for class="vs-input--label mt-3">Enable EMI?</label>
        <vs-switch
          color="success"
          v-model="product.emi_enabled"
          vs-value="1"
          class="mt-3"
        >
          <span slot="on">Enabled</span>
          <span slot="off">Disabled</span>
        </vs-switch>
      </vx-card>
    </div>
    <div class="vx-col w-full mb-4">
      <vs-button type="relief" color="primary" @click="saveProductDetail"
        >Save</vs-button
      >
      <vs-button
        v-if="product_id"
        type="relief"
        color="primary"
        @click="saveAndNext"
        >Save & Next</vs-button
      >
    </div>
  </div>
</template>
 
<script>
import vSelect from "vue-select";
import { renderServerErrors } from "@/utils.js";

export default {
  props: ["productDetail", "isadmin"],
  data() {
    return {
      product_id: "",
      product: {
        status: 1,
      },
      brands: [],
      dropdown_categories: [],
      vendors: [],
    };
  },
  mounted() {
    if (Object.keys(this.productDetail).length) {
      this.product = this.productDetail;
      this.product_id = this.productDetail.id;
    }
    this.fetchBrands();
    if (this.isadmin) this.fetchVendors();
    this.fetchCategoryDropdown();
  },
  components: {
    "v-select": vSelect,

  },
  methods: {
    async fetchCategoryDropdown() {
      try {
        let url = `/api/admin/product-categories-dropdown`;
        if(!this.isadmin) {
          url = `/api/vendor/product-categories-dropdown`;
        }
        let response = await this.$http.get(url);
        this.dropdown_categories = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async fetchBrands() {
      try {
        let url = `/api/admin/product-brands/get-dropdown`;
        if(!this.isadmin) {
          url = `/api/vendor/product-brands/get-dropdown`;
        }
        let response = await this.$http.get(url);
        this.brands = response.data.data;
      } catch {
        this.errorNotification(
          "Something went wrong while fetching albums!! Please retry"
        );
      }
    },

    async fetchVendors() {
      try {
        let response = await this.$http.get(`/api/admin/vendors/get-dropdown`);
        this.vendors = response.data.data;
      } catch {
        this.errorNotification(
          "Something went wrong while fetching albums!! Please retry"
        );
      }
    },

    async saveProductDetail(redirect = true) {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      try {
        // this.$vs.loading({
        //   container: "#loading--container",
        // });

        let params = {
          name: this.product.name,
          short_description: this.product.short_description,
          description: this.product.description,
          category_ids: this.product.category_ids,
          sku: this.product.sku,
          brand_id: this.product.brand_id,
          vendor_id: this.product.vendor_id,
          status: this.product.status,
          highlights: this.product.highlights,
          product_video_url: this.product.product_video_url,
          emi_enabled: this.product.emi_enabled,
          warranty_description: this.product.warranty_description
        };
        let user_type = this.isadmin ? "admin" : "vendor";
        let url = `/api/${user_type}/products/store-detail`;
        if (this.product_id) {
          url = `/api/${user_type}/products/${this.product_id}/update-detail`;
          params["_method"] = "PATCH";
        }
        let response = await this.$http.post(url, params);
        if (response.data.success) {
          this.successNotification(response.data.message);
          let route_prefix = this.isadmin ? "admin" : "ecommerce-vendor";
          if (redirect) {
            this.$router.push({
              name: `${route_prefix}-products`,
            });
          }

          if (!this.product_id) {
            this.$router.push({
              name: `${route_prefix}-product-detail`,
              params: { id: response.data.product_id },
            });
          }
        }
        console.log(response.data)
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    saveAndNext() {
      this.saveProductDetail(false);
      this.$emit("nextTabPlease");
    },

    enableProduct() {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: `Confirm`,
        text: "Are you sure you want to enable the product?",
        accept: async () => {
          let payload = {
            _method: "PATCH",
          };
          let url = `/api/admin/products/${this.product_id}/toggle-status`;
          if(!this.isadmin) {
            url = `/api/vendor/products/${this.product_id}/toggle-status`;
          }
          let response = await this.$http.post(
            url,
            payload
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.product.status = response.data.status;
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>