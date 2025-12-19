/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useSearchParams } from "react-router";
import Loader from "@/specialUi/Loader";
import TransactionUser from "./TransactionUser";


export default function AdminTransactionFilter() {
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);

    const { data: userData } = useUserInfoQuery(undefined);
    const currentUserId = userData?.data?._id;

    const { data, isLoading, isError } = useGetAllTransactionsQuery({
        page: currentPage,
        limit,
        type: searchParams.get("type") || undefined,
        startDate: searchParams.get("startDate") || undefined,
        endDate: searchParams.get("endDate") || undefined,
    });

    const transactions = data?.data || [];
    const totalPage = data?.meta?.totalPage || 1;

    // Filter change hole page 1 এ reset
    useEffect(() => {
        setCurrentPage(1);
    }, [searchParams]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-40 dark:bg-gray-900 dark:text-gray-200">
                <Loader />
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {/* Loading transactions... */}
                </span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-600 dark:text-red-400">
                Failed to fetch transaction history.
            </div>
        );
    }

    return (
        <div
            className="
                col-span-3 w-full border rounded-md p-5 space-y-4
                bg-white text-gray-900
                dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700
                transition-colors duration-300
            "
        >
            <TransactionUser />

            <div className="overflow-x-auto">
                <Table>
                    <TableCaption className="text-gray-500 dark:text-gray-400">
                        A list of user recent transactions.
                    </TableCaption>
                    <TableHeader>
                        <TableRow className="bg-gray-100 dark:bg-gray-800">
                            <TableHead className="text-gray-700 dark:text-gray-300">Sender</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Receiver</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Amount</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Type</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Status</TableHead>
                            <TableHead className="text-gray-700 dark:text-gray-300">Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.length > 0 ? (
                            transactions.map((tx: any) => {
                                const senderName =
                                    tx.sender?.name || tx.sender?.email || "N/A";
                                const receiverName =
                                    tx.receiver?.name || tx.receiver?.email || "N/A";

                                return (
                                    <TableRow
                                        key={tx._id}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <TableCell
                                            className={
                                                tx.sender?._id === currentUserId
                                                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                                                    : "text-gray-700 dark:text-gray-300"
                                            }
                                        >
                                            {senderName}
                                        </TableCell>
                                        <TableCell
                                            className={
                                                tx.receiver?._id === currentUserId
                                                    ? "text-purple-600 dark:text-purple-400 font-semibold"
                                                    : "text-gray-700 dark:text-gray-300"
                                            }
                                        >
                                            {receiverName}
                                        </TableCell>
                                        <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                                            ${tx.amount}
                                        </TableCell>
                                        <TableCell className="capitalize text-gray-700 dark:text-gray-300">
                                            {tx.type}
                                        </TableCell>
                                        <TableCell
                                            className={
                                                tx.status === "SUCCESS"
                                                    ? "text-green-600 dark:text-green-400 font-semibold"
                                                    : "text-red-600 dark:text-red-400 font-semibold"
                                            }
                                        >
                                            {tx.status}
                                        </TableCell>
                                        <TableCell className="text-gray-600 dark:text-gray-400">
                                            {new Date(tx.createdAt).toLocaleString()}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="text-center text-gray-500 dark:text-gray-400"
                                >
                                    No transactions found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            {totalPage > 1 && (
                <div className="flex justify-end mt-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() =>
                                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                                    }
                                    className={`
                                        ${currentPage === 1
                                            ? "pointer-events-none opacity-50"
                                            : "cursor-pointer"}
                                        dark:hover:bg-gray-800 dark:text-gray-300
                                    `}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
                                <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
                                    <PaginationLink
                                        isActive={currentPage === page}
                                        className="dark:data-[active=true]:bg-gray-700 dark:data-[active=true]:text-white"
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() =>
                                        setCurrentPage((prev) => Math.min(prev + 1, totalPage))
                                    }
                                    className={`
                                        ${currentPage === totalPage
                                            ? "pointer-events-none opacity-50"
                                            : "cursor-pointer"}
                                        dark:hover:bg-gray-800 dark:text-gray-300
                                    `}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}
