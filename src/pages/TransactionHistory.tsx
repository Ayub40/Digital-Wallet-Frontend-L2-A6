import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";
import { Loader2 } from "lucide-react";

export default function TransactionHistory() {
    const { data, isLoading, isError } = useGetHistoryQuery(undefined);
    // const transactions = data?.data || [];

    const { data: userData } = useUserInfoQuery(undefined);

    const currentUserId = userData?.data?._id;
    const transactions = data?.data || [];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-40">
                <Loader2 className="animate-spin h-6 w-6 text-gray-500" />
                <span className="ml-2 text-gray-600">Loading transactions...</span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-500">
                Failed to fetch transaction history.
            </div>
        );
    }

    return (
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
                                {/* Sender */}
                                <TableCell
                                    className={
                                        tx.sender?._id === currentUserId
                                            ? "text-blue-600 font-semibold"
                                            : "text-gray-700"
                                    }
                                >
                                    {senderName}
                                </TableCell>

                                {/* Receiver */}
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
                                    className={
                                        tx.status === "SUCCESS" ? "text-green-600" : "text-red-600"
                                    }
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







            {/* <TableBody>
                {transactions.length > 0 ? (
                    transactions.map((tx: any) => (
                        <TableRow key={tx._id}>
                            <TableCell>{tx.sender?.name || tx.sender?.email || "N/A"}</TableCell>
                            <TableCell>{tx.receiver?.name || tx.receiver?.email || "N/A"}</TableCell>
                            <TableCell className="font-medium">${tx.amount}</TableCell>
                            <TableCell>{tx.type}</TableCell>
                            <TableCell
                                className={
                                    tx.status === "SUCCESS" ? "text-green-600" : "text-red-600"
                                }
                            >
                                {tx.status}
                            </TableCell>
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
            </TableBody> */}
        </Table>
    );
}
