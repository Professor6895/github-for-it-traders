<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <!-- <vx-card class="card-padding-5" v-else> -->
    <vs-table search stripe :data="users" max-items="40" pagination v-else>
      <template slot="header">
        <strong>Total :</strong>
        &nbsp;{{ users.length }} &nbsp; &nbsp;
      </template>
      <template slot="thead">
        <vs-th>Full Name</vs-th>
        <vs-th sort-key="email">Email Address</vs-th>
        <vs-th>Contact</vs-th>
        <vs-th>DOB</vs-th>
        <vs-th>Member Since</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td>
            <vs-chip>
              <vs-avatar
                color="transparent"
                size="50px"
                :src="tr.avatar ? tr.avatar: require('@assets/images/default-avatar.png')"
              />
              {{ tr.name }}
            </vs-chip>
          </vs-td>
          <vs-td>{{ tr.email }}</vs-td>
          <vs-td>{{ tr.contact_number ? tr.contact_number : '--' }}</vs-td>
          <vs-td>{{ tr.date_of_birth? tr.date_of_birth : '--' }}</vs-td>
          <vs-td>
            <small>{{ tr.created_at | date_format('MMMM Do YYYY') }}</small>
          </vs-td>
              <!-- <router-link :to="{name: 'admin-user-detail', params: {id: tr.id}}">
                <vs-button
                  class="table-action--buttons"
                  radius
                  size="small"
                  color="warning"
                  type="filled"
                  icon="create"
                ></vs-button>
              </router-link>
              <vs-button
                class="table-action--buttons"
                radius
                size="small"
                color="danger"
                @click="deleteUser(tr.id)"
                type="filled"
                icon="delete"
              ></vs-button> -->
        </vs-tr>
      </template>
    </vs-table>
    <!-- </vx-card> -->
  </div>
</template>
<script>
import log from "loglevel";
export default {
  data() {
    return {
      loading: true,
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/users");
        this.users = response.data.data;
      } catch (error) {
        log.error(error);
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>