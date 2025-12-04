import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/home",
    component: () => import("@/views/home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
