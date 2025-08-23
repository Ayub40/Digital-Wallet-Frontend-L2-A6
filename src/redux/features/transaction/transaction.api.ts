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

    }),
});

export const {
    useSendMoneyMutation
} = transactionApi;