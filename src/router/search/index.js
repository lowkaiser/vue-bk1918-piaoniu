export default {
    path: "/search",
    component: _ => import("@components/search"),
    name: "search",
    meta: {
        flag: true,
        requiredAuth: false,
    },

}