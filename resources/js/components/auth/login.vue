<template>
  <form action class="" @submit.prevent="processLogin">
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

    <div class="form-footer">
      <button
        type="submit"
        class="btn btn-outline-primary-2"
        :disabled="logging_in"
      >
        <span>{{ logging_in ? "Logging In..." : "Login" }}</span>
        <i class="icon-long-arrow-right"></i>

      </button>
      <a href="/user/password/reset" class="forgot-link"
        >Forgot Password?</a
      >
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      logging_in: false,
    };
  },
  computed() {
    console.log("HELLO");
  },
  methods: {
    async processLogin() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }

      try {
        this.logging_in = true;
        let response = await axios.post("/user-login", this.user);
        console.log(response);
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
        this.logging_in = false;
      }
    },
  },
};
</script>