import { createRouter, createWebHistory } from "vue-router";

import { useSessionStore } from "@/stores/session";

import Admin from "../views/AdminView.vue";
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
      path: "/admin",
      name: "admin",
      component: Admin,
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
