import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRoles?: TRole | TRole[]) => {
    return function AuthWrapper() {
        const { data, isLoading } = useUserInfoQuery(undefined);

        if (!isLoading && !data?.data?.email) {
            return <Navigate to="/login" />;
        }

        // Blocked user check
        if (!isLoading && data?.data?.isBlocked) {
            return <Navigate to="/unauthorized" />;
        }

        // single role handle
        if (typeof requiredRoles === "string") {
            if (!isLoading && requiredRoles !== data?.data?.role) {
                return <Navigate to="/unauthorized" />;
            }
        }

        // multiple roles handle
        if (Array.isArray(requiredRoles)) {
            if (!isLoading && !requiredRoles.includes(data?.data?.role)) {
                return <Navigate to="/unauthorized" />;
            }
        }

        return <Component />;
    };
};


// import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
// import type { TRole } from "@/types";
// import type { ComponentType } from "react";
// import { Navigate } from "react-router";

// export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
//     return function AuthWrapper() {
//         const { data, isLoading } = useUserInfoQuery(undefined);

//         if (!isLoading && !data?.data?.email) {
//             return <Navigate to="/login" />;
//         }

//         if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
//             return <Navigate to="/unauthorized" />;
//         }

//         return <Component />;
//     };
// };
