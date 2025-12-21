/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { Send, ArrowUpCircle, Wallet, History, TrendingUp, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import moment from "moment";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useGetOverviewQuery } from "@/redux/features/admin/admin.api";
import Loader from "@/specialUi/Loader";
// import TransactionHistory from "../TransactionHistory";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    PieChart,
    Pie,
    Cell,
    Legend,
    BarChart,
    Bar,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

export default function UserOverview() {
    const navigate = useNavigate();

    // 1. User Info
    const { data: userData, isLoading: userLoading } = useUserInfoQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    // 2. Overview Data
    const { data: overviewData, isLoading: overviewLoading } = useGetOverviewQuery();

    if (userLoading || overviewLoading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <Loader />
            </div>
        );
    }

    const user = userData?.data;
    const overview = overviewData?.data || {};
    const role = overview.role;

    const {
        totalTransactions = 0,
        totalAmount = 0,
        totalCommission = 0,
        monthlyTransactions = [],
        transactionByType = []
    } = overview;

    return (
        <div className="p-6 space-y-8">

            {/* ---  (Balance & Stats) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Wallet Balance / Commission Card */}
                <Card className="rounded-2xl shadow-md border-none bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium opacity-80">
                            {role === "USER" ? "Current Balance" : "Total Commission"}
                        </CardTitle>
                        <Wallet className="h-5 w-5 opacity-80" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">
                            ৳ {role === "USER" ? user?.wallet?.balance?.toFixed(2) : totalCommission.toFixed(2)}
                        </p>
                        <p className="text-xs mt-2 opacity-70">
                            Last Updated: {moment(user?.wallet?.updatedAt).format("hh:mm A, DD MMM")}
                        </p>
                    </CardContent>
                </Card>

                {/* Total Transactions Card */}
                <Card className="rounded-2xl shadow-sm border-none bg-purple-50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 text-purple-600">
                        <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
                        <History className="h-5 w-5" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-purple-900">{totalTransactions}</p>
                    </CardContent>
                </Card>

                {/* Total Transacted Volume (For User) or Motivation (For Agent) */}
                {role === "USER" ? (
                    <Card className="rounded-2xl shadow-sm border-none bg-green-50">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 text-green-600">
                            <CardTitle className="text-sm font-medium">Total Transacted</CardTitle>
                            <TrendingUp className="h-5 w-5" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold text-green-900">{totalAmount} ৳</p>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="rounded-2xl shadow-sm border-none bg-amber-50">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 text-amber-600">
                            <CardTitle className="text-sm font-medium">Status</CardTitle>
                            <Banknote className="h-5 w-5" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-xl font-bold text-amber-900 uppercase">{user?.status || "Active"}</p>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* --- ২. (Quick Actions) --- */}
            {role === "USER" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                        onClick={() => navigate("/user/withdraw-money")}
                        className="w-full flex items-center justify-center gap-2 py-8 text-lg rounded-2xl bg-amber-500 hover:bg-amber-600 shadow-lg transition-all"
                    >
                        <ArrowUpCircle size={24} /> Withdraw Money
                    </Button>
                    <Button
                        onClick={() => navigate("/user/send-money")}
                        className="w-full flex items-center justify-center gap-2 py-8 text-lg rounded-2xl bg-pink-600 hover:bg-pink-700 shadow-lg transition-all"
                    >
                        <Send size={24} /> Send Money
                    </Button>
                </div>
            )}

            {/* --- (Charts) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Monthly Chart */}
                <Card className="rounded-2xl shadow-md overflow-hidden border-none bg-white">
                    <CardHeader className="border-b">
                        <CardTitle className="text-lg font-semibold">Monthly Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        {monthlyTransactions.length === 0 ? (
                            <p className="text-center text-gray-500 py-10">No data available.</p>
                        ) : (
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={monthlyTransactions}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="totalAmount" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} name="Amount" />
                                </LineChart>
                            </ResponsiveContainer>
                        )}
                    </CardContent>
                </Card>

                {/* Transaction Type Chart (User) / Motivation (Agent) */}
                {role === "USER" ? (
                    <Card className="rounded-2xl shadow-md overflow-hidden border-none bg-white">
                        <CardHeader className="border-b">
                            <CardTitle className="text-lg font-semibold">Transaction Types</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={transactionByType}
                                        dataKey="count"
                                        nameKey="type"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={5}
                                    >
                                        {transactionByType.map((_: any, index: any) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="rounded-2xl shadow-md border-none bg-gradient-to-br from-gray-800 to-black text-white p-8 flex flex-col justify-center items-center text-center">
                        <div className="bg-white/10 p-4 rounded-full mb-4">
                            <TrendingUp className="h-10 w-10 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Agent Rewards</h3>
                        <p className="text-gray-400 italic">
                            "Help users with Cash-In and Cash-Out to increase your monthly commission."
                        </p>
                    </Card>
                )}
            </div>


            {/* --- Top Agents Section (Only for Users) --- */}
            {/* {role === "USER" && overview.topAgents?.length > 0 && (
                <Card className="rounded-2xl shadow-md border-none bg-white mt-8">
                    <CardHeader className="border-b">
                        <CardTitle className="text-lg font-semibold flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-blue-600" />
                            Trusted Agents (Top Transacted)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y">
                            {overview.topAgents.map((agent: any, index: number) => (
                                <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                            {agent.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{agent.name}</p>
                                            <p className="text-xs text-gray-500">Authorized Agent</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">৳ {agent.amount.toLocaleString()}</p>
                                        <p className="text-xs text-gray-400">Total Volume</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )} */}


            {/* --- Top Agents Colorful Charts (Only for Users) --- */}
            {role === "USER" && overview.topAgents?.length > 0 && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

                    {/* Left Side: Dynamic Bar Chart */}
                    <Card className="rounded-2xl shadow-md border-none bg-white dark:bg-gray-800">
                        <CardHeader className="border-b">
                            <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-indigo-600" />
                                Top Agents For Me (Transaction Volume)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                    layout="vertical"
                                    data={overview.topAgents}
                                    margin={{ left: 20, right: 30, top: 10, bottom: 10 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                                    <XAxis type="number" hide />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6b7280', fontSize: 12 }}
                                        width={100}
                                    />
                                    <Tooltip
                                        cursor={{ fill: '#f3f4f6', opacity: 0.4 }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        formatter={(value: any) => [`৳ ${Number(value).toLocaleString()}`, "Volume"]}
                                    />
                                    <Bar dataKey="amount" radius={[0, 10, 10, 0]} barSize={25}>
                                        {overview.topAgents.map((_entry: any, index: number) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Right Side: Donut Distribution Chart & List */}
                    <Card className="rounded-2xl shadow-md border-none bg-white dark:bg-gray-800">
                        <CardHeader className="border-b">
                            <CardTitle className="text-lg font-semibold">Distribution Analysis</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row items-center justify-between h-full">
                                <div className="w-full h-[220px] md:w-1/2">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={overview.topAgents}
                                                dataKey="amount"
                                                nameKey="name"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                            >
                                                {overview.topAgents.map((_: any, index: number) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value: any) => `৳ ${Number(value).toLocaleString()}`} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Compact Legend & Data List */}
                                <div className="w-full md:w-1/2 space-y-3 mt-4 md:mt-0 md:pl-6">
                                    {overview.topAgents.slice(0, 5).map((agent: any, index: number) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate w-24">
                                                    {agent.name}
                                                </span>
                                            </div>
                                            <span className="text-sm font-bold text-indigo-600">
                                                ৳ {agent.amount.toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

        </div>
    );
}
