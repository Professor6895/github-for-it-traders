<template>
  <aside class="col-lg-3 order-lg-first">
    <div class="sidebar sidebar-shop">
      <div class="widget widget-collapsible">
        <h3 class="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-1"
            role="button"
            aria-expanded="true"
            aria-controls="widget-1"
          >
            Category
          </a>
        </h3>
        <!-- End .widget-title -->

        <div class="collapse show" id="widget-1">
          <div class="widget-body">
            <div class="filter-items filter-items-count">
              <cat-tree
                :data="categories_tree"
                :options="treeOptions"
                v-if="!category_loading"
              >
                <span class="tree-text" slot-scope="{ node }">
                  <template>
                    <a :href="`/category/${node.id}`" class="text-black">
                      {{ node.text }}
                    </a>
                  </template>
                </span>
              </cat-tree>
            </div>
            <!-- End .filter-items -->
          </div>
          <!-- End .widget-body -->
        </div>
        <!-- End .collapse -->
      </div>
      <!-- End .widget -->

      <div
        class="widget widget-collapsible"
        v-if="sidebarFilters.brands.length"
      >
        <h3 class="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-4"
            role="button"
            aria-expanded="true"
            aria-controls="widget-4"
          >
            Brand
          </a>
        </h3>
        <!-- End .widget-title -->

        <div class="collapse show" id="widget-4">
          <div class="widget-body">
            <div class="filter-items">
              <div
                class="filter-item"
                v-for="brandFilter in sidebarFilters.brands"
                :key="`brand-filter-${brandFilter.slug}`"
              >
                <input
                  type="radio"
                  v-model="applied_filters.brand"
                  @change="applyFilter"
                  :value="brandFilter.slug"
                  :id="`brand-filter-${brandFilter.slug}`"
                />
                <label
                  class="form-check-label"
                  :for="`brand-filter-${brandFilter.slug}`"
                >
                  &nbsp;&nbsp;{{ brandFilter.name }}
                </label>
                <!-- End .custom-checkbox -->
              </div>
              <!-- End .filter-item -->
            </div>
            <!-- End .filter-items -->
          </div>
          <!-- End .widget-body -->
        </div>
        <!-- End .collapse -->
      </div>
      <!-- End .widget -->

      <div class="widget widget-collapsible">
        <h3 class="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-5"
            role="button"
            aria-expanded="true"
            aria-controls="widget-5"
          >
            Price
          </a>
        </h3>
        <!-- End .widget-title -->

        <div class="collapse show" id="widget-5">
          <div class="widget-body">
            <div class="filter-price">
              <div class="filter-price-text">
                <!-- Price Range: -->
                <span id="filter-price-range"></span>
              </div>
              <vue-slider
                class="mt-4"
                tooltip="always"
                v-model="range"
                :min="10"
                :max="100000"
                :enable-cross="false"
                @drag-end="priceUpdated"
              ></vue-slider>
              <div class="mt-3">
                <div class="d-inline-block">
                  NPR:
                  <input
                    type="text"
                    style="width: 100px"
                    v-model="range[0]"
                    disabled
                  />
                </div>
                <div class="float-right">
                  NPR:
                  <input
                    type="text"
                    style="width: 100px"
                    v-model="range[1]"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End .collapse -->
      </div>

      <div
        class="widget widget-collapsible"
        v-for="filterable in sidebarFilters.filterables"
        :key="`filterable-${filterable.name}`"
      >
        <h3 class="widget-title">
          <a
            data-toggle="collapse"
            :href="`#widget-${filterable.name}`"
            role="button"
            aria-expanded="true"
            aria-controls="widget-5"
          >
            {{ filterable.name }}
          </a>
        </h3>

        <div class="collapse show" :id="`widget-${filterable.name}`">
          <div class="widget-body">
            <div
              class="custom-control custom-checkbox form-check collection-filter-checkbox"
              v-for="value in filterable.values"
              :key="`${filterable.name}-${value}`"
            >
              <input
                type="checkbox"
                @change="applyFilter"
                v-model="applied_filters.product_filters[filterable.name]"
                :value="value"
                class="custom-control-input form-check-input"
                :id="`${filterable.name}-${value}`"
              />
              <label
                class="custom-control-label form-check-label"
                :for="`${filterable.name}-${value}`"
                >{{ value }}</label
              >
            </div>
          </div>
        </div>
      </div>
      <!-- End .widget -->
    </div>
    <!-- End .sidebar sidebar-shop -->
  </aside>
</template>
<style lang="scss" scoped>
</style>
<script>
import LiquorTree from "liquor-tree";
import VueSlider from "vue-slider-component";

export default {
  props: {
    sidebarFilters: {
      type: Object,
    },
    onFilterChange: Function,
  },
  data() {
    return {
      category_loading: false,
      categories_tree: [],
      treeOptions: {
        propertyNames: {
          text: "title",
          data: "category_image",
          id: "slug",
        },
      },

      applied_filters: {
        min_price: null,
        max_price: null,
        brand: null,
        product_filters: {},
      },
      range: [10, 100000],
      formatter: (value) => `Rs. ${value}`,
    };
  },
  components: {
    "cat-tree": LiquorTree,
    VueSlider,
  },
  created() {},
  mounted() {
    let context = this;
    this.getCategoryTree();
    this.sidebarFilters.filterables.forEach(function (value) {
      Vue.set(context.applied_filters.product_filters, value.name, []);
    });
    this.checkBrandExistance();
  },
  methods: {
    async getCategoryTree() {
      try {
        this.category_loading = true;
        let response = await axios.get("/api/product-category/get-all");
        this.categories_tree = response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.category_loading = false;
      }
    },

    applyFilter() {
      this.onFilterChange(this.applied_filters);
    },

    checkBrandExistance() {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("brand")) {
        this.applied_filters.brand = urlParams.get("brand");
      }
    },

    priceUpdated(context) {
      this.applied_filters.max_price = this.range[1];
      this.applied_filters.min_price = this.range[0];
      this.applyFilter();
    },
  },
};
</script>