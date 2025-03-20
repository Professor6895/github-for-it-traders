<template>
  <div>
    <form @submit.prevent="submitForm" class="form-horizontal">
      <div class="form-group row">
        <div class="col-sm-6 mb-3">
          <label class="control-label">Full Name</label>
          <input
            type="text"
            required
            v-model="vendor.full_name"
            class="form-control"
            name="full_name"
            v-validate="'required'"
          />
          <span
            class="text-danger text-sm mt-1"
            v-if="errors.has('full_name')"
            >{{ errors.first("full_name") }}</span
          >
        </div>
        <div class="col-sm-6 mb-3">
          <label class="control-label">Email Address</label>
          <input
            type="email"
            v-model="vendor.email"
            required
            name="email"
            v-validate="'required|email'"
            class="form-control"
          />
          <span class="text-danger text-sm mt-1" v-if="errors.has('email')">{{
            errors.first("email")
          }}</span>
        </div>
        <div class="col-sm-6 mb-3">
          <label class="control-label">Contact Number</label>
          <input
            type="text"
            v-model="vendor.contact_person_phone"
            required
            name="contact_number"
            v-validate="'required|numeric'"
            class="form-control"
          />
          <span
            class="text-danger text-sm mt-1"
            v-if="errors.has('contact_number')"
            >{{ errors.first("contact_number") }}</span
          >
        </div>
        <div class="col-sm-6 mb-3">
          <label class="control-label">Address</label>
          <input
            type="text"
            v-model="vendor.contact_person_address"
            required
            name="address"
            v-validate="'required'"
            class="form-control"
          />
          <span class="text-danger text-sm mt-1" v-if="errors.has('address')">{{
            errors.first("address")
          }}</span>
        </div>

        <div class="col-sm-6 mb-3">
          <label class="control-label">Business Name</label>
          <input
            type="text"
            required
            v-model="vendor.name"
            name="business_name"
            v-validate="'required'"
            class="form-control"
          />
          <span
            class="text-danger text-sm mt-1"
            v-if="errors.has('business_name')"
            >{{ errors.first("business_name") }}</span
          >
        </div>
        <div class="col-sm-6 mb-3">
          <label class="control-label">PAN No.</label>
          <input
            type="text"
            required
            name="pan_no"
            v-validate="'required'"
            v-model="vendor.pan_no"
            class="form-control"
          />
          <span class="text-danger text-sm mt-1" v-if="errors.has('pan_no')">{{
            errors.first("pan_no")
          }}</span>
        </div>
        <div class="col-sm-12 mb-3">
          <label class="control-label">Inventory Location</label>
          <input
            type="text"
            required
            name="inventory_address"
            v-validate="'required'"
            v-model="vendor.address"
            class="form-control"
          />
          <span
            class="text-danger text-sm mt-1"
            v-if="errors.has('inventory_address')"
            >{{ errors.first("inventory_address") }}</span
          >
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-sm btn-secondary btn-theme">
          Send Request
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vendor: {},
      submitting_form: false,
    };
  },
  methods: {
    async submitForm() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.submitting_form = true;

        const response = await axios.post("/vendor-request", this.vendor);
        if (response.data.success) {
          this.vendor = {};
          Swal.fire({
            icon: "success",
            title: "Success",
            text: response.data.message,
          });
        }
      } catch (e) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong! Please retry!!",
          });
      } finally {
        this.submitting_form = false;
      }
    },
  },
};
</script>