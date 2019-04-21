import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/index",
      name: "index",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/index/index.vue")
    },
    {
      path: "/activity",
      name: "activity",
      // route level code-splitting
      // this generates a separate chunk (activity.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "activity" */ "./views/activity/index.vue")
    },
    {
      path: "/activity-public",
      name: "activity-public",
      // route level code-splitting
      // this generates a separate chunk (activity.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "activity" */ "./views/activity-public/index.vue")
    },
    {
      path: "/user-center",
      name: "user-center",
      // route level code-splitting
      // this generates a separate chunk (activity.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "activity" */ "./views/user-center/index.vue")
    }
  ]
});
