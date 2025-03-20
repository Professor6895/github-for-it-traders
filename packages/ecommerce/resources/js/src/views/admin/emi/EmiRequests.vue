<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card
      id="loading--container"
      class="card-padding-5 vs-con-loading__container"
      v-else
    >
      <vs-table
        stripe
        :data="emi_requests.data"
        :max-items="emi_requests.per_page"
        :total="emi_requests.total"
        :sst="true"
      >
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ emi_requests.total }}

          <div class="con-input-search vs-table--search">
            <vs-input class="inline-block" v-model="search_keyword"></vs-input>
            <vs-button
              type="filled"
              icon="search"
              @click="
                table_options.current_page = 1;
                fetchEmiRequests();
              "
            ></vs-button>
          </div>
        </template>
        <template slot="thead">
          <vs-th>ID</vs-th>
          <vs-th>Customer</vs-th>
          <vs-th>Email Address</vs-th>
          <vs-th>Product</vs-th>
          <vs-th>Application Date</vs-th>
          <vs-th>Status</vs-th>
          <vs-th>Actions</vs-th>
        </template>
        <template slot-scope="{ data }">
          <vs-tr
            class="p-4"
            :data="tr"
            :key="indextr"
            v-for="(tr, indextr) in data"
          >
            <vs-td>
              <i>
                {{ tr.id }}
              </i>
            </vs-td>
            <vs-td>
              {{ tr.name ? tr.name : "" }}
            </vs-td>
            <vs-td>
              {{ tr.email }}
            </vs-td>
            <vs-td>
              {{ tr.product.name }}
              <span v-if="tr.product_attributes">
                <p v-for="(value, key) in tr.product_attributes">
                  <strong>{{ key }}: </strong>{{ value }}
                </p>
                <br />
              </span>
            </vs-td>
            <vs-td>
              {{ tr.created_at | date_format("MMMM Do YYYY, h:mm a") }}
            </vs-td>
            <vs-td>
              <strong>
                <strong class="text-warning" v-if="tr.status == 1"
                  >Processing</strong
                >
                <strong class="text-danger" v-if="tr.status == 0"
                  >Pending</strong
                >
                <strong class="text-success" v-if="tr.status == 2"
                  >Approved</strong
                >
                <strong class="text-success" v-if="tr.status == 3"
                  >Finished</strong
                >
                <strong class="text-danger" v-if="tr.status == 4"
                  >Declined</strong
                >
              </strong>
            </vs-td>
            <vs-td>
              <router-link
                :to="{
                  name: 'ecommerce-admin-emi-request-detail',
                  params: { id: tr.id },
                }"
              >
                <vs-button size="small">Detail</vs-button>
              </router-link>

              <vs-button
                @click="deleteEmiRequest(tr.id)"
                color="danger"
                size="small"
                >Delete</vs-button
              >
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <vs-pagination
        class="mt-6"
        :total="emi_requests.last_page"
        v-model="table_options.current_page"
      ></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      emi_requests: {
        data: [],
        per_page: 0,
        total: 0,
        last_page: 0,
      },
      table_options: {
        current_page: 1,
      },
      search_keyword: "",
    };
  },
  mounted() {
    this.fetchEmiRequests();
  },
  methods: {
    async fetchEmiRequests() {
      if (!this.loading) {
        this.$vs.loading({
          container: "#loading--container",
        });
      }
      try {
        let response = await this.$http.get("/api/admin/emi-requests", {
          params: {
            page: this.table_options.current_page,
            search: this.search_keyword,
          },
        });
        this.emi_requests = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
        this.loading = false;
      }
    },

    async deleteEmiRequest(id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete the EMI Request?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/emi-requests/${id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchEmiRequests();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },

  watch: {
    "table_options.current_page": function () {
      this.fetchEmiRequests();
    },
  },
};
</script>