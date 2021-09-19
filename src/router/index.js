import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/login/login.vue";
import Hello from "../components/HelloWorld.vue";
import Translator_order from "../components/translator/Translator_Order";

Vue.use(VueRouter);

// Protocol to avoid redirection duplication
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "hello",
    path: "/hello",
    component: Hello,
  },
  {
    name: "translator_order",
    path: "/torder",
    component: Translator_order,
  },
];

const router = new VueRouter({ mode: "history", routes: routes });

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;