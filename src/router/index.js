import Vue from "vue";
import VueRouter from "vue-router";


import Form from "../components/Form";
import AddModule from "../views/AddModule.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/addModule",
    component: AddModule
  },
  {
    path: "/form",
    component: Form
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
