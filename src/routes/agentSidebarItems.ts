import Transaction from "@/pages/User/Transaction";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
    {
        title: "Agent Dashboard",
        items: [
            {
                title: "Transaction",
                url: "/user/transaction",
                component: Transaction,
            },
        ],
    },
];