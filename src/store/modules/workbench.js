import {
  LOAD_WEEK_DATA,
  GET_TODO_LIST,
  CREATE_NEW_TODO
} from "@/store/mutation-types";
import { AddTodo, GetTodoList, GetDataOfWeek } from "@/api/workbench";

const User = {
  state: {
    week: {},
    todoList: [],
    todo: {}
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
    }
  },

  getters: {
    week(state) {
      return state.week;
    },
    todoList({ todoList }) {
      return todoList;
    }
  }
};

export default User;
