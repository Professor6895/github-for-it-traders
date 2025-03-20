<template>
  <div>
    <div class="vx-row">
      <!-- Col 1 -->
      <div class="vx-col w-full md:w-1/2">
        <vs-input
          class="w-full"
          v-model="current_password"
          label="Current Password"
          icon-no-border
          type="password"
          v-validate="'required'"
          name="current_password"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('current_password')"
        >{{ errors.first('current_password') }}</span>

        <vs-input
          class="w-full mt-4"
          v-model="new_password"
          label="New Passowrd"
          icon-no-border
          type="password"
          v-validate="'required'"
          name="new_password"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('new_password')"
        >{{ errors.first('new_password') }}</span>

        <vs-input
          class="w-full mt-4 mt-4"
          v-model="confirm_password"
          label="Confirm Password"
          type="password"
          icon-no-border
          name="confirm_password"
          v-validate="'required'"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('confirm_password')"
        >{{ errors.first('confirm_password') }}</span>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-4 flex">
          <vs-button size="small" @click="savechanges">Save Changes</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { renderServerErrors } from "@/utils.js";

export default {
  data() {
    return {
      current_password: "",
      new_password: "",
      confirm_password: "",
    };
  },
  mounted() {},
  methods: {
    clearForm() {
      (this.current_password = ""),
        (this.new_password = ""),
        (this.confirm_password = "");
    },

    async savechanges() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });
        let params = {
          current_password: this.current_password,
          new_password: this.new_password,
          confirm_password: this.confirm_password,
          _method: "PATCH",
        };

        let response = await this.$http.post(
          "/api/admin/update-security",
          params
        );
        if (response.data.success) {
          this.successNotification(response.data.message);
          setTimeout(function () {
            location.reload();
          }, 1000);
        } else {
          this.errorNotification(
            "Something went wrong while updating security!! Please retry"
          );
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