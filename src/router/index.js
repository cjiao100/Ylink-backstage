import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
        component: () => import("@/views/article/Article.vue")
      },
      {
        path: "content/article/create",
        name: "新增文章",
        component: () => import("@/views/article/CreateArticle.vue")
      },
      {
        path: "content/post",
        name: "帖子管理",
        component: () => import("@/views/post/Post.vue")
      },
      {
        path: "content/plan",
        name: "计划管理",
        component: () => import("@/views/plan/Plan.vue")
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
    path: "*",
    name: "404",
    component: () => <h2>404</h2>
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
