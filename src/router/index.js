import { createRouter, createWebHistory } from "vue-router";
import MyLogin from "@/views/MyLogin.vue";
import MyAdmin from "@/views/MyAdmin.vue";
import MySignup from "@/views/MySignup.vue";
import MyDashboard from "@/views/MyDashboard.vue";
import AjouterFormateur from "@/views/AjouFourmateur.vue";
import MyCenter from "@/views/MyCenter.vue";
import MyFormation from "@/views/MyFormation.vue";
import EditFormateur from "@/views/EditFormateur.vue";
const routes = [
  {
    name: "my_login",
    path: "/",
    component: MyLogin,
    meta: {
      title: "Login",
    },
  },
  {
    name: "my_admin",
    path: "/admin",
    component: MyAdmin,
    meta: {
      title: "Admin",
    },
  },
  {
    name: "my_signup",
    path: "/signup",
    component: MySignup,
    meta: {
      title: "Signup",
    },
  },
  {
    name: "my_dashboard",
    path: "/dashboard",
    component: MyDashboard,
    meta: {
      title: "Dashboard",
    },
  },
  {
    name: "My_fourmateur",
    path: "/ajouterformateur",
    component: AjouterFormateur,
    meta: {
      title: "Formateur",
    },
  },
  {
    name: "My_formation",
    path: "/ajouterformation",
    component: MyFormation,
    meta: {
      title: "Formateur",
    },
  },
  {
    name: "My_center",
    path: "/ajoutercenter",
    component: MyCenter,
    meta: {
      title: "Center",
    },
  },
  {
    name: "Edit_Formateur",
    path: "/editformateur/:formateurId",
    component: EditFormateur,
    meta: {
      title: "EditFormateur",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
