import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/options",
    name: "Options",
    component: () =>
      import(/* webpackChunkName: "options" */ "../views/OptionsApiPage.vue")
  },
  {
    path: "/composition",
    name: "Composition",
    component: () =>
      import(/* webpackChunkName: "composition" */ "../views/CompositionApiPage.vue")
  },
  {
    path: "/class",
    name: "Class",
    component: () =>
      import(/* webpackChunkName: "class" */ "../views/ClassComponentPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
