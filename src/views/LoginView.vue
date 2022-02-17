<script>
import { mapActions } from "pinia";

import { useSessionStore } from "@/stores/session";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions(useSessionStore, ["setSession"]),
    handleSubmit() {
      const { email, password } = this;

      this.$http
        .post("/sessions", {
          user: {
            email,
            password,
          },
        })
        .then((response) => {
          const { user, token } = response.data.data;

          this.setSession(user, token);
          this.$router.push({ name: "games" });
        });
      // TODO: Show message after failure
    },
  },
};
</script>

<template>
  <main>
    <h1>Login</h1>

    <form>
      <label for="email">Email</label>
      <input id="email" type="text" v-model="email" />

      <br />

      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" />

      <br />

      <button type="submit" @click.prevent="handleSubmit">Login</button>
    </form>
  </main>
</template>
