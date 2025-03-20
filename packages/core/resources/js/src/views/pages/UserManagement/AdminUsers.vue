<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <!-- <vx-card class="card-padding-5" v-else> -->
      <vs-table search stripe :data="users" max-items="40" pagination v-else>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ users.length }} &nbsp; &nbsp;
          <router-link to="/admin/user-detail" v-if="checkPermission('admins-add')">
            <vs-button color="primary" size="small" type="gradient">Add Admin</vs-button>
          </router-link>
        </template>
        <template slot="thead">
          <vs-th sort-key="email">ID</vs-th>
          <vs-th>Name</vs-th>
          <vs-th sort-key="email">Email Address</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <i>#{{tr.id}}</i>
            </vs-td>
            <vs-td>{{tr.full_name }}</vs-td>
            <vs-td>{{tr.email}}</vs-td>
            <vs-td>
              <div v-if="tr.id !== 1 && $store.state.AppActiveUser.id !== tr.id">
                <router-link :to="{name: 'admin-user-detail', params: {id: tr.id}}" v-if="checkPermission('admins-edit')">
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
                  v-if="checkPermission('admins-delete')"
                  @click="deleteUser(tr.id)"
                  type="filled"
                  icon="delete"
                ></vs-button>
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    <!-- </vx-card> -->
  </div>
</template>
<script>
import PageLoader from "@/layouts/components/PageLoader";
import log from "loglevel";
export default {
  data() {
    return {
      loading: true,
      users: []
    };
  },
  components: {
    PageLoader
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true
      try {
        let response = await this.$http.get("/api/admin/admin-users");
        this.users = response.data.data;
      } catch (error) {
        log.error(error);
        this.$vs.notify({
          title: "Error",
          position: "top-right",
          text: "Something went wrong!! Please retry",
          color: "danger"
        });
      } finally {
        this.loading = false;
      }
    },

    deleteUser(user_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete user?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/admin-users/${user_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message)
            this.fetchUsers();
          } else {
            this.errorNotification(response.data.message)
          }
        }
      });
    }
  }
};
</script>