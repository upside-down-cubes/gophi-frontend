import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/login/login.vue";
import Hello from "../components/HelloWorld.vue";

Vue.use(VueRouter);

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
];

const router = new VueRouter({ mode: "history", routes: routes });

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;