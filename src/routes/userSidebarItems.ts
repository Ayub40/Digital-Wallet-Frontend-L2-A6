import MyProfile from "@/pages/MyProfile";
import TransactionHistory from "@/pages/TransactionHistory";
import { UpdateProfileForm } from "@/pages/UpdateProfile";
// import AddMoney from "@/pages/User/AddMoney";
import { SendMoney } from "@/pages/User/SendMoney";
import UserOverview from "@/pages/User/UserOverview";
import { UserWithDrawMoney } from "@/pages/User/UserWithDrawMoney";
import type { ISidebarItem } from "@/types";


export const userSidebarItems: ISidebarItem[] = [
    {
        title: "User Dashboard",
        items: [
            {
                title: "Overview",
                url: "/user/overview",
                component: UserOverview
            }
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
                title: "Transaction",
                url: "/user/transaction",
                component: TransactionHistory
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