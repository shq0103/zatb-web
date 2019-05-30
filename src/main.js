import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import BackTop from "@mlqt/vue-back-top";

import BaiduMap from "vue-baidu-map";

import { timeFilter, htmlToStr, timeWithoutMin, dateFilter } from "@/utils/index.js";

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: "UfWvIcbji93RkhCwoNd3mu5pRCagKyf8"
});

Vue.filter("timeFilter", timeFilter);
Vue.filter("htmlToStr", htmlToStr);

Vue.filter("timeWithoutMin", timeWithoutMin);
Vue.filter("dateFilter", dateFilter);

Vue.filter("lineFilter", value => {
  switch (value) {
    case 1:
      return "短线";
    case 2:
      return "中线";
    case 3:
      return "长线";
    case 4:
      return "其他";
    default:
      return "";
  }
});
Vue.config.productionTip = false;
Vue.use(BackTop);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
