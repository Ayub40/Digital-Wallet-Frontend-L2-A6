import MyProfile from "@/pages/MyProfile";
import TransactionHistory from "@/pages/TransactionHistory";
import { UpdateProfileForm } from "@/pages/UpdateProfile";
import { SendMoney } from "@/pages/User/SendMoney";
import { UserWithDrawMoney } from "@/pages/User/UserWithDrawMoney";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
    {
        title: "User Dashboard",
        items: [
            {
                title: "Transaction",
                url: "/user/transaction",
                component: TransactionHistory
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
        ]
    },
    {
        title: "Setting",
        items: [
            {
                title: "My Profile",
                url: "/user/my-profile",
                component: MyProfile,
            },
            {
                title: "Update Profile",
                url: "/user/update-profile",
                component: UpdateProfileForm,
            },
        ],
    },
];