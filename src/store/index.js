import Vue from "vue";
import Vuex from "vuex";

import UserModule from "./modules/user";
import PostModule from "./modules/post";
import PlanModule from "./modules/plan";
import ArticleModule from "./modules/article";
import WorkbenchModule from "./modules/workbench";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserModule,
    post: PostModule,
    plan: PlanModule,
    article: ArticleModule,
    workbench: WorkbenchModule
  }
});
