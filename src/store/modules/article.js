import { GET_ARTICLE_LIST, GET_HOT_ARTICLE } from "@/store/mutation-types";
import { GetArticleList, GetHotArticleList } from "@/api/article";
import moment from "moment";

const Article = {
  state: {
    list: [],
    hot: []
  },
  mutations: {
    [GET_ARTICLE_LIST](state, list) {
      // 这里的 `state` 对象是模块的局部状态
      state.list = list;
    },
    [GET_HOT_ARTICLE](state, hot) {
      state.hot = hot;
    }
  },

  actions: {
    async getArticleList({ commit }, params) {
      const list = await GetArticleList(params);
      commit(GET_ARTICLE_LIST, list);
    },
    async getHotArticleList({ commit }) {
      const hot = await GetHotArticleList();
      commit(GET_HOT_ARTICLE, hot);
    }
  },

  getters: {
    articleHotList({ hot }) {
      return hot.map(item => ({
        id: item._id,
        title: item.title,
        author: item.userId.name,
        browse: item.browse,
        created_at: moment(item.created_at).format("YYYY-MM-DD")
      }));
    },
    articleList({ list }) {
      return list.map(item => ({
        id: item._id,
        title: item.title,
        author: item.userId.name,
        browse: item.browse,
        awesome: item.awesome.length,
        comment: item.comment.length
      }));
    }
  }
};

export default Article;
