import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";
import HomePage from "./components/HomePage"
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: HomePage,
        name: "home",
    },
    {
        path: "/second",
        component: Example2,
        name: "second",
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;