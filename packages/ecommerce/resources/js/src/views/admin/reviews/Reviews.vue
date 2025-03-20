<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5 vs-con-loading__container" id="loading--container" v-else>
      <vs-table
        @change-page="handlePagination"
        stripe
        :data="reviews.data"
        :max-items="reviews.per_page"
        :total="reviews.total"
        :sst="true"
      >
        <template slot="thead">
          <vs-th>Reviewer</vs-th>
          <vs-th>Product</vs-th>
          <vs-th>Review Text</vs-th>
          <vs-th>Rating</vs-th>
          <vs-th>Date</vs-th>
          <vs-th>Status</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <vs-chip>
                <vs-avatar
                  color="transparent"
                  size="50px"
                  :src="tr.user.avatar ? tr.user.avatar: require('@assets/images/default-avatar.png')"
                />
                {{ tr.user.name }}
              </vs-chip>
            </vs-td>
            <vs-td>{{tr.product.name}}</vs-td>
            <vs-td style="max-width:400px">{{tr.review}}</vs-td>

            <vs-td>
              <svg
                v-for="number in 5"
                :key="`star${number}`"
                class="mx-1 w-4 h-4 fill-current"
                :class="{'text-warning': number <= tr.rating}"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                />
              </svg>
            </vs-td>
            <vs-td>
              <small>{{ tr.created_at | date_format('MMMM Do YYYY, h:mm a') }}</small>
            </vs-td>
            <vs-td>
              <vs-td>
                <vs-icon
                  @click="toggleStatus(tr.id)"
                  :icon="tr.status === '1' || tr.status ==1 ? 'toggle_on':'toggle_off'"
                  class="icon-large"
                  :class="tr.status === '1' || tr.status ==1  ? 'text-success':'text-danger'"
                ></vs-icon>
              </vs-td>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
      <vs-pagination class="mt-4" :total="reviews.last_page" v-model="table_options.current_page"></vs-pagination>
    </vx-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reviews: {
        data: [],
        per_page: 0,
        total: 0,
        last_page: 0,
      },
      table_options: {
        current_page: 1,
      },
      loading: true,
    };
  },
  mounted() {
    this.fetchReviews();
  },
  methods: {
    async fetchReviews() {
      if (!this.loading) {
        this.$vs.loading({
          container: "#loading--container",
        });
      }
      try {
        let response = await this.$http.get(
          `/api/admin/product-reviews?page=${this.table_options.current_page}`
        );
        this.reviews = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        if (!this.loading) {
          this.$vs.loading.close("#loading--container > .con-vs-loading");
        }
        this.loading = false;
      }
    },

    toggleStatus(review_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: `Confirm`,
        text: "Are you sure you want to change status?",
        accept: async () => {
          let response = await this.$http.post(
            `/api/admin/product-reviews/${review_id}/toggle-status`,
            { _method: "PATCH" }
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchReviews();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },

    handlePagination(page) {
      this.table_options.current_page = page;
    },
  },
  watch: {
    "table_options.current_page": function () {
      this.fetchReviews();
    },
  },
};
</script>