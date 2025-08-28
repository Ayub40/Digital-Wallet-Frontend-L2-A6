// import AllUser from "@/pages/Admin/AllUser";
import ManageAgents from "@/pages/Admin/ManageAgents";
import ManageUsers from "@/pages/Admin/ManageUsers";
import ViewTransactions from "@/pages/Admin/ViewTransactions";
import MyProfile from "@/pages/MyProfile";
import { UpdateProfileForm } from "@/pages/UpdateProfile";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

// const Analytics = lazy(() => import("@/pages/Admin/Analytics"));
const AdminOverview = lazy(() => import("@/pages/Admin/AdminOverview"));

export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Admin Overview",
                url: "/admin/admin-overview",
                component: AdminOverview,
            },
        ],
    },
    {
        title: "Project Management",
        items: [
            {
                title: "Manage Users",
                url: "/admin/manage-users",
                component: ManageUsers,
            },
            {
                title: "Manage Agents",
                url: "/admin/manage-agents",
                component: ManageAgents,
            },
            {
                title: "View All Transactions",
                url: "/admin/view-transactions",
                component: ViewTransactions,
            },
        ],
    },
    {
        title: "Setting",
        items: [
            {
                title: "My Profile",
                url: "/admin/my-profile",
                component: MyProfile,
            },
            {
                title: "Update Profile",
                url: "/admin/update-profile",
                component: UpdateProfileForm,
            },
        ],
    },
];


