<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="menus" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ menus.length }} &nbsp; &nbsp;
          <router-link :to="{ name: 'admin-menu-detail' }" v-if="checkPermission('add-menu')">
            <vs-button color="primary" size="small" type="border">Add Menu</vs-button>
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
            <vs-td>{{ tr.title }}</vs-td>
            <vs-td>
              <small>{{ tr.created_at | date_format('MMMM Do YYYY, h:mm a') }}</small>
            </vs-td>
            <vs-td>
              <router-link :to="{name: 'admin-menu-detail', params: {id: tr.id}}">
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="warning"
                  type="filled"
                  icon="create"
                  v-if="checkPermission('edit-menu')"
                ></vs-button>
              </router-link>
              <vs-button
                v-if="checkPermission('delete-menu')"
                class="table-action--buttons"
                radius
                @click="deleteMenu(tr.id)"
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
      menus: [],
    };
  },
  components: {
    PageLoader,
  },
  mounted() {
    this.fetchMenus();
  },
  methods: {
    async fetchMenus() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/menus");
        this.menus = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    deleteMenu(menu_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete menu?",
        accept: async () => {
          let response = await this.$http.delete(`/api/admin/menus/${menu_id}`);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchMenus();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>