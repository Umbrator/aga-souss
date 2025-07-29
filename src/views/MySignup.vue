<template>
  <section class="vh-100 bg-image">
    <form @submit.prevent="newReg">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card shadow-2-strong" style="border-radius: 15px">
                <div class="card-body p-5">
                  <h3 class="mb-5 text-center">Create an account</h3>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      class="form-control form-control-lg"
                      v-model="newRegister.name"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      class="form-control form-control-lg"
                      v-model="newRegister.email"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      class="form-control form-control-lg"
                      v-model="newRegister.password"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="rePass"
                      >Repeat Password</label
                    >
                    <input
                      type="password"
                      id="rePass"
                      class="form-control form-control-lg"
                      v-model="newRegister.rePass"
                    />
                  </div>

                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Already have an account?
                    <router-link to="/" class="fw-bold text-body">
                      Login Here
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newRegister: {
        name: "",
        email: "",
        password: "",
        rePass: "",
      },
      registerStatus: "",
      register: [],
    };
  },
  methods: {
    async saveData() {
      await fetch("https://course-backend.onrender.com/")
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
    async newReg() {
      if (
        this.newRegister.name &&
        this.newRegister.email &&
        this.newRegister.password &&
        this.newRegister.rePass
      ) {
        this.register.push(this.newRegister);
        this.registerStatus = "success";
        console.log("Registration successful");
      } else {
        this.registerStatus = "failure";
        console.log("Incomplete registration data");
      }
      this.newRegister = {
        name: "",
        email: "",
        password: "",
        rePass: "",
      };
    },
  },
};
</script>
