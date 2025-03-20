<template>
  <div>
    <vs-popup
      title="Redirect Detail"
      :active.sync="redirect_popup"
      class="popup-lg"
    >
      <div id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-full mb-4">
            <vs-input
              name="from"
              class="w-full"
              label="Source URL"
              v-model="redirect.from"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('from')">{{
              errors.first("from")
            }}</span>
          </div>

          <div class="vx-col w-full mb-4">
            <vs-input
              name="to"
              class="w-full"
              label="Destination URL"
              v-model="redirect.to"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('to')">{{
              errors.first("to")
            }}</span>
          </div>
        </div>
        <vs-button class="mr-3 mt-5" @click="saveRedirect">Submit</vs-button>
      </div>
    </vs-popup>

    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="redirects" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ redirects.length }} &nbsp; &nbsp;

          <vs-button
            @click="redirect_popup = true"
            color="primary"
            size="small"
            type="border"
            >Add Redirect</vs-button
          >
        </template>
        <template slot="thead">
          <vs-th>Source</vs-th>
          <vs-th>Destination</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <a target="__blank" :href="tr.from">
                {{ tr.from }}
              </a>
            </vs-td>
            <vs-td>
              <a target="__blank" :href="tr.to">
                {{ tr.to }}
              </a></vs-td
            >
            <vs-td>
              <vs-button
                class="table-action--buttons"
                radius
                color="warning"
                type="filled"
                size="small"
                @click="editRedirect(tr)"
                icon="create"
              ></vs-button>
              <vs-button
                class="table-action--buttons"
                radius
                size="small"
                @click="deleteRedirect(tr.id)"
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
import { renderServerErrors } from "@/utils.js";
import _ from "lodash";
export default {
  data() {
    return {
      loading: true,
      redirects: [],

      redirect_popup: false,
      redirect: {},
    };
  },
  components: {
    flatPickr,
  },
  mounted() {
    this.fetchRedirects();
  },
  methods: {
    async fetchRedirects() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/redirects");
        this.redirects = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveRedirect() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let params = {
          from: this.redirect.from,
          to: this.redirect.to,
        };

        let url = "/api/admin/redirects";
        if (this.redirect.id) {
          url = `/api/admin/redirects/${this.redirect.id}`;
          params["_method"] = "PATCH";
        }

        let response = await this.$http.post(url, params);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.redirect_popup = false;
          this.fetchRedirects();
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
      }
    },

    editRedirect(redirect) {
      this.redirect = _.cloneDeep(redirect);
      this.redirect_popup = true;
    },

    deleteRedirect(redirect_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete the redirect detail?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/redirects/${redirect_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchRedirects();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>
