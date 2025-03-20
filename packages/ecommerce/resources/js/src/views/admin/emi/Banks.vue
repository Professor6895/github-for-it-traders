<template>
  <div>
    <vs-popup title="Bank Detail" :active.sync="bank_popup" class="popup-lg">
      <div id="loading--container" class="vs-con-loading__container">
        <div class="w-full">
          <vs-input
            class="w-full"
            name="name"
            label="Bank Name"
            v-validate="'required'"
            v-model="bank.name"
          />
          <p>
            <span class="text-danger text-sm" v-if="errors.has('name')">{{
              errors.first("name")
            }}</span>
          </p>
        </div>
        <div class="w-full mt-4">
          <vs-input
            class="w-full"
            name="bank_code"
            label="Bank Code"
            v-validate="'required'"
            v-model="bank.bank_code"
          />
          <p>
            <span class="text-danger text-sm" v-if="errors.has('bank_code')">{{
              errors.first("bank_code")
            }}</span>
          </p>
        </div>

        <div class="w-full mt-4">
          <vs-input
            class="w-full"
            name="email"
            label="Email Address"
            v-validate="'required'"
            v-model="bank.email"
          />
          <p>
            <span class="text-danger text-sm" v-if="errors.has('email')">{{
              errors.first("email")
            }}</span>
          </p>
        </div>

        <div class="w-full mt-4">
          <vs-input
            class="w-full"
            name="contact_number"
            label="Contact Number"
            v-model="bank.contact_number"
          />
          <p>
            <span
              class="text-danger text-sm"
              v-if="errors.has('contact_number')"
              >{{ errors.first("contact_number") }}</span
            >
          </p>
        </div>
        <div class="w-full mt-4">
          <div class="vs-con-input">
            <input
              ref="bank_emi_file"
              type="file"
              @change="fileUploaded"
              class="vs-inputx vs-input--input normal"
            />
          </div>
          <p>
            <span
              class="text-danger text-sm"
              v-if="errors.has('emi_form_file')"
              >{{ errors.first("emi_form_file") }}</span
            >
          </p>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              type="number"
              name="6_months"
              label="6 Months"
              v-model="bank.finance_amount_percentage.month_6"
            />
          </div>
          <div class="vx-col w-full md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              type="number"
              name="9_months"
              label="9 Months"
              v-model="bank.finance_amount_percentage.month_9"
            />
          </div>
          <div class="vx-col w-full md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              type="number"
              name="12_months"
              label="12 Months"
              v-model="bank.finance_amount_percentage.month_12"
            />
          </div>
          <div class="vx-col w-full md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              type="number"
              name="18_months"
              label="18 Months"
              v-model="bank.finance_amount_percentage.month_18"
            />
          </div>
        </div>

        <vs-button class="mr-3 mt-5" @click="saveBank">Submit</vs-button>
      </div>
    </vs-popup>

    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="vendors" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ vendors.length }} &nbsp; &nbsp;
          <vs-button
            color="primary"
            size="small"
            type="border"
            @click="bank_popup = true"
            >Add Bank</vs-button
          >
        </template>
        <template slot="thead">
          <vs-th sort-key="email">SN</vs-th>
          <vs-th>Bank Name</vs-th>
          <vs-th>Bank Code</vs-th>
          <vs-th>Email</vs-th>
          <vs-th>EMI Form</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <i>#{{ tr.id }}</i>
            </vs-td>
            <vs-td>{{ tr.name }}</vs-td>
            <vs-td>
              {{ tr.bank_code }}
            </vs-td>
            <vs-td>{{ tr.email }}</vs-td>
            <vs-td>
              <a
                :href="tr.emi_form_file_url"
                download
                class="btn btn-sm btn-outline-secondary"
              >
                <i class="fa fa-download"></i>
                Download
              </a>
            </vs-td>
            <vs-td>
              <vs-button
                class="table-action--buttons"
                radius
                color="warning"
                @click="editBank(tr)"
                type="filled"
                size="small"
                icon="create"
              ></vs-button>
              <vs-button
                class="table-action--buttons"
                radius
                size="small"
                @click="deleteBank(tr.id)"
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
</template>
<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import _ from "lodash";
export default {
  data() {
    return {
      loading: true,
      vendors: [],

      bank_popup: false,
      bank: {
        finance_amount_percentage: {
          month_6: "",
          month_9: "",
          month_12: "",
          month_18: "",
        },
      },
    };
  },
  mounted() {
    this.fetchBanks();
  },
  methods: {
    async fetchBanks() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/emi-banks");
        this.vendors = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveBank() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let params = {
          name: this.bank.name,
          bank_code: this.bank.bank_code,
          email: this.bank.email,
          contact_number: this.bank.contact_number,
          emi_form_file: this.bank.emi_form_file,
          finance_amount_percentage: JSON.stringify(this.bank.finance_amount_percentage),
        };

        let url = `/api/admin/emi-banks`;
        if (this.bank.id) {
          url = `/api/admin/emi-banks/${this.bank.id}`;
          params["_method"] = "PATCH";
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchBanks();
          this.bank_popup = false;
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async editBank(bank) {
      this.bank = _.cloneDeep(bank);
      this.bank_popup = true;
    },

    async deleteBank(id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete the bank detail?",
        accept: async () => {
          let response = await this.$http.delete(`/api/admin/emi-banks/${id}`);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchBanks();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },

    fileUploaded() {
      let file = this.$refs.bank_emi_file.files[0];
      if (file) this.bank.emi_form_file = file;
      else this.bank.emi_form_file = null;
    },
  },
  watch: {
    bank_popup(val) {
      if (!val) {
        this.bank = {
          finance_amount_percentage: {
          month_6: "",
          month_9: "",
          month_12: "",
          month_18: "",
        },
        };
      }
    },
  },
};
</script>