<template>
  <div>
    <div class="vx-row vs-con-loading__container" id="loading--container">
      <div class="vx-col w-full md:w-1/2 mb-4">
        <vx-card title="EMI Details" class="card-padding-5">
          <table class="emi--detail-table">
            <tr>
              <th>Product</th>
              <td>
                {{ emiRequest.product.name }}
                <span v-if="emiRequest.product_attributes">
                  <p v-for="(value, key) in emiRequest.product_attributes">
                    <strong>{{ key }}: </strong>{{ value }}
                  </p>
                  <br />
                </span>
              </td>
            </tr>

            <tr>
              <th>Down Payment</th>
              <td>NPR {{ emiRequest.down_payment }} /-</td>
            </tr>

            <tr>
              <th>Finance Amount</th>
              <td>NPR {{ emiRequest.finance_amount }} /-</td>
            </tr>

            <tr>
              <th>Duration in Month</th>
              <td>{{ emiRequest.emi_mode }} Months</td>
            </tr>

            <tr>
              <th>EMI Per Month</th>
              <td>NPR {{ emiRequest.emi_per_month }} /-</td>
            </tr>

            <tr>
              <th>Has Credit Card?</th>
              <td class="td vs-table--td">
                {{ emiRequest.credit_card ? "Yes" : "No" }}
              </td>
            </tr>

            <tbody v-if="emiRequest.credit_card">
              <tr>
                <th>Credit Card Number</th>
                <td>{{ emiRequest.card_number }}</td>
              </tr>

               <tr>
                <th>Card Holder Name</th>
                <td>{{ emiRequest.card_holder_name }}</td>
              </tr>
                <tr>
                <th>Card Expiry Date</th>
                <td>{{ emiRequest.card_expiry_date }}</td>
              </tr>
            </tbody>
            <tr>
              <th>Bank</th>
              <td class="td vs-table--td">
                {{ emiRequest.bank_detail.name }}
              </td>
            </tr>
            <tr>
              <th>Customer Name</th>
              <td class="td vs-table--td">{{ emiRequest.name }}</td>
            </tr>

            <tr>
              <th>Email Address</th>
              <td class="td vs-table--td">{{ emiRequest.email }}</td>
            </tr>

            <tr>
              <th>Contact Number</th>
              <td class="td vs-table--td">{{ emiRequest.contact_number }}</td>
            </tr>

            <tr>
              <th>Address</th>
              <td class="td vs-table--td">{{ emiRequest.address }}</td>
            </tr>

            <tr>
              <th>Date of Birth (AD)</th>
              <td class="td vs-table--td">{{ emiRequest.dob_ad }}</td>
            </tr>

            <tr>
              <th>Date of Birth (BS)</th>
              <td class="td vs-table--td">{{ emiRequest.dob_bs }}</td>
            </tr>

            <tr>
              <th>Gender</th>
              <td class="td vs-table--td">{{ emiRequest.gender }}</td>
            </tr>

            <tbody v-if="!emiRequest.credit_card">
              <tr>
                <th>Residental Status</th>
                <td class="td vs-table--td">
                  {{ emiRequest.residental_status }}
                </td>
              </tr>

              <tr>
                <th>Vehicle</th>
                <td class="td vs-table--td">{{ emiRequest.vehicle }}</td>
              </tr>

              <tr>
                <th>Occupation</th>
                <td class="td vs-table--td">{{ emiRequest.occupation }}</td>
              </tr>

              <tr>
                <th>Number of Dependants</th>
                <td class="td vs-table--td">
                  {{ emiRequest.no_of_dependents }}
                </td>
              </tr>

              <tr>
                <th>Montly Income</th>
                <td class="td vs-table--td">
                  NPR {{ emiRequest.monthly_income }} /-
                </td>
              </tr>

              <tr>
                <th>Length of Employment</th>
                <td class="td vs-table--td">
                  {{ emiRequest.length_of_employment }}
                </td>
              </tr>
              <tr>
                <th>Application Status</th>
                <td class="td vs-table--td">
                  <strong class="text-warning" v-if="emiRequest.status == 1"
                    >Processing</strong
                  >
                  <strong class="text-danger" v-if="emiRequest.status == 0"
                    >Pending</strong
                  >
                  <strong class="text-success" v-if="emiRequest.status == 2"
                    >Approved</strong
                  >
                  <strong class="text-success" v-if="emiRequest.status == 3"
                    >Finished</strong
                  >
                  <strong class="text-danger" v-if="emiRequest.status == 4"
                    >Declined</strong
                  >
                </td>
              </tr>
            </tbody>
            <tr>
              <th>Actions</th>
              <td>
                <vs-button
                  size="small"
                  v-if="emiRequest.status === 0"
                  color="success"
                  @click="processEmiApplication"
                  >Start Processing</vs-button
                >
                <vs-button
                  size="small"
                  v-if="emiRequest.status === 1"
                  color="success"
                  @click="approveEmiApplication"
                  >Approve</vs-button
                >
                <vs-button
                  size="small"
                  v-if="emiRequest.status === 2"
                  color="success"
                  @click="completeEmiApplication"
                  >Complete</vs-button
                >
                <vs-button
                  v-if="emiRequest.status != 3 &&emiRequest.status != 4"
                  @click="declineEmiApplication"
                  size="small"
                  color="danger"
                  >Decline</vs-button
                >
              </td>
            </tr>
          </table>
        </vx-card>
      </div>

      <div class="vx-col w-full md:w-1/2" v-if="!emiRequest.credit_card">
        <vx-card title="User Documents" class="card-padding-5">
          <div class="mb-4">
            <h5 class="mb-1">Citizenship</h5>
            <div class="image-preview-container">
              <img :src="emiRequest.citizenship_url" alt="" />
            </div>
          </div>

          <div class="mb-4">
            <h5 class="mb-1">Salary Certificate</h5>
            <div class="image-preview-container">
              <img :src="emiRequest.salary_certificate_url" alt="" />
            </div>
          </div>

          <div class="mb-4">
            <h5 class="mb-1">Passport photo</h5>
            <div class="image-preview-container">
              <img :src="emiRequest.photo_url" alt="" />
            </div>
          </div>
          <div class="mb-4">
            <h5 class="mb-1">Bank Statement</h5>
            <vs-button class="mt-2">Download</vs-button>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.emi--detail-table {
  width: 100%;

  border: 1px solid #f8f8f8;
  border-collapse: collapse;
  th {
    border: 1px solid #f8f8f8;
  }
  td {
    padding: 13px 20px;
    min-width: 200px;
    border: 1px solid #f8f8f8;
  }
}
.reply--area {
  border: 1px solid #ccc;
  padding: 20px;
}
</style>

<script>
import { error } from "loglevel";
export default {
  data() {
    return {
      processing: false,
      id: null,
      emiRequest: {
        bank_detail: {},
        product: {},
      },
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getEmiRequest();
  },
  methods: {
    async getEmiRequest() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(
          `/api/admin/emi-request/${this.id}/get-detail`
        );
        if (response.data.success) {
          this.emiRequest = response.data.data;
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

    async processEmiApplication() {
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let response = await this.$http.post(
          `/api/admin/emi-request/${this.id}/process-application`
        );
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.getEmiRequest();
        }
      } catch (error) {
        this.errorNotification(error);
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async approveEmiApplication() {
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let response = await this.$http.post(
          `/api/admin/emi-request/${this.id}/approve-application`
        );
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.getEmiRequest();
        }
      } catch (error) {
        this.errorNotification(error);
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
    async completeEmiApplication() {
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let response = await this.$http.post(
          `/api/admin/emi-request/${this.id}/complete-application`
        );
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.getEmiRequest();
        }
      } catch (error) {
        this.errorNotification(error);
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async declineEmiApplication() {
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let response = await this.$http.post(
          `/api/admin/emi-request/${this.id}/decline-application`
        );
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.getEmiRequest();
        }
      } catch (error) {
        this.errorNotification(error);
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
};
</script>