/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAdminOverview: builder.query<any, void>({
            query: () => ({
                url: "/admin/overview",
                method: "GET",
            }),
            providesTags: ["ADMIN"],
        }),
    }),
});

export const { useGetAdminOverviewQuery } = adminApi;
