import type { ComponentType } from "react";

export type TRole = "SUPER_ADMIN" | "ADMIN" | "AGENT" | "USER";

export type TStatus = "ACTIVE" | "BLOCKED";

export interface IUser {
    _id: string;
    name: string;
    email: string;
    role: TRole;
    status: TStatus;
    createdAt?: string;
    updatedAt?: string;
}

export interface ISidebarItem {
    title: string;
    items: {
        title: string;
        url: string;
        component: ComponentType;
    }[];
}

export type TAgentStatus = "APPROVED" | "SUSPENDED";

// export enum IsAgentStatus {
//     APPROVED = "APPROVED",
//     SUSPENDED = "SUSPENDED"
// }