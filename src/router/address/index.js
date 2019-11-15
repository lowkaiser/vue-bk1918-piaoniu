export default {
    path: "/myaddr",
    component: _ => import("@pages/address"),
    name: "myaddr",
    meta: {
        flag: false,
        requiredAuth: false
    }

}