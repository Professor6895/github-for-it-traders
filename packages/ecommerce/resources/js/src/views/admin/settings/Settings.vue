<template>
  <div class="vx-row">
    <div class="vx-col sm:w-1/6 w-full mb-2">
      <settings-sidebar></settings-sidebar>
    </div>
    <div class="vx-col sm:w-5/6 mb-2">
      <vx-card id="loading--container" class="vs-con-loading__container">
        <div class="vx-row">
          <div class="vx-col mb-4 w-full">
            <h3 class="mb-2">Order Messaging</h3>
            <vs-alert color="primary" active="true">
              Available Short Codes to use in your messages: <br /><br />

              * {order_id} - Order Invoice Number <br />
              * {user_name} - Full Name Of user<br />
              * {order_total} - Total amount of order<br />
              * {order_url} - Link to check order status
            </vs-alert>
          </div>
          <div class="vx-col w-3/5">
            <div class="vx-row">
              <div class="vx-col w-full mb-3">
                <strong>Order Placed Message</strong>
                <vs-textarea
                  class="w-full"
                  v-model="ecommerce_settings.order_placed_message"
                  name="order_placed_message"
                />
              </div>
              <div class="vx-col w-full mb-3">
                <strong>Order Confirmed Message</strong>
                <vs-textarea
                  class="w-full"
                  v-model="ecommerce_settings.order_confirmed_message"
                  name="order_confirmed_message"
                />
              </div>
              <div class="vx-col w-full mb-3">
                <strong>Order Dispatched Message</strong>
                <vs-textarea
                  class="w-full"
                  v-model="ecommerce_settings.order_dispatched_message"
                  name="order_dispatched_message"
                />
              </div>
              <div class="vx-col w-full mb-3">
                <strong>Order Completed Message</strong>
                <vs-textarea
                  class="w-full"
                  v-model="ecommerce_settings.order_completed_message"
                  name="order_completed_message"
                />
              </div>
              <div class="vx-col w-full mb-3">
                <strong>Order Canceled Message</strong>
                <vs-textarea
                  class="w-full"
                  v-model="ecommerce_settings.order_canceled_message"
                  name="order_canceled_message"
                />
              </div>
            </div>
          </div>
          <div class="vx-col w-2/5">
            <div class="vx-row p-3">
              <div class="vx-col w-full mb-3">
                <h4>Order Email/SMS Message Preview</h4>
              </div>

              <div class="vx-col w-full mb-4">
                <strong>Order Placed Message</strong> <br />
                {{
                  generateOrderMessagePreview(
                    ecommerce_settings.order_placed_message
                  )
                }}
              </div>
              <div class="vx-col w-full mb-4">
                <strong>Order Confirmed Message</strong> <br />
                {{
                  generateOrderMessagePreview(
                    ecommerce_settings.order_confirmed_message
                  )
                }}
              </div>
              <div class="vx-col w-full mb-4">
                <strong>Order Dispatched Message</strong> <br />
                {{
                  generateOrderMessagePreview(
                    ecommerce_settings.order_dispatched_message
                  )
                }}
              </div>
              <div class="vx-col w-full mb-4">
                <strong>Order Completed Message</strong> <br />
                {{
                  generateOrderMessagePreview(
                    ecommerce_settings.order_completed_message
                  )
                }}
              </div>
              <div class="vx-col w-full mb-4">
                <strong>Order Canceled Message</strong> <br />
                {{
                  generateOrderMessagePreview(
                    ecommerce_settings.order_canceled_message
                  )
                }}
              </div>
            </div>
          </div>
          <div class="vx-col w-full">
            <hr />
            <div class="vx-col w-full mt-4 mb-4">
              <strong>Website Per Page Products Count</strong> <br />
              <vs-input
                class="w-full"
                type="number"
                name="api_endpoint"
                v-model="ecommerce_settings.website_per_page_pagination"
              />
            </div>
          </div>
          <div class="vx-col w-full">
            <vs-button
              color="success"
              type="filled"
              size="small"
              @click="saveEcommerceSettings"
              >Save</vs-button
            >
          </div>
        </div>
      </vx-card>

      <vx-card class="mt-2" title="Website Initial Popup">
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-switch
              color="success"
              v-model="ecommerce_settings.initial_popup.enabled"
              vs-value="1"
              class="mt-3"
            >
              <span slot="on">Enabled</span>
              <span slot="off">Disabled</span>
            </vs-switch>
          </div>

          <div
            class="vx-col w-2/3 mt-3"
            v-if="ecommerce_settings.initial_popup.enabled"
          >
            <div class="vx-row">
              <vs-select
                class="vx-col w-1/2"
                label="Show Popup On"
                v-model="ecommerce_settings.initial_popup.interval"
              >
                <vs-select-item
                  :key="`interval${index}`"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in [
                    { text: 'On Every Load', value: 'everytime' },
                    { text: 'Every 1 Minute', value: '1' },
                    { text: 'Every 5 Minutes', value: '5' },
                    { text: 'Every 10 Minutes', value: '10' },
                    { text: 'Every 20 Minutes', value: '20' },
                    { text: 'Every 30 Minutes', value: '30' },
                    { text: 'Every 40 Minutes', value: '40' },
                    { text: 'Every 50 Minutes', value: '50' },
                    { text: 'Every 1 Hour', value: '60' },
                    { text: 'Every 1 & half Hour', value: '90' },
                    { text: 'Every 2 Hours', value: '120' },
                    { text: 'Every 3 Hours', value: '180' },
                    { text: 'Every 4 Hours', value: '240' },
                    { text: 'Every 5 Hours', value: '300' },
                    { text: 'Every 10 Hours', value: '600' },
                    { text: 'Every 12 Hours', value: '720' },
                  ]"
                ></vs-select-item>
              </vs-select>
              <vs-input
                label="Popup Delay (seconds)"
                class="vx-col w-1/2"
                v-model="ecommerce_settings.initial_popup.popup_delay"
                name="order_placed_message"
              />

              <vs-input
                label="URL"
                class="vx-col w-full mt-2 mb-2"
                v-model="ecommerce_settings.initial_popup.link"
                name="link"
              />

              <div class="vx-col w-full mt-4">
                <div
                  class="image-preview-container"
                  v-if="ecommerce_settings.initial_popup.image"
                >
                  <div class="text-right float-right mr-10">
                    <vs-button
                      class="image-remove--button"
                      @click="clearImage"
                      radius
                      size="small"
                      color="danger"
                      type="filled"
                      icon-pack="feather"
                      icon="icon-x"
                    ></vs-button>
                  </div>
                  <img :src="ecommerce_settings.initial_popup.image" alt />
                </div>
                <input
                  type="file"
                  class="hidden"
                  ref="upload_popup_image"
                  @change="popUpImageUploaded"
                  accept="image/*"
                />
                <vs-button
                  color="primary"
                  size="small"
                  @click="$refs.upload_popup_image.click()"
                  type="border"
                  >Upload Logo</vs-button
                >
              </div>
            </div>
          </div>

          <div class="vx-col w-full mt-3">
            <vs-button
              color="success"
              type="filled"
              size="small"
              @click="saveEcommercePopupSetting"
              >Save</vs-button
            >
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import SettingSidebar from "@/views/pages/settings/Sidebar";
import _ from "lodash";
import store from "@/store/store";
import { renderServerErrors, convertObjectToFormData } from "@/utils.js";
export default {
  data() {
    return {
      ecommerce_settings: {
        initial_popup: {},
      },
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
      if (_.has(this.$store.state, "settings.dashboard_settings.ecommerce")) {
        this.ecommerce_settings = _.cloneDeep(
          this.$store.state.settings.dashboard_settings.ecommerce
        );
      }
    },

    async saveEcommerceSettings() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });

      try {
        let paylod = {
          _method: "PATCH",
          settings: this.ecommerce_settings,
        };

        let response = await this.$http.post(
          `/api/admin/settings/ecommerce/update-settings`,
          paylod
        );
        if (response.data.success) {
          store.dispatch("settings/fetchSettings", { once: false });
          this.successNotification(response.data.message);
        }
      } catch (error) {
        console.log(error);
        this.errorNotification("Something went wrong! Please retry!!");
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    generateOrderMessagePreview(message) {
      if (message) {
        message = message.replace("{user_name}", "John Doe");
        message = message.replace("{order_id}", "ORD986555");
        message = message.replace("{order_total}", "15000");
        message = message.replace(
          "{order_url}",
          "https://website.com/user-profile/order-detail?invoice_number=ORD9"
        );
      }
      return message;
    },

    popUpImageUploaded() {
      let file = this.$refs.upload_popup_image.files[0];
      this.ecommerce_settings.initial_popup.image = URL.createObjectURL(file);
    },

    clearImage() {
      this.ecommerce_settings.initial_popup.image = null;
      this.$refs.upload_popup_image.value = "";
    },

    async saveEcommercePopupSetting() {
      try {
        let paylod = {
          enabled: this.ecommerce_settings.initial_popup.enabled,
          popup_delay: this.ecommerce_settings.initial_popup.popup_delay,
          interval: this.ecommerce_settings.initial_popup.interval,
          link: this.ecommerce_settings.initial_popup.link,
        };

        if (
          this.$refs.upload_popup_image &&
          this.$refs.upload_popup_image.files.length
        )
          paylod["image"] = this.$refs.upload_popup_image.files[0];
        // }

        paylod = convertObjectToFormData(paylod);
        let response = await this.$http.post(
          `/api/admin/ecommerce-settings/save-popup-settings`,
          paylod
        );
        if (response.data.success) {
          store.dispatch("settings/fetchSettings", { once: false });
          this.successNotification(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
