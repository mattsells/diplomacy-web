<script>
import { mapState } from "pinia";
import { RouterLink } from "vue-router";

import { useSessionStore } from "@/stores/session";

export default {
  name: "NavBar",
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useSessionStore, ["isLoggedIn"]),
  },
};
</script>

<template>
  <nav class="root">
    <div class="left">
      <div class="icon">
        <span class="title">Global Diplomacy</span>
      </div>
    </div>

    <div class="right">
      <RouterLink class="link" to="/friends" v-if="isLoggedIn"
        >Friends</RouterLink
      >
      <RouterLink class="link" to="/games" v-if="isLoggedIn">Games</RouterLink>

      <RouterLink class="link" to="/register" v-if="!isLoggedIn"
        >Register</RouterLink
      >
      <RouterLink class="link" to="/login" v-if="!isLoggedIn">Login</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.root {
  background-color: var(--olive-400);
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 var(--sp-400);
}

.link {
  background-color: var(--olive-500);
  padding: var(--sp-200) var(--sp-400);
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.link:hover {
  background-color: var(--olive-600);
}

.left {
  flex-grow: 1;
}

.right {
  display: flex;
}

.icon {
  height: 100%;
  display: flex;
  align-items: center;
}

.title {
  font-size: var(--fs-400);
}
</style>
