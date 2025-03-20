<template>
  <div>
    <div class="vx-row">
      <div class="vx-col md:w-1/3">
        <vx-card title="FAQs Filters">
          <div class="vx-col w-full mb-4">
            <vs-select
              label="Type"
              v-model="filters.type"
              class="w-full"
              name="filter_type"
              v-validate="'required'"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in [
                  { text: 'Brand', value: 'brand' },
                  { text: 'Category', value: 'category' },
                ]"
              />
            </vs-select>
            <span
              class="text-danger text-sm"
              v-show="errors.has('filter_type ')"
              >{{ errors.first("filter_type") }}</span
            >
          </div>

          <div class="vx-col w-full mb-4" v-if="filters.type == 'brand'">
            <label for class="vs-input--label">Brand</label>
            <v-select
              :options="brands"
              class="mb-3"
              label="name"
              value="id"
              v-model="filters.brand_id"
              :reduce="(brand) => brand.id"
              name="brand_id"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-show="errors.has('brand_id')">{{
              errors.first("brand_id")
            }}</span>
          </div>

          <div class="vx-col w-full mb-4" v-if="filters.type == 'category'">
            <label for class="vs-input--label">Category</label>
            <v-select
              :options="dropdown_categories"
              class="mb-3"
              label="title"
              value="id"
              v-model="filters.category_id"
              :reduce="(category) => category.id"
              name="category_id"
              v-validate="'required'"
            />
            <span
              class="text-danger text-sm"
              v-show="errors.has('category_id')"
              >{{ errors.first("category_id") }}</span
            >
          </div>

          <div class="vx-col w-full">
            <vs-button type="relief" color="primary" @click="fetchFaqs"
              >Apply Filter</vs-button
            >
          </div>
        </vx-card>
      </div>
      <div class="vx-col md:w-2/3">
        <vx-card title="FAQs">
          <div class="mt-5 mb-5 pt-4 pb-4" v-if="!filtered">
            <div class="text-center">
              <h2>Please apply filter to view FAQs</h2>
            </div>
          </div>
          <div v-else class="vx-row">
            <div class="vx-col w-full">
              <vs-button
                type="relief"
                class="float-right"
                color="primary"
                size="small"
                @click="faq_popup = true"
                >Add FAQ</vs-button
              >
            </div>

            <div
              class="vx-col w-full text-center mt-5 mb-5"
              v-if="faqs.length == 0"
            >
              <h2>NO FAQs ADDED!!</h2>
            </div>
            <div v-else class="vx-col w-full mt-3">
              <div
                v-for="faq in faqs"
                style="
                  padding: 15px;
                  border: 1px solid #aaa;
                  border-radius: 15px;
                  margin-bottom: 15px;
                "
              >
                <div class="float-right">
                  <vs-button
                    size="small"
                    @click="editFaq(faq)"
                    color="warning"
                    type="relief"
                  >
                    Edit
                  </vs-button>
                  <vs-button
                    size="small"
                    @click="deleteFaq(faq)"
                    color="danger"
                    type="relief"
                  >
                    Delete
                  </vs-button>
                </div>
                <p><strong>Q: </strong> {{ faq.question }}</p>
                <p>
                  <strong style="display: inline-block">A: </strong>
                  <span
                    style="display: inline-block"
                    v-html="faq.answer"
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </vx-card>
      </div>
    </div>

    <vs-popup title="FAQ" :active.sync="faq_popup" class="popup-lg">
      <vs-input
        class="w-full"
        name="question"
        label="Question"
        v-model="faq.question"
      />
      <p>
        <span class="text-danger text-sm" v-if="errors.has('question')">{{
          errors.first("question")
        }}</span>
      </p>

      <div class="vx-col mt-4">
        <label for class="vs-input--label">Answer</label>
        <q-editor v-model="faq.answer"></q-editor>
      </div>
      <vs-button class="mr-3 mt-5" @click="saveFaq">Submit</vs-button>
    </vs-popup>
  </div>
</template>

<script>
import { convertObjectToFormData, renderServerErrors } from "@/utils.js";
import vSelect from "vue-select";
export default {
  data() {
    return {
      filtered: false,
      filters: {
        type: "",
      },
      brands: [],
      dropdown_categories: [],
      faq: {},
      faq_popup: false,
      faqs: [],
    };
  },
  components: {
    "v-select": vSelect,
  },
  mounted() {
    this.fetchCategoryDropdown();
    this.fetchBrands();
  },
  methods: {
    async fetchCategoryDropdown() {
      try {
        let url = `/api/admin/product-categories-dropdown`;
        let response = await this.$http.get(url);
        this.dropdown_categories = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async fetchBrands() {
      try {
        let url = `/api/admin/product-brands/get-dropdown`;
        let response = await this.$http.get(url);
        this.brands = response.data.data;
      } catch {
        this.errorNotification(
          "Something went wrong while fetching albums!! Please retry"
        );
      }
    },

    async fetchFaqs() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      try {
        let url = `/api/admin/faqs`;

        let response = await this.$http.get(url, {
          params: this.filters,
        });
        this.faqs = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.filtered = true;
      }
    },

    async saveFaq() {
      try {
        let payload = {
          question: this.faq.question,
          answer: this.faq.answer,
          type: this.filters.type,
          brand_id: this.filters.brand_id,
          category_id: this.filters.category_id,
        };

        let url = `/api/admin/store-faq`;
        if (this.faq.id) {
          url = `/api/admin/store-faq/${this.faq.id}`;
          payload["_method"] = "PATCH";
        }
        let response = await this.$http.post(url, payload);
        if (response.data.success) {
          this.successNotification(response.data.message);
          this.fetchFaqs();
          this.faq_popup = false;
        }
      } catch (error) {
        renderServerErrors(this.errors, error);
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
      }
    },

    editFaq(faq) {
      this.faq = _.cloneDeep(faq);
      this.faq_popup = true;
    },

    async deleteFaq(faq) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete the FAQ?",
        accept: async () => {
          let response = await this.$http.delete(`/api/admin/faqs/${faq.id}/delete`);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.fetchFaqs();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {
    faq_popup(val) {
      if (!val) {
        this.faq = {};
        this.errors.clear();
      }
    },
  },
};
</script>