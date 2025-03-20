<template>
  <div class="vs-con-loading__container" id="loading--container">
    <vs-tabs>
      <vs-tab label="Page">
        <div class="tab-text vx-row">
          <div class="vx-col md:w-2/3 w-full mb-4">
            <vx-card>
              <div class="vx-row">
                <div class="vx-col w-full mb-4">
                  <vs-input
                    name="title"
                    class="w-full"
                    label="Title"
                    v-model="page.title"
                    v-validate="'required'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-if="errors.has('title')"
                  >{{ errors.first('title') }}</span>
                </div>
                <div class="vx-col w-full mb-4">
                  <vs-input
                    name="excerpt"
                    v-model="page.excerpt"
                    class="w-full"
                    label="Excerpt (Short Description)"
                    v-validate="'required'"
                  />
                  <span
                    class="text-danger text-sm"
                    v-if="errors.has('excerpt')"
                  >{{ errors.first('excerpt') }}</span>
                </div>
                <div class="vx-col w-full mb-4">
                  <label for class="vs-input--label">Content</label>
                  <q-editor v-model="page.content"></q-editor> 
                  <span
                    class="text-danger text-sm"
                    v-if="errors.has('content')"
                  >{{ errors.first('content') }}</span>
                </div>
              </div>
            </vx-card>
          </div>
          <div class="vx-col md:w-1/3 w-full mb-4">
            <vx-card title="Page Thumbnail">
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
                  <img :src="thumbnail_preview" alt />
                </div>
                <input
                  type="file"
                  class="hidden"
                  name="thumbnail"
                  ref="page_thumbnail_image"
                  @change="imageUploaded"
                  accept="image/*"
                  v-validate="'ext:jpeg,jpg,png,webp,gif|size:1024'"
                />
                <p
                  class="text-danger text-sm mb-3"
                  v-show="errors.has('thumbnail')"
                >{{ errors.first('thumbnail') }}</p>
                <vs-button
                  color="primary"
                  type="border"
                  size="small"
                  @click="$refs.page_thumbnail_image.click()"
                >Thumbnail Image</vs-button>
              </div>
            </vx-card>
            <vx-card class="mt-3" title="SEO Meta">
              <MetaFields v-model="page.meta" small></MetaFields>
            </vx-card>
          </div>
          <div class="vx-col w-full">
            <vs-button type="relief" color="primary" @click="savePage">Save</vs-button>
          </div>
        </div>
      </vs-tab>
      <vs-tab label="Sections" :disabled="!id"  v-if="checkPermission('page-sections-manage')">
        <div class="tab-text">
          <PageSections v-if="id" :pageid="id"/>
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import PageSections from './PageSections'
import MetaFields from '@/components/Meta'
export default {
  data() {
    return {
      id: null,
      thumbnail_preview: null,
      page: {
        meta: {}
      }
    };
  },
  components: {
    PageSections,
    MetaFields
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchPage();
  },
  methods: {
    async fetchPage() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container"
      });
      try {
        let response = await this.$http.get(`/api/admin/pages/${this.id}`);
        if (response.data.success) {
          this.page = response.data.data;
          this.thumbnail_preview = this.page.thumbnail_image.thumb;
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
        if (error.response.status === 404) {
          return this.$router.push({ name: "page-error-404" });
        }
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async savePage() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container"
        });

        let params = {
          title: this.page.title,
          content: this.page.content,
          excerpt: this.page.excerpt,
          thumbnail: this.page.thumbnail,
          meta: JSON.stringify(this.page.meta),
          delete_image: true
        };

        let url = "/api/admin/pages";
        if (this.id) {
          url = `/api/admin/pages/${this.id}`;
          params["_method"] = "PATCH";
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        this.successNotification(response.data.message);
        if (!this.id) {
          return this.$router.push({
            name: "admin-page-detail",
            params: { id: response.data.page.id }
          });
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    imageUploaded() {
      let file = this.$refs.page_thumbnail_image.files[0];
      this.thumbnail_preview = URL.createObjectURL(file);
      this.page.thumbnail = file;
    },
    clearImage() {
      this.page.thumbnail = null;
      this.thumbnail_preview = null;
      this.$refs.page_thumbnail_image.value = "";
      this.page.delete_image = true
    }
  }
};
</script>