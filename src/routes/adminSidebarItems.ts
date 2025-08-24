import ManageAgents from "@/pages/Admin/ManageAgents";
import ManageUsers from "@/pages/Admin/ManageUsers";
import ViewTransactions from "@/pages/Admin/ViewTransactions";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: Analytics,
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
];


// import AddMoney from "@/pages/Agent/AddMoney";
// import WithdrawMoney from "@/pages/Agent/WithdrawMoney";
// import type { ISidebarItem } from "@/types";
// import { lazy } from "react";

// const AgentTransactionsHistory = lazy(() => import("@/pages/Agent/AgentTransactionsHistory"));

// export const agentSidebarItems: ISidebarItem[] = [
//     {
//         title: "Agent Dashboard",
//         items: [
//             {
//                 title: "Transaction",
//                 url: "/agent/transaction-history",
//                 component: AgentTransactionsHistory,
//             },
//         ],
//     },
//     {
//         title: "Transaction Management",
//         items: [
//             {
//                 title: "Add Money",
//                 url: "/agent/add-money",
//                 component: AddMoney,
//             },
//             {
//                 title: "Withdraw Money",
//                 url: "/agent/withdraw-money ",
//                 component: WithdrawMoney,
//             },
//         ],
//     },
// ];
