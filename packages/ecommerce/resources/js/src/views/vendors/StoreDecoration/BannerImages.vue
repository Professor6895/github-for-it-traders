<template>
  <div class="vx-row">
    <vs-popup
      title="Add Banner Image"
      :active.sync="banner_image_popup"
      class="vx-row vs-con-loading__container"
      id="banner-loading--container"
    >
      <div class="w-full mb-4">
        <div class="image-preview-container" v-if="banner_image_preview">
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
          <img :src="banner_image_preview" alt />
        </div>
        <input
          type="file"
          class="hidden"
          name="banner_image"
          ref="vendor_banner_image"
          @change="imageUploaded"
          accept="image/*"
          v-validate="'required|image|size:1024'"
        />
        <p class="text-danger text-sm mb-3" v-show="errors.has('banner_image')">
          {{ errors.first("banner_image") }}
        </p>
        <vs-button
          color="primary"
          type="border"
          size="small"
          @click="$refs.vendor_banner_image.click()"
          >Upload Banner Image</vs-button
        >
      </div>

      <div class="w-full">
        <vs-input
          name="link"
          class="w-full"
          label="Link"
          v-model="banner_image.link"
          v-validate="'required'"
        />
        <span class="text-danger text-sm" v-if="errors.has('link')">{{
          errors.first("link")
        }}</span>
      </div>

      <div class="vx-col w-full mt-3">
        <vs-button
          type="relief"
          size="small"
          color="primary"
          @click="saveBannerImage"
          >Save</vs-button
        >
      </div>
    </vs-popup>

    <div class="vx-col w-2/3 mb-4">
      <vx-card title="Banner Images">
        <vs-table stripe :data="banner_images" max-items="40" pagination>
          <template slot="header">
            <vs-button
              color="primary"
              size="small"
              type="border"
              @click="banner_image_popup = true"
              >Add Banner Image</vs-button
            >
          </template>
          <template slot="thead">
            <vs-th>Image</vs-th>
            <vs-th>Link</vs-th>
            <vs-th>Actions</vs-th>
          </template>

          <template slot-scope="{ data }">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td>
                <img
                  :src="tr.original_url"
                  alt=""
                  class="table--image"
                  width="100px"
                />
              </vs-td>
              <vs-td>
                <i>{{ tr.custom_properties.link }}</i>
              </vs-td>

              <vs-td>
                <vs-button
                 @click="deleteImage(tr.uuid)"
                  class="table-action--buttons"
                  radius
                  size="small"
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
  </div>
</template>

<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";

export default {
  data() {
    return {
      banner_images: [],
      banner_image: {},
      banner_image_popup: false,
      banner_image_preview: "",
    };
  },
  mounted() {
    this.fetchBannerImages();
  },
  methods: {
    async fetchBannerImages() {
      try {
        let response = await this.$http.get("/api/vendor/banner-image/get-all");
        this.banner_images = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      }
    },

    async saveBannerImage() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      try {
        this.$vs.loading({
          container: "#banner-loading--container",
        });

        let payload = convertObjectToFormData(this.banner_image);
        let url = `/api/vendor/banner-image/upload`;
        let response = await this.$http.post(url, payload);
        console.log(response.data);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.banner_image_popup = false;
          this.fetchBannerImages();
        }
      } catch (error) {
        console.log(error);
        this.errorNotification("Invalid image format.");
      } finally {
        this.$vs.loading.close("#banner-loading--container > .con-vs-loading");
      }
    },

    imageUploaded() {
      let file = this.$refs.vendor_banner_image.files[0];
      this.banner_image_preview = URL.createObjectURL(file);
      this.banner_image.image = file;
    },
    clearImage() {
      this.banner_image.image = null;
      this.banner_image_preview = null;
      this.$refs.vendor_banner_image.value = "";
    },
    deleteImage(image_id) {
      let context = this;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete image?",
        accept: async () => {
       
          let  url = `/api/vendor/banner-image/${image_id}/delete-image`;
          let response = await this.$http.delete(url);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchBannerImages();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    banner_image_popup(val) {
      if (!val) {
        this.banner_image_preview = "";
        this.banner_image = {};
      }
    },
  },
};
</script>