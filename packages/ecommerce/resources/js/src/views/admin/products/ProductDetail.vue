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
          :isadmin="true"
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
          :isadmin="true"
          :product-detail="product"
          @nextTabPlease="changeTab('next')"
          @prevTabPlease="changeTab('prev')"
        />
      </tab-content>

      <tab-content title="Attributes" class="mb-5" icon="feather icon-list">
        <ProductAttributes
          :isadmin="true"
          v-if="product.id"
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
          :isadmin="true"
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
          :isadmin="true"
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
          <div class="vx-col w-full">
            <vs-input
              name="slug"
              v-model="product.slug"
              maxlength="100"
              class="w-full"
              label="URL Handle"
              v-validate="'max:70'"
            />
            <p>
              <span class="text-danger text-sm" v-if="errors.has('slug')">{{
                errors.first("slug")
              }}</span>
            </p>
          </div>
          <MetaFields class="mb-4" v-model="product.meta"></MetaFields>

          <div class="vx-col w-full mb-4">
            <label class="mb-2 inline-block">Custom Code</label>
            <!-- <vs-textarea v-model="custom_scripts.before_body" rows="5" /> -->
            <prism-editor
              class="my-editor"
              v-model="product.custom_code"
              line-numbers
              :highlight="highlighter"
            ></prism-editor>
          </div>

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

import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import "vue-prism-editor/dist/prismeditor.min.css";

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
    PrismEditor,
  },
  mounted() {
    this.web_host = window.location.host;
    this.product_id = this.$route.params.id;
    this.getProductDetail();
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
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
          `/api/admin/products/${this.product_id}`
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
          slug: this.product.slug,
          custom_code: this.product.custom_code,
          _method: "PATCH",
        };
        let response = await this.$http.post(
          `/api/admin/products/${this.product_id}/update-meta`,
          params
        );
        if (response.data.success) {
          this.successNotification("Data saved successfully");
          this.$router.push({
            name: "admin-products",
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

<style scoped>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #f3f3f3;
  padding: 5px;
  height: 300px;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>