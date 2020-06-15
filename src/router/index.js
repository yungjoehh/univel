import Vue from "vue";
import VueRouter from "vue-router";

import Form from "../components/Form";
import AddModule from "../views/AddModule.vue";
import ModuleContents from "../views/ModuleContents.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/addModule",
    component: AddModule
  },
  {
    path: "/form",
    component: Form
  },
  {
    path: "/moduleContents",
    component: ModuleContents
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
