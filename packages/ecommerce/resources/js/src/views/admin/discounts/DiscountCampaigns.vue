<template>
  <div>
    <vs-popup
      title="Campaign Detail"
      :active.sync="campaign_popup"
      class="popup-lg"
    >
      <div id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-full mb-4">
            <vs-input
              name="title"
              class="w-full"
              label="Title"
              v-model="campaign.title"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('title')">{{
              errors.first("title")
            }}</span>
          </div>

          <div class="vx-col w-full md:w-1/2 mb-4">
            <label for>Start Date</label>
            <flat-pickr
              v-model="campaign.start_date"
              v-validate="'required'"
              :config="{ dateFormat: 'Y-m-d H:i', enableTime: true }"
              class="w-full"
              name="start_date"
            />
            <span class="text-danger text-sm" v-if="errors.has('start_date')">{{
              errors.first("start_date")
            }}</span>
          </div>

          <div class="vx-col w-full md:w-1/2 mb-4">
            <label for>End Date</label>
            <flat-pickr
              v-model="campaign.end_date"
              v-validate="'required'"
              :config="{ dateFormat: 'Y-m-d H:i', enableTime: true }"
              class="w-full"
              name="end_date"
            />
            <span class="text-danger text-sm" v-if="errors.has('end_date')">{{
              errors.first("end_date")
            }}</span>
          </div>

          <div class="vx-col w-full">
            <vs-checkbox v-model="campaign.show_on_home"
              >Show On Homepage</vs-checkbox
            >
          </div>
        </div>
        <vs-button class="mr-3 mt-5" @click="saveCampaign">Submit</vs-button>
      </div>
    </vs-popup>

    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="campaigns" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ campaigns.length }} &nbsp; &nbsp;

          <vs-button
            @click="campaign_popup = true"
            color="primary"
            size="small"
            type="border"
            >Add Campaign</vs-button
          >
        </template>
        <template slot="thead">
          <vs-th sort-key="email">SN</vs-th>
          <vs-th>Campaign Name</vs-th>
          <vs-th>Start Date</vs-th>
          <vs-th>End Date</vs-th>
          <vs-th>Status</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr
            :state="!tr.is_active ? 'danger' : 'success'"
            :data="tr"
            :key="indextr"
            v-for="(tr, indextr) in data"
          >
            <vs-td>
              <i>#{{ tr.id }}</i>
            </vs-td>
            <vs-td>{{ tr.title }}</vs-td>
            <vs-td>{{ tr.start_date }}</vs-td>
            <vs-td>{{ tr.end_date }}</vs-td>
            <vs-td>{{ tr.is_active ? "Active" : "Inactive" }}</vs-td>

            <vs-td>
              <router-link
                :to="{
                  name: 'ecommerce-admin-discount-campaign-detail',
                  params: { id: tr.id },
                }"
              >
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="success"
                  type="filled"
                  size="small"
                  icon="search"
                ></vs-button>
              </router-link>
              <vs-button
                @click="editCampaign(tr)"
                class="table-action--buttons"
                radius
                color="warning"
                type="filled"
                size="small"
                icon="create"
              ></vs-button>

              <vs-button
                class="table-action--buttons"
                radius
                size="small"
                @click="deleteCampaign(tr.id)"
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
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { renderServerErrors } from "@/utils.js";
import _ from "lodash";
export default {
  data() {
    return {
      loading: true,
      campaigns: [],
      campaign_popup: false,
      campaign: {},
    };
  },
  components: {
    flatPickr,
  },
  mounted() {
    this.fetchDiscountCampaigns();
  },
  methods: {
    async fetchDiscountCampaigns() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/discount-campaigns");
        this.campaigns = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveCampaign() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let params = {
          title: this.campaign.title,
          start_date: this.campaign.start_date,
          end_date: this.campaign.end_date,
          show_on_home: this.campaign.show_on_home,
        };

        let url = "/api/admin/discount-campaigns";
        if (this.campaign.id) {
          url = `/api/admin/discount-campaigns/${this.campaign.id}`;
          params["_method"] = "PATCH";
        }

        let response = await this.$http.post(url, params);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchDiscountCampaigns();
        } else {
          this.errorNotification(
            "Something went wrong! Please reload the page and retry!!"
          );
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
        this.campaign_popup = false;
      }
    },

    editCampaign(campaign) {
      this.campaign = _.cloneDeep(campaign);
      this.campaign_popup = true;
    },

    deleteCampaign(campaign_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Are you sure?`,
        text: `Deleting campaign will delete all the product associated with it?  Are you sure you want to delete the`,
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/discount-campaigns/${campaign_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchDiscountCampaigns();
          } else {
            this.errorNotification(response.data.message);
          }
        }
      });
    }
  },

  watch: {
    campaign_popup(val) {
      if (!val) {
        this.campaign = {};
        this.errors.clear();
      }
    }
  }
};
</script>