import App from "@/App";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Homepage from "@/pages/Homepage";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Homepage,
                index: true,
            },
        ],
    },
    // ============================================================
    {
        Component: Login,
        path: "/login"
    },
    {
        Component: Register,
        path: "/register"
    }
]);
