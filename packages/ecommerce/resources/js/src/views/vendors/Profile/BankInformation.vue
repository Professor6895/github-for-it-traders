<template>
  <div>
    <div class="vx-row">
      <!-- Col 1 -->
      <div class="vx-col w-full md:w-1/2">

        <vs-input
          class="w-full"
          v-model="bank_name"
          label="Bank Name"
          icon-no-border
          v-validate="'required'"
          name="bank_name"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('bank_name')"
          >{{ errors.first("bank_name") }}</span
        >

         <vs-input
          class="w-full mt-3"
          v-model="bank_branch"
          label="Bank Branch"
          icon-no-border
          v-validate="'required'"
          name="bank_branch"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('bank_branch')"
          >{{ errors.first("bank_branch") }}</span
        >
        
        <vs-input
          class="w-full mt-3"
          v-model="bank_account_name"
          label="Account Name"
          icon-no-border
          v-validate="'required'"
          name="bank_account_name"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('bank_account_name')"
          >{{ errors.first("bank_account_name") }}</span
        >

        <vs-input
          class="w-full mt-3"
          v-model="bank_account_number"
          label="Account Number"
          icon-no-border
          v-validate="'required'"
          name="bank_account_number"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('bank_account_name')"
          >{{ errors.first("bank_account_name") }}</span
        >

        <div class="w-full mt-4">
          <label class="vs-input--label"
            >Upload Cheque Copy (Image)</label
          >
          <div class="image-preview-container" v-if="cheque_preview">
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
            <img :src="cheque_preview" alt />
          </div>
          <input
            type="file"
            class="hidden"
            name="thumbnail"
            ref="cheque_image"
            @change="imageUploaded"
            accept="image/*"
            v-validate="'image|size:1024'"
          />
          <p class="text-danger text-sm mb-3" v-show="errors.has('thumbnail')">
            {{ errors.first("thumbnail") }}
          </p>
          <br />
          <vs-button
            color="primary"
            type="border"
            size="small"
            @click="$refs.cheque_image.click()"
            >Upload Cheque Image</vs-button
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
      bank_account_name: "",
      bank_account_number: "",
      bank_name: "",
      bank_branch: "",
      bank_cheque_copy: "",
      cheque_preview: ''
    };
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      let user = this.$store.state.AppActiveUser;
      this.bank_account_name = user.bank_account_name;
      this.bank_account_number = user.bank_account_number;
      this.bank_name = user.bank_name;
      this.bank_branch = user.bank_branch;
      this.cheque_preview = user.bank_cheque_image;
    },

    imageUploaded() {
      let file = this.$refs.cheque_image.files[0];
      this.cheque_preview = URL.createObjectURL(file);
      this.bank_cheque_copy = file;
    },

    clearImage() {
      this.bank_cheque_copy = null;
      this.cheque_preview = null;
      this.$refs.cheque_image.value = "";
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
          bank_account_name: this.bank_account_name,
          bank_account_number: this.bank_account_number,
          bank_name: this.bank_name,
          bank_branch: this.bank_branch,
          bank_cheque_copy: this.bank_cheque_copy,
          _method: "PATCH",
        };

        let payload = convertObjectToFormData(params);
        let response = await this.$http.post(
          "/api/vendor/update-bank-information",
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