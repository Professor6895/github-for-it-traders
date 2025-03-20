<template>
  <div>
    <div class="vx-row">
      <!-- Col 1 -->
      <div class="vx-col w-full md:w-1/2">
        <vs-input
          class="w-full"
          v-model="legal_business_name"
          label="Legal / Business Name"
          icon-no-border
          v-validate="'required'"
          name="legal_business_name"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('legal_business_name')"
          >{{ errors.first("legal_business_name") }}</span
        >

        <vs-input
          class="w-full mt-4"
          v-model="pan_no"
          label="PAN Number"
          icon-no-border
          v-validate="'required'"
          name="pan_no"
        />
        <span class="text-danger text-sm" v-show="errors.has('pan_no')">{{
          errors.first("pan_no")
        }}</span>

        <div class="w-full mt-4">
          <label class="vs-input--label"
            >Upload Business Document (Image)</label
          >
          <div class="image-preview-container" v-if="pan_preview">
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
            <img :src="pan_preview" alt />
          </div>
          <input
            type="file"
            class="hidden"
            name="thumbnail"
            ref="pan_image"
            @change="imageUploaded"
            accept="image/*"
            v-validate="'image|size:1024'"
          />
          <p class="text-danger text-sm mb-3" v-show="errors.has('pan_document')">
            {{ errors.first("pan_document") }}
          </p>
          <br />
          <vs-button
            color="primary"
            type="border"
            size="small"
            @click="$refs.pan_image.click()"
            >Upload Document</vs-button
          >
        </div>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex">
          <vs-button class="mt-2" size="small" @click="savechanges"
            >Save Changes</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { renderServerErrors, convertObjectToFormData } from "@/utils.js";

export default {
  data() {
    return {
      legal_business_name: "",
      pan_no: "",
      pan_document: "",
      pan_preview: "",
    };
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      let user = this.$store.state.AppActiveUser;
      this.legal_business_name = user.legal_business_name;
      this.pan_no = user.pan_no;
      this.pan_preview = user.pan_document_image;
    },
    clearForm() {
      (this.current_password = ""),
        (this.new_password = ""),
        (this.confirm_password = "");
    },

    imageUploaded() {
      let file = this.$refs.pan_image.files[0];
      this.pan_preview = URL.createObjectURL(file);
      this.pan_document = file;
    },
    clearImage() {
      this.pan_document = null;
      this.pan_preview = null;
      this.$refs.pan_image.value = "";
      // this.page.delete_image = true
    },

    async savechanges() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });
        let params = {
          legal_business_name: this.legal_business_name,
          pan_no: this.pan_no,
          pan_document: this.pan_document,
          _method: "PATCH",
        };

        let payload = convertObjectToFormData(params);
        let response = await this.$http.post(
          "/api/vendor/update-business-information",
          payload
        );
        // let writer = response.data.writer
        if (response.data.success) {
          this.$store.commit("UPDATE_USER_INFO", response.data.userInfo, {
            root: true,
          });
          this.$vs.notify({
            title: "success",
            position: "top-right",
            text: response.data.message,
            color: "success",
          });
          setTimeout(function () {
            location.reload();
          }, 1000);
        } else {
          this.errorNotification(
            "Something went wrong while updating security!! Please retry"
          );
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