import { LOAD_USER_INFO } from "@/store/mutation-types";
import { simple } from "@/api/user";

const User = {
  state: {
    simpleUserInfo: {}
  },
  mutations: {
    [LOAD_USER_INFO](state, simpleUserInfo) {
      // 这里的 `state` 对象是模块的局部状态
      state.simpleUserInfo = simpleUserInfo;
    }
  },

  actions: {
    async loadUserInfo({ commit }) {
      const simpleUserInfo = await simple();
      commit(LOAD_USER_INFO, simpleUserInfo);
    }
  },

  getters: {
    simpleUserInfo(state) {
      return state.simpleUserInfo;
    }
  }
};

export default User;
