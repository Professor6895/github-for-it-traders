<template>
  <div class="vs-con-loading__container" id="loading--container">
    <div class="tab-text vx-row">
      <div class="vx-col md:w-2/3 w-full mb-4">
        <vx-card>
          <div class="vx-row">
            <div class="vx-col w-full mb-4">
              <vs-input
                name="name"
                class="w-full"
                label="Vendor Name"
                v-model="vendor.name"
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('name')">{{
                errors.first("name")
              }}</span>
            </div>
            <div class="vx-col md:w-1/2 mb-4">
              <vs-input
                name="email"
                v-model="vendor.email"
                class="w-full"
                type="email"
                label="Email"
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('email')">{{
                errors.first("email")
              }}</span>
            </div>
            <div class="vx-col md:w-1/2 mb-4">
              <vs-input
                name="contact"
                v-model="vendor.contact"
                class="w-full"
                type="contact"
                label="Contact"
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('contact')">{{
                errors.first("contact")
              }}</span>
            </div>
            <div class="vx-col w-full mb-4">
              <vs-input
                name="address"
                v-model="vendor.address"
                class="w-full"
                label="Address"
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('address')">{{
                errors.first("address")
              }}</span>
            </div>
            <div class="vx-col w-full mb-4">
              <vs-input
                name="inventory_location"
                v-model="vendor.inventory_location"
                class="w-full"
                label="Inventory Location"
                v-validate="'required'"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('inventory_location')"
                >{{ errors.first("inventory_location") }}</span
              >
            </div>
            <div class="vx-col w-full mb-4 md:w-1/2">
              <vs-input
                name="pan_no"
                v-model="vendor.pan_no"
                class="w-full"
                label="PAN / VAT Number."
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('pan_no')">{{
                errors.first("pan_no")
              }}</span>
            </div>
            <div class="vx-col w-full mb-4 md:w-1/2">
              <label class="vs-input--label"
                >Status</label
              >
              <vs-switch
                color="success"
                v-model="vendor.status"
                vs-value="1"
                class="mt-3"
              >
                <span slot="on">Enabled</span>
                <span slot="off">Disabled</span>
              </vs-switch>
              <span class="text-danger text-sm" v-if="errors.has('pan_no')">{{
                errors.first("pan_no")
              }}</span>
            </div>
            <div class="vx-col w-full mb-4">
              <label for class="vs-input--label">Description</label>
              <q-editor v-model="vendor.content"></q-editor>
              <span class="text-danger text-sm" v-if="errors.has('content')">{{
                errors.first("content")
              }}</span>
            </div>
          </div>
        </vx-card>
      </div>
      <div class="vx-col md:w-1/3 w-full mb-4">
        <!-- <vx-card title="Avatar image">
          <div class="w-full mb-4">
            <div class="image-preview-container" v-if="avatar_preview">
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
              <img :src="avatar_preview" alt />
            </div>
            <input
              type="file"
              class="hidden"
              name="avatar"
              ref="vendor_avatar_image"
              @change="imageUploaded"
              accept="image/*"
              v-validate="'image|size:1024'"
            />
            <p
              class="text-danger text-sm mb-3"
              v-show="errors.has('avatar')"
            >{{ errors.first('avatar') }}</p>
            <vs-button
              color="primary"
              type="border"
              size="small"
              @click="$refs.vendor_avatar_image.click()"
            >Avatar Image</vs-button>
          </div>
        </vx-card> -->
        <vx-card class="mt-3" title="Contact Person Info">
          <div class="vx-col w-full mb-4">
            <vs-input
              name="full_name"
              v-model="vendor.full_name"
              class="w-full"
              label="Full Name"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('full_name')">{{
              errors.first("full_name")
            }}</span>
          </div>
          <div class="vx-col w-full mb-4">
            <vs-input
              name="contact_person_phone"
              v-model="vendor.contact_person_phone"
              class="w-full"
              label="Contact Number"
              v-validate="'required'"
            />
            <span
              class="text-danger text-sm"
              v-if="errors.has('contact_person_phone')"
              >{{ errors.first("contact_person_phone") }}</span
            >
          </div>
          <div class="vx-col w-full mb-4">
            <vs-input
              name="contact_person_address"
              v-model="vendor.contact_person_address"
              class="w-full"
              label="Address"
              v-validate="'required'"
            />
            <span
              class="text-danger text-sm"
              v-if="errors.has('contact_person_address')"
              >{{ errors.first("contact_person_address") }}</span
            >
          </div>
        </vx-card>
      </div>
      <div class="vx-col w-full">
        <vs-button type="relief" color="primary" @click="saveVendor"
          >Save</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
export default {
  data() {
    return {
      id: null,
      avatar_preview: null,
      vendor: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchVendor();
  },
  methods: {
    async fetchVendor() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(`/api/admin/vendors/${this.id}`);
        if (response.data.success) {
          this.vendor = response.data.data;
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

    async saveVendor() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let params = this.vendor;
        let url = "/api/admin/vendors";
        if (this.id) {
          url = `/api/admin/vendors/${this.id}`;
          params["_method"] = "PATCH";
        }
        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(url, payload);
        this.successNotification(response.data.message);
        return this.$router.push({
          name: "admin-vendors",
        });
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    imageUploaded() {
      let file = this.$refs.vendor_avatar_image.files[0];
      this.avatar_preview = URL.createObjectURL(file);
      this.vendor.avatar = file;
    },
    clearImage() {
      this.vendor.avatar = null;
      this.avatar_preview = null;
      this.$refs.vendor_avatar_image.value = "";
    },
  },
};
</script>