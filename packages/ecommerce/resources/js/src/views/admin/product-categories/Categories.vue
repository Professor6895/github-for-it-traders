<template>
  <div>
    <!-- Category Popup -->
    <vs-popup
      title="Category Detail"
      :active.sync="category_popup"
      class="popup-lg"
    >
      <div id="loading--container" class="vs-con-loading__container">
        <div class="w-full mb-4">
          <label for class="vs-input--label">Parent Category</label>
          <v-select
            :options="dropdown_categories"
            label="category_full_name"
            value="id"
            v-model="category.parent_id"
            :reduce="(cat_) => cat_.id"
            name="parent_id"
          />
          <span class="text-danger text-sm" v-show="errors.has('parent_id')">{{
            errors.first("parent_id")
          }}</span>
        </div>

        <vs-input
          class="w-full"
          name="title"
          label="Category name"
          v-validate="'required'"
          v-model="category.title"
        />
        <p>
          <span class="text-danger text-sm" v-if="errors.has('title')">{{
            errors.first("title")
          }}</span>
        </p>

        <div class="vx-col w-full mt-4" v-if="category.id">
          <vs-input
            class="w-full"
            name="slug"
            label="Category Slug"
            v-validate="'required'"
            v-model="category.slug"
          />
          <p>
            <span class="text-danger text-sm" v-if="errors.has('slug')">{{
              errors.first("slug")
            }}</span>
          </p>
        </div>
        <div class="vx-col w-full mt-4">
          <vs-checkbox v-model="category.featured">Featured</vs-checkbox>
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
            ref="category_thumbnail_image"
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
            @click="$refs.category_thumbnail_image.click()"
            >Thumbnail Image</vs-button
          >
        </div>

        <div class="vx-col mt-4">
          <label for class="vs-input--label">Description</label>
          <q-editor v-model="category.description"></q-editor>
        </div>

        <MetaFields v-model="category.meta"></MetaFields>
        <div class="vx-col mt-4">
          <label for class="vs-input--label">Custom Code</label>

          <prism-editor
            class="my-editor"
            v-model="category.custom_code"
            line-numbers
            :highlight="highlighter"
          ></prism-editor>
        </div>

        <vs-button class="mr-3 mt-5" @click="saveCategory">Submit</vs-button>
      </div>
    </vs-popup>

    <pageLoader v-if="loading"></pageLoader>
    <vx-card
      class="card-padding-5 vs-con-loading__container"
      id="category--table"
      v-else
    >
      <vs-button
        size="small"
        :color="view_style === 'table' ? 'primary' : '#AAA'"
        @click="view_style = 'table'"
        >Table View</vs-button
      >
      <vs-button
        size="small"
        :color="view_style === 'tree' ? 'primary' : '#AAA'"
        @click="view_style = 'tree'"
        >Tree View</vs-button
      >

      <div v-if="view_style === 'table'">
        <div class="vx-row">
          <div class="vx-col w-full mt-4">
            <vs-radio
              v-model="table_type"
              class="mr-5"
              vs-name="radio_table_type"
              vs-value="full"
              >All Categories</vs-radio
            >
            <vs-radio
              v-model="table_type"
              vs-name="radio_table_type"
              vs-value="parent"
              >Parents Only</vs-radio
            >
          </div>
        </div>

        <vs-table
          v-if="table_type === 'full'"
          @change-page="handlePagination"
          stripe
          :data="categories.data"
          :max-items="categories.per_page"
          :total="categories.total"
          :sst="true"
          class="mt-4"
        >
          <template slot="header">
            <strong>Total :</strong>
            &nbsp;{{ categories.total }} &nbsp; &nbsp;
            <vs-button
              color="primary"
              @click="category_popup = true"
              class="mb-4"
              v-if="checkPermission('add-product-category')"
              type="border"
              >Add Category</vs-button
            >

            <div class="con-input-search vs-table--search">
              <vs-input
                class="inline-block"
                v-model="search_keyword"
              ></vs-input>
              <vs-button
                type="filled"
                icon="search"
                @click="
                  table_options.current_page = 1;
                  fetchCategories();
                "
              ></vs-button>
            </div>
          </template>
          <template slot="thead">
            <vs-th>Image</vs-th>
            <vs-th sort-key="title">Name</vs-th>
            <vs-th sort-key="title">Slug</vs-th>
            <vs-th>Level</vs-th>
            <vs-th>Images</vs-th>
            <vs-th>Actions</vs-th>
          </template>

          <template slot-scope="{ data }">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td>
                <img :src="tr.category_image.thumb" alt width="50px" />
              </vs-td>
              <vs-td>
                <a :href="`/category/${tr.slug}`" target="_blank">
                  {{ tr.title }}
                </a>
              </vs-td>
              <vs-td>{{ tr.slug }}</vs-td>
              <vs-td>
                <span v-if="!tr.parent_id">PARENT</span>
                <span v-else>{{ tr.parent_tree }}</span>
              </vs-td>
              <vs-td
                >{{ tr.images_count }} &nbsp; &nbsp;
                <router-link
                  :to="{
                    name: 'admin-product-categories-images',
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
                  size="small"
                  @click="editCategory(tr)"
                  v-if="checkPermission('edit-product-category')"
                  icon="create"
                ></vs-button>
                <vs-button
                  class="table-action--buttons"
                  radius
                  size="small"
                  @click="deleteCategory(tr.id)"
                  v-if="checkPermission('delete-product-category')"
                  color="danger"
                  type="filled"
                  icon="delete"
                ></vs-button>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
        <vs-table
          @change-page="handlePagination"
          stripe
          :data="categories.data"
          :max-items="categories.per_page"
          v-else
          :total="categories.total"
          :sst="true"
          class="mt-4"
        >
          <template slot="header">
            <strong>Total :</strong>
            &nbsp;{{ categories.total }} &nbsp; &nbsp;
            <vs-button
              color="primary"
              @click="category_popup = true"
              class="mb-4"
              v-if="checkPermission('add-product-category')"
              type="border"
              >Add Category</vs-button
            >

            <div class="con-input-search vs-table--search">
              <vs-input
                class="inline-block"
                v-model="search_keyword"
              ></vs-input>
              <vs-button
                type="filled"
                icon="search"
                @click="
                  table_options.current_page = 1;
                  fetchCategories();
                "
              ></vs-button>
            </div>
          </template>
          <template slot="thead">
            <vs-th>Image</vs-th>
            <vs-th sort-key="title">Name</vs-th>
            <vs-th>Level</vs-th>
            <vs-th>Status</vs-th>
            <vs-th>Actions</vs-th>
          </template>

          <template slot-scope="{ data }">
            <draggable
              v-model="categories.data"
              tag="tbody"
              @change="sortCategories"
            >
              <tr
                class="tr-values"
                :data="tr"
                :key="indextr"
                v-for="(tr, indextr) in data"
              >
                <vs-td>
                  <img :src="tr.category_image.thumb" alt width="50px" />
                </vs-td>
                <vs-td>{{ tr.title }}</vs-td>
                <vs-td>
                  <span v-if="!tr.parent_id">PARENT</span>
                  <span v-else>{{ tr.parent_tree }}</span>
                </vs-td>
                <vs-td>Active</vs-td>
                <vs-td>
                  <vs-button
                    class="table-action--buttons"
                    radius
                    color="warning"
                    type="filled"
                    size="small"
                    @click="editCategory(tr)"
                    v-if="checkPermission('edit-product-category')"
                    icon="create"
                  ></vs-button>
                  <vs-button
                    class="table-action--buttons"
                    radius
                    size="small"
                    @click="deleteCategory(tr.id)"
                    v-if="checkPermission('delete-product-category')"
                    color="danger"
                    type="filled"
                    icon="delete"
                  ></vs-button>
                </vs-td>
              </tr>
            </draggable>
          </template>
        </vs-table>
        <vs-pagination
          class="mt-4"
          :total="categories.last_page"
          v-model="table_options.current_page"
        ></vs-pagination>
      </div>
      <div v-else>
        <cat-tree class="mt-4" :data="categories_tree" :options="treeOptions">
          <span class="tree-text" slot-scope="{ node }">
            <template>
              <img
                v-if="node.data.thumb"
                :src="node.data.thumb"
                alt
                width="40px"
                style="
                  display: inline-block;
                  margin-right: 5px;
                  position: relative;
                  top: 10px;
                "
              />
              {{ node.text }}
            </template>
          </span>
        </cat-tree>
      </div>
    </vx-card>
  </div>
</template>
<script>
import MetaFields from "@/components/Meta";
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import vSelect from "vue-select";
import LiquorTree from "liquor-tree";
import draggable from "vuedraggable";

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
      categories: {
        data: [],
        per_page: 0,
        total: 0,
        last_page: 0,
      },
      table_options: {
        current_page: 1,
      },

      dropdown_categories: [],

      search_keyword: "",
      //ADD AND EDIT
      category_popup: false,
      category: {
        featured: false,
        meta: {},
      },
      image_preview: null,

      view_style: "table",
      categories_tree: [],
      treeOptions: {
        checkbox: false,
        propertyNames: {
          text: "title",
          data: "category_image",
        },
      },
      table_type: "full",
    };
  },
  components: {
    "v-select": vSelect,
    MetaFields,
    "cat-tree": LiquorTree,
    draggable,
    PrismEditor,
  },
  mounted() {
    this.fetchCategories();
    this.fetchCategoryDropdown();
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
    async fetchCategoryDropdown() {
      try {
        let response = await this.$http.get(
          "/api/admin/product-categories-dropdown"
        );
        this.dropdown_categories = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },
    async fetchCategoryTree() {
      this.loading = true;
      try {
        let response = await this.$http.get(
          "/api/admin/product-categories-tree"
        );
        this.categories_tree = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async fetchCategories() {
      if (!this.loading) {
        this.$vs.loading({
          container: "#category--table",
        });
      }
      try {
        let response = await this.$http.get(`/api/admin/product-categories`, {
          params: {
            page: this.table_options.current_page,
            search: this.search_keyword,
            data: this.table_type,
          },
        });
        this.categories = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#category--table > .con-vs-loading");
        this.loading = false;
      }
    },

    imageUploaded() {
      let file = this.$refs.category_thumbnail_image.files[0];
      this.image_preview = URL.createObjectURL(file);
      this.category.image = file;
    },
    clearImage() {
      this.category.image = null;
      this.image_preview = null;
      this.$refs.category_thumbnail_image.value = "";
    },

    async saveCategory() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let params = {
          title: this.category.title,
          image: this.category.image,
          parent_id: this.category.parent_id,
          meta: JSON.stringify(this.category.meta),
          featured: this.category.featured,
          description: this.category.description,
          custom_code: this.category.custom_code,
        };

        let url = `/api/admin/product-categories`;
        if (this.category.id) {
          url = `/api/admin/product-categories/${this.category.id}`;
          params["_method"] = "PATCH";
          params["slug"] = this.category.slug
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchCategories();
          this.category_popup = false;
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    editCategory(category) {
      this.category = _.cloneDeep(category);
      this.image_preview = this.category.category_image.thumb;
      this.category_popup = true;
    },

    deleteCategory(category_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete this category?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/product-categories/${category_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchCategories();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },

    handlePagination(page) {
      this.table_options.current_page = page;
      this.fetchCategories();
    },

    async sortCategories() {
      try {
        this.$vs.loading({
          container: "#category--table",
        });
        let order = [];
        this.categories.data.map(function (category, index) {
          order.push({
            category_id: category.id,
            order: index + 1,
          });
        });

        let response = await this.$http.post(
          `/api/admin/product-categories/sort-categories`,
          { payload: order }
        );

        if (response.data.success)
          this.successNotification(response.data.message);
      } catch (error) {
      } finally {
        this.$vs.loading.close("#category--table > .con-vs-loading");
      }
    },
  },
  watch: {
    category_popup(val) {
      if (!val) {
        this.category = {
          meta: {},
        };
        this.errors.clear();
        this.image_preview = null;
      }
    },

    "table_options.current_page": function () {
      this.fetchCategories();
    },

    view_style(val) {
      if (val === "tree") {
        this.fetchCategoryTree();
      }
    },

    table_type(val) {
      this.fetchCategories();
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