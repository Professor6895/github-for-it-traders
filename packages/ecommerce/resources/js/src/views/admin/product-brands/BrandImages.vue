<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card
      class="card-padding-5 vs-con-loading__container"
      title="Brand Images"
      v-else
      id="images-loading--container"
    >
      <vs-table search stripe :data="images" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ images.length }} &nbsp; &nbsp;
          <vs-button color="primary" size="small" type="border" @click="imagePopup = true">Add Image</vs-button>
        </template>
        <template slot="thead">
          <vs-th>Image</vs-th>
          <vs-th>Link</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{data}">
            <tr class="tr-values" :key="tr.id" v-for="tr in data">
              <vs-td>
                <img :src="tr.image_preview" alt width="200px" />
              </vs-td>
              <vs-td>
                {{ tr.custom_properties.link }}
              </vs-td>
              <vs-td>
                <vs-button
                  class="table-action--buttons"
                  radius
                  @click="deleteImage(tr.id)"
                  color="danger"
                  type="filled"
                  icon="delete"
                ></vs-button>
              </vs-td>
            </tr>
        </template>
      </vs-table>
    </vx-card>

    <vs-popup title="Brand Image" :active.sync="imagePopup" class="popup-lg">
      <form id="banner-image--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="image-preview-container mt-4" v-if="image_preview">
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
              <img :src="image_preview" alt />
            </div>
            <input
              type="file"
              class="hidden"
              name="image"
              ref="banner_image"
              @change="imageUploaded"
              accept="image/*"
              v-validate="'image|size:2048'"
            />
            <p
              class="text-danger text-sm mb-3"
              v-show="errors.has('image')"
            >{{ errors.first('image') }}</p>
            <vs-button
              color="primary"
              type="border"
              size="small"
              @click="$refs.banner_image.click()"
            >Upload Image</vs-button>
          </div>

          <div class="vx-col w-full">
            <vs-input
              name="link"
              class="w-full mt-4"
              label="Banner Link"
              v-model="image.link"
            />
            <span class="text-danger text-sm" v-if="errors.has('link')">{{ errors.first('link') }}</span>
          </div>
        </div>
        <div class="flex justify-between flex-row-reverse">
          <vs-button class="mt-4 float-right" type="border" @click="saveImage">Save</vs-button>
        </div>
      </form>
    </vs-popup>
  </div>
</template>

<script> 
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import _ from "lodash"; 
export default {
  data() {
    return {
      brand_id:'',
      loading: false,
      imagePopup: false,
      images: [],
      image: {},
      image_preview: null,
    };
  }, 
  mounted() {
    this.brand_id = this.$route.params.id;
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      this.loading = true;
      try {
        let response = await this.$http.get(
          `/api/admin/product-brands/${this.brand_id}/images`
        );
        this.images = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveImage() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#banner-image--container",
        });

        let params = {
          image: this.image.image,
          link: this.image.link,
        };

        let url = `/api/admin/product-brands/${this.brand_id}/images`;
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        this.successNotification(response.data.message);
        this.imagePopup = false;
        this.fetchImages();
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#banner-image--container > .con-vs-loading");
      }
    }, 

    imageUploaded() {
      let file = this.$refs.banner_image.files[0];
      this.image_preview = URL.createObjectURL(file);
      this.image.image = file;
    },
    clearImage() {
      this.image.image = null;
      this.image_preview = null;
      this.$refs.banner_image.value = "";
    },
    deleteImage(image_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete the image?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/product-brands/${this.brand_id}/images/${image_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchImages();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    imagePopup(val) {
      if (!val) {
        this.image_preview = null;
        this.image = {};
        this.errors.clear();
      }
    },
  },
};
</script>s