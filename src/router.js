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
          path: "activity-public2",
          name: "activity-public2",

          component: () => import("./views/activity-public2/index.vue")
        },

        {
          path: "activity-public",
          name: "activity-public",

          component: () => import("./views/activity-public/index.vue")
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
          path: "travels-edit/:id",
          name: "travels-edit",
          component: () => import("./views/travels-public/edit.vue")
        },
        {
          path: "activity-edit/:id",
          name: "activity-edit",
          component: () => import("./views/activity-public/edit.vue")
        },
        {
          path: "post-show/:id",
          name: "post-show",

          component: () => import("./views/post-show/index.vue")
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
          path: "activity-show/:id",
          name: "activity-show",
          component: () => import("./views/activity-show/index.vue")
        },
        {
          path: "new-show/:id",
          name: "new-show",
          component: () => import("./views/new-show/index.vue")
        },
        {
          path: "knowledge-show/:id",
          name: "knowledge-show",
          component: () => import("./views/knowledge-show/index.vue")
        },
        {
          path: "goods-show/:id",
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
        },
        {
          path: "travels-show/:id",
          name: "travels-show",
          component: () => import("./views/travels-show/index.vue")
        },
        {
          path: "activity-join/:id",
          name: "activity-join",
          component: () => import("./views/activity-join/index.vue")
        },
        {
          path: "mLogin",
          name: "mLogin",
          component: () => import("./views/mLogin/index.vue")
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
    },
    {
      path: "/map",
      name: "map",
      component: () => import("./components/BdmapT/index.vue")
    }
  ]
});
