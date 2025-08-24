import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";

const UserTransactionHistory = () => {
    const { data, isLoading } = useGetHistoryQuery(undefined);

    if (isLoading) return <p>Loading transactions...</p>;

    const transactions = data?.data || [];

    return (
        <Table>
            <TableCaption>A list of your recent transactions.</TableCaption>
            <TableHeader>
                <TableRow>
                    {/* <TableHead className="w-[100px]">Sender</TableHead> */}
                    <TableHead>Sender</TableHead>
                    <TableHead>Receiver</TableHead>
                    <TableHead>Amount</TableHead>
                    {/* <TableHead className="text-right">Type</TableHead> */}
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.length > 0 ? (
                    transactions.map((tx: any) => (
                        <TableRow key={tx._id}>
                            <TableCell>{tx.sender?.name || tx.sender?.email}</TableCell>
                            <TableCell>{tx.receiver?.name || tx.receiver?.email}</TableCell>
                            <TableCell>${tx.amount}</TableCell>
                            <TableCell>{tx.type}</TableCell>
                            <TableCell>{tx.status}</TableCell>
                            <TableCell>{new Date(tx.createdAt).toLocaleString()}</TableCell>
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={5} className="text-center">
                            No transactions found
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

export default UserTransactionHistory;
