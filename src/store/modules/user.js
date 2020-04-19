import { LOAD_USER_INFO, GET_USER_LIST } from "@/store/mutation-types";
import { simple, GetUserList } from "@/api/user";
import moment from "moment";

const User = {
  state: {
    simpleUserInfo: {},
    list: [],
    identities: ["超级用户", "普通用户", "校园用户-学生", "校园用户-老师"]
  },
  mutations: {
    [LOAD_USER_INFO](state, simpleUserInfo) {
      // 这里的 `state` 对象是模块的局部状态
      state.simpleUserInfo = simpleUserInfo;
    },
    [GET_USER_LIST](state, list) {
      // 这里的 `state` 对象是模块的局部状态
      state.list = list;
    }
  },

  actions: {
    async loadUserInfo({ commit }) {
      const simpleUserInfo = await simple();
      commit(LOAD_USER_INFO, simpleUserInfo);
    },
    async getUserList({ commit }, params) {
      const list = await GetUserList(params);
      commit(GET_USER_LIST, list);
    }
  },

  getters: {
    simpleUserInfo(state) {
      return state.simpleUserInfo;
    },
    userList(state) {
      return state.list.map(item => ({
        name: item.name,
        email: item.email,
        identity: state.identities[item.identity],
        created_at: moment(item.created_at || item.createDate).format(
          "YYYY-MM-DD"
        ),
        lastDate: moment(item.lastDate).fromNow()
      }));
    },
    activeUser({ list }) {
      return {
        active: list.filter(item =>
          moment(moment().weekday(0)).isBefore(item.lastDate)
        ).length,
        other: list.filter(item =>
          moment(moment().weekday(0)).isAfter(item.lastDate)
        ).length,
        total: list.length
      };
    },
    schoolUser({ list }) {
      return {
        student: list.filter(item => item.identity == 2).length,
        teacher: list.filter(item => item.identity == 3).length,
        total: list.filter(item => item.identity == 3 || item.identity == 2)
          .length
      };
    }
  }
};

export default User;
