<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5 vs-con-loading__container" id="loading--container" v-else>
      <vs-table
        @change-page="handlePagination"
        stripe
        :data="contacts.data"
        :max-items="contacts.per_page"
        :total="contacts.total"
        :sst="true"
      >
        <template slot="thead">
          <vs-th>Name</vs-th>
          <vs-th sort-key="email">Email Address</vs-th>
          <vs-th>Subject</vs-th>
          <vs-th>Date</vs-th>
          <vs-th>Actions</vs-th>
          <vs-th>Status</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>{{tr.name }}</vs-td>
            <vs-td>{{tr.email}}</vs-td>
            <vs-td>{{ tr.subject }}</vs-td>
            <vs-td>{{ tr.created_at | date_format('MMMM Do YYYY, h:mm a') }}</vs-td>
            <vs-td>{{ tr.replied_at ? 'Replied': 'Not Replied' }}</vs-td>
            <vs-td>
              <router-link :to="{name: 'admin-contact-inquiry-detail', params: {id: tr.id}}">
                <vs-button
                  class="table-action--buttons"
                  radius
                  title="View Detail"
                  color="warning"
                  type="filled"
                  icon="search"
                ></vs-button>
              </router-link>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <vs-pagination class="mt-4" :total="contacts.last_page" v-model="table_options.current_page"></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contacts: {
        data: [],
        per_page: 0,
        total: 0,
        last_page: 0,
      },
      table_options: {
        current_page: 1,
      },
      loading: true,
      // see the options API
    };
  },
  mounted() {
    this.fetchContacts();
  },
  methods: {
    async fetchContacts() {
      if (!this.loading) {
        this.$vs.loading({
          container: "#loading--container",
        });
      }
      try {
        let response = await this.$http.get(
          `/api/admin/contact-inquiries?page=${this.table_options.current_page}`
        );
        this.contacts = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        if (!this.loading) {
          this.$vs.loading.close("#loading--container > .con-vs-loading");
        }
        this.loading = false;
      }
    },

    handlePagination(page) {
      this.table_options.current_page = page;
      this.fetchContacts();
    },
  },
  watch: {
    "table_options.current_page": function () {
      this.fetchContacts();
    },
  },
};
</script>