<template>
  <div class="vx-row">
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
    <div class="vx-col w-full mb-4">
      <vx-card>
        <vs-alert
          :active="!validated"
          color="danger"
          icon-pack="feather"
          icon="icon-info"
        >
          <span>{{ validation_message }}</span>
        </vs-alert>
        <div class="con-upload">
          <div class="con-img-upload">
            <div
              class="img-upload"
              :class="{ 'default--image': image.custom_properties.is_default }"
              v-for="image in product_images"
              :key="`product-image${image.uuid}`"
              v-if="!image.custom_properties.color"
            >
              <vs-button
                style="position: absolute; top: 5px; left: 5px"
                color="success"
                size="small"
                type="filled"
                @click="setAsPrimary(image.uuid)"
                >Set as primary</vs-button
              >
              <button
                type="button"
                class="btn-x-file"
                @click="deleteImage(image.uuid)"
              >
                <i translate="translate" class="material-icons notranslate"
                  >clear</i
                >
              </button>
              <img
                @click="toggleImageAlt(image)"
                :src="image.preview_url"
                style="max-width: 100%; max-height: 100%"
              />
            </div>

            <div class="con-input-upload">
              <input
                type="file"
                accept="image/*"
                ref="product_images"
                multiple="multiple"
                @change="filesUploaded($event)"
              />
              <span class="text-input">Upload Images</span>
              <span class="input-progress" style="width: 0%"></span>
              <button
                type="button"
                title="Upload"
                class="btn-upload-all vs-upload--button-upload"
              >
                <i translate="translate" class="material-icons notranslate"
                  >cloud_upload</i
                >
              </button>
            </div>
          </div>

          <!-- IF COLOR EXISTS -->
          <div v-if="color_variants.length">
            <div class="con-img-upload" v-for="color_variant in color_variants">
              <p style="font-size: 22px">
                <strong>Color:</strong>
                {{ color_variant.color }}
              </p>
              <div
                class="img-upload"
                :class="{
                  'default--image': image.custom_properties.is_default,
                }"
                v-for="image in getVariantProductImages(color_variant.color)"
                :key="`product-image${image.uuid}`"
              >
                <vs-button
                  style="position: absolute; top: 5px; left: 5px"
                  color="success"
                  size="small"
                  type="filled"
                  @click="setAsPrimary(image.uuid, color_variant.color)"
                  >Set as primary</vs-button
                >
                <button
                  type="button"
                  class="btn-x-file"
                  @click="deleteImage(image.uuid)"
                >
                  <i translate="translate" class="material-icons notranslate"
                    >clear</i
                  >
                </button>
                <img
                  :src="image.preview_url"
                  style="max-width: none; max-height: 100%"
                />
              </div>

              <div
                class="con-input-upload"
                v-if="getVariantProductImages(color_variant.color).length < 7"
              >
                <input
                  type="file"
                  accept="image/*"
                  ref="product_images"
                  multiple="multiple"
                  @change="filesUploaded($event, color_variant)"
                />
                <span class="text-input">Upload Images</span>
                <span class="input-progress" style="width: 0%"></span>
                <button
                  type="button"
                  title="Upload"
                  class="btn-upload-all vs-upload--button-upload"
                >
                  <i translate="translate" class="material-icons notranslate"
                    >cloud_upload</i
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>

    <div class="vx-col w-full mb-4">
      <vs-button type="relief" color="primary" @click="$emit('prevTabPlease')"
        >Prev</vs-button
      >
      <vs-button type="relief" color="primary" @click="$emit('nextTabPlease')"
        >Next</vs-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default--image {
  border: solid 3px rgb(56, 161, 56);
  padding: 5px;
}
.add--image-section {
  border: 4px dashed #dadde0 !important;
}
.each--image-section {
  border: 4px solid #dadde0;
  border-radius: 5px;
  width: 100%;

  .preview--images {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
<script>
import _ from "lodash";
export default {
  props: ["productId", "variants", "isadmin"],
  data() {
    return {
      loading_image: false,
      product_id: "",
      product: {},
      validated: true,
      product_images: {},
      validation_message: "",

      //FOR VARIANTS
      color_variants: [],
      alt_text_popup: false,
      image_alt: {},
    };
  },
  mounted() {
    this.product_id = this.productId;
    this.checkColorVariants();
    this.fetchProdcutImages();
  },
  methods: {
    async filesUploaded(event, color_variant = null) {
      let uploaded_files = event.target.files;
      if (!uploaded_files.length) return;
      try {
        this.$vs.loading({
          container: "#loading--container",
        });
        let fd = new FormData();
        for (let i = 0; i < uploaded_files.length; i++) {
          fd.append("files[]", uploaded_files[i]);
        }

        if (color_variant !== null) {
          fd.append("color_variant", color_variant.color);
          fd.append("variant_id", color_variant.variant_id);
        }
        let url = `/api/admin/products/${this.productId}/uploadImages`;
        if (!this.isadmin) {
          url = `/api/vendor/products/${this.productId}/uploadImages`;
        }
        let response = await this.$http.post(url, fd);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchProdcutImages();
        } else {
          this.setValidationMessage(response.data.message);
        }
      } catch (error) {
        this.setValidationMessage(
          "The supported formats are .jpg, .gif, .jpeg, .bmp, .webp. Please check the file(s) again and retry!"
        );
        this.errorNotification("Invalid image format.");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    setValidationMessage(message = null) {
      if (message) {
        this.validation_message = message;
      }
      this.validated = false;
      let context = this;
      setTimeout(function () {
        context.validated = true;
      }, 4000);
    },

    async fetchProdcutImages() {
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let url = `/api/admin/products/${this.productId}/get-product-images`;
        if (!this.isadmin) {
          url = `/api/vendor/products/${this.productId}/get-product-images`;
        }
        let response = await this.$http.get(url);
        this.product_images = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
        this.loading = false;
      }
    },

    async setAsPrimary(image_id, color_variant = null) {
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let payload = {
          color_variant: color_variant,
        };
        let url = `/api/admin/products/${this.productId}/product-image/${image_id}/set-primary`;
        if (!this.isadmin) {
          url = `/api/vendor/products/${this.productId}/product-image/${image_id}/set-primary`;
        }
        let response = await this.$http.post(url, payload);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchProdcutImages();
        }
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    deleteImage(image_id) {
      let context = this;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete image?",
        accept: async () => {
          let url = `/api/admin/products/product-image/${image_id}/delete-image`;
          if (!this.isadmin) {
            url = `/api/vendor/products/product-image/${image_id}/delete-image`;
          }
          let response = await this.$http.delete(url);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchProdcutImages();
          } else {
            context.setValidationMessage(response.data.message);
            this.errorNotification(response.data.message);
          }
        },
      });
    },

    //VARIANTS
    checkColorVariants() {
      // console.log(this.variants)
      this.variants.forEach((element) => {
        let attribute_keys = Object.keys(element.attributes);
        attribute_keys.forEach((attribute_key) => {
          let attribute_name = attribute_key.toLowerCase();
          if (
            attribute_name.includes("color") ||
            attribute_name.includes("colour")
          ) {
            this.color_variants.push({
              variant_id: element.id,
              product_id: element.product_id,
              color: element.attributes[attribute_key],
            });
          }
        });
      });
    },

    toggleImageAlt(image) {
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

    getVariantProductImages(color) {
      if (Object.keys(this.product_images).length) {
        let images = _.filter(this.product_images, function (image) {
          return image.custom_properties["color"] == color;
        });

        return images;
      }

      return [];
    },
  },
};
</script>