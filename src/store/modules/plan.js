import {
  TRANSLATE,
  GET_PLAN_LIST,
  GET_WROD_LIST,
  CREATE_NEW_PLAN,
  GET_WROD_LIST_BY_PLAN
} from "@/store/mutation-types";
import {
  SearchWord,
  GetPlanList,
  GetWordList,
  AddWordOnPlan,
  CreateNewPLan,
  DeleteWordOnPlan,
  GetWordListByPlanId
} from "@/api/plan";

const Plan = {
  state: {
    plan: [],
    wordList: [],
    wordOnPlan: [],
    word: null,
    newPlan: {}
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
    },
    [TRANSLATE](state, word) {
      state.word = word.data;
    },
    [CREATE_NEW_PLAN](state, plan) {
      state.newPlan = plan;
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
    },
    async addWordOnPlan(store, params) {
      await AddWordOnPlan(params.id, params.list);
      // dispatch("getWordList");
    },
    async deleteWordOnPlan(store, params) {
      await DeleteWordOnPlan(params.id, params.list);
      // dispatch("getWordList");
    },
    async translate({ commit, dispatch }, params) {
      const word = await SearchWord(params);
      commit(TRANSLATE, word);
      dispatch("getWordList");
    },
    async createNewPlan({ state }) {
      try {
        await CreateNewPLan(state.newPlan);
      } catch (error) {
        return error;
      }
    },
    async setNewPlan({ commit }, plan) {
      commit(CREATE_NEW_PLAN, plan);
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
    },
    currentPlanName({ plan }) {
      return id => plan.find(item => item.id === id).name;
    },
    word({ word }) {
      return word;
    }
  }
};

export default Plan;
