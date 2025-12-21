/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetOverviewQuery } from "@/redux/features/admin/admin.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import Loader from "@/specialUi/Loader";
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
import { Wallet, Banknote, TrendingUp, History } from "lucide-react";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

export default function AgentOverview() {
    // Dashboard Overview Data
    const { data: overviewData, isLoading: isOverviewLoading, isError } = useGetOverviewQuery();

    // Latest Balance From Profile 
    const { data: userData, isLoading: isUserLoading } = useUserInfoQuery(undefined);

    if (isOverviewLoading || isUserLoading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <Loader />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center py-10 text-red-500 font-semibold">
                ⚠️ Failed to load dashboard data.
            </div>
        );
    }

    const overview = overviewData?.data || {};
    const profile = userData?.data || {};

    const role = profile?.role; 

    // Balance from Profile (wallet.balance)
    const currentBalance = profile?.wallet?.balance ?? 0;

    const {
        totalTransactions = 0,
        totalAmount = 0,
        totalCommission = 0,
        monthlyTransactions = [],
        transactionByType = []
    } = overview;


    const displayVolume = totalAmount > 0 ? totalAmount :
        monthlyTransactions.reduce((acc: number, curr: any) => acc + (curr.totalAmount || 0), 0);

    return (
        <div className="p-4 md:p-6 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Agent Dashboard Overview</h1>

            {/* --- (Stats Cards) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Present Balance */}
                <Card className="rounded-2xl border-none shadow-md bg-blue-600 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                        <Wallet className="h-5 w-5 opacity-80" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">৳ {Number(currentBalance).toLocaleString()}</p>
                    </CardContent>
                </Card>

                {/* Total Commission */}
                <Card className="rounded-2xl border-none shadow-md bg-emerald-600 text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Commission</CardTitle>
                        <Banknote className="h-5 w-5 opacity-80" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">৳ {totalCommission.toFixed(2)}</p>
                    </CardContent>
                </Card>

                {/* Transactions Number */}
                <Card className="rounded-2xl border-none shadow-md bg-[#FF8042] dark:bg-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-white">Transactions</CardTitle>
                        <History className="h-5 w-5 text-white" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-white dark:text-white">{totalTransactions}</p>
                    </CardContent>
                </Card>

                {/* Total Volume */}
                <Card className="rounded-2xl border-none shadow-md bg-[#8884D8] dark:bg-gray-800">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-white">Total Volume</CardTitle>
                        <TrendingUp className="h-5 w-5 text-white" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold text-white dark:text-white">৳ {displayVolume.toLocaleString()}</p>
                    </CardContent>
                </Card>
            </div>

            {/* --- (Charts) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Monthly Chart */}
                <Card className="rounded-2xl shadow-sm border-none bg-white dark:bg-gray-800">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">Activity Overview (Monthly)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {monthlyTransactions.length === 0 ? (
                            <p className="text-center text-gray-500 py-10">No monthly data found.</p>
                        ) : (
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={monthlyTransactions}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" strokeWidth={3} dot={{ r: 4 }} name="Amount (৳)" />
                                    <Line type="monotone" dataKey="totalTransactions" stroke="#82ca9d" strokeWidth={3} dot={{ r: 4 }} name="Transactions" />
                                </LineChart>
                            </ResponsiveContainer>
                        )}
                    </CardContent>
                </Card>

                {/* Distribution Chart */}
                <Card className="rounded-2xl shadow-sm border-none bg-white dark:bg-gray-800">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">Transaction Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {transactionByType.length === 0 ? (
                            <p className="text-center text-gray-500 py-10">No type data found.</p>
                        ) : (
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={transactionByType}
                                        dataKey="count"
                                        nameKey="type"
                                        cx="50%" cy="50%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={5}
                                        label
                                    >
                                        {transactionByType.map((_: any, index: any) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* --- Top Entities Colorful Section --- */}
            {(overview.topUsers?.length > 0 || overview.topAgents?.length > 0) && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

                    {/* Left Side: Colorful Bar Chart */}
                    <Card className="rounded-2xl shadow-md border-none bg-white dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-indigo-600" />
                                Top {role === "AGENT" ? "Customers" : "Agents"} by Volume
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={320}>
                                <BarChart
                                    layout="vertical"
                                    data={role === "AGENT" ? overview.topUsers : overview.topAgents}
                                    margin={{ left: 30, right: 30, top: 10, bottom: 10 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                                    <XAxis type="number" hide />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6b7280', fontSize: 12 }}
                                        width={80}
                                    />
                                    <Tooltip
                                        cursor={{ fill: '#f3f4f6', opacity: 0.4 }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}

                                        formatter={(value: any) => [`৳ ${Number(value).toLocaleString()}`, "Total Volume"]}
                                    />
                                    <Bar dataKey="amount" radius={[0, 10, 10, 0]} barSize={25}>
                                        {(role === "AGENT" ? overview.topUsers : overview.topAgents).map((_entry: any, index: number) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Right Side: Donut Distribution Chart */}
                    <Card className="rounded-2xl shadow-md border-none bg-white dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">Volume Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row items-center justify-around h-[320px]">
                                <div className="w-full h-full max-w-[250px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={role === "AGENT" ? overview.topUsers : overview.topAgents}
                                                dataKey="amount"
                                                nameKey="name"
                                                innerRadius={70}
                                                outerRadius={90}
                                                paddingAngle={5}
                                            >
                                                {(role === "AGENT" ? overview.topUsers : overview.topAgents).map((_: any, index: number) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip formatter={(value: any) => `৳ ${Number(value).toLocaleString()}`} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Custom Legend */}
                                <div className="space-y-3 mt-4 md:mt-0">
                                    {(role === "AGENT" ? overview.topUsers : overview.topAgents).map((item: any, index: number) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                                            <div className="flex flex-col">
                                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{item.name}</span>
                                                <span className="text-sm font-bold text-gray-900 dark:text-white">৳ {item.amount.toLocaleString()}</span>
                                            </div>
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
