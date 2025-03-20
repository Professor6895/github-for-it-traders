<template>
  <div class="dropdown cart-dropdown">
    <a
      href="#"
      class="dropdown-toggle"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      data-display="static"
    >
      <div class="icon">
        <i class="icon-shopping-cart"></i>
        <span class="cart-count">{{ cart_items.length }}</span>
      </div>
      <p>Cart</p>
    </a>

    <div class="dropdown-menu dropdown-menu-right">
      <div class="dropdown-cart-products">
        <div
          class="product"
          v-for="cart_item in cart_items"
          :key="`customer-cart-${cart_item.id}`"
        >
          <div class="product-cart-details">
            <h4 class="product-title">
              <a :href="`/product/${cart_item.product.slug}`">{{
                cart_item.product.name
              }}</a>
            </h4>

            <span class="cart-product-info">
              <span class="cart-product-qty">{{ cart_item.quantity }}</span>
              x Rs. {{ cart_item.price }}
            </span>
          </div>
          <figure class="product-image-container">
            <a :href="`/product-detail/${cart_item.product.slug}`">
              <img :src="cart_item.product.product_image.thumb" alt="product" />
            </a>
          </figure>
          <!-- <form action="/cart/remove-cart-item" method="POST">
            <input
              type="hidden"
              name="cart_item_id"
              :value="cart_item.id"
            />
            <input type="hidden" name="cart_id" value="{{ $cart->id }}" /> -->
          <a
            href="#"
            class="btn-remove"
            title="Remove Product"
            @click="removeCartItem(cart_item.id)"
            ><i class="icon-close"></i
          ></a>
          <!-- </form> -->
        </div>
        <!-- End .product -->
      </div>
      <!-- End .cart-product -->

      <div class="dropdown-cart-total">
        <span>Total</span>

        <span class="cart-total-price">Rs. {{ cart_total }}</span>
      </div>
      <!-- End .dropdown-cart-total -->

      <div class="dropdown-cart-action">
        <a href="/cart" class="btn btn-outline-primary-2"
          ><span>View Cart</span><i class="icon-long-arrow-right"></i
        ></a>
      </div>
      <!-- End .dropdown-cart-total -->
    </div>
    <!-- End .dropdown-menu -->
  </div>
  <!-- End .cart-dropdown -->
</template>

<script>
export default {
  data() {
    return {
      cart: {},
      cart_items: [],
      cart_total: 0,
    };
  },
  mounted() {
    this.fetchCustomerCart();
    let context = this;
    $(document).on("cart-updated", function () {
      context.fetchCustomerCart();
    });
  },
  methods: {
    async fetchCustomerCart() {
      try {
        let response = await axios.get("/api/get-cart");
        if (response.data.success) {
          this.cart = response.data.cart;
          this.cart_items = response.data.cart_items;

          this.cart_total = response.data.cart_total;
          // $(".cart--items-count").html(this.cart_items.length);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async removeCartItem(item_id) {
      Swal.fire({
        text: "Are you sure you want to delete the cart item?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let response = await axios.post("/api/cart/remove-cart-item", {
            cart_item_id: item_id,
          });

          if (response.data.success) {
            location.reload();
          }
        }
      });
    },
  },
};
</script>