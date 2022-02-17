<script>
import { mapState } from "pinia";

import { useSessionStore } from "@/stores/session";

export default {
  computed: {
    ...mapState(useSessionStore, ["token", "user"]),
  },
};
</script>

<template>
  <main>
    <h1>Admin</h1>
    <p>User email: {{ user.email }}</p>
    <p>Token: {{ token }}</p>
  </main>
</template>
