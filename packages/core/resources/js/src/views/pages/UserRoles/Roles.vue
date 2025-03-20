<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <!-- <vx-card class="card-padding-5" v-else> -->
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="roles" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ roles.length }} &nbsp; &nbsp;
          <router-link to="/admin/user-role" v-if="checkPermission('roles-add')">
            <vs-button color="primary" size="small" type="gradient">Add Role</vs-button>
          </router-link>
        </template>
        <template slot="thead">
          <vs-th sort-key="email">ID</vs-th>
          <vs-th>Name</vs-th>
          <vs-th>Permissions</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <i>#{{tr.id}}</i>
            </vs-td>
            <vs-td>{{tr.name }}</vs-td>
            <vs-td>
              <vs-chip
                class="mr-3"
                color="primary"
                v-for="permission in tr.permissions"
                :key="permission"
              >{{ permission | title('-') }}</vs-chip>
            </vs-td>
            <vs-td>
              <router-link :to="{name: 'admin-user-role', params: {id: tr.id}}" v-if="checkPermission('roles-edit')">
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="warning"
                  type="filled"
                  icon="create"
                ></vs-button>
              </router-link>
              <vs-button
                class="table-action--buttons"
                radius
                color="danger"
                v-if="checkPermission('roles-delete')"
                @click="deleteRole(tr.id)"
                type="filled"
                icon="delete"
              ></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
    <!-- </vx-card> -->
  </div>
</template>
<script>
import log from "loglevel";
export default {
  data() {
    return {
      loading: false,
      roles: [],
    };
  },
  mounted() {
    this.fetchRoles();
  },
  methods: {
    async fetchRoles() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/user-roles");
        this.roles = response.data.data;
      } catch (error) {
        log.error(error);
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    deleteRole(role_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete role?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/user-roles/${role_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchRoles();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>