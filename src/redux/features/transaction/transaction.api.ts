import { baseApi } from "@/redux/baseApi";
// import type { IResponse, ITourPackage } from "@/types";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // addMoney
        addMoney: builder.mutation({
            query: (data: { amount: number }) => ({
                url: "/transaction/addMoney",
                method: "POST",
                data,
            }),
            invalidatesTags: ["TRANSACTIONS"],
        }),

        // Send Money
        sendMoney: builder.mutation({
            query: (transactionData) => ({
                url: "/transaction/send-money",
                method: "POST",
                data: transactionData,
            }),
            invalidatesTags: ["TRANSACTIONS"],
        }),

        // WithDraw Money
        withdrawMoney: builder.mutation({
            query: (data: { amount: number }) => ({
                url: "/transaction/withDrawMoney",
                method: "POST",
                data,
            }),
            invalidatesTags: ["TRANSACTIONS"],
        }),

        // Transaction History
        getHistory: builder.query({
            query: (params) => ({
                url: "/transaction/get-history",
                method: "GET",
                params
            }),
            providesTags: ["TRANSACTIONS"],
            transformResponse: (response) => response
        }),

        // Agent Cash-In
        agentCashIn: builder.mutation({
            query: (data: { identifier: string; amount: number }) => ({
                url: "/transaction/cash-in",
                method: "POST",
                data,
            }),
            invalidatesTags: ["TRANSACTIONS"],
        }),

        // Agent Cash-Out
        agentCashOut: builder.mutation({
            query: (data: { identifier: string; amount: number }) => ({
                url: "/transaction/cash-out",
                method: "POST",
                data,
            }),
            invalidatesTags: ["TRANSACTIONS"],
        }),

        getAllTransactions: builder.query({
            query: (params) => ({
                url: "/transaction/transactions-history",
                method: "GET",
                params
            }),
            providesTags: ["ADMIN"],
            // transformResponse: (response) => response.data,
            transformResponse: (response) => response
        }),

    }),
});

export const {
    useAddMoneyMutation,
    useSendMoneyMutation,
    useWithdrawMoneyMutation,
    useGetHistoryQuery,
    useAgentCashInMutation,
    useAgentCashOutMutation,
    useGetAllTransactionsQuery
} = transactionApi;

