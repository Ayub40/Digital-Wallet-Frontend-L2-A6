import { axiosInstance } from "@/lib/axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig } from "axios";
// import { toast } from "sonner";

const axiosBaseQuery =
    (): BaseQueryFn<
        {
            url: string;
            method?: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            params?: AxiosRequestConfig["params"];
            headers?: AxiosRequestConfig["headers"];
        },
        unknown,
        unknown
    > =>
        async ({ url, method, data, params, headers }) => {
            try {
                const result = await axiosInstance({
                    url: url,
                    method,
                    data,
                    params,
                    headers,
                });
                return { data: result.data };
            } catch (axiosError) {
                const err = axiosError as AxiosError;

                // console.log("RTK QUERY ERROR 👉", {
                //     err,
                //     response: err.response,
                //     message: err.message,
                // });

                // New Code
                // Global Error Toast Here
                // const message =
                //     (err.response?.data as any)?.message ||
                //     err.message ||
                //     "Something went wrong!";
                // toast.error(message);
                // End New Code

                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                        // status: err.response?.status ?? "FETCH_ERROR",
                        // data:
                        //     (err.response?.data as any)?.message ||
                        //     err.message ||
                        //     "Something went wrong",
                    },
                };
            }
        };

export default axiosBaseQuery;
