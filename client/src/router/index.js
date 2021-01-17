import Vue from "vue";
import login from "../login/router";
import VueRouter from "vue-router";
import Profile from "../components/profile/router";
import Register from '../register/router'

Vue.use(VueRouter);

const routes = [
  ...login,
  ...Register,
  {
    path: "/layout",
    name: "Layout",
    component: () => import("../layout/Layout"),
    children: [
      /* Aqui van los componentes que se ven debajo de la barra de navegacion */
      ...Profile,
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
