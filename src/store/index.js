import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    setUserLogin({ commit }, logInStatus, customerStatus) {
      commit("setLogIn", logInStatus);
      commit("setUserStatus", customerStatus);
    },
  },
  mutations: {
    setLogIn(state, loading_status) {
      this.state.isLoggedIn = loading_status;
    },
    setUserStatus(state, userStatus) {
      this.state.isCustomer = userStatus;
    },
  },
  state: {
    isLoggedIn: false,
    isCustomer: false,
  },
  modules: {},
});
