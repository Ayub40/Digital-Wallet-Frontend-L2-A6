import { UpdateProfileForm } from "@/pages/UpdateProfile";
import { SendMoney } from "@/pages/User/SendMoney";
import UserTransactionHistory from "@/pages/User/UserTransactionHistory";
import Transaction from "@/pages/User/UserTransactionHistory";
import { UserWithDrawMoney } from "@/pages/User/UserWithDrawMoney";
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
            {
                title: "Withdraw Money",
                url: "/user/withdraw-money",
                component: UserWithDrawMoney,
            },
            {
                title: "Transaction History",
                url: "/user/transaction-history",
                component: UserTransactionHistory,
            },

        ]
    },
    {
        title: "Setting",
        items: [
            {
                title: "Update Profile",
                url: "/user/update-profile",
                component: UpdateProfileForm,
            },
        ],
    },
];