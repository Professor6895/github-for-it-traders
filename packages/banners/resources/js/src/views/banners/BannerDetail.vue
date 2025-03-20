<template>
  <div>
    <vx-card class="md:w-2/3 w-full vs-con-loading__container" id="loading--container">
      <!-- <vx-card> -->
      <div class="vx-row">
        <div class="vx-col w-full mb-4">
          <vs-input
            name="name"
            class="w-full"
            label="Name"
            v-model="banner.name"
            v-validate="'required'"
          />
          <span class="text-danger text-sm" v-if="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
      </div>
      <div class="flex justify-between flex-row-reverse">
        <vs-button class="mt-4 float-right" size="small" type="border" @click="saveBanner">Save</vs-button>

        <vs-button
          v-if="id && checkPermission('delete-banner')"
          class="mt-4 float-right"
          size="small"
          color="danger"
          @click="deleteBanner"
        >Delete</vs-button>
      </div>
      <!-- </vx-card> -->
    </vx-card>
    <div class="vx-col md:w-2/3 w-full mt-5" v-if="id && checkPermission('manage-banner-images')">
      <BannerImages :bannerid="id" />
    </div>
  </div>
</template>

<script>
import BannerImages from "./BannerImages";
export default {
  data() {
    return {
      id: null,
      banner: {},
    };
  },
  components: {
    BannerImages,
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchBanner();
  },
  methods: {
    async fetchBanner() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(`/api/admin/banners/${this.id}`);
        if (response.data.success) {
          this.banner = response.data.data;
        }
      } catch (error) {
        this.errorNotification(
          "Something went wrong! Please disable you adblocker if it is turned on and retry!!"
        );
        if (error.response.status === 404) {
          return this.$router.push({ name: "page-error-404" });
        }
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    async saveBanner() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let params = {
          name: this.banner.name,
        };

        let url = "/api/admin/banners";
        if (this.id) {
          url = `/api/admin/banners/${this.id}`;
          params["_method"] = "PATCH";
        }

        let response = await this.$http.post(url, params);
        if (response.data.success === true) {
          this.successNotification(response.data.message);
          if (!this.id) {
            return this.$router.push({
              name: "admin-banner-detail",
              params: { id: response.data.banner.id },
            });
          } else {
            this.fetchBanner();
          }
        } else {
          this.errorNotification(response.data.message);
        }
      } catch (error) {
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    deleteBanner() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete banner?",
        accept: async () => {
          let response = await this.$http.delete(
            `/api/admin/banners/${this.id}`
          );
          if (response.data.success) {
            this.successNotification(response.data.message);
            return this.$router.push({
              name: "admin-banners",
            });
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
};
</script>