<template>
  <div class="vx-col w-full mb-base">
    <vx-card id="loading--container" class="vs-con-loading__container">
      <div class="vx-row">
        <div class="vx-col sm:w-1/2 w-full mb-2">
          <vs-input
            name="name"
            class="w-full"
            v-model="role.name"
            label="Role Name"
            v-validate="'required'"
          />
          <span class="text-danger text-sm" v-if="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
      </div>

      <div class="vx-row mt-2">
        <div class="vx-col w-full">
          <h5>Permissions</h5>

          <div class="pt-5 pb-5 mb-5 mt-5" v-if="!permissions.length">
            <p class="ml-5">Fetching Permissions!</p>
          </div>
          <div v-else class="mt-4">
            <div class="mb-5" v-for="module in permissions" :key="module.module">
              <h5>{{ module.module }}</h5>
              <ul class="mt-3">
                <li
                  class="inline-block"
                  v-for="(permission_name, permission_value) in module.permissions"
                  :key="permission_value"
                >
                  <vs-checkbox
                    v-model="role.permissions"
                    :vs-value="permission_value"
                  >{{ permission_name }}</vs-checkbox>
                </li>
              </ul>
            </div>
            <span
              class="text-danger text-sm"
              v-if="errors.has('permissions')"
            >{{ errors.first('permissions') }}</span>
          </div>
        </div>
      </div>

      <div class="vx-row mt-2">
        <div class="vx-col w-full">
          <vs-button class="mr-3 mb-2" @click="saveRole">Submit</vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>
<script>
import log from "loglevel";
import { renderServerErrors } from "@/utils.js";
export default {
  data() {
    return {
      id: null,
      permissions: [],
      role: {
        permissions: [],
      },
    };
  },
  methods: {
    async getAllPermissions() {
      try {
        let response = await this.$http.get(
          `/api/admin/user-roles/all-permissions`
        );
        if (response.data.success) {
          this.permissions = response.data.data;
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
      }
    },

    async fetchRole() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(
          `/api/admin/user-roles/${this.id}`
        );
        if (response.data.success) {
          this.role = response.data.data;
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

    async saveRole() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let params = {
          name: this.role.name,
          permissions: this.role.permissions,
        };

        let url = `/api/admin/user-roles`;
        if (this.id) {
          url = `/api/admin/user-roles/${this.id}`;
          params["_method"] = "PATCH";
        }
        let response = await this.$http.post(url, params);
        if (response.data.success) {
          this.successNotification(response.data.message);
          if (!this.id) return this.$router.push({ name: "admin-user-roles" });
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getAllPermissions();
    this.fetchRole()
  },
};
</script>