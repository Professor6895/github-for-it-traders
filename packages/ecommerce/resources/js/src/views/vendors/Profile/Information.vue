<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="flex items-start flex-col sm:flex-row">
          <img
            :src="avatar_preview"
            v-if="avatar_preview !== ''"
            alt
            class="mr-8 rounded h-24 w-24"
          />
          <img
            v-else
            :src="
              user.avatar && user.avatar !== ''
                ? user.avatar_image.thumb
                : require('@assets/images/default-avatar.png')
            "
            class="mr-8 rounded h-24 w-24"
          />
          <div class="ml-4">
            <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">
              {{ user.name }}
            </p>
            <input
              type="file"
              class="hidden"
              ref="update_avatar_input"
              v-validate="'image|size:1024'"
              accept="image/*"
              name="avatar"
              @change="avatarUploaded"
            />
            <!-- Toggle comment of below buttons as one for actual flow & currently shown is only for demo -->
            <vs-button
              size="small"
              class="mr-4 mb-4"
              @click="$refs.update_avatar_input.click()"
              >Change Avatar</vs-button
            >
            <!-- <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button> -->
          </div>
        </div>
        <span class="text-danger text-sm" v-show="errors.has('avatar')">{{
          errors.first("avatar")
        }}</span>
      </div>
    </div>

    <div class="vx-row mt-4">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          v-model="user.name"
          class="w-full mt-4"
          label="Business Name"
          v-validate="'required'"
          name="name"
        />
        <span class="text-danger text-sm" v-show="errors.has('name')">{{
          errors.first("name")
        }}</span>
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          v-model="user.email"
          class="w-full mt-4"
          label="Email"
          v-validate="'required'"
          name="email"
        />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{
          errors.first("email")
        }}</span>
      </div>
    </div>

    <div class="vx-row mt-4">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          v-model="user.contact_number"
          class="w-full mt-4"
          label="Contact Number"
          v-validate="'required'"
          name="contact_number"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('contact_number')"
          >{{ errors.first("contact_number") }}</span
        >
      </div>

      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          v-model="user.inventory_location"
          class="w-full mt-4"
          label="Inventory Location"
          v-validate="'required'"
          name="inventory_location"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('inventory_location')"
          >{{ errors.first("inventory_location") }}</span
        >
      </div>
      <!-- 
      <div class="vx-col md:w-1/2 w-full mt-4">
        <label for>Date of Birth</label>
        <flat-pickr
          v-model="user.birth_date"
          :config="{ dateFormat: 'Y-m-d', maxDate: new Date() }"
          class="w-full"
          v-validate="'required'"
          name="birth_date"
        />

        <span
          class="text-danger text-sm"
          v-if="errors.has('birth_date')"
        >{{ errors.first('birth_date') }}</span>
      </div> -->
    </div>

    <div class="vx-row mt-4">
      <div class="vx-col w-full">
        <vs-input
          v-model="user.address"
          class="w-full mt-4"
          label="Address"
          v-validate="'required'"
          name="address"
        />
        <span class="text-danger text-sm" v-show="errors.has('address')">{{
          errors.first("address")
        }}</span>
      </div>
    </div>

    <div class="vx-row mt-3">
      <div class="vx-col w-full mb-3">
        <h3>Contact Person Info</h3>
      </div>
      <div class="vx-col mb-3 md:w-1/2 w-full">
       <vs-input
          class="w-full"
          v-model="user.full_name"
          label="Full Name"
          name="full_name"
        />
      </div>
      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          class="w-full"
          v-model="user.contact_person_phone"
          label="Contact"
          name="contact_person_phone"
        />
      </div>

      <div class="vx-col w-full">
        <vs-input
          class="w-full"
          v-model="user.contact_person_address"
          label="Address"
          name="contact_person_address"
        />
      </div>
    </div>
  
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex">
          <vs-button class="mt-2" @click="saveChanges">Save Changes</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  data() {
    return {
      user: {},
      avatar_preview: "",
    };
  },
  mounted() {
    this.loadUser();
  },
  components: {
    flatPickr,
  },
  methods: {
    loadUser() {
      this.user = _.cloneDeep(this.$store.state.AppActiveUser);
    },

    avatarUploaded(input) {
      let file = this.$refs["update_avatar_input"].files[0];
      let reader = new FileReader();
      reader.onload = () => {
        this.$set(this.user, "avatar", reader.result);
        this.avatar_preview = reader.result;
      };
      reader.readAsDataURL(file);
    },

    async saveChanges() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });
        let params = {
          name: this.user.name,
          email: this.user.email,
          birth_date: this.user.birth_date,
          contact: this.user.contact,
          address: this.user.address,
          inventory_location: this.user.inventory_location,
          full_name: this.user.full_name,
          contact_person_phone: this.user.contact_person_phone,
          contact_person_address: this.user.contact_person_address,
          _method: "PATCH",
        };

        if (this.user.avatar && _.startsWith(this.user.avatar, "data:image")) {
          params["avatar"] = this.$refs.update_avatar_input.files[0];
        }

        let payload = convertObjectToFormData(params);

        let response = await this.$http.post(
          "/api/vendor/update-profile",
          payload
        );
        // let writer = response.data.writer
        if (response.data.success) {
          this.$store.commit("UPDATE_USER_INFO", response.data.userInfo, {
            root: true,
          });
          this.successNotification(response.data.message);
        } else {
          this.$vs.notify({
            position: "top-right",
            title: "Error",
            text: "Something went wrong while updating profile!! Please retry",
            color: "danger",
          });
        }
      } catch (error) {
        this.errorNotification(
          "Error while updating profile! Please try again"
        );
      } finally {
        this.loadUser();
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },
    getUserAvatar() {
      // if(_.startsWith(this.user.avatar, "data:image")) {
      //   return this.user.avatar
      // }else if(this.user && this.user.avatar_image.thumb) {
      //   return this.user.avatar_image.thumb
      // }

      return;
    },
  },
};
</script>