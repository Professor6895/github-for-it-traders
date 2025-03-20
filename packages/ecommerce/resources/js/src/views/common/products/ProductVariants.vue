<template>
  <div>
    <div v-if="productDetail.attribute_class_id" class="vx-row">
      <div class="vx-col w-full md:w-1/4">
        <vx-card class title="Create Variant">
          <div class="vx-col w-full" v-if="form_error">
            <vs-alert class="mb-2" active="true" color="danger">{{
              error_message
            }}</vs-alert>
          </div>
          <div
            class="vx-col w-full"
            v-for="variantable in variantables"
            :key="`variantable-attr-${variantable.id}`"
          >
            <label for class="vs-input--label">{{ variantable.name }}</label>
            <v-select
              :options="variantable.values"
              class="mb-3 w-full"
              v-model="variant.attributes[variantable.name]"
              name="vendor_id"
            />
          </div>

          <div class="vx-col w-full">
            <vs-input
              name="price"
              class="w-full mb-3"
              type="number"
              label="Price"
              v-model="variant.price"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-show="errors.has('price')">{{
              errors.first("price")
            }}</span>
          </div>

          <div class="vx-col w-full">
            <vs-input
              name="quantity"
              type="number"
              class="w-full"
              label="Quantity"
              v-model="variant.quantity"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-show="errors.has('quantity')">{{
              errors.first("quantity")
            }}</span>
          </div>

          <div class="vx-col w-full mt-3">
            <vs-button type="relief" color="primary" @click="saveVariant"
              >Save Variant</vs-button
            >
          </div>
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-3/4">
        <vx-card title="Available Variants">
          <div
            class="text-center"
            style="padding: 70px 0px"
            v-if="!variants.length"
          >
            <h4>No variant added yet</h4>
          </div>

          <vs-table v-else stripe :data="variants">
            <template slot="header">
              <strong>Total :</strong>
              &nbsp;{{ variants.length }}
            </template>
            <template slot="thead">
              <vs-th>Attributes</vs-th>
              <vs-th>Quantity</vs-th>
              <vs-th>Price</vs-th>
              <vs-th>Actions</vs-th>
            </template>

            <template slot-scope="{ data }">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td>
                  <p v-for="(attrib_, key) in tr.attributes" class="mb-1">
                    <strong>{{ key }}:</strong>
                    <span>{{ attrib_ }}</span>
                  </p>
                </vs-td>
                <vs-td>{{ tr.quantity }}</vs-td>
                <vs-td>Rs. {{ tr.price }}</vs-td>
                <vs-td>
                  <vs-button
                    class="table-action--buttons"
                    radius
                    @click="editVariant(tr)"
                    color="warning"
                    type="filled"
                    size="small"
                    icon="create"
                  ></vs-button>
                  <vs-button
                    class="table-action--buttons"
                    radius
                    size="small"
                    @click="deleteVariant(tr.id)"
                    color="danger"
                    type="filled"
                    icon="delete"
                  ></vs-button>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
      </div>
    </div>

    <div v-else>
      <vx-card class="vx-col w-full text-center" style="padding: 60px 0px">
        <h4>
          Please select product attribute class from
          <strong>Attributes</strong> section first !!
        </h4>
      </vx-card>
    </div>
    <div class="vx-col w-full mt-4">
      <vs-button type="relief" color="primary" @click="$emit('prevTabPlease')"
        >Prev</vs-button
      >
      <vs-button type="relief" color="primary" @click="$emit('nextTabPlease')"
        >Next</vs-button
      >
    </div>
  </div>
</template> 

<script>
import vSelect from "vue-select";

export default {
  props: ["productDetail", "isadmin"],
  data() {
    return {
      variants: [],
      form_error: false,
      error_message: "",
      variantables: [],
      variant: {
        attributes: {},
      },
    };
  },
  components: {
    "v-select": vSelect,
  },
  mounted() {
    this.getVariantableAttributes();
    this.variants = this.productDetail.variants;
    // this.getProductVariants();
  },
  methods: {
    async getVariantableAttributes() {
      try {
        let url = `/api/admin/product-class/${this.productDetail.attribute_class_id}/variantable-attributes`;
        if (!this.isadmin) {
          url = `/api/vendor/product-class/${this.productDetail.attribute_class_id}/variantable-attributes`;
        }
        let response = await this.$http.get(url);
        this.variantables = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async getProductVariants() {
      this.loading = true;
      try {
        let url = `/api/admin/product/${this.productDetail.id}/variants`;
        if (!this.isadmin) {
          url = `/api/vendor/product/${this.productDetail.id}/variants`;
        }
        let response = await this.$http.get(url);
        this.variants = response.data.data;
      } catch (error) {
        this.errorNotification("Something went wrong!! Please retry");
      } finally {
        this.loading = false;
      }
    },

    async saveVariant() {
      this.form_error = false;
      if (!Object.keys(this.variant.attributes).length) {
        this.form_error = true;
        this.error_message =
          "Please select at least one attribute from the list";
        return;
      }
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$vs.loading({
        container: "#loading--container",
      });
      try {
        let payload = {
          price: this.variant.price,
          quantity: this.variant.quantity,
          attributes: _.pickBy(this.variant.attributes, _.identity),
        };

        if (this.variant.id) {
          payload["id"] = this.variant.id;
        }
        let url = `/api/admin/product/${this.productDetail.id}/variants`;
        if (!this.isadmin) {
          url = `/api/vendor/product/${this.productDetail.id}/variants`;
        }
        let response = await this.$http.post(url, payload);

        if (response.data.success) {
          // this.form_error = true;
          // this.error_message = response.data.message;
          // this.getProductVariants();
          this.variant = {
            attributes: {},
          };
          this.$emit("refreshProduct");
        } else {
          this.form_error = true;
          this.error_message = response.data.message;
          this.errorNotification(response.data.message);
        }
      } catch (error) {
      } finally {
        this.$vs.loading.close("#loading--container > .con-vs-loading");
      }
    },

    editVariant(variant_detail) {
      this.variant = _.cloneDeep(variant_detail);
    },

    deleteVariant(variant_id) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure you want to delete this variant?",
        accept: async () => {
          let url =  `/api/admin/product/${this.productDetail.id}/variants/${variant_id}`;

          if (!this.isadmin) {
            url = `/api/vendor/product/${this.productDetail.id}/variants/${variant_id}`;
          }
          let response = await this.$http.delete(url);
          if (response.data.success) {
            this.successNotification(response.data.message);
            this.getProductVariants();
          } else {
            this.errorNotification(response.data.message);
          }
        },
      });
    },
  },
  watch: {},
};
</script>