import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import BackTop from "@mlqt/vue-back-top";

Vue.config.productionTip = false;
Vue.use(BackTop);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
