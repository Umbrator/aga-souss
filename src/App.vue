<template>
  <nav>
    <MyNav></MyNav>
    <router-link to="/"></router-link>
  </nav>
  <router-view />
</template>

<script>
import MyNav from "@/components/MyNav.vue";
export default {
  components: {
    MyNav,
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
