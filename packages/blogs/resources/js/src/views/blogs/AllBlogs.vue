<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="blogs" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ blogs.length }} &nbsp; &nbsp;
          <router-link
            v-if="checkPermission('add-blog')"
            :to="{ name: 'admin-blog-form' }"
          >
            <vs-button color="primary" size="small" type="border"
              >Add Blogs</vs-button
            >
          </router-link>
        </template>
        <template slot="thead">
          <vs-th sort-key="email">SN</vs-th>
          <vs-th>Thumbnail</vs-th>
          <vs-th>Title</vs-th>
          <vs-th>Author</vs-th>
          <vs-th>Featured</vs-th>
          <vs-th>Status</vs-th>
          <vs-th sort-key="email">Publish Date</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <i>#{{ tr.id }}</i>
            </vs-td>
            <vs-td>
              <img class="table--image" :src="tr.thumbnail_image.thumb" alt />
            </vs-td>
            <vs-td>{{ tr.title }}</vs-td>
            <vs-td>{{ tr.author }}</vs-td>
            <vs-td>
              <div @click="toggleBlogFeature(tr)">
                <vs-icon
                  :icon="tr.is_featured ? 'toggle_on' : 'toggle_off'"
                  class="icon-large"
                  :class="tr.is_featured ? 'text-success' : 'text-danger'"
                ></vs-icon>
              </div>
            </vs-td>
            <vs-td>
              <div @click="toggleBlogStatus(tr)">
                <vs-icon
                  :icon="tr.status ? 'toggle_on' : 'toggle_off'"
                  class="icon-large"
                  :class="tr.status ? 'text-success' : 'text-danger'"
                ></vs-icon>
              </div>
            </vs-td>
            <vs-td>
              <small>{{
                tr.publish_date | date_format("MMMM Do YYYY, h:mm a")
              }}</small>
            </vs-td>
            <vs-td>
              <router-link
                :to="{ name: 'admin-blog-form', params: { id: tr.id } }"
                v-if="checkPermission('edit-blog')"
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
                v-if="checkPermission('delete-blog')"
                class="table-action--buttons"
                radius
                size="small"
                @click="deleteBlog(tr.id)"
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
      blogs: [],
    };
  },
  components: {
    PageLoader,
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      this.loading = true;
      try {
        let response = await this.$http.get("/api/admin/blogs");
        this.blogs = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    deleteBlog(blog_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete blog?",
        accept: async () => {
          let response = await this.$http.delete(`/api/admin/blogs/${blog_id}`);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchBlogs();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },

    toggleBlogStatus(blog) {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: `Confirm`,
        text: "Are you sure you want to change the blog status?",
        accept: async () => {
          let payload = {
            _method: "PATCH",
          };
          let response = await this.$http.post(
            `/api/admin/blogs/${blog.id}/toggle-status`,
            payload
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            blog.status = response.data.status;
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },

    toggleBlogFeature(blog) {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: `Confirm`,
        text: `Are you sure you want to set the blog as ${
          blog.is_featured ? "not featured" : "featured"
        }?`,
        accept: async () => {
          let payload = {
            _method: "PATCH",
          };
          let response = await this.$http.post(
            `/api/admin/blogs/${blog.id}/toggle-feature`,
            payload
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            blog.is_featured = response.data.is_featured;
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>