<template>
  <div id="loading--container" class="vs-con-loading__container">
    <pageLoader v-if="loading"></pageLoader>

    <form-wizard
      v-else
      color="rgba(var(--vs-primary), 1)"
      errorColor="rgba(var(--vs-danger), 1)"
      title="Add Product Details"
      :subtitle="null"
      :hide-buttons="true"
      finishButtonText="Submit"
      stepSize="sm"
      ref="productWizard"
    >
      <tab-content
        title="Product Info"
        class="mb-5"
        icon="feather icon-shopping-bag"
      >
        <ProductDetail
          :isadmin="false"
          :product-detail="product"
          @updateProduct="updateProductDetail"
          @nextTabPlease="changeTab('next')"
        />
      </tab-content>

      <tab-content
        title="Pricing & Stock"
        class="mb-5"
        icon="feather icon-dollar-sign"
      >
        <PriceAndStock
          :product-detail="product"
          @nextTabPlease="changeTab('next')"
          @prevTabPlease="changeTab('prev')"
        />
      </tab-content>

      <tab-content title="Attributes" class="mb-5" icon="feather icon-list">
        <ProductAttributes
          v-if="product.id"
          :isadmin="false"
          :product-id="product.id"
          :product-attributes="product.attributes"
          @refreshProduct="getProductDetail"
          @nextTabPlease="changeTab('next')"
          @prevTabPlease="changeTab('prev')"
        />
      </tab-content>

      <tab-content
        title="Variants"
        class="mb-5"
        icon="feather icon-align-center"
      >
        <ProductVariants
          :isadmin="false"
          :key="`p-variant-${random_id}`"
          v-if="product.id"
          :product-detail="product"
          @nextTabPlease="changeTab('next')"
          @prevTabPlease="changeTab('prev')"
          @refreshProduct="getProductDetail"
        />
      </tab-content>
      <tab-content title="Images" class="mb-5" icon="feather icon-image">
        <ProductImages
          :isadmin="false"
          :key="`product-image-${product.variants.length}`"
          v-if="product.id"
          :product-id="product.id"
          :variants="product.variants"
          @nextTabPlease="changeTab('next')"
          @prevTabPlease="changeTab('prev')"
        />
      </tab-content>

      <tab-content title="SEO" class="mb-5" icon="feather icon-globe">
        <vx-card>
          <MetaFields class="mb-4" v-model="product.meta"></MetaFields>
          <div class="mt-4 vx-row" style="margin-top: 50px !important">
            <div class="vx-col w-full md:w-1/2">
              <h4>Search Engine Listing Preview</h4>
              <div class="search-engine-preview">
                <p style="color: black">
                  https://wwww.{{ web_host }}/product-detail/{{ product.slug }}
                </p>
                <h2 style="color: #1a0dab" class="mt-2 mb-2">
                  {{
                    !product.meta.meta_title
                      ? product.name
                      : product.meta.meta_title
                  }}
                </h2>
                <p>
                  {{
                    !product.meta.meta_description
                      ? product.short_description
                      : product.meta.meta_description
                  }}
                </p>
              </div>
            </div>
          </div>
        </vx-card>
        <div class="vx-col w-full mt-4">
          <vs-button type="relief" color="primary" @click="changeTab('prev')"
            >Prev</vs-button
          >
          <vs-button type="relief" color="primary" @click="saveMetaFields"
            >Save</vs-button
          >
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<style lang="scss" scoped>
.search-engine-preview {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 20px;
}
</style>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import ProductDetail from "./../../common/products/ProductDetail";
import PriceAndStock from "./../../common/products/PriceAndStock";
import ProductImages from "./../../common/products/ProductImages";
import ProductAttributes from "./../../common/products/ProductAttributes";
import ProductVariants from "./../../common/products/ProductVariants";

import MetaFields from "@/components/Meta";

export default {
  data() {
    return {
      loading: true,
      product_id: "",
      product: {
        meta: {},
        variants: [],
      },
      active_tab: 0,
      web_host: "",
      random_id: Math.floor(Math.random() * 10000),
    };
  },
  components: {
    ProductDetail,
    FormWizard,
    TabContent,
    PriceAndStock,
    ProductImages,
    MetaFields,
    ProductAttributes,
    ProductVariants,
  },
  mounted() {
    this.checkVendorStatus();
    this.web_host = window.location.host;
    this.product_id = this.$route.params.id;
    this.getProductDetail();
  },
  methods: {
    checkVendorStatus() {
      let proceed = true;
      let message = "";
      let title = "";
      if (!this.$store.state.AppActiveUser.data_updated) {
        proceed = false;
        message =
          "Your KYC is not fully updated. Please update your KYC to get full access to features.";
        title = `Please Update KYC!!`;
      }

      if (!this.$store.state.AppActiveUser.status) {
        proceed = false;
        message =
          "Your account has not been activated. Please contact your administrator.";
        title = `Account Disabled!!`;
      }

      if (!proceed) {
        this.$vs.dialog({
          color: "danger",
          title: title,
          text: message,
          "accept-text": "OK",
          accept: async () => {
            this.$router.push("/vendor/profile");
          },
        });
      }
    },
    generateRandomID() {
      this.random_id = Math.floor(Math.random() * 10000);
    },
    async getProductDetail() {
      if (!this.product_id) {
        this.loading = false;
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(
          `/api/vendor/products/${this.product_id}`
        );
        if (response.data.success) {
          this.product = response.data.data;
          this.generateRandomID();
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "page-error-404" });
        }
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
        this.loading = false;
        let context = this;
        setTimeout(function () {
          context.$refs.productWizard.activateAll();
        }, 2000);
      }
    },

    async saveMetaFields() {
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let params = {
          meta: JSON.stringify(this.product.meta),
          _method: "PATCH",
        };
        let response = await this.$http.post(
          `/api/vendor/products/${this.product_id}/update-meta`,
          params
        );
        if (response.data.success) {
          this.successNotification("Data saved successfully");
          this.$router.push({
            name: "ecommerce-vendor-products",
          });
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

    changeTab(direction) {
      if (direction == "next") this.$refs.productWizard.nextTab();
      else this.$refs.productWizard.prevTab();
    },

    updateProductDetail(product) {
      this.product = product;
      this.product_id = product.id;
    },
  },
  watch: {},
};
</script>