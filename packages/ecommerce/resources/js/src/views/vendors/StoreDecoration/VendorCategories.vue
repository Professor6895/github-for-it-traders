<template>
  <div class="vx-row">
    <vs-popup
      title="Add Home Page Category"
      :active.sync="vendor_category_popup"
      class="vx-row vs-con-loading__container"
      id="category-loading--container"
    >
      <div class="w-full">
        <label for class="vs-input--label">Category</label>
        <v-select
          :options="dropdown_categories"
          label="category_full_name"
          value="id"
          v-model="vendor_category.category_id"
          :reduce="(cat_) => cat_.id"
          name="category_ids"
          v-validate="'required'"
        />

        <span class="text-danger text-sm" v-if="errors.has('category_ids')">{{
          errors.first("category_ids")
        }}</span>
      </div>

      <div class="vx-col w-full mt-3">
        <vs-button
          type="relief"
          size="small"
          color="primary"
          @click="saveVendorCategory"
          >Save</vs-button
        >
      </div>
    </vs-popup>

    <div class="vx-col w-2/3 mb-4">
      <vx-card title="Vendor Categories">
        <div class="vx-row mb-3">
          <div class="vx-col w-1/2">
            <v-select
              :options="dropdown_categories"
              label="category_full_name"
              value="id"
              v-model="vendor_category.category_id"
              :reduce="(cat_) => cat_.id"
              name="category_id"
              v-validate="'required'"
            />
          </div>

          <div class="vx-col w-1/2">
            <vs-button type="relief" color="primary" @click="saveVendorCategory"
              >Save</vs-button
            >
          </div>
          <span class="text-danger text-sm" v-if="errors.has('category_id')">{{
            errors.first("category_id")
          }}</span>
        </div>
        <vs-table stripe :data="vendor_categories" max-items="40" pagination>
          <template slot="thead">
            <vs-th>Category</vs-th>
          </template>

          <template slot-scope="{ data }">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td>
                {{ tr.category.title }}
              </vs-td>
              <vs-td>
                <vs-button
                  @click="deleteCategory(tr.id)"
                  class="table-action--buttons"
                  radius
                  size="small"
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
</template>

<script>
import vSelect from "vue-select";

export default {
  data() {
    return {
      dropdown_categories: [],
      vendor_categories: [],
      vendor_category_popup: false,
      vendor_category: {},
    };
  },
  components: {
    "v-select": vSelect,
  },
  mounted() {
    this.fetchCategoryDropdown();
    this.fetchVendorCategories();
  },
  methods: {
    async fetchCategoryDropdown() {
      try {
        let url = `/api/vendor/product-categories-dropdown`;
        let response = await this.$http.get(url);
        this.dropdown_categories = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      }
    },

    async fetchVendorCategories() {
      try {
        let url = `/api/vendor/home-categories`;
        let response = await this.$http.get(url);
        this.vendor_categories = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveVendorCategory() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      try {
        let url = `/api/vendor/vendor-category/save-home-category`;
        let response = await this.$http.post(url, this.vendor_category);

        if (response.data.success)
          this.successNotification(response.data.message);
        else this.errorNotification(response.data.message);

        this.vendor_category = {};
        this.fetchVendorCategories();
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      }
    },

    deleteCategory(category_id) {
      let context = this;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete category?",
        accept: async () => {
          let url = `/api/vendor/home-categories/${category_id}/delete`;
          let response = await this.$http.delete(url);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchVendorCategories();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    vendor_category_popup(val) {
      if (val) {
        this.vendor_category = {};
      }
    },
  },
};
</script>