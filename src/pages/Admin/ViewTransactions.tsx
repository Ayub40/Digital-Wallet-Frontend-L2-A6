import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader2 } from "lucide-react";

import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useSearchParams } from "react-router";

export default function ViewAllTransactions() {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);
    const [searchParams] = useSearchParams();

    const { data, isLoading, isError } = useGetAllTransactionsQuery({
        page: currentPage,
        limit,
        type: searchParams.get("type") || undefined,
        status: searchParams.get("status") || undefined,
        startDate: searchParams.get("startDate") || undefined,
        endDate: searchParams.get("endDate") || undefined,
        minAmount: searchParams.get("minAmount") || undefined,
        maxAmount: searchParams.get("maxAmount") || undefined,
        search: searchParams.get("search") || undefined,
    });

    console.log(data);

    const transactions = data?.data || [];
    const totalPage = data?.meta?.totalPage || 1;

    useEffect(() => {
        setCurrentPage(1);
    }, [searchParams]);

    if (isLoading) return <div className="flex items-center justify-center h-40"><Loader2 className="animate-spin" /> Loading...</div>;
    if (isError) return <p className="text-red-500">Failed to load transactions.</p>;


    return (
        <div className="p-4 space-y-4">
            <h1 className="text-xl font-semibold">All Transactions</h1>
            {/* <TransactionFiltersAdmin /> */}

            <div className="overflow-x-auto">
                <Table>
                    <TableCaption>Transaction listing with filters & pagination.</TableCaption>
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
                            transactions.map((tx: any) => (
                                <TableRow key={tx._id}>
                                    <TableCell>{tx.sender?.name || tx.sender?.email || "-"}</TableCell>
                                    <TableCell>{tx.receiver?.name || tx.receiver?.email || "-"}</TableCell>
                                    <TableCell>${tx.amount}</TableCell>
                                    <TableCell>{tx.type}</TableCell>
                                    <TableCell>{tx.status}</TableCell>
                                    <TableCell>{new Date(tx.createdAt).toLocaleString()}</TableCell>
                                </TableRow>
                            ))
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

            {totalPage > 1 && (
                <div className="flex justify-end mt-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPage }, (_, i) => i + 1).map(page => (
                                <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
                                    <PaginationLink isActive={currentPage === page}>{page}</PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPage))}
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

