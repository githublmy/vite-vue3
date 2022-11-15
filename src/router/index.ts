import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home1",
    component: Home,
    children: [],
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/home2",
    name: "home2",
    component: () => import("@/views/index2.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
