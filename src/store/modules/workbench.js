import { LOAD_WEEK_DATA } from "@/store/mutation-types";
import { GetDataOfWeek } from "@/api/workbench";

const User = {
  state: {
    week: {}
  },
  mutations: {
    [LOAD_WEEK_DATA](state, week) {
      // 这里的 `state` 对象是模块的局部状态
      state.week = week;
    }
  },

  actions: {
    async loadWeekData({ commit }) {
      const weekData = await GetDataOfWeek();
      commit(LOAD_WEEK_DATA, weekData);
    }
  },

  getters: {
    week(state) {
      return state.week;
    }
  }
};

export default User;
