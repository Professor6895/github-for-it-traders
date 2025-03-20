<template>
  <div class="vs-con-loading__container" id="loading--container">
    <vs-popup title="Image Alt" :active.sync="alt_text_popup" class="popup-lg">
      <div id="loading--container" class="vs-con-loading__container">
        <vs-input
          class="w-full"
          name="text"
          label="Alt Text"
          v-validate="'required'"
          v-model="image_alt.text"
        />
        <p>
          <span class="text-danger text-sm" v-if="errors.has('text')">{{
            errors.first("text")
          }}</span>
        </p>
        <vs-button class="mr-3 mt-5" @click="saveImageAlt">Submit</vs-button>
      </div>
    </vs-popup>
    <div class="tab-text vx-row">
      <div class="vx-col md:w-2/3 w-full mb-4">
        <vx-card>
          <div class="vx-row">
            <div class="vx-col w-full mb-4">
              <vs-input
                name="title"
                class="w-full"
                label="Title"
                v-model="blog.title"
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('title')">{{
                errors.first("title")
              }}</span>
            </div>
            <div class="vx-col w-full mb-4" v-if="id">
              <vs-input
                name="slug"
                class="w-full"
                label="Slug"
                v-model="blog.slug"
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('slug')">{{
                errors.first("slug")
              }}</span>
            </div>
            <div class="vx-col md:w-1/2 mb-4">
              <label for class="vs-input--label">Category</label>
              <v-select
                :options="categories"
                label="title"
                value="id"
                v-model="blog.category_id"
                :reduce="(category) => category.id"
                name="category_id"
              />
              <span
                class="text-danger text-sm"
                v-show="errors.has('category_id')"
                >{{ errors.first("category_id") }}</span
              >
            </div>

            <div class="vx-col md:w-1/2 mb-4">
              <vs-input
                name="author"
                class="w-full"
                label="Author"
                v-model="blog.author"
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('author')">{{
                errors.first("author")
              }}</span>
            </div>

            <div class="vx-col w-full mb-4">
              <vs-input
                name="short_desc"
                v-model="blog.short_desc"
                class="w-full"
                label="Excerpt (Short Description)"
                v-validate="'required'"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('short_desc')"
                >{{ errors.first("short_desc") }}</span
              >
            </div>

            <div class="vx-col md:w-1/3 mb-4">
              <label for>Publish Date</label>
              <flat-pickr
                v-model="blog.publish_date"
                :config="{ enableTime: true }"
                class="w-full"
                name="publish_date"
              />
            </div>

            <div class="vx-col md:w-1/3 mb-4">
              <label for class="vs-input--label">Status</label>
              <vs-switch
                color="success"
                v-model="blog.status"
                vs-value="1"
                class="mt-3"
              >
                <span slot="on">Enabled</span>
                <span slot="off">Disabled</span>
              </vs-switch>
            </div>

            <div class="vx-col md:w-1/3 mb-4">
              <label for class="vs-input--label">Is Featured?</label>
              <vs-switch
                color="success"
                v-model="blog.is_featured"
                vs-value="1"
                class="mt-3"
              >
                <span slot="on">Yes</span>
                <span slot="off">No</span>
              </vs-switch>
            </div>

            <div class="vx-col w-full mb-4">
              <label for class="vs-input--label">Content</label>
              <q-editor v-model="blog.content"></q-editor>
              <span class="text-danger text-sm" v-if="errors.has('content')">{{
                errors.first("content")
              }}</span>
            </div>
          </div>
        </vx-card>
      </div>
      <div class="vx-col md:w-1/3 w-full mb-4">
        <vx-card title="Thumbnail Image">
          <div class="w-full mb-4">
            <div class="image-preview-container" v-if="thumbnail_preview">
              <div class="text-right float-right mr-10">
                <vs-button
                  @click="clearImage"
                  class="image-remove--button"
                  radius
                  size="small"
                  color="danger"
                  type="filled"
                  icon-pack="feather"
                  icon="icon-x"
                ></vs-button>
              </div>
              <img :src="thumbnail_preview" alt @click="toggleImageAlt" />
            </div>
            <input
              type="file"
              class="hidden"
              name="thumbnail"
              ref="blog_thumbnail_image"
              @change="imageUploaded"
              accept="image/*"
              v-validate="'ext:jpeg,jpg,png,webp,gif|size:1024'"
            />
            <p
              class="text-danger text-sm mb-3"
              v-show="errors.has('thumbnail')"
            >
              {{ errors.first("thumbnail") }}
            </p>
            <vs-button
              color="primary"
              type="border"
              size="small"
              @click="$refs.blog_thumbnail_image.click()"
              >Thumbnail Image</vs-button
            >
          </div>
        </vx-card>
        <vx-card class="mt-3" title="SEO Meta">
          <MetaFields v-model="blog.meta" small></MetaFields>
        </vx-card>
      </div>
      <div class="vx-col w-full">
        <vs-button type="relief" color="primary" @click="saveBlog"
          >Save</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import MetaFields from "@/components/Meta";
import flatPickr from "vue-flatpickr-component";
import vSelect from "vue-select";
import "flatpickr/dist/flatpickr.css";
import moment from "moment";

export default {
  data() {
    return {
      id: null,
      thumbnail_preview: null,
      blog: {
        publish_date: this.$options.filters.date_format(Date.now()),
        meta: {},
      },
      categories: [],
      image_alt: {},
      alt_text_popup: false,
    };
  },
  components: {
    MetaFields,
    flatPickr,
    "v-select": vSelect,
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchCategories();
    this.fetchBlog();
  },
  methods: {
    async fetchCategories() {
      try {
        let response = await this.$http.get(
          `/api/admin/blog-categories/get-dropdown`
        );
        this.categories = response.data.data;
      } catch {
        this.errorNotification(
          "Something went wrong while fetching albums!! Please retry"
        );
      }
    },

    async fetchBlog() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(`/api/admin/blogs/${this.id}`);
        if (response.data.success) {
          this.blog = response.data.data;

          this.thumbnail_preview = this.blog.thumbnail_image.thumb;
        }
      } catch (error) {
        console.log(error);
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "page-error-404" });
        }
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async saveBlog() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let params = {
          title: this.blog.title,
          slug: this.blog.slug,
          category_id: this.blog.category_id,
          content: this.blog.content,
          short_desc: this.blog.short_desc,
          thumbnail: this.blog.thumbnail,
          author: this.blog.author,
          status: this.blog.status,
          is_featured: this.blog.is_featured,
          publish_date: this.blog.publish_date,
          meta: JSON.stringify(this.blog.meta),
        };

        let url = "/api/admin/blogs";
        if (this.id) {
          url = `/api/admin/blogs/${this.id}`;
          params["_method"] = "PATCH";
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        this.successNotification(response.data.message);
        return this.$router.push({
          name: "admin-blogs",
        });
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    imageUploaded() {
      let file = this.$refs.blog_thumbnail_image.files[0];
      this.thumbnail_preview = URL.createObjectURL(file);
      this.blog.thumbnail = file;
    },
    clearImage() {
      this.blog.thumbnail = null;
      this.thumbnail_preview = null;
      this.$refs.blog_thumbnail_image.value = "";
    },

    toggleImageAlt() {
      let image = this.blog.media[0];
      if (image.custom_properties.alt_text) {
        this.image_alt.text = image.custom_properties.alt_text;
      } else {
        this.image_alt.text = "";
      }
      this.image_alt.image_id = image.uuid;
      this.alt_text_popup = true;
    },

    async saveImageAlt() {
      try {
        let response = await this.$http.post(
          "/api/admin/media/update-image-alt",
          this.image_alt
        );
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchProdcutImages();
        }
      } catch (e) {
      } finally {
        this.alt_text_popup = false;
      }
    },
  },
};
</script>