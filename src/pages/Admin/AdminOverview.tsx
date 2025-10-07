/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllAgentsQuery, useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";

export default function AdminOverview() {
    const { data: usersRes } = useGetAllUsersQuery(undefined);
    const { data: agentsRes } = useGetAllAgentsQuery(undefined);
    const { data: txRes } = useGetAllTransactionsQuery(undefined);

    const users = usersRes?.data || [];
    const agents = agentsRes?.data || [];
    const transactions = txRes?.data || [];

    const totalUsers = users.filter((u: any) => u.role === "USER").length;
    const totalAgents = agents.length;
    const totalTransactions = transactions.length;
    const totalVolume = transactions.reduce(
        (sum: number, tx: any) => sum + (tx.amount || 0),
        0
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="rounded-2xl shadow-md">
                <CardHeader>
                    <CardTitle>Total Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">{totalUsers}</p>
                </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md">
                <CardHeader>
                    <CardTitle>Total Agents</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">{totalAgents}</p>
                </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md">
                <CardHeader>
                    <CardTitle>Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">{totalTransactions}</p>
                </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md">
                <CardHeader>
                    <CardTitle>Transaction Volume</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-3xl font-bold">{totalVolume} ৳</p>
                </CardContent>
            </Card>
        </div>
    );
}
