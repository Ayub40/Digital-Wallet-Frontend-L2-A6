import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { useState } from "react";

export default function ViewTransactions() {
    {/* For Pagination */ }
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);

    console.log(currentPage);

    const { data, isLoading, isError } = useGetAllTransactionsQuery({ page: currentPage, limit });
    console.log(data);

    const transactions = data?.data || [];

    // For Pagination
    const totalPage = data?.meta?.totalPage || 1;

    if (isLoading) return <p>Loading transactions...</p>;
    if (isError) return <p>Failed to load transactions.</p>;

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">Transaction History</h1>

            <div>
                <Table>
                    <TableCaption>List of your recent transactions.</TableCaption>
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
                                <TableCell colSpan={6} className="text-center">
                                    No transactions found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* For Pagination */}
            {totalPage > 1 && (
                <div className="flex justify-end mt-4">
                    <div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        onClick={() => setCurrentPage((prev) => prev - 1)}
                                        className={
                                            currentPage === 1
                                                ? "pointer-events-none opacity-50"
                                                : "cursor-pointer"
                                        }
                                    />
                                </PaginationItem>
                                {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                                    (page) => (
                                        <PaginationItem
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                        >
                                            <PaginationLink isActive={currentPage === page}>
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                )}
                                <PaginationItem>
                                    <PaginationNext
                                        onClick={() => setCurrentPage((prev) => prev + 1)}
                                        className={
                                            currentPage === totalPage
                                                ? "pointer-events-none opacity-50"
                                                : "cursor-pointer"
                                        }
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            )}
        </div>
    );
}
