import { defineStore } from "pinia";

export const useSessionStore = defineStore({
  id: "session",
  state: () => ({
    token: null,
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.token && !!state.user,
  },
  actions: {
    setSession(user, token) {
      this.user = user;
      this.token = token;
    },
  },
});
