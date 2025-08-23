import { SendMoney } from "@/pages/User/SendMoney";
import Transaction from "@/pages/User/Transaction";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
    {
        title: "User Dashboard",
        items: [
            {
                title: "Transaction",
                url: "/user/transaction",
                component: Transaction,
            },
        ],
    },
    {
        title: "User Action",
        items: [
            {
                title: "Send Money",
                url: "/user/send-money",
                component: SendMoney,
            },
        ]
    }
];