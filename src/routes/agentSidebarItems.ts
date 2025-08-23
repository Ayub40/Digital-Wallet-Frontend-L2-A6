import AddMoney from "@/pages/Agent/AddMoney";
// import AgentTransactionsHistory from "@/pages/Agent/AgentTransactionsHistory";
import WithdrawMoney from "@/pages/Agent/WithdrawMoney";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AgentTransactionsHistory = lazy(() => import("@/pages/Agent/AgentTransactionsHistory"));

export const agentSidebarItems: ISidebarItem[] = [
    {
        title: "Agent Dashboard",
        items: [
            {
                title: "Transaction",
                url: "/agent/transaction-history",
                component: AgentTransactionsHistory,
            },
        ],
    },
    {
        title: "Transaction Management",
        items: [
            {
                title: "Add Money",
                url: "/agent/add-money",
                component: AddMoney,
            },
            {
                title: "Withdraw Money",
                url: "/agent/withdraw-money ",
                component: WithdrawMoney,
            },
            // {
            //     title: "Add Tour",
            //     url: "/admin/add-tour",
            //     component: AddTour,
            // },
        ],
    },
];
