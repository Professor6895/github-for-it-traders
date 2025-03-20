<template>
  <div>
    <vs-popup title="Brand Detail" :active.sync="brand_popup" class="popup-lg">
      <div id="loading--container" class="vs-con-loading__container">
        <vs-input
          class="w-full"
          name="name"
          label="Brand Name"
          v-validate="'required'"
          v-model="brand.name"
        />
        <p>
          <span class="text-danger text-sm" v-if="errors.has('name')">{{
            errors.first("name")
          }}</span>
        </p>
        <div class="w-full mt-4" v-if="brand.id">
          <vs-input
            class="w-full"
            name="name"
            label="Brand Slug"
            v-validate="'required'"
            v-model="brand.slug"
          />
          <p>
            <span class="text-danger text-sm" v-if="errors.has('slug')">{{
              errors.first("slug")
            }}</span>
          </p>
        </div>
        <div class="w-full mt-4">
          <div class="image-preview-container" v-if="image_preview">
            <div class="text-right float-right mr-10">
              <vs-button
                @click="clearImage"
                class="image-remove--button"
                radius
                size="small"
                color="danger"
                type="filled"
                icon-pack="feather"
                icon="icon-x"
              ></vs-button>
            </div>
            <img :src="image_preview" alt />
          </div>
          <input
            type="file"
            class="hidden"
            name="thumbnail"
            ref="brand_thumbnail_image"
            @change="imageUploaded"
            accept="image/*"
            v-validate="'image|size:1024'"
          />
          <p class="text-danger text-sm mb-3" v-show="errors.has('thumbnail')">
            {{ errors.first("thumbnail") }}
          </p>
          <vs-button
            color="primary"
            type="border"
            size="small"
            @click="$refs.brand_thumbnail_image.click()"
            >Thumbnail Image</vs-button
          >
        </div>

        <div class="vx-col mt-4">
          <label for class="vs-input--label">Description</label>
          <q-editor v-model="brand.description"></q-editor>
        </div>

        <MetaFields v-model="brand.meta"></MetaFields>

        <div class="vx-col mt-4">
          <label for class="vs-input--label">Custom Code</label>

          <prism-editor
            class="my-editor"
            v-model="brand.custom_code"
            line-numbers
            :highlight="highlighter"
          ></prism-editor>
        </div>

        <vs-button class="mr-3 mt-5" @click="saveBrand">Submit</vs-button>
      </div>
    </vs-popup>

    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="brands" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ brands.length }} &nbsp; &nbsp;
          <vs-button
            color="primary"
            @click="brand_popup = true"
            v-if="checkPermission('add-brand')"
            size="small"
            type="border"
            >Add Brand</vs-button
          >
          <!-- </router-link> -->
        </template>
        <template slot="thead">
          <vs-th>Image</vs-th>
          <vs-th sort-key="name">Name</vs-th>
          <vs-th>Slug</vs-th>
          <vs-th>Images</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <img :src="tr.brand_image.thumb" alt width="100px" />
            </vs-td>
            <vs-td>{{ tr.name }}</vs-td>
            <vs-td>{{ tr.slug }}</vs-td>
            <vs-td
              >{{ tr.images_count }} &nbsp; &nbsp;
              <router-link
                :to="{
                  name: 'admin-product-brands-images',
                  params: { id: tr.id },
                }"
              >
                <vs-button size="small">View Images</vs-button>
              </router-link>
            </vs-td>
            <vs-td>
              <vs-button
                class="table-action--buttons"
                radius
                color="warning"
                type="filled"
                v-if="checkPermission('edit-brand')"
                size="small"
                @click="editBrand(tr)"
                icon="create"
              ></vs-button>
              <vs-button
                class="table-action--buttons"
                radius
                size="small"
                @click="deleteBrand(tr.id)"
                color="danger"
                type="filled"
                v-if="checkPermission('delete-brand')"
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
import MetaFields from "@/components/Meta";
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";

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
      brands: [],

      //ADD AND EDIT
      brand_popup: false,
      brand: {
        meta: {},
      },
      image_preview: null,
    };
  },
  components: {
    MetaFields,
    PrismEditor,
  },
  mounted() {
    this.fetchBrands();
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
    async fetchBrands() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/product-brands");
        this.brands = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    imageUploaded() {
      let file = this.$refs.brand_thumbnail_image.files[0];
      this.image_preview = URL.createObjectURL(file);
      this.brand.image = file;
    },
    clearImage() {
      this.brand.image = null;
      this.image_preview = null;
      this.$refs.brand_thumbnail_image.value = "";
    },

    async saveBrand() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let params = {
          name: this.brand.name,
          image: this.brand.image,
          description: this.brand.description,
          meta: JSON.stringify(this.brand.meta),
          custom_code: this.brand.custom_code,
        };

        let url = `/api/admin/product-brands`;
        if (this.brand.id) {
          url = `/api/admin/product-brands/${this.brand.id}`;
          params["_method"] = "PATCH";
          params['slug'] = this.brand.slug
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchBrands();
          this.brand_popup = false;
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    editBrand(brand) {
      this.brand = _.cloneDeep(brand);
      this.image_preview = this.brand.brand_image.thumb;
      this.brand_popup = true;
    },

    deleteBrand(brand_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete this brand?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/product-brands/${brand_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchBrands();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    brand_popup(val) {
      if (!val) {
        this.brand = {
          meta: {},
        };
        this.errors.clear();
        this.image_preview = null;
      }
    },
  },
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