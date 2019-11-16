export default {
    path: "/search",
    component: _ => import("@components/search"),
    name: "search",
    meta: {
        flag: false,
        requiredAuth: false,
    },

}