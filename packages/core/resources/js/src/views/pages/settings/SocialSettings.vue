<template>
  <div class="vx-row">
    <div class="vx-col md:w-3/12 w-full mb-2 rounded-lg">
      <settings-sidebar></settings-sidebar>
    </div>
    <div class="vx-col md:w-9/12 mb-2">
      <vx-card id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-full mb-3">
            <h4>Facebook</h4>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Facebook App ID"
              v-model="social_settings.facebook.facebook_app_id"
              name="facebook_app_id"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Facebook App Secret"
              v-model="social_settings.facebook.facebook_app_secret"
              name="facebook_app_secret"
            />
          </div>
        </div>

        <div class="vx-row mt-3 mb-3">
          <div class="vx-col w-full">
            <h4>Google</h4>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Googke Client ID"
              v-model="social_settings.google.google_client_id"
              name="google_app_id"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Google Client Secret"
              v-model="social_settings.google.google_client_secret"
              name="google_app_secret"
            />
          </div>
        </div>
        <vs-button color="success" type="filled" size="small" @click="saveSocialSettings">Submit</vs-button>
      </vx-card>
    </div>
  </div>
</template>

<script>
import SettingSidebar from "./Sidebar";
import _ from "lodash";
import { renderServerErrors } from "@/utils.js";
import store from "@/store/store";
export default {
  data() {
    return {
      social_settings: {
        facebook: {},
        google: {},
      },
    };
  },
  components: {
    "settings-sidebar": SettingSidebar,
  },
  computed: {
    state() {
      return this.$store.state.settings;
    },
  },
  mounted() {
    this.initComponent();
  },
  watch: {
    state: {
      deep: true,
      handler() {
        this.initComponent();
      },
    },
  },
  methods: {
    initComponent() {
      if (
        _.has(this.$store.state, "settings.dashboard_settings.social_settings")
      ) {
        this.social_settings = _.cloneDeep(
          this.$store.state.settings.dashboard_settings.social_settings
        );
      }
    },

    async saveSocialSettings() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let paylod = {
          _method: "PATCH",
          settings: this.social_settings,
        };

        let response = await this.$http.post(
          `/api/admin/settings/social_settings/update-settings`,
          paylod
        );
        console.log(response.data);
        if (response.data.success) {
          store.dispatch("settings/fetchSettings", { once: false });
          this.successNotification(response.data.message);
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
};
</script>