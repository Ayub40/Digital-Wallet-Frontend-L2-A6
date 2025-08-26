import { baseApi } from "@/redux/baseApi";
// import type { IResponse, ITourPackage } from "@/types";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

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
            query: () => ({
                url: "/transaction/get-history",
                method: "GET"
            }),
            providesTags: ["TRANSACTIONS"],
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
            query: () => ({
                url: "/transaction/transactions-history",
                method: "GET",
            }),
            providesTags: ["ADMIN"],
        }),


    }),
});

export const {
    useSendMoneyMutation,
    useWithdrawMoneyMutation,
    useGetHistoryQuery,
    useAgentCashInMutation,
    useAgentCashOutMutation,
    useGetAllTransactionsQuery
} = transactionApi;

