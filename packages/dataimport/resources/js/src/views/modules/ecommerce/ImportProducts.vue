<template>
  <div>
    <vs-popup title="Product Import Facts" :active.sync="help_popup">
      <h5>Excel file must contain following headers.</h5>
      <div class="px-3 mt-4 mb-4">
        <p
          v-for="header in validation.requiredHeaders"
          :key="`help-${header}`"
          class="mb-1"
        >
          <vs-icon icon="chevron_right"></vs-icon>&nbsp;
          <strong>{{ header }}</strong>
        </p>
      </div>
    </vs-popup>

    <vs-popup
      title="Import Images"
      :active.sync="product_images_popup"
      class="popup-xl"
    >
      <div class="vx-row">
        <div
          v-for="(import_image, key) in import_files"
          class="vx-col md:w-1/4 mb-4 text-center"
          :key="`import-image-${key}`"
        >
          <img
            class="w-full"
            style="border: 2px solid #ddd"
            :src="`/import_images/${import_image.filename}.${import_image.extension}`"
            alt
          />
          {{ import_image.filename + "." + import_image.extension }}
        </div>
      </div>
    </vs-popup>
    <vs-popup
      title="Server side validation errors"
      :active.sync="server_side_error_popup"
      class="popup-xl"
    >
      <div class="px-3 mt-4 mb-4">
        <div
          v-for="(errors, column) in server_side_validation_messages"
          :key="`server-validation-${column}`"
          class="mb-3"
        >
          <h3 class="mb-2">{{ column }}</h3>
          <ul class="ml-4">
            <li v-for="error in errors">
              <vs-icon icon="chevron_right"></vs-icon>
              &nbsp;{{ error }}
            </li>
          </ul>
        </div>
      </div>
    </vs-popup>

    <div class="vx-row vs-con-loading__container" id="loading--container">
      <div class="vx-col w-full">
        <vx-card class="mb-4">
          <h3>Import Prooduct Images</h3>
          <div class="vx-row mt-4">
            <div class="vx-col w-1/2">
              <div class="text-center">
                <form @submit.prevent="uploadImageArchive">
                  <input
                    required
                    type="file"
                    name="thumbnail"
                    ref="images_archive_file"
                    v-validate="'size:10024'"
                  />
                  <br />
                  <br />
                  <button
                    class="
                      vs-component vs-button vs-button-primary vs-button-filled
                    "
                    type="submit"
                  >
                    Upload Images Archive File
                  </button>
                </form>
                <p class="text-warning mt-4">
                  Uploading archive file will replace previously uploaded zip
                  file on server.
                </p>
              </div>
            </div>
            <div class="vx-col w-1/2 text-center">
              <h3 class="mt-4">Current Images</h3>
              <h1>{{ import_files.length }}</h1>
              <br />
              <vs-button @click="product_images_popup = true"
                >View Images</vs-button
              >
            </div>
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
            <vs-alert
              class="h-auto"
              color="danger"
              v-if="validation.headerDifferences.length"
            >
              <p
                v-for="header in validation.headerDifferences"
                :key="`error${header}`"
                class="mb-1"
              >
                <vs-icon icon="error_outline"></vs-icon>&nbsp;
                <strong>{{ header }}</strong> field is missing.
              </p>
              <p>
                NOTE: Please review the uploaded file and make sure all the
                headers are correct.
              </p>
            </vs-alert>
            <vs-alert
              color="success"
              v-if="validated"
              icon="thumb_up_alt"
              style="height: 40px !important"
            >
              <span
                >All the headers are correct. Review the data and start
                importing.</span
              >
            </vs-alert>

            <vs-alert
              class="h-auto"
              color="danger"
              icon="thumb_down_alt"
              v-if="Object.keys(server_side_validation_messages).length"
            >
              <span>Server side product validation failed. &nbsp;</span>
              <span
                style="cursor: pointer"
                @click="server_side_error_popup = true"
                >Click here to peek the validation results.</span
              >
            </vs-alert>
            <vs-alert
              class="h-auto mt-3"
              color="success"
              icon="thumb_up_alt"
              v-if="server_side_validated"
            >
              <span
                >Server side product validation passed. Now you may proceed to
                import the products.</span
              >
            </vs-alert>

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
             <vs-alert
              class="h-auto mt-2 mb-2"
              color="danger"
              icon="thumb_down_alt"
              v-if="Object.keys(server_side_validation_messages).length"
            >
              <span>Server side product validation failed. &nbsp;</span>
              <span
                style="cursor: pointer"
                @click="server_side_error_popup = true"
                >Click here to peek the validation results.</span
              >
            </vs-alert>
            <vs-button
              v-if="validated && !server_side_validated"
              @click="validateProducts"
              >Validate Uploaded File</vs-button
            >
            <vs-button
              v-if="validated && server_side_validated"
              @click="importProducts"
              >Start Import</vs-button
            >
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
export default {
  components: {
    ImportExcel,
  },
  data() {
    return {
      help_popup: false,
      importing: false,
      import_progress: 0,
      tableData: [],
      validated: false,
      validation: {
        requiredHeaders: [
          "name",
          "sku",
          "description",
          "price",
          "categories",
          "quantity",
        ],
        headerDifferences: [],
      },
      header: [],
      sheetName: "",
      server_side_validated: false,
      server_side_validation_messages: [],
      server_side_error_popup: false,
      import_files: [],
      product_images_popup: false,
    };
  },
  mounted() {
    this.fetchImportImages();
  },
  methods: {
    async fetchImportImages() {
      try {
        let response = await this.$http.get(
          `/api/admin/data-import/product/get-import-images`
        );
        this.import_files = response.data;
      } catch (error) {}
    },

    loadDataInTable({ results, header, meta }) {
      this.header = header;
      this.tableData = results;
      this.sheetName = meta.sheetName;

      this.validation.headerDifferences = _.difference(
        this.validation.requiredHeaders,
        this.header
      );

      this.server_side_validation_messages = [];
      this.server_side_validated = false;
      this.validated = false;
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
          "/api/admin/data-import/product/import-products",
          { products: this.tableData },
          config
        );

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

    async validateProducts() {
      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let response = await this.$http.post(
          "/api/admin/data-import/product/validate-products",
          { products: this.tableData }
        );

        this.server_side_validated = response.data.validated;
        this.server_side_validation_messages = response.data.responses;
      } catch (error) {
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async uploadImageArchive() {
      let uploaded_files = this.$refs.images_archive_file.files;
      if (!uploaded_files.length) return;
      try {
        this.$vs.loading({
          container: "#loading--container",
        });
        let fd = new FormData();
        fd.append("file", uploaded_files[0]);

        let response = await this.$http.post(
          `/api/admin/data-import/product/extract-images`,
          fd
        );
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchImportImages();
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
  watch: {
    "validation.headerDifferences": function (val) {
      if (!val.length) {
        this.validated = true;
      } else {
        this.validated = false;
      }
    },
  },
};
</script>