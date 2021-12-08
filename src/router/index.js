import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import NewDriver from "../views/NewDriver.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/driver/new",
    name: "NewDriver",
    component: NewDriver,
    meta:{
      requireAuth: true
    },
  },
  {
    path: "/drivers",
    name: "Drivers",
    meta:{
      requireAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Drivers.vue"),
  },
  {
    path: "/driver/:id",
    name: "Driver",
    meta:{
      requireAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Driver.vue"),
  },
  {
    path: "/driver/edit/:id",
    name: "EditDriver",
    meta:{
      requireAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditDriver.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requireAuth)){
      if (!loggedIn){
          next({
              path:'/',
              query: { redirect: to.fullPath }
          })
      }
      else{
        next()
      }
  }
  else{
    next()
  }
})

export default router;
