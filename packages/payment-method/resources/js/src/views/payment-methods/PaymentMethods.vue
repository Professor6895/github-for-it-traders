<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <div class="vx-row" v-else>
      <div class="vx-col md:w-2/5">
        <vx-card>
          <vs-table :data="payment_methods" v-model="selected">
            <template slot="thead">
              <vs-th>Logo</vs-th>
              <vs-th>Name</vs-th>
              <vs-th>Status</vs-th>
              <vs-th>Test Mode</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td><img :src="tr.logo_url" alt="" style="width: 80px"></vs-td>
                <vs-td>{{tr.name}}</vs-td>
                <vs-td>
                  <vs-icon color="success" v-if="tr.status === 1 || tr.status === '1'" icon="toggle_on" class="text-2xl"></vs-icon>
                  <vs-icon color="danger" v-else icon="toggle_off" class="text-2xl"></vs-icon>
                </vs-td>

                <vs-td>
                  <vs-icon color="success" v-if="tr.test_mode === 1 || tr.test_mode  === '1'" icon="toggle_on" class="text-2xl"></vs-icon>
                  <vs-icon color="danger" v-else icon="toggle_off" class="text-2xl"></vs-icon>
                </vs-td>
                <!-- <vs-td>
              <i>#{{tr.id}}</i>
            </vs-td>
            <vs-td>{{ tr.title }}</vs-td>
            <vs-td>
              <small>{{ tr.created_at | date_format('MMMM Do YYYY, h:mm a') }}</small>
            </vs-td>
            <vs-td>
              <router-link :to="{name: 'admin-page-detail', params: {id: tr.id}}">
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="warning"
                  type="filled"
                  size="small"
                  icon="create"
                ></vs-button>
              </router-link>
              <vs-button
                class="table-action--buttons"
                radius
                size="small"
                @click="deletePage(tr.id)"
                color="danger"
                type="filled"
                icon="delete"
              ></vs-button>
                </vs-td>-->
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
      </div>

      <div class="vx-col md:w-3/5 vs-con-loading__container" id="loading--container">
        <vx-card v-if="Object.keys(payment_method).length">
          <h1>{{ payment_method.name }}</h1>
          <p class="mt-5">
            <strong>Type :</strong>
            {{ payment_method.is_international ? 'International' : 'Local' }}
          </p>

          <div class="vx-row mt-5">
            <div class="vx-col w-full mb-4">
              <h4>Config</h4>
            </div>
            <div
              class="vx-col w-full mb-4"
              v-for="(value, key) in payment_method.payment_config"
              :key="key"
            >
              <vs-input
                class="w-full"
                v-model="payment_method.payment_config[key]"
                icon-pack="feather"
                :label="key | capitalize"
                icon-no-border
              />
            </div>

            <div class="vx-col w-full mb-4">
              <label for class="vs-input--label">Status</label>
              <vs-switch
                color="dark"
                vs-value="1"
                icon-pack="feather"
                vs-icon-on="icon-check-circle"
                vs-icon-off="icon-slash"
                v-model="payment_method.status"
              >
                <span slot="on">Enabled</span>
                <span slot="off">Disabled</span>
              </vs-switch>
            </div>

            <div class="vx-col w-full mb-4">
              <label for class="vs-input--label">Test Mode</label>
              <vs-switch
                color="dark"
                vs-value="1"
                icon-pack="feather"
                vs-icon-on="icon-check-circle"
                vs-icon-off="icon-slash"
                v-model="payment_method.test_mode"
              >
                <span slot="on">Enabled</span>
                <span slot="off">Disabled</span>
              </vs-switch>
            </div>

            <div class="vx-col w-full">
              <vs-button
                color="success"
                type="filled"
                size="small"
                @click="savePaymentConfig"
              >Submit</vs-button>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import _ from "lodash";
export default {
  data() {
    return {
      loading: false,
      selected: {},
      payment_methods: [],
      payment_method: {}, //ACTIVE PAYMENT METHOD
    };
  },
  mounted() {
    this.getPaymentMethods();
  },
  methods: {
    async getPaymentMethods() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/payment-methods");
        this.payment_methods = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async savePaymentConfig() {
      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        console.log(this.payment_method);

        let params = {
           config: this.payment_method.payment_config,
           status: this.payment_method.status,
           test_mode: this.payment_method.test_mode
        };

        // let url = "/api/admin/pages";
        // if (this.id) {
          let url = `/api/admin/payment-methods/${this.payment_method.id}`;
          params["_method"] = "PATCH";
        // }
        // let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, params);
        this.successNotification(response.data.message);
        this.getPaymentMethods();
        this.payment_method = {}
        // if (!this.id) {
        //   return this.$router.push({
        //     name: "admin-page-detail",
        //     params: { id: response.data.page.id }
        //   });
        // }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },

  watch: {
    selected() {
      this.payment_method = _.cloneDeep(this.selected);
    },
  },
};
</script>