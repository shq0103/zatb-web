import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import BackTop from "@mlqt/vue-back-top";

import BaiduMap from "vue-baidu-map";

import { timeFilter, htmlToStr } from "@/utils/index.js";

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: "UfWvIcbji93RkhCwoNd3mu5pRCagKyf8"
});

Vue.filter("timeFilter", timeFilter);
Vue.filter("htmlToStr", htmlToStr);

Vue.config.productionTip = false;
Vue.use(BackTop);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
