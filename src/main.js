import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { client } from "./lib/http";

const app = createApp(App);

app.config.globalProperties.$http = client;

app.use(createPinia());
app.use(router);

app.mount("#app");
