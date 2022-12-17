import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import users from "./components/users.vue";
import Home from "./components/Home.vue";
const routes = [
  {
    name: "HelloWorld",
    path: "/HelloWorld",
    component: HelloWorld
  },
  {
    name: "users",
    path: "/users/:name",
    component: users
  },
  {
    name: "Home",
    path: "/Home",
    component: Home
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
