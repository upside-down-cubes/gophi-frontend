import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/login/login.vue";
import Hello from "../components/HelloWorld.vue";
import Translator_order from "../components/translator/Translator_Order";
import TranslatorWorkspace from "../components/translator/TranslatorWorkspace";
import ManageOrders from "../components/customer/ManageOrders";
import MakeOrder from "../components/customer/MakeOrder";
import SignUp_Customer from "../components/signup/SignUp_Customer";
import SignUp_Translator from "../components/signup/SignUp_Translator";

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
    component: Hello,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "translator_order",
    path: "/torder",
    component: Translator_order,
  },
  {
    name: "Workspace",
    path: "/workspace",
    component: TranslatorWorkspace,
  },
  {
    name: "ManageOrders",
    path: "/manageorders",
    component: ManageOrders,
  },
  {
    name: "Signup_Translator",
    path: "/tsignup",
    component: SignUp_Translator,
  },
  {
    name: "Signup_Customer",
    path: "/csignup",
    component: SignUp_Customer,
  },
  {
    name: "MakeOrder",
    path: "/makeorder",
    component: MakeOrder,
  },
];

const router = new VueRouter({ mode: "history", routes: routes });

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
