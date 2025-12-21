import AgentTransactionsHistory from "@/pages/Agent/AgentTransactionsHistory";
import { CashIn } from "@/pages/Agent/CashIn";
import { CashOut } from "@/pages/Agent/CashOut";
import MyProfile from "@/pages/MyProfile";
import { UpdateProfileForm } from "@/pages/UpdateProfile";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AgentOverview = lazy(() => import("@/pages/Agent/AgentOverview"));

export const agentSidebarItems: ISidebarItem[] = [
    {
        title: "Agent Dashboard",
        items: [
            {
                title: "Agent Overview",
                url: "/agent/agent-overview",
                component: AgentOverview
            }
        ],
    },
    {
        title: "Transaction Management",
        items: [
            {
                title: "Cash In",
                url: "/agent/cash-in",
                component: CashIn,
            },
            {
                title: "Cash Out",
                url: "/agent/cash-out ",
                component: CashOut,
            },
            {
                title: "Transaction History",
                url: "/agent/transaction-history",
                component: AgentTransactionsHistory,
            }
        ],
    },
    {
        title: "Setting",
        items: [
            {
                title: "My Profile",
                url: "/agent/my-profile",
                component: MyProfile,
            },
            {
                title: "Update Profile",
                url: "/agent/update-profile",
                component: UpdateProfileForm,
            },
        ],
    },
];
