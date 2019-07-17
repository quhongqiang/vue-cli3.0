import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const SHOW_ASIDE = true;
const HIDE_ASIDE = false;

export default new Vuex.Store({
  state: {
    isShow: false
  },
  mutations: {
    showBar(state) {
      state.isShow = SHOW_ASIDE;
    },
    hideBar(state) {
      state.isShow = HIDE_ASIDE;
    }
  },
  actions: {
    showSideBar({ commit }) {
      commit("showBar");
    },
    hideSideBar({ commit }) {
      commit("hideBar");
    }
  }
});
