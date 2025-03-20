<template>
  <div class="vx-row">
    <div class="vx-col md:w-3/12 w-full mb-2">
      <settings-sidebar></settings-sidebar>
    </div>
    <div class="vx-col md:w-8/12 mb-2">
      <vx-card id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 mb-4">
            <div class="image-preview-container" v-if="core_settings.logo">
              <div class="text-right float-right mr-10">
                <vs-button
                  class="image-remove--button"
                  @click="clearImage('upload_logo_image', 'logo')"
                  radius
                  size="small"
                  color="danger"
                  type="filled"
                  icon-pack="feather"
                  icon="icon-x"
                ></vs-button>
              </div>
              <img :src="core_settings.logo" alt />
            </div>
            <input
              type="file"
              class="hidden"
              ref="upload_logo_image"
              @change="imageUploaded('upload_logo_image', 'logo')"
              accept="image/*"
            />
            <vs-button
              color="primary"
              size="small"
              @click="$refs.upload_logo_image.click()"
              type="border"
              >Upload Logo</vs-button
            >
          </div>
          <div class="vx-col sm:w-1/3 mb-4">
            <div
              class="image-preview-container"
              v-if="core_settings.login_image"
            >
              <div class="text-right float-right mr-10">
                <vs-button
                  @click="clearImage('upload_login_image', 'login_image')"
                  class="image-remove--button"
                  radius
                  size="small"
                  color="danger"
                  type="filled"
                  icon-pack="feather"
                  icon="icon-x"
                ></vs-button>
              </div>
              <img :src="core_settings.login_image" alt />
            </div>
            <input
              type="file"
              class="hidden"
              ref="upload_login_image"
              @change="imageUploaded('upload_login_image', 'login_image')"
              accept="image/*"
            />
            <vs-button
              color="primary"
              type="border"
              size="small"
              @click="$refs.upload_login_image.click()"
              >Login Image</vs-button
            >
          </div>
          <div class="vx-col sm:w-1/3 mb-4">
            <div class="image-preview-container" v-if="core_settings.favicon">
              <div class="text-right float-right mr-10">
                <vs-button
                  @click="clearImage('favicon_image', 'favicon')"
                  class="image-remove--button"
                  radius
                  size="small"
                  color="danger"
                  type="filled"
                  icon-pack="feather"
                  icon="icon-x"
                ></vs-button>
              </div>
              <img :src="core_settings.favicon" alt />
            </div>
            <input
              type="file"
              class="hidden"
              ref="favicon_image"
              @change="imageUploaded('favicon_image', 'favicon')"
              accept="image/*"
            />
            <vs-button
              color="primary"
              type="border"
              size="small"
              @click="$refs.favicon_image.click()"
              >Favicon</vs-button
            >
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              label-placeholder="Brand Name"
              v-model="core_settings.brand_name"
              v-validate="'required'"
              name="brand_name"
            />
            <span class="text-danger text-sm" v-if="errors.has('brand_name')">{{
              errors.first("brand_name")
            }}</span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input
              class="w-full"
              name="brand_acronym"
              label-placeholder="Brand Acronym"
              v-model="core_settings.brand_acronym"
              v-validate="'required'"
            />
            <span
              class="text-danger text-sm"
              v-if="errors.has('brand_acronym')"
              >{{ errors.first("brand_acronym") }}</span
            >
          </div>
        </div>

        <div class="vx-row mb-4">
          <div class="vx-col w-full">
            <label for class="vs-input--label">Description</label>
            <q-editor v-model="core_settings.description"></q-editor>
          </div>
        </div>

        <div class="vx-row mt-4 mb-4">
          <div class="vx-col w-full">
            <h4>Contact Details</h4>
          </div>
          <div class="vx-col md:w-1/2 mt-2">
            <vs-input
              class="w-full"
              v-model="core_settings.email"
              label="Email"
              name="email"
            />
          </div>

          <div class="vx-col md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              v-model="core_settings.contact_number"
              label="Contact Number"
              name="contact_number"
            />
          </div>

          <div class="vx-col w-full mt-4">
            <vs-input
              class="w-full"
              v-model="core_settings.address"
              label="Address"
              name="address"
            />
          </div>
        </div>

        <div class="vx-row mt-4">
          <div class="vx-col w-full">
            <h4>Social Information</h4>
          </div>

          <div class="vx-col md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              v-model="core_settings.social_facebook"
              label="Facebook"
              name="social_facebook"
            />
          </div>

          <div class="vx-col md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              v-model="core_settings.social_twitter"
              label="Twitter"
              name="social_twitter"
            />
          </div>

          <div class="vx-col md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              v-model="core_settings.social_instagram"
              label="Instagram"
              name="social_instagram"
            />
          </div>

          <div class="vx-col md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              v-model="core_settings.social_linkedin"
              label="Linkedin"
              name="social_linkedin"
            />
          </div>

          <div class="vx-col md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              v-model="core_settings.social_google"
              label="Google"
              name="social_google"
            />
          </div>
          <div class="vx-col md:w-1/2 mt-4">
            <vs-input
              class="w-full"
              v-model="core_settings.social_youtube"
              label="Youtube"
              name="social_youtube"
            />
          </div>
        </div>

        <div class="vx-row mt-4 mb-4">
          <div class="vx-col w-full">
            <h4><vs-icon icon="public" class="text-2xl"></vs-icon>SEO</h4>
          </div>
          <div class="vx-col md:w-1/2 w-full mt-3">
            <vs-input
              class="w-full"
              v-model="core_settings.meta_title"
              label="Meta Title"
              name="meta_title"
            />
          </div>
          <div class="vx-col md:w-1/2 w-full">
            <vs-input
              class="w-full"
              v-model="core_settings.meta_keywords"
              label="Meta Keywords"
              name="meta_keywords"
            />
          </div>
          <div class="vx-col w-full mt-2">
            <vs-input
              class="w-full"
              v-model="core_settings.meta_description"
              label="Meta Description"
              name="meta_description"
            />
          </div>
        </div>
        <vs-button color="success" type="filled" @click="saveCoreSettings"
          >Success</vs-button
        >
      </vx-card>
    </div>
  </div>
</template>

<script>
import SettingSidebar from "./Sidebar";
import _ from "lodash";
import { renderServerErrors, convertObjectToFormData } from "@/utils.js";
import store from "@/store/store";
export default {
  data() {
    return {
      core_settings: {},
    };
  },
  components: {
    "settings-sidebar": SettingSidebar,
  },
  computed: {
    state() {
      return this.$store.state.settings;
    },
  },
  mounted() {
    this.initComponent();
  },
  watch: {
    state: {
      deep: true,
      handler() {
        this.initComponent();
      },
    },
  },
  methods: {
    initComponent() {
      console.log(this.$store.state.settings.dashboard_settings);
      if (_.has(this.$store.state, "settings.dashboard_settings.core")) {
        this.core_settings = _.cloneDeep(
          this.$store.state.settings.dashboard_settings.core
        );
      }
    },

    imageUploaded(ref, name) {
      let file = this.$refs[ref].files[0];
      let reader = new FileReader();
      reader.onload = () => this.$set(this.core_settings, name, reader.result);
      reader.readAsDataURL(file);
    },

    clearImage(ref, name) {
      this.core_settings[name] = null;
      this.$refs[ref].value = "";
    },

    async saveCoreSettings() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let paylod = {
          brand_name: this.core_settings.brand_name,
          brand_acronym: this.core_settings.brand_acronym,
          description: this.core_settings.description,
          address: this.core_settings.address,
          email: this.core_settings.email,
          contact_number: this.core_settings.contact_number,
          social_facebook: this.core_settings.social_facebook,
          social_instagram: this.core_settings.social_instagram,
          social_twitter: this.core_settings.social_twitter,
          social_linkedin: this.core_settings.social_linkedin,
          social_google: this.core_settings.social_google,
          social_youtube: this.core_settings.social_youtube,
          meta_title: this.core_settings.meta_title,
          meta_description: this.core_settings.meta_description,
          meta_keywords: this.core_settings.meta_keywords,
          _method: "PATCH",
        };
        if (
          this.core_settings.logo &&
          _.startsWith(this.core_settings.logo, "data:image")
        ) {
          paylod["logo"] = this.$refs.upload_logo_image.files[0];
        }
        if (
          this.core_settings.login_image &&
          _.startsWith(this.core_settings.login_image, "data:image")
        ) {
          paylod["login_image"] = this.$refs.upload_login_image.files[0];
        }
        if (
          this.core_settings.favicon &&
          _.startsWith(this.core_settings.favicon, "data:image")
        ) {
          paylod["favicon"] = this.$refs.favicon_image.files[0];
        }

        paylod = convertObjectToFormData(paylod);
        let response = await this.$http.post(
          `/api/admin/settings/core/update-settings`,
          paylod
        );
        if (response.data.success) {
          store.dispatch("settings/fetchSettings", { once: false });
          this.successNotification(response.data.message);
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
  },
};
</script>