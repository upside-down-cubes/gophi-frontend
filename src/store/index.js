import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isTranslator: false,
    orderData: [],
  },
  actions: {
    setUserLogin({ commit }, logInStatus, translatorStatus) {
      commit("setLogIn", logInStatus);
      commit("setUserStatus", translatorStatus);
    },
    addNewOrder({ commit }, newOrder) {
      commit("addOrder", newOrder);
    },
  },
  mutations: {
    setLogIn(state, loading_status) {
      this.state.isLoggedIn = loading_status;
    },
    setUserStatus(state, userStatus) {
      this.state.isTranslator = userStatus;
    },
    addOrder(state, order) {
      this.state.orderData.push(order);
    },
  },
  modules: {},
});
