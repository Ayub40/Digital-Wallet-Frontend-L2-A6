/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";
import { Loader2 } from "lucide-react";
import TransactionHistory from "../TransactionHistory";

export default function AgentOverview() {
    const { data: txRes, isLoading, isError } = useGetHistoryQuery(undefined);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40 text-gray-600">
                <Loader2 className="animate-spin h-6 w-6 mr-2" />
                Loading Overview...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-500">
                Failed to load transaction data.
            </div>
        );
    }

    // transaction data
    const transactions = txRes?.data || [];

    // ✅ Calculate totals
    const cashInTotal = transactions
        .filter((tx: any) => tx.type === "CASH_IN")
        .reduce((sum: number, tx: any) => sum + (tx.amount || 0), 0);

    const cashOutTotal = transactions
        .filter((tx: any) => tx.type === "CASH_OUT")
        .reduce((sum: number, tx: any) => sum + (tx.amount || 0), 0);



    return (
        <div className="space-y-6">
            {/* Summary Section - Single Row */}
            <div className="flex flex-col md:flex-row gap-6">
                <Card className="flex-1 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-700">Cash-In Total</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-green-600">{cashInTotal} $</p>
                    </CardContent>
                </Card>

                <Card className="flex-1 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-700">Cash-Out Total</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-red-600">{cashOutTotal} $</p>
                    </CardContent>
                </Card>
            </div>

            {/* Transaction History Section - Below Summary */}
            <Card className="rounded-2xl shadow-lg border border-gray-200 p-5">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold text-gray-700 text-center">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <TransactionHistory />
                </CardContent>
            </Card>
        </div>


    );
}














// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";

// export default function AgentOverview() {
//     const { data: txRes } = useGetHistoryQuery(undefined);

//     const transactions = txRes?.data || [];

//     const cashInTotal = transactions
//         .filter((tx: any) => tx.type === "CASH_IN")
//         .reduce((sum: number, tx: any) => sum + (tx.amount || 0), 0);

//     const cashOutTotal = transactions
//         .filter((tx: any) => tx.type === "CASH_OUT")
//         .reduce((sum: number, tx: any) => sum + (tx.amount || 0), 0);

//     const recentActivity = transactions.slice(0, 5);

//     return (
//         <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Summary Cards */}
//             <div className="">
//                 {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
//                 <Card className="rounded-2xl shadow-md">
//                     <CardHeader>
//                         <CardTitle>Cash-In Total</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <p className="text-2xl font-bold">{cashInTotal} $</p>
//                     </CardContent>
//                 </Card>

//                 <Card className="rounded-2xl shadow-md mt-5">
//                     <CardHeader>
//                         <CardTitle>Cash-Out Total</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <p className="text-2xl font-bold">{cashOutTotal} $</p>
//                     </CardContent>
//                 </Card>
//             </div>

//             {/* Recent Activity */}
//             <Card className="rounded-2xl shadow-md">
//                 <CardHeader>
//                     <CardTitle>Recent Activity</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <ul className="space-y-2">
//                         {recentActivity.map((tx: any) => (
//                             <li key={tx._id} className="flex justify-between border-b pb-1">
//                                 <span>{tx.type}</span>
//                                 <span className="font-semibold">{tx.amount} $</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }
