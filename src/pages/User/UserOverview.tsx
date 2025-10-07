import { useNavigate } from "react-router-dom";
import { Loader2, Send, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";
import { useEffect } from "react";
import TransactionHistory from "../TransactionHistory";

export default function UserOverview() {
    const navigate = useNavigate();

    const {
        data: userData,
        isLoading: userLoading,
        refetch: refetchUser
    } = useUserInfoQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    const {
        data: transactionsData,
        isLoading: txLoading,
        refetch: refetchTx
    } = useGetHistoryQuery(
        { limit: 5 },
        {
            refetchOnMountOrArgChange: true,
        }
    );


    useEffect(() => {
        refetchUser();
        refetchTx();
    }, []);

    const user = userData?.data;
    const transactions = transactionsData?.data?.result || [];

    if (userLoading || txLoading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <Loader2 className="animate-spin w-8 h-8 text-primary" />
            </div>
        );
    }

    return (
        <div className="p-6 space-y-8">
            {/* Wallet Balance Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold text-gray-600">Wallet Balance</h2>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                        ৳ {user?.wallet?.balance?.toFixed(2) || "0.00"}
                    </p>
                </div>
                <div className="text-gray-400 text-sm">
                    Last Updated: {moment(user?.wallet?.updatedAt).format("DD MMM YYYY, hh:mm A")}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button
                    onClick={() => navigate("/user/add-money")}
                    className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl"
                >
                    <ArrowDownCircle size={20} /> Add Money
                </Button>
                <Button
                    onClick={() => navigate("/user/withdraw-money")}
                    className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-yellow-500 hover:bg-yellow-600"
                >
                    <ArrowUpCircle size={20} /> Withdraw
                </Button>
                <Button
                    onClick={() => navigate("/user/send-money")}
                    className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-pink-600 hover:bg-pink-700"
                >
                    <Send size={20} /> Send Money
                </Button>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h1 className="text-center font-bold text-5xl mb-3">Recent Transactions</h1>
                <TransactionHistory />
            </div>

            {/* <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

                {transactions.length === 0 ? (
                    <p className="text-gray-500">No recent transactions found.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border-collapse">
                            <thead className="border-b bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2">Type</th>
                                    <th className="px-4 py-2">Amount</th>
                                    <th className="px-4 py-2">Receiver</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((tx: any) => (
                                    <tr key={tx._id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-2 capitalize">{tx.type}</td>
                                        <td className="px-4 py-2 font-medium">
                                            $ {tx.amount.toFixed(2)}
                                        </td>
                                        <td className="px-4 py-2">{tx.receiver?.name || "—"}</td>
                                        <td className="px-4 py-2">
                                            {moment(tx.createdAt).format("MMM DD YYYY, hh:mm A")}
                                        </td>
                                        <td className="px-4 py-2 text-right">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${tx.status === "success"
                                                        ? "bg-green-100 text-green-700"
                                                        : tx.status === "pending"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {tx.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div> */}
        </div>
    );
}



















// import { useNavigate } from "react-router-dom";
// import { Loader2, Send, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import moment from "moment";
// import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
// import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";


// export default function UserOverview() {
//     const navigate = useNavigate();
//     const { data: userData, isLoading: userLoading } = useUserInfoQuery(undefined);
//     const { data: transactionsData, isLoading: txLoading } = useGetHistoryQuery({ limit: 5 });

//     const user = userData?.data;
//     const transactions = transactionsData?.data?.result || [];

//     if (userLoading || txLoading) {
//         return (
//             <div className="flex justify-center items-center h-[80vh]">
//                 <Loader2 className="animate-spin w-8 h-8 text-primary" />
//             </div>
//         );
//     }


//     return (
//         <div className="p-6 space-y-8">
//             {/* Wallet Balance Section */}
//             <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
//                 <div>
//                     <h2 className="text-lg font-semibold text-gray-600">Wallet Balance</h2>
//                     <p className="text-3xl font-bold text-green-600 mt-2">
//                         $ {user?.wallet?.balance?.toFixed(2) || "0.00"}
//                     </p>
//                 </div>
//                 <div className="text-gray-400 text-sm">
//                     Last Updated: {moment(user?.wallet?.updatedAt).format("DD MMM YYYY, hh:mm A")}
//                 </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 <Button
//                     onClick={() => navigate("/user/add-money")}
//                     className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl"
//                 >
//                     <ArrowDownCircle size={20} /> Add Money
//                 </Button>
//                 <Button
//                     onClick={() => navigate("/user/withdraw-money")}
//                     className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-yellow-500 hover:bg-yellow-600"
//                 >
//                     <ArrowUpCircle size={20} /> Withdraw
//                 </Button>
//                 <Button
//                     onClick={() => navigate("/user/send-money")}
//                     className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-pink-600 hover:bg-pink-700"
//                 >
//                     <Send size={20} /> Send Money
//                 </Button>
//             </div>

//             {/* Recent Transactions */}
//             <div className="bg-white rounded-2xl shadow-md p-6">
//                 <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

//                 {transactions.length === 0 ? (
//                     <p className="text-gray-500">No recent transactions found.</p>
//                 ) : (
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full text-sm text-left border-collapse">
//                             <thead className="border-b bg-gray-50">
//                                 <tr>
//                                     <th className="px-4 py-2">Type</th>
//                                     <th className="px-4 py-2">Amount</th>
//                                     <th className="px-4 py-2">Receiver</th>
//                                     <th className="px-4 py-2">Date</th>
//                                     <th className="px-4 py-2 text-right">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {transactions.map((tx: any) => (
//                                     <tr key={tx._id} className="border-b hover:bg-gray-50">
//                                         <td className="px-4 py-2 capitalize">{tx.type}</td>
//                                         <td className="px-4 py-2 font-medium">৳ {tx.amount.toFixed(2)}</td>
//                                         <td className="px-4 py-2">{tx.receiver?.name || "—"}</td>
//                                         <td className="px-4 py-2">
//                                             {moment(tx.createdAt).format("DD MMM YYYY, hh:mm A")}
//                                         </td>
//                                         <td className="px-4 py-2 text-right">
//                                             <span
//                                                 className={`px-3 py-1 rounded-full text-xs font-medium ${tx.status === "success"
//                                                     ? "bg-green-100 text-green-700"
//                                                     : tx.status === "pending"
//                                                         ? "bg-yellow-100 text-yellow-700"
//                                                         : "bg-red-100 text-red-700"
//                                                     }`}
//                                             >
//                                                 {tx.status}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }