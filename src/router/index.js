import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/login/login.vue";
import Home from "../components/home/Home.vue";

import TranslatorSignup from "../components/signup/TranslatorSignup";
import TranslatorOrder from "../components/translator/TranslatorOrder";
import TranslatorCurrentOrders from "../components/translator/TranslatorCurrentOrders";
import TranslatorWorkspace from "../components/translator/TranslatorWorkspace";
import CustomerSignup from "../components/signup/CustomerSignup";
import CustomerOrder from "../components/customer/CustomerOrder";
import CustomerMakeOrder from "../components/customer/MakeOrder";

Vue.use(VueRouter);

// Protocol to avoid redirection duplication
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "TranslatorOrder",
    path: "/received_order",
    component: TranslatorOrder,
  },
  {
    name: "TranslatorCurrentOrders",
    path: "/current_orders",
    component: TranslatorCurrentOrders,
  },
  {
    name: "TranslatorWorkspace",
    path: "/my_workspace/",
    component: TranslatorWorkspace,
  },
  {
    name: "CustomerOrder",
    path: "/my_orders",
    component: CustomerOrder,
  },
  {
    name: "TranslatorSignup",
    path: "/translator_signup",
    component: TranslatorSignup,
  },
  {
    name: "CustomerSignup",
    path: "/customer_signup",
    component: CustomerSignup,
  },
  {
    name: "CustomerMakeOrder",
    path: "/makeorder",
    component: CustomerMakeOrder,
  },
];

const router = new VueRouter({ mode: "history", routes: routes });

router.beforeEach(async (to, from, next) => {
  let isAvailable = false;
  for (let page = 0; page < routes.length; page++) {
    if (routes[page].name === to.name) {
      isAvailable = true;
      break;
    }
  }
  if (!isAvailable) {
    next({ name: "Home" });
  }
  next();
});

export default router;
