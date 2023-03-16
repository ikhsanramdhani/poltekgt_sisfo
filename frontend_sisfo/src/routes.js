import Nilai from "./pages/Nilai.vue";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
export default [
    {
        path: '/',
        component: Login
    },

    {
        path: '/home',
        component: Home
    },

    {
        path: '/nilai',
        component: Nilai,
    },
];