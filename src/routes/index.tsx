import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Homepage from "@/pages/Homepage";
import Verify from "@/pages/Verify";
import type { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { userSidebarItems } from "./userSidebarItems";
import Unauthorized from "@/pages/Unauthorized";
import { adminSidebarItems } from "./adminSidebarItems";
import { agentSidebarItems } from "./agentSidebarItems";
import Features from "@/pages/Public/Features";
import Pricing from "@/pages/Public/Pricing";
import About from "@/pages/Public/About";
import Faq from "@/pages/Public/Faq";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Homepage,
                index: true,
            },
            {
                Component: Features,
                path: "features",
            },
            {
                Component: Pricing,
                path: "pricing",
            },
            {
                Component: About,
                path: "about",
            },
            {
                Component: Faq,
                path: "faq",
            },
        ],
    },
    // ================ Super-Admin Dashboard ====================
    {
        Component: withAuth(DashboardLayout, [role.admin as TRole, role.superAdmin as TRole]),
        path: "/admin",
        children: [
            { index: true, element: <Navigate to="/admin/admin-overview" /> },
            ...generateRoutes(adminSidebarItems),
        ],
    },
    // ================= AgentDashBoard====================
    {
        Component: withAuth(DashboardLayout, role.agent as TRole),
        path: "/agent",
        children: [
            { index: true, element: <Navigate to="/agent/agent-overview" /> },
            ...generateRoutes(agentSidebarItems),
        ],
    },
    // ================= User Dashboard ===================
    {
        Component: withAuth(DashboardLayout, role.user as TRole),
        path: "/user",
        children: [
            { index: true, element: <Navigate to="/user/overview" /> },
            ...generateRoutes(userSidebarItems),
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
    },
    {
        Component: Verify,
        path: "/verify"
    },
    {
        Component: Unauthorized,
        path: "/unauthorized",
    },
]);
