export default {
    path: "/perform",
    component: _=> import("@pages/perform"),
    name: "perform",
    // redirect: "/perform",
    // children: [
    //     {
    //         path: "all",
    //         component: _ => import("@pages/all"),
    //         meta: {
    //             flag: true,
    //             requiredAuth: false,
    //         }
    //     },
    //     {
    //         path: "sing",
    //         meta: {
    //             flag: true,
    //             requiredAuth: false,
    //         }
    //     }
    // ],

}