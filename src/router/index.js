import { createRouter, createWebHistory } from "vue-router";

import { useSessionStore } from "@/stores/session";

import Games from "../views/GamesView.vue";
import Login from "../views/LoginView.vue";
import Registration from "../views/RegistrationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Registration,
    },
    {
      path: "/games",
      name: "games",
      component: Games,
      //   component: () => import("../views/AboutView.vue"),
      meta: {
        restricted: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const session = useSessionStore();

  if (to.matched.some((record) => record.meta.restricted)) {
    if (!session.isLoggedIn) {
      return next({ name: "login" });
    }

    next();
  } else {
    next();
  }
});

export default router;
