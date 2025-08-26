import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery(),

    // eta ( tagTypes ) dile reload na diai data cole asbe
    // tagTypes: ["USER", "TOUR", "DIVISION", "BOOKING"],
    tagTypes: ["USER", "TRANSACTIONS", "ADMIN"],
    endpoints: () => ({}),
});