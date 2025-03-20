  <template>
  <div class="collection-wrapper">
    <div class="custom-container">
      <div class="row">
        <div class="col-lg-9">
          <div class="toolbox">
            <div class="toolbox-left">
              <div class="toolbox-info">
                Showing Products<span>
                  {{ products.from }}-{{ products.to }}</span
                >
                of <span>{{ products.total }}</span> Result
              </div>
            </div>

            <div class="toolbox-right">
              <div class="toolbox-sort">
                <label for="sortby">Sort by:</label>
                <div class="select-custom">
                  <select
                    v-model="applied_filters.sorting"
                    class="form-control"
                  >
                    <option value="">Sorting items</option>
                    <option value="a-z">A to Z</option>
                    <option value="z-a">Z to A</option>
                    <option value="lth">Price Low to High</option>
                    <option value="htl">Price High to Low</option>
                    <option value="latest">Latest</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- End .toolbox-right -->
          </div>
          <!-- End .toolbox -->

          <div class="products mb-3">
            <div class="row" v-if="products.data.length">
              <ProductSingle
                v-for="product in products.data"
                :key="`product-${product.id}`"
                :product="product"
              />
            </div>

            <div class="row" v-else>
              <div class="col-12 text-center" v-if="!loading_products">
                <div class="m-auto">
                  <img
                    src="/website/images/no_result.png"
                    alt=""
                    style="width: 400px"
                  />
                  <h3>No Results Found!!</h3>
                </div>
              </div>
              <div v-else>
                <div class="m-auto">
                  <h3>Loading products...</h3>
                </div>
              </div>
            </div>
            <!-- End .row -->
          </div>
          <!-- End .products -->

          <div class="text-center justify-content-center">
            <pagination
              :current="products.current_page"
              :total="products.total"
              :per-page="parseInt(products.per_page)"
              @page-changed="fetchProducts"
            >
            </pagination>
          </div>
        </div>
        <sidebar
          v-if="Object.keys(filters).length"
          :on-filter-change="filterChanged"
          :sidebar-filters="filters"
        ></sidebar>
        <!-- End .col-lg-9 -->
      </div>
    </div>
  </div>
</template>
  <style lang="scss" scoped>
.loader--image {
  margin: 200px 0px;
}
</style> 

  <script>
import _ from "lodash";
import Sidebar from "./sidebar.vue";
import ProductSingle from "./ProductSingle.vue";
import Pagination from "vue2-laravel-pagination";

export default {
  props: ["listType", "keyword", "urlFilters"],
  data() {
    return {
      loading_products: false,
      products: {
        data: [],
      },
      current_page: 1,
      details: {},
      get_filters: true,
      filters: {},
      applied_filters: {
        sorting: "latest",
      },

      url_params: {},

      list_type: "grid",
    };
  },
  components: {
    Sidebar,
    ProductSingle,
    Pagination,
  },
  mounted() {
    this.prepareUrlParamAndFetch();
  },
  methods: {
    prepareUrlParamAndFetch() {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const url_obj = Object.fromEntries(urlSearchParams.entries());
      this.url_params = url_obj;
      this.url_params = Object.assign(this.url_params, this.urlFilters);
      // if (search) {
      //   let url_obj = JSON.parse(
      //     '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      //     function (key, value) {
      //       return key === "" ? value : decodeURIComponent(value);
      //     }
      //   );

      //   console.log(url_obj)
      // }
      this.generateUrlParamAndFetch();
    },

    generateUrlParamAndFetch() {
      Object.assign(this.url_params, this.applied_filters);
      this.current_page = 1;
      this.fetchProducts();
    },

    async fetchProducts(page = 1) {
      let final_params = _.cloneDeep(this.url_params);
      final_params.page = page;
      final_params.get_filters = this.get_filters;
      try {
        this.loading_products = true;
        let response = await axios.get(`/api/get-products`, {
          params: final_params,
        });
        this.products = response.data.products;

        if (response.data.filters) {
          this.filters = response.data.filters;
        }
      } catch (e) {
        // if (e.response.status === 404) {
        //   window.location = "/404";
        // }
        console.log(e);
      } finally {
        this.loading_products = false;
        this.get_filters = false;
        setTimeout(() => {
          this.initRateyo();
        }, 100);
      }
    },

    paginateProducts(direction) {
      if (direction === "prev") {
        if (this.current_page === 1) {
          return;
        } else {
          this.current_page -= 1;
        }
      }

      if (direction === "next") {
        if (this.current_page === this.products.last_page) {
          return;
        } else {
          this.current_page += 1;
        }
      }
    },

    filterChanged(applied_filters) {
      this.applied_filters = applied_filters;
      this.generateUrlParamAndFetch();
    },

    initRateyo() {
      $(".star--rating").each(function () {
        let rating = $(this).data("rating");
        $(this).rateYo({
          starWidth: "20px",
          halfStar: true,
          rating: rating,
          readOnly: true,
        });
      });
    },

    serializeUrl(obj, prefix) {
      var str = [],
        p;
      for (p in obj) {
        if (obj.hasOwnProperty(p)) {
          var k = prefix ? prefix + "[" + p + "]" : p,
            v = obj[p];
          str.push(
            v !== null && typeof v === "object"
              ? this.serializeUrl(v, k)
              : encodeURIComponent(k) + "=" + encodeURIComponent(v)
          );
        }
      }
      return str.join("&");
    },

    getHighlights(highlights) {
      if (highlights) return highlights.split("|");
    },
  },
  watch: {
    current_page() {
      this.fetchProducts();
    },

    "applied_filters.sorting": function (val) {
      this.generateUrlParamAndFetch();
    },
  },
};
</script>