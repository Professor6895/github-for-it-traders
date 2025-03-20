<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="pages" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ pages.length }} &nbsp; &nbsp;
          <router-link :to="{ name: 'admin-page-detail' }" v-if="checkPermission('pages-add')">
            <vs-button color="primary" size="small" type="border">Add Page</vs-button>
          </router-link>
        </template>
        <template slot="thead">
          <vs-th sort-key="email">SN</vs-th>
          <vs-th>Title</vs-th>
          <vs-th sort-key="email">Created At</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <i>#{{tr.id}}</i>
            </vs-td>
            <vs-td>
              <a target="_blank" :href="`/page/${tr.slug}`">{{ tr.title }}</a>
            </vs-td>
            <vs-td>
              <small>{{ tr.created_at | date_format('MMMM Do YYYY, h:mm a') }}</small>
            </vs-td>
            <vs-td>
              <router-link
                :to="{name: 'admin-page-detail', params: {id: tr.id}}"
               v-if="checkPermission('pages-edit')"
              >
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="warning"
                  type="filled"
                  size="small"
                  icon="create"
                ></vs-button>
              </router-link>
              <vs-button
              v-if="checkPermission('pages-delete')"
                class="table-action--buttons"
                radius
                size="small"
                @click="deletePage(tr.id)"
                color="danger"
                type="filled"
                icon="delete"
              ></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
  </div>
</template>
<script>
import PageLoader from "@/layouts/components/PageLoader";
export default {
  data() {
    return {
      loading: true,
      pages: [],
    };
  },
  components: {
    PageLoader,
  },
  mounted() {
    this.fetchPages();
  },
  methods: {
    async fetchPages() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/pages");
        this.pages = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    deletePage(page_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete page?",
        accept: async () => {
          let response = await this.$http.delete(`/api/admin/pages/${page_id}`);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchPages();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>