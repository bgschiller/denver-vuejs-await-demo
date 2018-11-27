import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VuexManaged from "./views/VuexManaged.vue";
import ComponentManaged from "./views/ComponentManaged.vue";
import PromiseManaged from "./views/PromiseManaged.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/vuex",
      name: "vuex",
      component: VuexManaged
    },
    {
      path: "/component",
      name: "component",
      component: ComponentManaged
    },
    {
      path: "/promise",
      name: "promise",
      component: PromiseManaged
    }
  ]
});
