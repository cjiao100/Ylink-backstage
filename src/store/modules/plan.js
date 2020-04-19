import {
  GET_PLAN_LIST,
  GET_WROD_LIST,
  GET_WROD_LIST_BY_PLAN
} from "@/store/mutation-types";
import { GetPlanList, GetWordListByPlanId, GetWordList } from "@/api/plan";

const Plan = {
  state: {
    plan: [],
    wordList: [],
    wordOnPlan: []
  },
  mutations: {
    [GET_PLAN_LIST](state, plan) {
      state.plan = plan.data.map(item => ({
        id: item._id,
        name: item.name
      }));
    },
    [GET_WROD_LIST_BY_PLAN](state, wordOnPlan) {
      state.wordOnPlan = wordOnPlan;
    },
    [GET_WROD_LIST](state, wordList) {
      state.wordList = wordList;
    }
  },

  actions: {
    async getPlanList({ commit }) {
      const plan = await GetPlanList();
      commit(GET_PLAN_LIST, plan);
    },
    async getWordListByPlanId({ commit }, index) {
      const wordOnPlan = await GetWordListByPlanId(index);
      commit(GET_WROD_LIST_BY_PLAN, wordOnPlan);
    },
    async getWordList({ commit }) {
      const wordList = await GetWordList();
      commit(GET_WROD_LIST, wordList);
    }
  },

  getters: {
    planList({ plan }) {
      return plan;
    },
    wordOnPlan({ wordOnPlan }) {
      return wordOnPlan.map(item => item._id);
    },
    wordList({ wordList, wordOnPlan }) {
      return wordList.concat(wordOnPlan).map(item => ({
        key: item._id,
        label: item.query,
        disabled: false
      }));
    }
  }
};

export default Plan;
