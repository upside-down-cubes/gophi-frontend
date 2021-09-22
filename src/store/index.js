import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    setUserLogin({ commit }, logInStatus, customerStatus) {
      commit("setLogIn", logInStatus);
      commit("setUserStatus", customerStatus);
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
      this.state.isCustomer = userStatus;
    },
    addOrder(state, order) {
      this.state.orderData.push(order);
    },
  },
  state: {
    isLoggedIn: false,
    isCustomer: false,
    orderData: [],
  },
  modules: {},
});
