<script>
import { RouterLink, RouterView } from "vue-router";

import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
    RouterLink,
    RouterView,
  },
};
</script>

<template>
  <NavBar></NavBar>

  <RouterLink to="/admin">Restricted</RouterLink>
  <br />
  <RouterLink to="/register">Registration</RouterLink>
  <br />
  <RouterLink to="/login">Login</RouterLink>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
