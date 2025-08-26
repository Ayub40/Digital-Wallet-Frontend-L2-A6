// import AgentTransactionsHistory from "@/pages/Agent/AgentTransactionsHistory";
import { CashIn } from "@/pages/Agent/CashIn";
import { CashOut } from "@/pages/Agent/CashOut";
import MyProfile from "@/pages/MyProfile";
import { UpdateProfileForm } from "@/pages/UpdateProfile";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

// const TransactionHistory = lazy(() => import("@/pages/TransactionHistory"));
const AgentTransactionsHistory = lazy(() => import("@/pages/Agent/AgentTransactionsHistory"));

export const agentSidebarItems: ISidebarItem[] = [
    {
        title: "Agent Dashboard",
        items: [
            {
                title: "Transaction History",
                url: "/agent/transaction-history",
                // component: TransactionHistory,
                component: AgentTransactionsHistory,

                // title: "Transaction",
                // url: "/agent/transaction-history",
                // component: AgentTransactionsHistory,
            },
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
            // {
            //     title: "Transaction History",
            //     url: "/agent/transaction-history ",
            //     component: TransactionHistory,
            // },
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
