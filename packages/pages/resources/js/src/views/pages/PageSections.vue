<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card class="card-padding-5" v-else>
      <vs-table search stripe :data="page_sections" max-items="40" pagination>
        <template slot="header">
          <vs-button
            color="primary"
            size="small"
            type="border"
            @click="sectionPopup = true"
          >Add Section</vs-button>
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
              <vs-button
                class="table-action--buttons"
                radius
                color="warning"
                type="filled"
                @click="editSection(tr)"
                size="small"
                icon="create"
              ></vs-button>
              <vs-button
                class="table-action--buttons"
                radius
                size="small"
                @click="deletePageSection(tr.id)"
                color="danger"
                type="filled"
                icon="delete"
              ></vs-button>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>

    <vs-popup title="Page Section" :active.sync="sectionPopup" class="popup-lg">
      <form id="page-section--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-full mb-4">
            <vs-input
              name="title"
              class="w-full"
              label="Section Title"
              v-model="page_section.title"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('title')">{{ errors.first('title') }}</span>
          </div>

          <div class="vx-col w-full mb-4">
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
              ref="page_section_thumbnail_image"
              @change="imageUploaded"
              accept="image/*"
              v-validate="'image|size:1024'"
            />
            <p
              class="text-danger text-sm mb-3"
              v-show="errors.has('thumbnail')"
            >{{ errors.first('thumbnail') }}</p>
            <vs-button
              color="primary"
              type="border"
              size="small"
              @click="$refs.page_section_thumbnail_image.click()"
            >Thumbnail Image</vs-button>
          </div>

           <div class="vx-col w-full mb-4">
            <vs-input
              name="excerpt"
              class="w-full"
              label="Excerpt"
              v-model="page_section.excerpt"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('excerpt')">{{ errors.first('excerpt') }}</span>
          </div>

          <div class="vx-col w-full">
            <q-editor v-model="page_section.content"></q-editor>
          </div>
        </div>

        <div class="flex justify-between flex-row-reverse">
          <vs-button class="mt-4 float-right" type="border" @click="saveSection">Save</vs-button>
        </div>
      </form>
    </vs-popup>
  </div>
</template>

<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import _ from "lodash";
export default {
  props: ["pageid"],
  data() {
    return {
      loading: true,
      page_sections: [],
      page_section: {},
      sectionPopup: false,
      thumbnail_preview: ""
    };
  }, 
  mounted() {
    this.fetchPageSections();
  },
  methods: {
    async fetchPageSections() {
      this.loading = true;
      try {
        let response = await this.$http.get(
          `/api/admin/page/${this.pageid}/sections`
        );
        this.page_sections = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    editSection(section) {
      this.page_section = _.cloneDeep(section);
      this.thumbnail_preview = section.thumbnail_image.thumb;
      this.sectionPopup = true;
    },

    async saveSection() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#page-section--container"
        });

        let params = {
          title: this.page_section.title,
          content: this.page_section.content,
          excerpt: this.page_section.excerpt,
          thumbnail: this.page_section.thumbnail
        };

        let url = `/api/admin/page/${this.pageid}/sections`;
        if (this.page_section.id) {
          url = `/api/admin/page/${this.pageid}/sections/${this.page_section.id}`;
          params["_method"] = "PATCH";
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        this.successNotification(response.data.message);
        this.sectionPopup = false;
        this.fetchPageSections();
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#page-section--container > .con-vs-loading");
      }
    },

    imageUploaded() {
      let file = this.$refs.page_section_thumbnail_image.files[0];
      this.thumbnail_preview = URL.createObjectURL(file);
      this.page_section.thumbnail = file;
    },
    clearImage() {
      this.page_section.thumbnail = null;
      this.thumbnail_preview = null;
      this.$refs.page_section_thumbnail_image.value = "";
    },

    deletePageSection(section_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete page section?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/page/${this.pageid}/sections/${section_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchPageSections();
          } else {
            this.errorNotification(response.data.message);
          }
        }
      });
    }
  },
  watch: {
    sectionPopup(val) {
      if (!val) {
        this.page_section = {};
        this.thumbnail_preview = "";
        this.errors.clear();
      }
    }
  }
};
</script>