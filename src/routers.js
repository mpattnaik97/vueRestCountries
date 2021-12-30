import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/HomePage.vue";
import CountryInfo from "./pages/CountryInfo.vue";

Vue.use(VueRouter);

const routers = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/:countryInfo",
    name: "country",
    component: CountryInfo
  }
];

export default new VueRouter({
  mode: "history", // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
});
