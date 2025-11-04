/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllAgentsQuery, useGetAllUsersQuery } from "@/redux/features/auth/auth.api";
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import Loader from "@/specialUi/Loader";

export default function AdminOverview() {
    const { data: usersRes, isLoading: isUsersLoading } = useGetAllUsersQuery(undefined);
    const { data: agentsRes, isLoading: isAgentsLoading } = useGetAllAgentsQuery(undefined);
    const { data: txRes, isLoading: isTxLoading } = useGetAllTransactionsQuery(undefined);

    if (isUsersLoading || isAgentsLoading || isTxLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <Loader />
                {/* <span className="ml-2 text-gray-600">Loading Overview...</span> */}
            </div>
        );
    }


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
