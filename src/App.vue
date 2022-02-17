<script>
import { RouterLink, RouterView } from "vue-router";

import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    Navbar,
  },
};
</script>

<template>
  <Navbar></Navbar>
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
