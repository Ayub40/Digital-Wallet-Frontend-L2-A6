// TransactionHistory.tsx
import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
import TransactionUser from "./AdvancedFilter/TransactionUser";
import { Loader2 } from "lucide-react";

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
import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";
import { useSearchParams } from "react-router";

export default function TransactionHistory() {
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);

    const { data: userData } = useUserInfoQuery(undefined);
    const currentUserId = userData?.data?._id;

    const { data, isLoading, isError } = useGetHistoryQuery({
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
            <div className="flex items-center justify-center h-40">
                <Loader2 className="animate-spin h-6 w-6 text-gray-500" />
                <span className="ml-2 text-gray-600">Loading transactions...</span>
            </div>
        );
    }

    if (isError) {
        return <div className="text-center text-red-500">Failed to fetch transaction history.</div>;
    }

    return (
        <div className="col-span-3 w-full border rounded-md p-5 space-y-4">
            <TransactionUser />
            <div className="overflow-x-auto">
                <Table>
                    <TableCaption>A list of your recent transactions.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sender</TableHead>
                            <TableHead>Receiver</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.length > 0 ? (
                            transactions.map((tx: any) => {
                                const senderName = tx.sender?.name || tx.sender?.email || "N/A";
                                const receiverName = tx.receiver?.name || tx.receiver?.email || "N/A";

                                return (
                                    <TableRow key={tx._id}>
                                        <TableCell
                                            className={
                                                tx.sender?._id === currentUserId
                                                    ? "text-blue-600 font-semibold"
                                                    : "text-gray-700"
                                            }
                                        >
                                            {senderName}
                                        </TableCell>
                                        <TableCell
                                            className={
                                                tx.receiver?._id === currentUserId
                                                    ? "text-purple-600 font-semibold"
                                                    : "text-gray-700"
                                            }
                                        >
                                            {receiverName}
                                        </TableCell>
                                        <TableCell className="font-medium">${tx.amount}</TableCell>
                                        <TableCell>{tx.type}</TableCell>
                                        <TableCell
                                            className={tx.status === "SUCCESS" ? "text-green-600" : "text-red-600"}
                                        >
                                            {tx.status}
                                        </TableCell>
                                        <TableCell>{new Date(tx.createdAt).toLocaleString()}</TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-gray-500">
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
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
                                <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
                                    <PaginationLink isActive={currentPage === page}>{page}</PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPage))}
                                    className={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}

