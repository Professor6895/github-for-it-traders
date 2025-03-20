<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-4">
      <vx-card>
        <div class="vx-row">
          <div class="vx-col w-full md:w-1/2">
            <vs-input
              type="number"
              name="price"
              class="w-full"
              label="Product Price"
              v-model="product.price"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('price')">{{
              errors.first("price")
            }}</span>
          </div>
          <div class="vx-col w-full md:w-1/2">
            <vs-input
              type="number"
              name="original_price"
              class="w-full"
              label="Price Compare with"
              v-model="product.original_price"
              description-text="Leave it empty if no compare price"
            />
            <span
              class="text-danger text-sm"
              v-if="errors.has('original_price')"
              >{{ errors.first("original_price") }}</span
            >
          </div>

          <div class="vx-col w-full">
            <vs-input
              name="quantity"
              type="number"
              class="w-full mb-3"
              label="Quantity"
              v-model="product.quantity"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-if="errors.has('quantity')">{{
              errors.first("quantity")
            }}</span>
          </div>

          <div
            class="vx-col md:w-1/2"
            v-if="product.price === 0 || product.price === '0'"
          >
            <label for class="vs-input--label mt-3"
              >Available for Pre Order?</label
            >
            <vs-switch
              color="success"
              v-model="product.pre_order"
              vs-value="1"
              class="mt-3"
            >
              <span slot="on">Yes</span>
              <span slot="off">No</span>
            </vs-switch>
          </div>

          <div
            class="vx-col md:w-1/2"
            v-if="product.price === 0 || product.price === '0'"
          >
            <vs-input
              name="pre_order_price"
              type="number"
              class="w-full mb-3"
              label="Pre Order Price"
              v-model="product.pre_order_price"
              v-validate="'required'"
            />
            <span
              class="text-danger text-sm"
              v-if="errors.has('pre_order_price')"
              >{{ errors.first("pre_order_price") }}</span
            >
          </div>
        </div>
      </vx-card>
    </div>

    <div class="vx-col w-full mb-4">
      <vs-button type="relief" color="primary" @click="$emit('prevTabPlease')"
        >Prev</vs-button
      >
      <vs-button type="relief" color="primary" @click="savePriceDetail"
        >Save & Next</vs-button
      >
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { renderServerErrors } from "@/utils.js";

export default {
  props: ["productDetail", "isadmin"],
  data() {
    return {
      product_id: "",
      product: {},
    };
  },
  mounted() {
    if (Object.keys(this.productDetail).length) {
      this.product = this.productDetail;
      this.product_id = this.productDetail.id;
    }
  },
  components: {
    "v-select": vSelect,
  },
  methods: {
    async savePriceDetail() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      try {
        this.$vs.loading({
          container: "#loading--container",
        });

        let params = {
          price: this.product.price,
          original_price: this.product.original_price,
          quantity: this.product.quantity,
          pre_order : this.product.pre_order, 
          pre_order_price: this.product.pre_order_price,
          _method: "PATCH",
        };
        let url = `/api/admin/products/${this.product_id}/update-price`
        if(!this.isadmin) {
          url = `/api/vendor/products/${this.product_id}/update-price`
        }
        let response = await this.$http.post(
          url,
          params
        );
        if (response.data.success) {
          this.successNotification("Product detail successfully added!");
          this.$emit("nextTabPlease");
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