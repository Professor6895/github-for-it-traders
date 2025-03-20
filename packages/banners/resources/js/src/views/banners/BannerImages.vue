<template>
  <div>
    <pageLoader v-if="loading"></pageLoader>
    <vx-card
      class="card-padding-5 vs-con-loading__container"
      title="Banner Images"
      v-else
      id="images-loading--container"
    >
      <vs-table search stripe :data="banner_images" max-items="40" pagination>
        <template slot="header">
          <strong>Total :</strong>
          &nbsp;{{ banner_images.length }} &nbsp; &nbsp;
          <vs-button color="primary" size="small" type="border" @click="imagePopup = true">Add Image</vs-button>
        </template>
        <template slot="thead">
          <vs-th>Image</vs-th>
          <vs-th sort-key="start_date">Visible from</vs-th>
          <vs-th sort-key="end_date">Visible to</vs-th>
          <vs-th>Actions</vs-th>
        </template>

        <template slot-scope="{data}">
          <draggable v-model="banner_images" tag="tbody" @change="sortImages">
            <tr class="tr-values" :key="tr.id" v-for="tr in data">
              <vs-td>
                <img :src="tr.banner_image.thumb" alt width="120px" />
              </vs-td>
              <vs-td>
                <small v-if="tr.start_date">{{ tr.start_date | date_format('MMMM Do YYYY') }}</small>
                <small v-else>----</small>
              </vs-td>
              <vs-td>
                <small v-if="tr.end_date">{{ tr.end_date | date_format('MMMM Do YYYY') }}</small>
                <small v-else>----</small>
              </vs-td>
              <vs-td>
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="warning"
                  @click="editImage(tr)"
                  type="filled"
                  icon="create"
                ></vs-button>
                <vs-button
                  class="table-action--buttons"
                  radius
                  color="danger"
                  type="filled"
                  @click="deleteBannerImage(tr.id)"
                  icon="delete"
                ></vs-button>
              </vs-td>
            </tr>
          </draggable>
        </template>
      </vs-table>
    </vx-card>

    <vs-popup title="Banner Image" :active.sync="imagePopup" class="popup-lg">
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
              v-model="bannerimage.link"
            />
            <span class="text-danger text-sm" v-if="errors.has('link')">{{ errors.first('link') }}</span>
          </div>

          <div class="vx-col w-1/2 mt-4">
            <label for>Visible from</label>
            <flat-pickr
              v-model="bannerimage.start_date"
              :config="{ dateFormat: 'Y-m-d'  }"
              class="w-full"
              name="start_date"
            />
          </div>
          <div class="vx-col w-1/2 mt-4">
            <label for>Visible to</label>
            <flat-pickr
              v-model="bannerimage.end_date"
              :config="{ dateFormat: 'Y-m-d' }"
              class="w-full"
              name="end_date"
            />
          </div>
          <div class="vx-col w-full mt-4">
            <label for>Content</label>
            <!-- <vs-textarea v-model="bannerimage.content"></vs-textarea> -->
             <q-editor v-model="bannerimage.content"></q-editor> 
          </div>
        </div>
        <div class="flex justify-between flex-row-reverse">
          <vs-button class="mt-4 float-right" type="border" @click="saveBannerImage">Save</vs-button>
        </div>
      </form>
    </vs-popup>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import _ from "lodash";
import draggable from "vuedraggable";
export default {
  props: ["bannerid"],
  data() {
    return {
      loading: true,
      imagePopup: false,
      banner_images: [],
      bannerimage: {},
      image_preview: null,
    };
  },
  components: {
    flatPickr,
    draggable,
  },
  mounted() {
    this.fetchBannerImages();
  },
  methods: {
    async fetchBannerImages() {
      this.loading = true;
      try {
        let response = await this.$http.get(
          `/api/admin/banner/${this.bannerid}/images`
        );
        this.banner_images = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveBannerImage() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#banner-image--container",
        });

        let params = {
          image: this.bannerimage.image,
          link: this.bannerimage.link,
          start_date: this.bannerimage.start_date,
          end_date: this.bannerimage.end_date,
          content: this.bannerimage.content,
        };

        let url = `/api/admin/banner/${this.bannerid}/images`;
        if (this.bannerimage.id) {
          url = `/api/admin/banner/${this.bannerid}/images/${this.bannerimage.id}`;
          params["_method"] = "PATCH";
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        this.successNotification(response.data.message);
        this.imagePopup = false;
        this.fetchBannerImages();
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#banner-image--container > .con-vs-loading");
      }
    },

    editImage(image) {
      this.bannerimage = _.cloneDeep(image);
      this.image_preview = this.bannerimage.banner_image.thumb;
      this.imagePopup = true;
    },

    imageUploaded() {
      let file = this.$refs.banner_image.files[0];
      this.image_preview = URL.createObjectURL(file);
      this.bannerimage.image = file;
    },
    clearImage() {
      this.bannerimage.image = null;
      this.image_preview = null;
      this.$refs.banner_image.value = "";
    },
    deleteBannerImage(image_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete banner image?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/banner/${this.bannerid}/images/${image_id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchBannerImages();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },

    async sortImages() {
      try {
        this.$vs.loading({
          container: "#images-loading--container"
        });
        let order = [];
        this.banner_images.map(function (image, index) {
          order.push({
            image_id: image.id,
            order: index + 1,
          });
        });

        let response = await this.$http.post(
          `/api/admin/banner/${this.bannerid}/images/sort-images`,
          { payload: order }
        );

        if (response.data.success) this.successNotification(response.data.message);
      } catch (error) {
        console.log(error)
      } finally {
        this.$vs.loading.close("#images-loading--container > .con-vs-loading");
      }
    },
  },
  watch: {
    imagePopup(val) {
      if (!val) {
        this.image_preview = null;
        this.bannerimage = {};
        this.errors.clear();
      }
    },
  },
};
</script>