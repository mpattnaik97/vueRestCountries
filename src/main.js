import Vue from "vue";
import App from "./App";
import router from "./routers";
import axios from "axios";
import VueAxios from "vue-axios";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Country from "./model/Country.js";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(router);
Vue.use(VueAxios, axios);
Vue.prototype.$country = new Country();

new Vue({
  el: "#app",
  router,
  data: function () {
    return {
      theme: "Light"
    };
  },
  components: { App },
  template: "<App/>"
}).$mount("#app");
