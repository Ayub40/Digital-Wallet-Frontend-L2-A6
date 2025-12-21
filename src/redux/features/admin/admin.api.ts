/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // Public overview (NO AUTH)
        getPublicOverview: builder.query<any, void>({
            query: () => ({
                url: "/admin/public-overview",
                method: "GET",
            }),
        }),

        // Admin overview (ADMIN ONLY)
        getAdminOverview: builder.query<any, void>({
            query: () => ({
                url: "/admin/overview",
                method: "GET",
            }),
            providesTags: ["ADMIN"],
        }),

        // User/Agent Overview 
        getOverview: builder.query<any, void>({
            query: () => ({
                url: "/user/overview",
                method: "GET",
            }),
            providesTags: ["USER", "AGENT"],
        }),

    }),
});


export const {
    useGetPublicOverviewQuery,
    useGetAdminOverviewQuery,
    useGetOverviewQuery
} = adminApi;
