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
    endSession() {
      (this.user = null), (this.token = null);
    },
    setSession(user, token) {
      this.user = user;
      this.token = token;
    },
  },
});
