import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/Layout.vue";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/index",
      children: [
        {
          path: "index",
          mane: "index",
          component: () => import("@/views/index/index.vue")
        },
        {
          path: "activity",
          name: "activity",
          component: () => import("./views/activity/index.vue")
        },
        {
          path: "user-center",
          name: "user-center",
          component: () => import("./views/user-center/index.vue")
        },
        {
          path: "userinfo",
          name: "userinfo",

          component: () => import("./components/userinfo/index.vue")
        },

        {
          path: "user-secure",
          name: "user-secure",

          component: () => import("./components/user-secure/index.vue")
        },
        {
          path: "new",
          name: "new",

          component: () => import("./views/new/index.vue")
        },
        {
          path: "knowledge",
          name: "knowledge",

          component: () => import("./views/knowledge/index.vue")
        },
        {
          path: "travels-public",
          name: "travels-public",

          component: () => import("./views/travels-public/index.vue")
        },
        {
          path: "post-show",
          name: "post-show",

          component: () => import("./views/post-show/index.vue")
        },
        {
          path: "user-collect",
          name: "user-collect",
          component: () => import("./components/user-collect/index.vue")
        },
        {
          path: "post",
          name: "post",
          component: () => import("./views/post/index.vue")
        },
        {
          path: "travels",
          name: "travels",
          component: () => import("./views/travels/index.vue")
        },
        {
          path: "goods",
          name: "goods",
          component: () => import("./views/goods/index.vue")
        },
        {
          path: "activity-show",
          name: "activity-show",
          component: () => import("./views/activity-show/index.vue")
        },
        {
          path: "new-show",
          name: "new-show",
          component: () => import("./views/new-show/index.vue")
        },
        {
          path: "knowledge-show",
          name: "knowledge-show",
          component: () => import("./views/knowledge-show/index.vue")
        },
        {
          path: "goods-show",
          name: "goods-show",
          component: () => import("./views/goods-show/index.vue")
        },
        {
          path: "user-info",
          name: "user-info",
          component: () => import("./views/user-info/index.vue")
        },
        {
          path: "goods-public",
          name: "goods-public",
          component: () => import("./views/goods-public/index.vue")
        },
        {
          path: "post-public",
          name: "post-public",
          component: () => import("./views/post-public/index.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",

      component: () => import("./views/About.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login/index.vue")
    }
  ]
});
