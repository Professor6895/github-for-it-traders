<template>
  <form action @submit.prevent="registerUser">
    <div class="form-group">
      <label for>Full Name</label>
      <input
        type="text"
        name="name"
        class="form-control h-45"
        v-model="user.name"
        v-validate="'required'"
      />
      <span class="text-danger text-sm" v-if="errors.has('name')">{{
        errors.first("name")
      }}</span>
    </div>
    <div class="form-group">
      <label for>Email Address</label>
      <input
        type="email"
        name="email"
        class="form-control h-45"
        v-model="user.email"
        v-validate="'required|email'"
      />
      <span class="text-danger text-sm" v-if="errors.has('email')">{{
        errors.first("email")
      }}</span>
    </div>

    <div class="form-group">
      <label for>Contact Number</label>
      <input
        type="contact_number"
        name="contact_number"
        class="form-control h-45"
        v-model="user.contact_number"
        v-validate="'required|numeric|max:10'"
      />
      <span class="text-danger text-sm" v-if="errors.has('contact_number')">{{
        errors.first("contact_number")
      }}</span>
    </div>

    <div class="form-group row">
      <div class="col-sm-6">
        <label for>Password</label>
        <input
          type="password"
          name="password"
          class="form-control h-45"
          v-model="user.password"
          v-validate="'required|min:6'"
        />
        <span class="text-danger text-sm" v-if="errors.has('password')">{{
          errors.first("password")
        }}</span>
      </div>
      <div class="col-sm-6">
        <label for>Re-type Password</label>
        <input
          type="password"
          name="password_confirmation"
          v-model="user.password_confirmation"
          class="form-control h-45"
          v-validate="'required|min:6'"
        />
        <span
          class="text-danger text-sm"
          v-if="errors.has('password_confirmation')"
          >{{ errors.first("password_confirmation") }}</span
        >
      </div>
    </div>

    <div class="form-footer">
      <button
        type="submit"
        class="btn btn-outline-primary-2"
        :disabled="creating_account"
      >
        <span>
          {{ creating_account ? "Creating Account..." : "Create An Account" }}
        </span>
        <i class="icon-long-arrow-right"></i>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      creating_account: false,
    };
  },
  methods: {
    async registerUser() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.creating_account = true;
        let response = await axios.post("/user-register", this.user);
        location.reload();
      } catch (error) {
        let error_bag = this.errors;
        error_bag.clear();
        let server_errors = error.response.data.errors;
        for (let error_key in server_errors) {
          error_bag.add({
            field: error_key,
            msg: server_errors[error_key][0],
          });
        }
      } finally {
        this.creating_account = false;
      }
    },
  },
};
</script>