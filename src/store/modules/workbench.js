import {
  LOAD_WEEK_DATA,
  GET_TODO_LIST,
  CREATE_NEW_TODO,
  LOAD_ONLINE_USER
} from "@/store/mutation-types";
import {
  AddTodo,
  GetTodoList,
  GetDataOfWeek,
  GetOnlineUser
} from "@/api/workbench";
import moment from "moment";

const User = {
  state: {
    week: {},
    todoList: [],
    todo: {},
    online: []
  },
  mutations: {
    [LOAD_WEEK_DATA](state, week) {
      // 这里的 `state` 对象是模块的局部状态
      state.week = week;
    },
    [GET_TODO_LIST](state, payload) {
      state.todoList = payload;
    },
    [CREATE_NEW_TODO](state, payload) {
      state.todo = payload;
    },
    [LOAD_ONLINE_USER](state, payload) {
      state.online = payload;
    }
  },

  actions: {
    async loadWeekData({ commit }) {
      const weekData = await GetDataOfWeek();
      commit(LOAD_WEEK_DATA, weekData);
    },
    async addTodo({ state }) {
      try {
        await AddTodo(state.todo);
      } catch (error) {
        return error;
      }
    },
    async setNewTodo({ commit }, todo) {
      commit(CREATE_NEW_TODO, todo);
    },
    async getTodoList({ commit }) {
      const list = await GetTodoList();
      commit(GET_TODO_LIST, list);
    },
    async loadOnlineUser({ commit }) {
      const online = await GetOnlineUser();
      commit(LOAD_ONLINE_USER, online);
    }
  },

  getters: {
    week(state) {
      return state.week;
    },
    todoList({ todoList }) {
      return todoList;
    },
    online({ online }) {
      return (
        online &&
        online
          .map(item => ({
            date: moment(item.date).format("DD-HH:mm"),
            online: item.online
          }))
          .sort((a, b) => {
            return a.date > b.date ? 1 : -1;
          })
      );
    }
  }
};

export default User;
