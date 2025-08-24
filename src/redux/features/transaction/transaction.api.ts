import { baseApi } from "@/redux/baseApi";
// import type { IResponse, ITourPackage } from "@/types";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendMoney: builder.mutation({
            query: (transactionData) => ({
                url: "/transaction/send-money",
                method: "POST",
                data: transactionData,
            }),
            invalidatesTags: ["TRANSACTIONS"],
        }),

        withdrawMoney: builder.mutation({
            query: (data: { amount: number }) => ({
                url: "/transaction/withDrawMoney",
                method: "POST",
                data,
            }),
            invalidatesTags: ["TRANSACTIONS"],
        }),

    }),

});

export const {
    useSendMoneyMutation,
    useWithdrawMoneyMutation
} = transactionApi;