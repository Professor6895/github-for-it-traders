<template>
  <div>
    <vs-popup title="Student Import Facts" :active.sync="help_popup">
      <h5>Excel file must contain following headers.</h5>
      <div class="px-3 mt-4 mb-4">
        <p v-for="header in validation.requiredHeaders" :key="`help-${header}`" class="mb-1">
          <vs-icon icon="chevron_right"></vs-icon>&nbsp;
          <strong>{{ header }}</strong>
        </p>
      </div>
      <p class="text-warning">
        You must include above listed headers in excel file. You may leave field empty if there is no data e.g
        <strong>middle_name</strong>
      </p>
    </vs-popup>
    <!-- <vs-popup :active.sync="importing" button-close-hidden>
      <h5>Please wait while importing students.</h5>
    </vs-popup>-->
    <vx-card class="vs-con-loading__container" id="loading--container">
      <h3>
        Students Data Import
        <vs-icon icon="help" class="cursor-pointer" size="small" @click="help_popup=true"></vs-icon>
      </h3>
      <div v-if="!importing">
        <div class="mb-8 mt-4">
          <import-excel :onSuccess="loadDataInTable" />
        </div>
        <vs-alert class="h-auto" color="danger" v-if="validation.headerDifferences.length">
          <p v-for="header in validation.headerDifferences" :key="`error${header}`" class="mb-1">
            <vs-icon icon="error_outline"></vs-icon>&nbsp;
            <strong>{{ header }}</strong> field is missing.
          </p>
          <p>NOTE: Please review the uploaded file and make sure all the headers are correct.</p>
        </vs-alert>
        <vs-alert
          color="success"
          v-if="validated"
          icon="thumb_up_alt"
          style="height: 40px !important"
        >
          <span>All the headers are correct. Review the data and start importing.</span>
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
            <vs-th :sort-key="heading" v-for="heading in header" :key="heading">{{ heading }}</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td
                v-for="(heading, key) in header"
                :key="`${heading}${key}`"
              >{{ data[indextr][heading] }}</vs-td>
            </vs-tr>
          </template>
        </vs-table>
        <vs-button size="small" :disabled="!validated" @click="importStudents">Start Import</vs-button>
      </div>
      <div v-else>
        <div class="text-center mt-5">
          <h4>Please wait while importing students.</h4>
          <vs-progress :height="12" :percent="import_progress" color="success">success</vs-progress>
          <p>{{ import_progress }}% Completed.</p>
        </div>
      </div>
    </vx-card>
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
          "first_name",
          "middle_name",
          "last_name",
          "contact_number",
          "district",
          "province",
          "municipality",
          "ward_no",
          "locality",
          "gender",
          "dob_bs",
          "ethnicity",
          "religion",
          "father_name",
          "father_mobile_number",
          "mother_name",
          "mother_mobile_number",
        ],
        headerDifferences: [],
      },
      header: [],
      sheetName: "",
    };
  },
  methods: {
    loadDataInTable({ results, header, meta }) {
      this.header = header;
      this.tableData = results;
      this.sheetName = meta.sheetName;

      this.validation.headerDifferences = _.difference(
        this.validation.requiredHeaders,
        this.header
      );
    },

    resetComponenet() {
      this.header = [];
      // this.validation.headerDifferences = [];
      this.tableData = [];
      this.sheetName = "";
      this.validated = false
      this.importing = false
      this.import_progress = 0
    },

    async importStudents() {
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
          "/api/admin/data-import/students",
          { students: this.tableData },
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
        this.resetComponenet()
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
