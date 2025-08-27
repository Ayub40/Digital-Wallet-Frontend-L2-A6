import { baseApi } from "@/redux/baseApi";
// import type { IResponse, ISendOtp, IVerifyOtp } from "@/types";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["USER"],
        }),

        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            }),
        }),

        updateProfile: builder.mutation({
            query: (payload) => ({
                url: "/user/update-profile",
                method: "PATCH",
                data: payload,
            }),
            invalidatesTags: ["USER"],
        }),

        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["USER"],
        }),

        changePassword: builder.mutation({
            query: (payload) => ({
                url: "/auth/change-password",
                method: "POST",
                data: payload,
            }),
            invalidatesTags: ["USER"],
        }),

        getAllUsers: builder.query({
            query: () => ({
                url: "/user/all-users",
                method: "GET",
            }),
            providesTags: ["ADMIN"],
        }),

        getAllAgents: builder.query<any, void>({
            query: () => ({
                url: "/user/agents",
                method: "GET",
            }),
            providesTags: ["ADMIN"],
        }),

        userStatus: builder.mutation({
            query: (userId: string) => ({
                url: `/user/status/${userId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["ADMIN"],
        }),

        updateUserRole: builder.mutation({
            query: ({ userId, role }) => ({
                url: `/user/role/${userId}`,
                method: "PATCH",
                data: { role },
            }),
            invalidatesTags: ["ADMIN"],
        }),

        getSingleUser: builder.query({
            query: (userId: string) => ({
                url: `/user/${userId}`,
                method: "GET",
            }),
            providesTags: ["ADMIN"],
        }),

        agentApproval: builder.mutation<any, string>({
            // query: (userId: string) => ({
            query: (userId) => ({
                url: `/user/agent/approve-suspend/${userId}`,
                method: "PATCH",
            }),
            invalidatesTags: ["ADMIN"],
        }),

    }),
});

export const
    {
        useRegisterMutation,
        useLoginMutation,
        useUserInfoQuery,
        useLogoutMutation,
        useUpdateProfileMutation,
        useChangePasswordMutation,
        useGetAllUsersQuery,
        useGetAllAgentsQuery,
        useUserStatusMutation,
        useUpdateUserRoleMutation,
        useGetSingleUserQuery,
        useAgentApprovalMutation,
        useLazyGetAllAgentsQuery
    } = authApi;
