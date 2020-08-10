import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Exercise1 from "@/views/exo-1/Exercise1.vue";
import Exercise2 from "@/views/exo-2/Exercise2.vue";
import Exercise3 from "@/views/exo-3/Exercise3.vue";
import UserList from "@/views/vue-router/UserList.vue";
import UserDetails from "@/views/vue-router/UserDetails.vue";
import Exercise4 from "@/views/exo-4/Exercise4.vue";
import Exercise5 from "@/views/exo-5/Exercise5.vue";
//import Exercise6 from "@/views/exo-6/Exercise6.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/exo-1",
    name: "Exercise1",
    component: Exercise1,
  },
  {
    path: "/exo-2",
    name: "Exercise2",
    component: Exercise2,
  },
  {
    path: "/exo-3",
    name: "Exercise3",
    component: Exercise3,
  },
  {
    path: "/exo-4",
    name: "Exercise4",
    component: Exercise4,
  },
  {
    path: "/exo-5",
    name: "Exercise5",
    component: Exercise5,
  },
  // Route qui match l'url du navigateur si elle correspond à /users
  // Cette route charge/affiche le composant UserList
  // Le name est décidé arbitrairement
  {
    path: "/users",
    name: "Users",
    component: UserList,
  },
  // Route qui match l'url du navigateur
  // si elle correspond à (par exemple) /users/3 ou /users/19 mais aussi /users/tutu
  {
    path: "/users/:id",
    name: "UserDetails",
    component: UserDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
