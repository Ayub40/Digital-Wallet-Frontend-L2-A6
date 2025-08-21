import App from "@/App";
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
]);
