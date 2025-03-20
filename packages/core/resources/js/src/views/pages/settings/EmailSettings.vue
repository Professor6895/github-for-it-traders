<template>
  <div class="vx-row">
    <div class="vx-col md:w-3/12 w-full mb-2 rounded-lg">
      <settings-sidebar></settings-sidebar>
    </div>
    <div class="vx-col md:w-9/12 mb-2">
      <vx-card id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-full mb-3">
            <h4>SMTP Settings</h4>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Mailer"
              v-model="email_settings.smtp_setting.mail_mailer"
              name="mail_mailer"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Mail Host"
              v-model="email_settings.smtp_setting.mail_host"
              name="mail_host"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Mail Port"
              v-model="email_settings.smtp_setting.mail_port"
              name="mail_port"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Encryption"
              v-model="email_settings.smtp_setting.mail_encryption"
              name="mail_encryption"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Mail Username/Email"
              v-model="email_settings.smtp_setting.mail_username"
              name="mail_username"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Password"
              v-model="email_settings.smtp_setting.mail_password"
              name="mail_password"
            />
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="From Address"
              v-model="email_settings.smtp_setting.mail_from_address"
              name="mail_from_address"
            />
          </div>

          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="From Name"
              v-model="email_settings.smtp_setting.mail_from_name"
              name="mail_from_name"
            />
          </div>
        </div>

        <div class="vx-row mt-3 mb-3">
          <div class="vx-col w-full">
            <h4>Email Settings</h4>
          </div>

          <div
            class="vx-col sm:w-1/2 w-full mt-3"
            v-for="(email_for, index) in email_settings.email_setting"
            :key="`field-${index}`"
          >
            <vs-input
              class="w-full"
              :label-placeholder="index | title"
              v-model="email_settings.email_setting[index]"
              name="mail_from_name"
            />
          </div>
        </div>
        <vs-button color="success" type="filled" size="small" @click="saveEmailSettings">Submit</vs-button>
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
      email_settings: {
        smtp_setting: {},
        email_setting: {}
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
        _.has(this.$store.state, "settings.dashboard_settings.email_settings")
      ) {
        this.email_settings = _.cloneDeep(
          this.$store.state.settings.dashboard_settings.email_settings
        );
      }
    },

    async saveEmailSettings() {
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
          settings: this.email_settings
        }

        let response = await this.$http.post(
          `/api/admin/settings/email_settings/update-settings`,
          paylod
        );
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