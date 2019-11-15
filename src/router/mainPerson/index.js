export default {
    path: "/mainPerson",
    component: _ => import("@pages/mainPerson"),
    name: "mainPerson",
    meta: {
        flag: false,
        requiredAuth: false,
    },
}