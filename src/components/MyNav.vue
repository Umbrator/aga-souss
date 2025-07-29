<template>
  <nav
    v-if="!hideNavbar"
    class="navbar navbar-expand-lg navbar-light bg-body-tertiary"
  >
    <div class="container">
      <a class="navbar-brand me-2 no-decoration" href="#">
        <img
          src="https://www.cdnlogo.com/logos/t/22/taiga.svg"
          height="40"
          alt="MDB Logo"
          loading="lazy"
          style="margin-top: -1px"
        />
      </a>

      <button
        data-mdb-collapse-init
        class="navbar-toggler"
        type="button"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#"><strong>HOME</strong></a>
          </li>
        </ul>

        <div class="d-flex align-items-center">
          <button
            data-mdb-ripple-init
            type="button"
            class="btn btn-primary me-3"
          >
            <router-link
              :to="{ name: 'my_login' }"
              style="color: white; text-decoration: none"
            >
              Login
            </router-link>
          </button>

          <button
            data-mdb-ripple-init
            type="button"
            class="btn btn-primary me-3"
          >
            <router-link
              :to="{ name: 'my_signup' }"
              style="color: white; text-decoration: none"
            >
              Sign Up
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hideNavbar() {
      return (
        this.$route.path === "/dashboard" ||
        this.$route.path === "/ajouterformateur" ||
        this.$route.path === "/ajouterformation" ||
        this.$route.path === "/ajoutercenter" ||
        this.$route.path === "/EditFormateur"
      );
    },
  },
};
</script>

<style>
.no-decoration {
  text-decoration: none;
}
</style>
