import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { createPinia } from "pinia";
import { myPiniaPlugin } from "@/pinia/cart";

import "@/assets/styles.css";

const app = createApp(App);
app.use(store);
app.use(router);

const pinia = createPinia();
pinia.use(myPiniaPlugin);
app.use(pinia);

app.mount("#app");
