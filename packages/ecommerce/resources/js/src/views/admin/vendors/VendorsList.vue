<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="vendors" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ vendors.length }} &nbsp; &nbsp;
          <router-link :to="{ name: 'admin-vendor-detail' }">
            <vs-button color="primary" size="small" type="border"
              >Add Vendor</vs-button
            >
          </router-link>
        </template>
        <template slot="thead">
          <vs-th sort-key="email">SN</vs-th>
          <vs-th>Full Name</vs-th>
          <vs-th>Email</vs-th>
          <vs-th>Contact</vs-th>
          <vs-th>Business Name</vs-th>
          <vs-th>Status</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <i>#{{ tr.id }}</i>
            </vs-td>
            <vs-td>{{ tr.full_name }}</vs-td>
            <vs-td>
              {{ tr.email }}
            </vs-td>
            <vs-td>
              {{ tr.contact }}
            </vs-td>
            <vs-td>
              {{ tr.name }}
            </vs-td>
            <vs-td>
              <strong v-if="tr.status === 0" class="text-danger"
                >Inactive</strong
              >
              <strong v-if="tr.status === 1" class="text-success"
                >Active</strong
              >
              <strong v-if="tr.status === 2" class="text-warning"
                >Requested</strong
              >
            </vs-td>
            <vs-td>
              <router-link
                :to="{ name: 'admin-vendor-detail-view', params: { id: tr.id } }"
              >
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="success"
                  type="filled"
                  size="small"
                  icon="search"
                ></vs-button>
              </router-link>
              <router-link
                :to="{ name: 'admin-vendor-detail', params: { id: tr.id } }"
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
                class="table-action--buttons"
                radius
                size="small"
                @click="deleteVendor(tr.id)"
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
export default {
  data() {
    return {
      loading: true,
      vendors: [],
    };
  },
  mounted() {
    this.fetchVendors();
  },
  methods: {
    async fetchVendors() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/vendors");
        this.vendors = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    deleteVendor(vendor_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete the vendor detail?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/vendors/${vendor_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchVendors();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>