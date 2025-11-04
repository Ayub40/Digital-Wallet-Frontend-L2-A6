import { useNavigate } from "react-router-dom";
import { Send, ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetHistoryQuery } from "@/redux/features/transaction/transaction.api";
import { useEffect } from "react";
import TransactionHistory from "../TransactionHistory";
import Loader from "@/specialUi/Loader";

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


    if (userLoading || txLoading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <Loader />
            </div>
        );
    }

    return (
        <div className="p-6 space-y-8">
            {/* Wallet Balance Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center dark:bg-[#101828]">
                <div>
                    <h2 className="text-lg font-semibold text-gray-600 dark:text-white">Wallet Balance</h2>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                        ৳ {user?.wallet?.balance?.toFixed(2) || "0.00"}
                    </p>
                </div>
                <div className="text-gray-400 text-sm dark:text-white">
                    Last Updated: {moment(user?.wallet?.updatedAt).format("DD MMM YYYY, hh:mm A")}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* <Button
                    onClick={() => navigate("/user/add-money")}
                    className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl"
                >
                    <ArrowDownCircle size={20} /> Add Money
                </Button> */}
                <Button
                    onClick={() => navigate("/user/withdraw-money")}
                    className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-yellow-500 hover:bg-yellow-600 dark:bg-[#101828] dark:text-white"
                >
                    <ArrowUpCircle size={20} /> Withdraw Money
                </Button>
                <Button
                    onClick={() => navigate("/user/send-money")}
                    className="w-full flex items-center justify-center gap-2 py-6 text-lg rounded-xl bg-pink-600 hover:bg-pink-700 dark:bg-[#101828] dark:text-white"
                >
                    <Send size={20} /> Send Money
                </Button>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white dark:bg-[#101828] rounded-2xl shadow-md p-6">
                <h1 className="text-center font-bold text-5xl mb-3 dark:text-white">Recent Transactions</h1>
                <TransactionHistory />
            </div>
        </div>
    );
}
