<template>
  <div>
    <div class="vx-row vs-con-loading__container" id="loading--container">
      <div class="vx-col w-full">
        <vx-card class="mb-3" title="Export Products on Price Update Format">
          <div class="vx-col w-full mb-4">
            <label for class="vs-input--label">Category</label>
            <v-select
              :options="dropdown_categories"
              label="category_full_name"
              value="id"
              v-model="export_data.category_id"
              :reduce="(cat_) => cat_.id"
              name="category_ids"
              v-validate="'required'"
            />

            <span
              class="text-danger text-sm"
              v-if="errors.has('category_ids')"
              >{{ errors.first("category_ids") }}</span
            >

            <vs-button size="small" class="mt-4" @click="exportProducts">Export Products</vs-button>

          </div>
        </vx-card>
        <vx-card>
          <h3>
            Products Import
            <vs-icon
              icon="help"
              class="cursor-pointer"
              size="small"
              @click="help_popup = true"
            ></vs-icon>
          </h3>
          <div v-if="!importing">
            <div class="mb-8 mt-4">
              <import-excel :onSuccess="loadDataInTable" />
            </div>
            <vs-table
              v-if="tableData.length && header.length"
              stripe
              pagination
              :max-items="20"
              search
              :data="tableData"
            >
              <template slot="header">
                <h4>{{ sheetName }}</h4>
              </template>

              <template slot="thead">
                <vs-th
                  :sort-key="heading"
                  v-for="heading in header"
                  :key="heading"
                  >{{ heading }}</vs-th
                >
              </template>

              <template slot-scope="{ data }">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td
                    v-for="(heading, key) in header"
                    :key="`${heading}${key}`"
                    >{{
                      typeof data[indextr][heading] === "string"
                        ? data[indextr][heading].substring(0, 100)
                        : data[indextr][heading]
                    }}</vs-td
                  >
                </vs-tr>
              </template>
            </vs-table>
            <vs-button @click="importProducts">Start Import</vs-button>
          </div>
          <div v-else>
            <div class="text-center mt-5">
              <h4>Please wait while importing products.</h4>
              <vs-progress
                :height="12"
                :percent="import_progress"
                color="success"
                >success</vs-progress
              >
              <p>{{ import_progress }}% Completed.</p>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import ImportExcel from "@/components/excel/ImportExcel.vue";
import _ from "lodash";
import vSelect from "vue-select";
import fileDownload from 'js-file-download';
export default {
  components: {
    ImportExcel,
    "v-select": vSelect,

  },
  data() {
    return {
      help_popup: false,
      importing: false,
      import_progress: 0,
      tableData: [],
      header: [],
      sheetName: "",
      import_files: [],

      export_data: {
        category_id: '',
      },
      dropdown_categories: []
    };
  },
  mounted() {
    this.fetchCategoryDropdown();
  },
  methods: {
    async fetchCategoryDropdown() {
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

    loadDataInTable({ results, header, meta }) {
      this.header = header;
      this.tableData = results;
      this.sheetName = meta.sheetName;

      // this.validation.headerDifferences = _.difference(
      //   this.validation.requiredHeaders,
      //   this.header
      // );

      // this.server_side_validation_messages = [];
      // this.server_side_validated = false;
      // this.validated = false;
    },

    resetComponenet() {
      this.header = [];
      // this.validation.headerDifferences = [];
      this.tableData = [];
      this.sheetName = "";
      this.validated = false;
      this.importing = false;
      this.import_progress = 0;
    },

    async importProducts() {
      try {
        this.importing = true;
        let config = {
          onUploadProgress: (progressEvent) => {
            let percentCompleted = Math.floor(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            this.import_progress = percentCompleted - 5;
          },
        };
        let response = await this.$http.post(
          "/api/admin/data-import/product/update-product-details",
          { products: this.tableData },
          config
        );

        console.log(response.data)

        if (response.data.success) {
          this.successNotification(response.data.message);
        }
      } catch (error) {
        this.errorNotification(
          "Something went wrong while importing!! Please recheck the data and try again"
        );
      } finally {
        this.import_progress = 100;
        this.resetComponenet();
      }
    },

    async exportProducts() {
      try {
        let category_id = this.export_data.category_id;

        let url = `/api/admin/data-import/price-import/export-products?category_id=${category_id}`;
        let response = await this.$http.post(url, {}, {
            headers:
            {
                'Content-Disposition': "attachment; filename=testfile.xlsx",
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            },
            responseType: 'arraybuffer',
        });

            fileDownload(response.data, 'products_export.xlsx');
      } catch(e) {
        console.log(e);
      }
    }
  },
};
</script>