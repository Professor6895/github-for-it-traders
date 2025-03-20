<template>
  <div class="vx-row">
    <div class="vx-col md:w-3/12 w-full mb-2 rounded-lg">
      <settings-sidebar></settings-sidebar>
    </div>
    <div class="vx-col md:w-9/12 mb-2">
      <vx-card id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-full mb-3">
            <h4>SMS Settings</h4>
          </div>
          <div class="vx-col w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="API Endpoint"
              v-model="sms_settings.api_endpoint"
              name="api_endpoint"
            />
          </div>
          <div class="vx-col  w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Token"
              v-model="sms_settings.token"
              name="token"
            />
          </div>
        </div>
        <vs-button color="success" type="filled" size="small" @click="saveSMSSetting">Submit</vs-button>
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
      sms_settings: {
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
        _.has(this.$store.state, "settings.dashboard_settings.sms_settings")
      ) {
        this.sms_settings = _.cloneDeep(
          this.$store.state.settings.dashboard_settings.sms_settings
        );
      }
    },

    async saveSMSSetting() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let paylod = {
          _method: 'PATCH',
          settings: this.sms_settings
        }

        let response = await this.$http.post(
          `/api/admin/settings/sms_settings/update-settings`,
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