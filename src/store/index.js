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
    setOrderData({ commit }, newOrderLst) {
      commit("setOrderData", newOrderLst);
    },
    setUserLogin({ commit }, userStatus) {
      commit("setLogIn", userStatus.isLoggedIn);
      commit("setUserStatus", userStatus.isTranslator);
    },
    addNewOrder({ commit }, newOrder) {
      commit("addOrder", newOrder);
    },
  },
  mutations: {
    setOrderData(state, newLst) {
      this.state.orderData = newLst;
    },
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
