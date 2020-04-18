import Vue from "vue";
import Vuex from "vuex";

import UserModule from "./modules/user";
import PostModule from "./modules/post";
import ArticleModule from "./modules/article";
import WorkbenchModule from "./modules/workbench";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: UserModule,
    post: PostModule,
    article: ArticleModule,
    workbench: WorkbenchModule
  }
});
