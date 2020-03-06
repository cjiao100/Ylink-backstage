import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "workbench",
        name: "工作台",
        component: () => <p>工作台</p>
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login")
  },
  {
    path: "/*",
    name: "404",
    component: () => <h2>404</h2>
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
