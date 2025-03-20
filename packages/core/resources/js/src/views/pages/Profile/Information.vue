<template>
  <div>
    <div class="vx-row">
      <div class="vx-col">
        <vs-button @click="reloadUserInfo">Reload User Info</vs-button>
      </div>
    </div>
    <div class="vx-row mt-3">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          v-model="user.name"
          class="w-full mt-3"
          label="Full Name"
          v-validate="'required'"
          name="name"
        />
        <span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
      </div>

      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          v-model="user.email"
          class="w-full mt-3"
          label="Email"
          v-validate="'required'"
          name="email"
        />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-3 flex">
          <vs-button class="mt-2" size="small" @click="saveChanges">Save Changes</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
export default {
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      this.user = _.cloneDeep(this.$store.state.AppActiveUser);
    },

    async reloadUserInfo() {
      try {
        this.$vs.loading({
          container: "#loading--container",
        });
        let response = await this.$http.post(
          "/api/admin/reload-user"
        );
        // let writer = response.data.writer
        if (response.data.success) {
          this.$store.commit("UPDATE_USER_INFO", response.data.data, {
            root: true,
          });
          this.successNotification("Refreshed");
        } else {
          this.errorNotification(
            "Something went wrong while updating profile!! Please retry"
          );
        }
      } catch (error) {
        this.errorNotification(
          "Error while updating profile! Please try again"
        );
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async saveChanges() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });
        let params = {
          name: this.user.name,
          email: this.user.email,
          _method: "PATCH",
        };

        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(
          "/api/admin/update-profile",
          payload
        );
        // let writer = response.data.writer
        if (response.data.success) {
          this.$store.commit("UPDATE_USER_INFO", response.data.userInfo, {
            root: true,
          });
          this.successNotification(response.data.message);
          this.loadUser();
        } else {
          this.errorNotification(
            "Something went wrong while updating profile!! Please retry"
          );
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification(
          "Error while updating profile! Please try again"
        );
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
};
</script>