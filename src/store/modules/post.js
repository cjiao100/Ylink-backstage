import {
  GET_POST_LIST,
  GET_HOT_POST,
  GET_HOT_TOPIC
} from "@/store/mutation-types";
import { GetPostList, GetHotPostList, GetHotTopicList } from "@/api/post";
import moment from "moment";

const Post = {
  state: {
    list: [],
    hot: [],
    topic: []
  },
  mutations: {
    [GET_POST_LIST](state, list) {
      // 这里的 `state` 对象是模块的局部状态
      state.list = list;
    },
    [GET_HOT_POST](state, hot) {
      state.hot = hot;
    },
    [GET_HOT_TOPIC](state, topic) {
      state.topic = topic;
    }
  },

  actions: {
    async getPostList({ commit }, params) {
      const list = await GetPostList(params);
      commit(GET_POST_LIST, list);
    },
    async getHotPostList({ commit }) {
      const hot = await GetHotPostList();
      commit(GET_HOT_POST, hot);
    },
    async getHotTopicList({ commit }) {
      const topic = await GetHotTopicList();
      commit(GET_HOT_TOPIC, topic);
    }
  },

  getters: {
    postHotList({ hot }) {
      return hot.map(item => ({
        id: item._id,
        title: item.title,
        author: item.userId.name,
        browse: item.browse,
        created_at: moment(item.created_at).format("YYYY-MM-DD")
      }));
    },
    postList({ list }) {
      return list.map(item => ({
        id: item._id,
        title: item.title,
        author: item.userInfo.name,
        browse: item.browse,
        awesome: item.awesome,
        comment: item.comment
      }));
    },
    topicHotList({ topic }) {
      return topic.map(item => ({
        id: item._id,
        name: item.title,
        info: {
          browse: item.browse,
          post: item.postList.length
        }
      }));
    }
  }
};

export default Post;
