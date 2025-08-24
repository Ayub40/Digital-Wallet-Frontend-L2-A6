import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { agentSidebarItems } from "@/routes/agentSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
    console.log(userRole);
    // console.log(role.admin);
    // console.log(role.superAdmin);

    switch (userRole) {
        case role.superAdmin:
            return [...adminSidebarItems];
        // eta dile superAdmin, adminSidebarItems, userSidebarItems er route golo dekhte parbe
        // return [...adminSidebarItems, ...userSidebarItems];
        case role.admin:
            return [...adminSidebarItems];
        case role.agent:
            return [...agentSidebarItems];
        case role.user:
            return [...userSidebarItems];
        default:
            return [];
    }
};