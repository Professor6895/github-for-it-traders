<template>
  <div class="vs-con-loading__container" id="loading--container">
    <div class="tab-text vx-row">
      <div class="vx-col lg:w-2/3 w-full mb-4">
        <vx-card>
          <div class="vx-row">
            <div class="vx-col w-full md:w-1/2 mb-4">
              <vs-input
                name="title"
                class="w-full"
                label="Title"
                v-model="discount.title"
                v-validate="'required'"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('title')"
              >{{ errors.first('title') }}</span>
            </div>
            <div class="vx-col w-full md:w-1/2 mb-4">
              <vs-input
                name="code"
                v-model="discount.code"
                class="w-full"
                label="Coupon Code"
                v-validate="'required'"
              />
              <span class="text-danger text-sm" v-if="errors.has('code')">{{ errors.first('code') }}</span>
            </div>
            <div class="vx-col w-full md:w-1/2 mb-4">
              <label for>Start Date</label>
              <flat-pickr
                v-model="discount.start_date"
                v-validate="'required'"
                :config="{ dateFormat: 'Y-m-d H:i', enableTime:true }"
                class="w-full"
                name="start_date"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('start_date')"
              >{{ errors.first('start_date') }}</span>
            </div>

            <div class="vx-col w-full md:w-1/2 mb-4">
              <label for>End Date</label>
              <flat-pickr
                v-model="discount.end_date"
                v-validate="'required'"
                :config="{ dateFormat: 'Y-m-d H:i', enableTime:true }"
                class="w-full"
                name="end_date"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('end_date')"
              >{{ errors.first('end_date') }}</span>
            </div>

            <div class="vx-col w-full md:w-1/2 mb-4">
              <vs-select
                name="discount_type"
                class="w-full"
                label="Discount Type"
                v-validate="'required'"
                v-model="discount.discount_type"
              >
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="item,index in [{value:1, text: 'Money Value'},  {value:2, text: 'Percentage Value'}]"
                />
              </vs-select>
              <span
                class="text-danger text-sm"
                v-if="errors.has('discount_type')"
              >{{ errors.first('discount_type') }}</span>
            </div>

            <div class="vx-col w-full md:w-1/2 mb-4">
              <vs-input
                name="discount_value"
                v-model="discount.discount_value"
                class="w-full"
                label="Discount Value"
                type="number"
                v-validate="'required'"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('discount_value')"
              >{{ errors.first('discount_value') }}</span>
            </div>

            <div class="vx-col w-full md:w-1/2 mb-4">
              <vs-input
                name="minimum_value"
                v-model="discount.minimum_value"
                class="w-full"
                label="Minimum value to apply"
                type="number"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('minimum_value')"
              >{{ errors.first('minimum_value') }}</span>
            </div>

            <div class="vx-col w-full md:w-1/2 mb-4">
              <vs-input
                name="usage_per_uer"
                v-model="discount.usage_per_user"
                class="w-full"
                label="Usage per user"
                type="number"
              />
              <span
                class="text-danger text-sm"
                v-if="errors.has('usage_per_uer')"
              >{{ errors.first('usage_per_uer') }}</span>
            </div>
            <!-- <div class="vx-col w-full mb-4">
              <label for class="vs-input--label">Content</label>
              <q-editor v-model="blogCategory.content"></q-editor>
              <span
                class="text-danger text-sm"
                v-if="errors.has('content')"
              >{{ errors.first('content') }}</span>
            </div>-->
          </div>
        </vx-card>
      </div>
      <div class="vx-col w-full">
        <vs-button type="relief" color="primary" @click="saveDiscount">Save</vs-button>
      </div>
    </div>
  </div>
</template>
<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  data() {
    return {
      id: null,
      discount: {},
    };
  },
  components: {
    flatPickr,
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchDiscount();
  },
  methods: {
    async fetchDiscount() {
      if (!this.id) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let response = await this.$http.get(`/api/admin/coupon-discounts/${this.id}`);
        if (response.data.success) {
          this.discount = response.data.data;
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

    async saveDiscount() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let params = {
          title: this.discount.title,
          code: this.discount.code,
          start_date: this.discount.start_date,
          end_date: this.discount.end_date,
          discount_type: this.discount.discount_type,
          discount_value: this.discount.discount_value,
          minimum_value: this.discount.minimum_value,
          usage_per_user: this.discount.usage_per_user,
        };

        let url = "/api/admin/coupon-discounts";
        if (this.id) {
          url = `/api/admin/coupon-discounts/${this.id}`;
          params["_method"] = "PATCH";
        }

        let response = await this.$http.post(url, params);
        if (response.data.success) {
          this.successNotification(response.data.message);
          return this.$router.push({
            name: "admin-coupon-discounts-list"
          });
        } else {
          this.errorNotification("Something went wrong! Please reload the page and retry!!");
        }
        // if (!this.id) {
        //   return this.$router.push({
        //     name: "admin-page-detail",
        //     params: { id: response.data.page.id },
        //   });
        // }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    imageUploaded() {
      let file = this.$refs.page_thumbnail_image.files[0];
      this.thumbnail_preview = URL.createObjectURL(file);
      this.page.thumbnail = file;
    },
    clearImage() {
      this.page.thumbnail = null;
      this.thumbnail_preview = null;
      this.$refs.page_thumbnail_image.value = "";
    },
  },
};
</script>