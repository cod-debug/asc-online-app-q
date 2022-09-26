<template>
    <div class="q-pa-md q-ml-lg">
      <div class="row">
        <div class="col-12 col-md-8">
          <app-carousel />
        </div>
        <div class="col-12 col-md-4">
          <div class="flex-items-center">
            <div class="bg-white login-form">
              <div class="login-form-header text-center">
                <img src="~assets/images/asc-logo.jpg" style="width: 15em;" />
                <h5 class="q-ma-sm"><b>Login</b></h5>
              </div>

              <div class="q-form q-mr-lg q-ml-lg q-pa-lg">
                <div class="q-gutter-md">
                  <q-input v-model="email_address" label="Email Address" />
                  <q-input bottom-slots v-model="password" :type="!showPass ? 'password' : 'text'" label="Password" :dense="dense">
                    <template v-slot:append>
                      <q-btn round dense flat :icon="!showPass ? 'visibility ' : 'visibility_off'" @click="showHidePassword" />
                    </template>
                  </q-input>
                </div>

                <div class="row q-mt-lg">
                  <div class="col-sm-6 q-pa-sm">
                    <q-btn color="primary" label="Login" class="btn-block" />
                  </div>
                  <div class="col-sm-6 q-pa-sm">
                    <q-btn color="primary" label="Register" outline class="btn-block" />
                  </div>
                </div>
                <div class="text-center">
                  <a href="#" class="forgot-password-btn">
                    <small>Forgot Password</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
</template>

<script>
  import appCarousel from "components/HomeCarousel.vue";

export default {
    name: 'PageIndex',
    data: () => ({
      showPass: false,
      password: "",
      email_address: "",
    }),

    components: {
      appCarousel,
    },
    methods: {
      showHidePassword() {
        this.showPass = !this.showPass;
      }
    }
}
</script>
