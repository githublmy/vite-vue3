import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import NProgress from "nprogress";
import "nprogress/nprogress.css"; //这个样式必须引入
NProgress.configure({ showSpinner: false }); // 显示右上角螺旋加载提示

import Layout from "@/views/layout/index.vue";
import NotFound from "@/views/error/404.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    meta: {
      title: "首页",
    },
    redirect: "/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "user",
        meta: {
          title: "用户管理",
        },
        component: () => import("@/views/system/user/index.vue"),
        children: [
          {
            path: "index",
            meta: {
              title: "dfsdfsd",
            },
            component: () => import("@/views/index2.vue"),
          },
          {
            path: "index2",
            meta: {
              title: "用理df",
            },
            component: () => import("@/views/index.vue"),
          },
        ],
      },
      {
        path: "role",
        meta: {
          title: "角色管理",
        },
        component: () => import("@/views/system/role/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  // 页面404处理，将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from) => {
  NProgress.start(); //开启进度条
  //中间写其他的项目中所需要的一些代码，例如有些网页只有登录了才能进，在这里可以做出判断，判断完了满足要求后就可以放行 next()
  return true;
});

router.afterEach(() => {
  NProgress.done(); //完成进度条
});
export default router;
