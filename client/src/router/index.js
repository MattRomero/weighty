import Vue from "vue";
import login from "../login/router";
import VueRouter from "vue-router";
import Profile from "../components/profile/router";
import Family from "../components/family/router";

Vue.use(VueRouter);

const routes = [
  ...login,
  {
    path: "/layout",
    name: "Layout",
    component: () => import("../layout/Layout"),
    children: [
      /* Aqui van los componentes que se ven debajo de la barra de navegacion */
      ...Profile,
      ...Family,
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
