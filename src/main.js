import Vue from "vue";
import "./plugins/axios";
import VCharts from "v-charts";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "v-charts/lib/style.css";
import "@/styles/index.scss"; // global css
import "./plugins/element.js";

Vue.use(VCharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
