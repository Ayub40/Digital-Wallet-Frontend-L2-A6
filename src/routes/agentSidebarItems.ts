import { CashIn } from "@/pages/Agent/CashIn";
import { CashOut } from "@/pages/Agent/CashOut";
// import TransactionHistory from "@/pages/TransactionHistory";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const TransactionHistory = lazy(() => import("@/pages/TransactionHistory"));

export const agentSidebarItems: ISidebarItem[] = [
    {
        title: "Agent Dashboard",
        items: [
            {
                title: "Transaction History",
                url: "/agent/transaction-history ",
                component: TransactionHistory,

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
];
