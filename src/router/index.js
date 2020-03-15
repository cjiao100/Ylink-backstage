import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: "工作台",
        component: () => import("@/views/workbench/Workbench.vue")
      },
      {
        path: "user",
        name: "用户管理",
        component: () => import("@/views/user/User.vue")
      },
      {
        path: "content/article",
        name: "文章管理",
        component: () => import("@/views/user/User.vue")
      },
      {
        path: "content/post",
        name: "帖子管理",
        component: () => import("@/views/user/User.vue")
      },
      {
        path: "space",
        name: "个人空间",
        component: () => import("@/views/space/Space.vue")
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
