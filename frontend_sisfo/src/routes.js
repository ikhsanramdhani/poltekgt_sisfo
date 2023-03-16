import ipkPages from "./pages/ipkPg.vue"
import PagePoin from "./pages/PgPoin.vue"
import profPg from "./pages/prof.vue"
import UbahPW from "./pages/UPw.vue"

export default [
    {
        path: "/",
        name: "ipkPages",
        component: ipkPages
    },
    {
        path: "/poin",
        name: "PagePoin",
        component: PagePoin
    },
    {
        path: "/prof",
        name: "profPg",
        component: profPg
    },
    {
        path: "/UbahPW",
        name: "UbahPW",
        component: UbahPW
    }
]
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
