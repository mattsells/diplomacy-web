<script setup lang="ts">
import { useSessionStore } from "@/stores/session";

const { user, token } = useSessionStore();
</script>

<template>
  <main>
    <h1>Admin</h1>
    <p>User email: {{ user?.email }}</p>
    <p>Token: {{ token }}</p>
  </main>
</template>
