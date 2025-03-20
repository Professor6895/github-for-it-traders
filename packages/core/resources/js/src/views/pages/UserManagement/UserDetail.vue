<template>
  <div class="vx-col lg:w-1/2 w-full mb-base">
    <vx-card id="loading--container" class="vs-con-loading__container">
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input
            name="name"
            class="w-full"
            v-model="user.name"
            label="Full name"
            v-validate="'required'"
          />
          <span class="text-danger text-sm" v-if="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input
            name="email"
            class="w-full"
            label="Email Address"
            v-model="user.email"
            v-validate="'required'"
          />
          <span class="text-danger text-sm" v-if="errors.has('email')">{{ errors.first('email') }}</span>
        </div>
      </div>

      <div class="vx-row">
        <div class="vx-col w-full mb-5">
          <label for class="vs-input--label">Role</label>
          <v-select
            :options="roles"
            label="name"
            v-model="user.role_id"
            value="id"
            :reduce="role => role.id"
            name="role_id"
            v-validate="'required'"
          />
          <span
            class="text-danger text-sm"
            v-if="errors.has('role_id')"
          >{{ errors.first('role_id') }}</span>
        </div>
      </div>

      <div class="vx-row mt-2">
        <div class="vx-col w-full">
          <vs-button class="mr-3 mb-2" @click="saveUser">Submit</vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>
<script>
import log from "loglevel";
import vSelect from "vue-select";
import { renderServerErrors } from "@/utils.js";
export default {
  data() {
    return {
      id: null,
      user: {},
      roles: [],
    };
  },
  components: {
    "v-select": vSelect,
  },
  mounted() {
    this.checkPermission("test");
    this.id = this.$route.params.id;
    this.fetchRoles();
    this.fetchUser();
  },
  methods: {
    async fetchRoles() {
      try {
        let response = await this.$http.get(
          `/api/admin/admin-users/user-roles`
        );
        if (response.data.success) {
          this.roles = response.data.data;
        }
      } catch (error) {
        this.errorNotification(
          "Something went wrong while fetching roles! Please retry!!"
        );
      }
    },

    async fetchUser() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(
          `/api/admin/admin-users/${this.id}`
        );
        if (response.data.success) {
          this.user = response.data.data;
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "error-404" });
        }
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async saveUser() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let params = {
          name: this.user.name,
          email: this.user.email,
          role_id: this.user.role_id,
        };

        let url = `/api/admin/admin-users`;
        if (this.id) {
          url = `/api/admin/admin-users/${this.id}`;
          params["_method"] = "PATCH";
        }
        let response = await this.$http.post(url, params);
        if (response.data.success) {
          this.successNotification(response.data.message);
          if (!this.id)
            return this.$router.push({ name: "admin-user-management" });
        } else {
          this.errorNotification(response.data.message);
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