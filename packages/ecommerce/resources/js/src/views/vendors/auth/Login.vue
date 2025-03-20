<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto" />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 pb-8">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Vendor Login</h4>
                  <p>Welcome back, please login to your account.</p>
                </div>

                <div>
                  <vs-input
                    v-validate="'required|email|min:3'"
                    data-vv-validate-on="blur"
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Email"
                    v-model="email"
                    class="w-full"
                  />
                  <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                  <vs-input
                    data-vv-validate-on="blur"
                    v-validate="'required|min:6'"
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    label-placeholder="Password"
                    v-model="password"
                    class="w-full mt-6"
                  />
                  <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                  <div class="flex flex-wrap justify-between my-5">
                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
                    <router-link to="/pages/forgot-password">Forgot Password?</router-link>
                  </div>
                  <div class="text-right mb-3">
                    <!-- <vs-button type="border" @click="registerUser">Register</vs-button> -->
                    <vs-button :disabled="!validateForm" @click="loginJWT">Login</vs-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.email != "" && this.password != "";
    }
  },
  methods: {
    checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: "Login Attempt",
          text: "You are already logged in!",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning"
        });

        return false;
      }
      return true;
    },
    loginJWT() {
      if (!this.checkLogin()) return;

      // Loading
      this.$vs.loading();

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password,
          authType: "vendor"
        }
      };

      this.$store
        .dispatch("auth/loginJWT", payload)
        .then(res => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Login Success",
            text: "You are successfully logged in!",
            color: "success"
          });

          this.$store
            .dispatch("updateUserRole", {
              aclChangeRole: this.$acl.change,
              userRole: res.data.userData.userRole
            })
            .then(() => {
              let new_route = `/${res.data.userData.userRole}/dashboard`;
              this.$router.push(
                this.$router.currentRoute.query.to || new_route
              );
            });
        })
        .catch(error => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.message,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger"
          });
        });
    }
  }
};
</script>