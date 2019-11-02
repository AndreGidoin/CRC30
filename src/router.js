import Vue from "vue";
import Router from "vue-router";
import crc30Dapp from "./components/crc30-dapp";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "crc30-dapp",
      component: crc30Dapp,
    }
  ]
});
