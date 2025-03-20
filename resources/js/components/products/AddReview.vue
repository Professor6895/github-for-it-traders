<template>
  <div>
    <div
      class="modal fade bd-example-modal-lg theme-modal add-review-modal"
      id="reviewModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content p-3">
          <div class="modal-body auth--modal-content mb-4">
            <button
              type="button"
              class="btn-close float-right"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <form class="theme-form" @submit.prevent="postReview">
              <div class="row g-3">
                <div class="col-md-12">
                  <div class="form-group">
                    <label class="form-label">Rating</label>
                    <div id="starRating"></div>
                    <span class="text-danger text-sm" v-if="rating_error">{{
                      rating_error
                    }}</span>
                  </div>
                </div>

                <div class="col-md-12">
                  <label>Review Title</label>
                  <textarea
                    cols="30"
                    rows="3"
                    class="form-control"
                    v-model="review.review"
                    name="review"
                    placeholder="Write your review here..."
                    v-validate="'required'"
                  ></textarea>
                  <span
                    class="text-danger text-sm"
                    v-if="errors.has('review')"
                    >{{ errors.first("review") }}</span
                  >
                </div>
                <div class="col-md-12">
                  <button
                    class="btn-outline-primary-2 btn btn-sm"
                    type="submit"
                  >
                    Submit Your Review
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="!user_reviewed">
      <div class="col-sm-12 mt-4 text-center">
        <button
          @click="openReviewModal"
          class="btn-outline-primary-2 btn btn-sm"
        >
          Write your review
        </button>
      </div>
    </div>

    <div class="review" v-if="user_reviewed">
      <h3>Your Review</h3>

      <div class="row no-gutters">
        <div class="col-auto">
          <h4>
            <a href="#">{{ review.user.name }}</a>
          </h4>
          <div class="ratings-container">
            <div class="star--rating" :data-rating="review.rating"></div>
          </div>
          <!-- End .rating-container -->
          <span class="review-date">
            {{ review.review_formatted_date }}
          </span>
          <span v-if="review.status == 1" class="badge bg-success"
            >Published</span
          >
          <span v-else class="badge bg-warning">In Review</span>
        </div>
        <!-- End .col -->
        <div class="col">
          <div class="review-content">
            <p class="font-18" v-html="review.review"></p>
          </div>
          <!-- End .review-content -->
          <a href="javascript:void(0)" @click="openReviewModal"
            ><u>Edit Your Review</u></a
          >
        </div>
        <!-- End .col-auto -->
      </div>
      <!-- End .row -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["productid", "userid"],
  data() {
    return {
      review: {
        rating: 0,
      },
      rateYo: null,
      rating_error: null,

      user_reviewed: false,
    };
  },

  mounted() {
    this.checkExistingReview();
  },
  methods: {
    openReviewModal() {
      $(".add-review-modal").modal("show");
    },

    async checkExistingReview() {
      try {
        let response = await axios.get(
          `/product/${this.productid}/get-user-review`
        );

        if (response.data.success) {
          this.user_reviewed = true;
          this.review = response.data.review;
          this.initStarRating(this.review.rating);
        } else {
          this.initStarRating();
        }
      } catch (e) {}
    },

    initStarRating(rating = 0) {
      console.log(rating);
      let context = this;
      this.rateYo = $("#starRating").rateYo({
        normalFill: "#A0A0A0",
        fullStar: true,
        precision: 1,
        rating: rating,
      });

      this.rateYo.rateYo().on("rateyo.set", function (e, data) {
        context.$set(context.review, "rating", data.rating);
      });
    },

    async postReview() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      if (this.review.rating === 0) {
        this.rating_error = "Please rate the product.";
        return;
      }

      try {
        let payload = {
          review: this.review.review,
          rating: this.review.rating,
          product_id: this.productid,
          id: this.review.id,
        };

        let response = await axios.post(`/product/store-review`, payload);

        if (response.data.success) {
          location.reload();
        }
      } catch (e) {
        location.reload();
      }
    },
  },
};
</script>