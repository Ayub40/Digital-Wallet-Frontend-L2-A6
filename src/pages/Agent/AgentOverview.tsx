import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";

export default function AgentOverview() {
    const { data: txRes } = useGetHistoryQuery(undefined);

    const transactions = txRes?.data || [];

    const cashInTotal = transactions
        .filter((tx: any) => tx.type === "CASH_IN")
        .reduce((sum: number, tx: any) => sum + (tx.amount || 0), 0);

    const cashOutTotal = transactions
        .filter((tx: any) => tx.type === "CASH_OUT")
        .reduce((sum: number, tx: any) => sum + (tx.amount || 0), 0);

    const recentActivity = transactions.slice(0, 5);

    return (
        <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Summary Cards */}
            <div className="">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                <Card className="rounded-2xl shadow-md">
                    <CardHeader>
                        <CardTitle>Cash-In Total</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{cashInTotal} $</p>
                    </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-md mt-5">
                    <CardHeader>
                        <CardTitle>Cash-Out Total</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{cashOutTotal} $</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {recentActivity.map((tx: any) => (
                            <li key={tx._id} className="flex justify-between border-b pb-1">
                                <span>{tx.type}</span>
                                <span className="font-semibold">{tx.amount} $</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
