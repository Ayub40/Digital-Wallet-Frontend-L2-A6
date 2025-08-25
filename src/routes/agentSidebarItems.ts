import { CashIn } from "@/pages/Agent/CashIn";
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
                title: "Cash In",
                url: "/agent/cash-in",
                component: CashIn,
            },
            {
                title: "Withdraw Money",
                url: "/agent/withdraw-money ",
                component: WithdrawMoney,
            },
        ],
    },
];
