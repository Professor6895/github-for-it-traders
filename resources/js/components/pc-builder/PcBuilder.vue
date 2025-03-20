<template>
  <div>
    <div
      class="modal fade bd-example-modal-lg theme-modal product--selector-modal"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-large modal-dialog-centered"
        role="document"
      >
        <div class="modal-content p-5">
          <div class="modal-body auth--modal-content">
            <div
              class="text-center"
              v-if="loading_products"
              style="padding: 100px 0px"
            >
              <img
                src="/website/images/loader.gif"
                alt=""
                class="m-auto"
                style="width: 150px"
              />
              <p>Loading Products...</p>
            </div>

            <div v-else>
              <div class="row" v-if="products.length">
                <div
                  class="col-sm-3"
                  v-for="product in products"
                  :key="`product-${product.id}`"
                >
                  <div
                    class="single--product"
                    :class="{
                      selected:
                        selections[currently_selecting] &&
                        selections[currently_selecting].id == product.id,
                    }"
                    @click="selectProduct(product)"
                  >
                    <img
                      :src="product.product_image.thumb"
                      :alt="product.title"
                      class="product-image"
                    />
                    <p>{{ product.name }}</p>
                    <p style="font-weight: bold">
                      Rs. {{ product.discounted_price }}
                    </p>
                    <div class="out-of-stock" v-if="product.quantity == 0">
                      Out of Stock
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" v-else>
                <div class="col-12 m-auto text-center">
                  <img
                    src="/website/images/no_result.png"
                    alt=""
                    style="width: 400px; display: inline-block !important"
                  />
                  <h3>No Results Found!!</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer mt-2">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12 mb-2">
        <h3><strong>BUILD YOUR CUSTOM PC</strong></h3>
      </div>
      <div class="col-sm-8">
        <div class="category--wrapper">
          <div v-if="selections['graphics-cards']">
            <SelectedProduct
              :product="selections['graphics-cards']"
              category="GPU"
            >
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('graphics-cards')"
                ><i class="icon-close"></i></a
            ></SelectedProduct>
          </div>
          <div v-else>
            <span class="category--selection-label"> Select GPU </span>
            <span class="float-right">
              <button
                class="category--selection-button"
                @click="fetchProducts('graphics-cards')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['graphics-cards'] }"
        >
          <div v-if="selections['cpu']">
            <SelectedProduct :product="selections['cpu']" category="CPU">
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('cpu')"
                ><i class="icon-close"></i
              ></a>
            </SelectedProduct>
          </div>
          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('cpu')"
              >Select CPU</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['graphics-cards']"
                class="category--selection-button"
                @click="fetchProducts('cpu')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['cpu'] }"
        >
          <div v-if="selections['motherboards']">
            <SelectedProduct
              :product="selections['motherboards']"
              category="Motherboard"
            >
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('motherboards')"
                ><i class="icon-close"></i
              ></a>
            </SelectedProduct>
          </div>

          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('cpu')"
              >Select Motherboard</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['cpu']"
                class="category--selection-button"
                @click="fetchProducts('motherboards')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['motherboards'] }"
        >
          <div v-if="selections['memory']">
            <SelectedProduct :product="selections['memory']" category="Memory">
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('memory')"
                ><i class="icon-close"></i
              ></a>
            </SelectedProduct>
          </div>
          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('memory')"
              >Select Memory</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['motherboards']"
                class="category--selection-button"
                @click="fetchProducts('memory')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['motherboards'] }"
        >
          <div v-if="selections['storage']">
            <SelectedProduct
              :product="selections['storage']"
              category="Storage"
            >
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('storage')"
                ><i class="icon-close"></i
              ></a>
            </SelectedProduct>
          </div>
          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('storage')"
              >Select Storage</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['motherboards']"
                class="category--selection-button"
                @click="fetchProducts('storage')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['motherboards'] }"
        >
          <div v-if="selections['computer-case']">
            <SelectedProduct
              :product="selections['computer-case']"
              category="Computer Cases"
            >
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('computer-case')"
                ><i class="icon-close"></i
              ></a>
            </SelectedProduct>
          </div>
          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('computer-case')"
              >Select Computer Case</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['motherboards']"
                class="category--selection-button"
                @click="fetchProducts('computer-case')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['motherboards'] }"
        >
          <div v-if="selections['power-supply']">
            <SelectedProduct
              :product="selections['power-supply']"
              category="Power Supply"
            >
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('power-supply')"
                ><i class="icon-close"></i
              ></a>
            </SelectedProduct>
          </div>
          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('power-supply')"
              >Select Power Supply</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['motherboards']"
                class="category--selection-button"
                @click="fetchProducts('power-supply')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <!-- MONITOR -->
        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['motherboards'] }"
        >
          <div v-if="selections['monitors']">
            <SelectedProduct
              :product="selections['monitors']"
              category="Monitor"
            >
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('monitors')"
                ><i class="icon-close"></i
              ></a>
            </SelectedProduct>
          </div>
          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('monitors')"
              >Select Monitor</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['motherboards']"
                class="category--selection-button"
                @click="fetchProducts('monitors')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <!-- Cooling Fans -->
        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['motherboards'] }"
        >
          <div v-if="selections['cooling-fans']">
            <SelectedProduct
              :product="selections['cooling-fans']"
              category="Cooling Fan"
            >
              <a
                href="javascript:void(0)"
                class="icon"
                @click="removeProduct('cooling-fans')"
                ><i class="icon-close"></i
              ></a>
            </SelectedProduct>
          </div>
          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('cooling-fans')"
              >Select Cooling Fan</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['motherboards']"
                class="category--selection-button"
                @click="fetchProducts('cooling-fans')"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>

        <!-- Accessories -->
        <div
          class="category--wrapper mt-3"
          :class="{ disabled: !selections['motherboards'] }"
          v-for="index in accessories_count"
        >
          <div v-if="selections[`accessories-${index}`]">
            <div>
              <SelectedProduct
                :product="selections[`accessories-${index}`]"
                :category="`Accessories ${index}`"
              >
                <a
                  href="javascript:void(0)"
                  class="icon"
                  @click="removeProduct(`accessories-${index}`)"
                  ><i class="icon-close"></i
                ></a>
              </SelectedProduct>
              <div class="row" v-if="index == accessories_count">
                <div class="col-12">
                  <p class="float-right">
                    <a
                      href="javascript:void(0)"
                      @click="accessories_count++"
                      style="margin-botton: 20px"
                      class="float-right"
                      >Add More Accessories</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <span
              class="category--selection-label"
              @click="fetchProducts('accessories', `accessories-${index}`)"
              >Select Accessories {{ index }}</span
            >
            <span class="float-right">
              <button
                :disabled="!selections['motherboards']"
                class="category--selection-button"
                @click="fetchProducts('accessories', `accessories-${index}`)"
              >
                <i class="la la-plus"></i>
              </button>
            </span>
          </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div
          class="card"
          style="border: 1px solid #d5d5d5; border-radius: 10px"
        >
          <div class="card-body mt-2">
            <h4>
              <strong>Total: </strong>
              <span class="float-right">Rs. {{ total_price }}</span>
            </h4>

            <button
              :disabled="!checkEligibility()"
              class="btn btn-primary btn-round btn-shadow"
              @click="addToCart"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="category--wrapper mt-3">
      <p class="font-20" @click="fetchProducts('graphics-cards')">
        Select Motherboard
      </p>
    </div> -->
  </div>
</template>
<style scoped lang="scss">
.category--wrapper {
  border: 1px dashed black;
  width: 100%;
  padding: 15px;

  .category--selection-label {
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
  .category--selection-button {
    border: 0px;
    background: #ff0000;
    color: white;
    font-weight: bold;
    font-size: 19px;
    padding: 8px 14px;
    border-radius: 50%;
  }

  &.disabled {
    border: 1px dashed gray;
    .category--selection-label {
      color: gray;
    }
    .category--selection-button {
      border: 0px;
      background: gray;
      color: white;
    }
  }
}

.out-of-stock {
  color: white;
  position: absolute;
  width: 84%;
  top: 40%;
  text-align: center;
  background: #919191;
  font-size: 18px;
}
.single--product {
  padding: 10px;
  border: 1px solid gainsboro;
  border-radius: 10px;

  cursor: pointer;
  &.selected {
    border: 2px solid black !important;
  }
}
</style>
<script>
import _ from "lodash";
import SelectedProduct from "./SelectedProduct.vue";
export default {
  data() {
    return {
      test: "",
      products: {},

      loading_products: false,
      currently_selecting: "",

      selections: {},
      accessories_count: 1,

      relations: {
        "graphics-cards": ["cpu", "motherboards"],
      },

      required_fields: ["graphics-cards", "cpu", "motherboards"],
    };
  },
  computed: {
    total_price() {
      return _.sum(_.map(this.selections, "discounted_price"));
    },
  },
  mounted() {},
  components: {
    SelectedProduct,
  },
  methods: {
    checkEligibility() {
      let is_eligible = true;
      let context = this;
      this.required_fields.forEach(function (required_) {
        if (!context.selections[required_]) {
          is_eligible = false;
        }
      });

      return is_eligible;
    },
    openProductSelector() {
      $(".product--selector-modal").modal("show");
    },

    removeProduct(category) {
      Vue.delete(this.selections, category);
      if (this.relations[category]) {
        for (let cat_key in this.relations[category]) {
          Vue.delete(this.selections, this.relations[category][cat_key]);
        }
      }
    },

    async fetchProducts(category, currently_selecting = false) {
      try {
        this.loading_products = true;
        if (!currently_selecting) this.currently_selecting = category;
        else this.currently_selecting = currently_selecting;

        let product_category = category;
        let payload = {
          category: category,
        };
        if (Object.keys(this.selections).length) {
          let previous_selections = {};
          for (const key in this.selections) {
            previous_selections[key] = this.selections[key].id;
          }
          payload.previous_selections = JSON.stringify(previous_selections);
        }

        let response = await axios.get(`/api/pc-builder/get-products`, {
          params: payload,
        });

        if (response.data.success) {
          this.products = response.data.products;
          this.openProductSelector();
        }
      } catch (e) {
      } finally {
        this.loading_products = false;
      }
    },

    selectProduct(product) {
      if (product.quantity == 0) {
        return;
      }
      Vue.set(this.selections, this.currently_selecting, product);
      console.log(this.selections);
    },

    async addToCart() {
      try {
        Swal.fire({
          html: `Are you sure you want add all items to the Cart? <br><br> <strong>Total Items: </strong> ${
            Object.keys(this.selections).length
          } <br><strong>Total Price: </strong> Rs. ${this.total_price}`,
          icon: "warning",

          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
        }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire({
              text: "Adding produts to cart.",
              didOpen: () => {
                Swal.showLoading();
              },
            });
            let product_ids = _.map(this.selections, "id");
            let response = await axios.post("/api/pc-builder/add-to-cart", {
              product_ids: JSON.stringify(product_ids),
            });

            if (response.data.success) {
              window.location.href = "/cart";
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>