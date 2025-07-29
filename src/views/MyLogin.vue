<template>
  <form class="vh-100" @submit.prevent="nLog">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign in</h3>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="email">Email</label>
                <input
                  type="email"
                  id="typeEmailX-2"
                  class="form-control form-control-lg"
                  v-model="newLog.email"
                />
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control form-control-lg"
                  v-model="newLog.password"
                />
              </div>
              <div class="form-check d-flex justify-content-start mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                />
                <label class="form-check-label" for="form1Example3">
                  Remember password
                </label>
              </div>
              <p class="text-success" v-if="loginStatus === 'success'">
                Login successful!
              </p>
              <p class="text-danger" v-if="loginStatus === 'failure'">
                Invalid email or password. Please try again.
              </p>
              <button class="btn btn-primary btn-lg btn-block" type="submit">
                Login
              </button>
              <p class="mt-3">
                Need an account? <a href="/signup">Sign up!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newLog: {
        email: "",
        password: "",
      },
      loginStatus: "",
    };
  },
  methods: {
    async nLog() {
      try {
        const response = await fetch("http://localhost:8081/admin/creatprof", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.newLog),
        });

        if (response.ok) {
          this.loginStatus = "success";
          console.log("success");
          this.$router.push({ path: "/admin" });
        } else {
          this.loginStatus = "failure";
          console.log("failure");
        }

        this.newLog = {
          email: "",
          password: "",
        };
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
