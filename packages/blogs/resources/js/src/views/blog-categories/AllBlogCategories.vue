<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="blogCategories" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ blogCategories.length }} &nbsp; &nbsp;
          <router-link :to="{ name: 'admin-blog-category-form' }"  v-if="checkPermission('add-blog-category')">
            <vs-button color="primary" size="small" type="border">Add Blog Categories</vs-button>
          </router-link>
        </template>
        <template slot="thead">
          <vs-th sort-key="email">SN</vs-th>
          <vs-th>Thumbnail</vs-th>
          <vs-th>Title</vs-th>
          <vs-th>Blogs Count</vs-th>
          <vs-th sort-key="email">Created At</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <i>#{{tr.id}}</i>
            </vs-td>
            <vs-td>
                  <img class="table--image" :src="tr.thumbnail_image.thumb" alt />
            </vs-td>
            <vs-td>{{ tr.title }}</vs-td>
            <vs-td>{{ tr.blogs_count }}</vs-td>
            <vs-td>
              <small>{{ tr.created_at | date_format('MMMM Do YYYY, h:mm a') }}</small>
            </vs-td>
            <vs-td>
              <router-link :to="{name: 'admin-blog-category-form', params: {id: tr.id}}"  v-if="checkPermission('edit-blog-category')">
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
                 v-if="checkPermission('delete-blog-category')"
                @click="deleteBlogCategory(tr.id)"
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
      blogCategories: [],
    };
  },
  components: {
    PageLoader
  },
  mounted() {
    this.fetchBlogCategories();
  },
  methods: {
    async fetchBlogCategories() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/blog-categories");
        this.blogCategories = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    deleteBlogCategory(blogCategory_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete blog category?",
        accept: async () => {
          let response = await this.$http.delete(`/api/admin/blog-categories/${blogCategory_id}`);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchBlogs();
          } else {
            this.errorNotification(response.data.message);
          }
        }
      });
    }
  }
};
</script>