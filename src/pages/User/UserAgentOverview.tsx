/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetOverviewQuery } from "@/redux/features/admin/admin.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import Loader from "@/specialUi/Loader";
import {
    ResponsiveContainer,
    LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
    PieChart, Pie, Cell, Legend,
} from "recharts";
import { Wallet, TrendingUp, History } from "lucide-react";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

export default function UserAgentOverview() {
    const { data: overviewData, isLoading: isOverviewLoading } = useGetOverviewQuery();
    const { data: userData, isLoading: isUserLoading } = useUserInfoQuery(undefined);

    if (isOverviewLoading || isUserLoading) {
        return <div className="flex justify-center items-center h-64"><Loader /></div>;
    }

    const overview = overviewData?.data || {};
    const profile = userData?.data || {};

    // Balance From Profile
    const balance = profile?.wallet?.balance || 0;

    const {
        totalTransactions = 0,
        totalAmount = 0,
        monthlyTransactions = [],
        transactionByType = []
    } = overview;

    return (
        <div className="space-y-8 p-4">
            {/* --- Stats Cards --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Balance Card */}
                <Card className="rounded-2xl shadow-sm border-none bg-blue-50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-blue-600">Current Balance</CardTitle>
                        <Wallet className="h-5 w-5 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-blue-900">৳ {balance.toLocaleString()}</p>
                    </CardContent>
                </Card>

                {/* Transactions Card */}
                <Card className="rounded-2xl shadow-sm border-none bg-purple-50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-purple-600">Total Transactions</CardTitle>
                        <History className="h-5 w-5 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-purple-900">{totalTransactions}</p>
                    </CardContent>
                </Card>

                {/* Total Volume Card */}
                <Card className="rounded-2xl shadow-sm border-none bg-green-50">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium text-green-600">Total Transacted</CardTitle>
                        <TrendingUp className="h-5 w-5 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-green-900">৳ {totalAmount.toLocaleString()}</p>
                    </CardContent>
                </Card>
            </div>

            {/* --- Charts --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Monthly Chart */}
                <Card className="rounded-2xl shadow-md border-none bg-white">
                    <CardHeader className="border-b"><CardTitle className="text-lg font-semibold">Activity Overview</CardTitle></CardHeader>
                    <CardContent className="p-6">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={monthlyTransactions}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" strokeWidth={3} name="Amount" />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Distribution Chart */}
                <Card className="rounded-2xl shadow-md border-none bg-white">
                    <CardHeader className="border-b"><CardTitle className="text-lg font-semibold">Transaction Distribution</CardTitle></CardHeader>
                    <CardContent className="p-6">
                        {transactionByType.length === 0 ? (
                            <p className="text-center text-gray-500 py-20">No data available</p>
                        ) : (
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie data={transactionByType} dataKey="count" nameKey="type" cx="50%" cy="50%" outerRadius={80} label>
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
        </div>
    );
}










// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Loader from "@/specialUi/Loader";
// import { useGetOverviewQuery } from "@/redux/features/admin/admin.api";
// import {
//     ResponsiveContainer,
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     Tooltip,
//     CartesianGrid,
//     PieChart,
//     Pie,
//     Cell,
//     Legend,
// } from "recharts";
// import { Wallet, Banknote, TrendingUp, History } from "lucide-react";

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

// export default function UserAgentOverview() {
//     const { data, isLoading } = useGetOverviewQuery();

//     if (isLoading) {
//         return (
//             <div className="flex justify-center items-center h-64">
//                 <Loader />
//             </div>
//         );
//     }

//     const overview = data?.data || {};
//     const role = overview.role;

//     const {
//         balance = 0,
//         totalTransactions = 0,
//         totalAmount = 0,
//         totalCommission = 0,
//         monthlyTransactions = [],
//         transactionByType = []
//     } = overview;

//     return (
//         <div className="space-y-8">

//             {/* --- Stats Cards --- */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {role === "USER" ? (
//                     <Card className="rounded-2xl shadow-sm border-none bg-blue-50">
//                         <CardHeader className="flex flex-row items-center justify-between pb-2">
//                             <CardTitle className="text-sm font-medium text-blue-600">Current Balance</CardTitle>
//                             <Wallet className="h-5 w-5 text-blue-600" />
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-3xl font-bold text-blue-900">{balance} ৳</p>
//                         </CardContent>
//                     </Card>
//                 ) : (
//                     <Card className="rounded-2xl shadow-sm border-none bg-amber-50">
//                         <CardHeader className="flex flex-row items-center justify-between pb-2">
//                             <CardTitle className="text-sm font-medium text-amber-600">Total Commission</CardTitle>
//                             <Banknote className="h-5 w-5 text-amber-600" />
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-3xl font-bold text-amber-900">{totalCommission} ৳</p>
//                         </CardContent>
//                     </Card>
//                 )}

//                 <Card className="rounded-2xl shadow-sm border-none bg-purple-50">
//                     <CardHeader className="flex flex-row items-center justify-between pb-2">
//                         <CardTitle className="text-sm font-medium text-purple-600">Total Transactions</CardTitle>
//                         <History className="h-5 w-5 text-purple-600" />
//                     </CardHeader>
//                     <CardContent>
//                         <p className="text-3xl font-bold text-purple-900">{totalTransactions}</p>
//                     </CardContent>
//                 </Card>

//                 {role === "USER" && (
//                     <Card className="rounded-2xl shadow-sm border-none bg-green-50">
//                         <CardHeader className="flex flex-row items-center justify-between pb-2">
//                             <CardTitle className="text-sm font-medium text-green-600">Total Transacted</CardTitle>
//                             <TrendingUp className="h-5 w-5 text-green-600" />
//                         </CardHeader>
//                         <CardContent>
//                             <p className="text-3xl font-bold text-green-900">{totalAmount} ৳</p>
//                         </CardContent>
//                     </Card>
//                 )}
//             </div>

//             {/* --- Charts --- */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


//                 <Card className="rounded-2xl shadow-md overflow-hidden border-none">
//                     <CardHeader className="bg-white border-b">
//                         <CardTitle className="text-lg font-semibold">Activity Overview (Monthly)</CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-6">
//                         {monthlyTransactions.length === 0 ? (
//                             <p className="text-center text-gray-500 py-10">No monthly data found.</p>
//                         ) : (
//                             <ResponsiveContainer width="100%" height={300}>
//                                 <LineChart data={monthlyTransactions}>
//                                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
//                                     <XAxis dataKey="month" axisLine={false} tickLine={false} />
//                                     <YAxis axisLine={false} tickLine={false} />
//                                     <Tooltip />
//                                     <Line
//                                         type="monotone"
//                                         dataKey="totalAmount"
//                                         stroke="#8884d8"
//                                         strokeWidth={3}
//                                         dot={{ r: 4 }}
//                                         name="Amount (৳)"
//                                     />
//                                     <Line
//                                         type="monotone"
//                                         dataKey="totalTransactions"
//                                         stroke="#82ca9d"
//                                         strokeWidth={3}
//                                         dot={{ r: 4 }}
//                                         name="Transactions"
//                                     />
//                                 </LineChart>
//                             </ResponsiveContainer>
//                         )}
//                     </CardContent>
//                 </Card>

//                 {role === "USER" && (
//                     <Card className="rounded-2xl shadow-md overflow-hidden border-none">
//                         <CardHeader className="bg-white border-b">
//                             <CardTitle className="text-lg font-semibold">Transaction Types</CardTitle>
//                         </CardHeader>
//                         <CardContent className="p-6">
//                             {transactionByType.length === 0 ? (
//                                 <p className="text-center text-gray-500 py-10">No type data found.</p>
//                             ) : (
//                                 <ResponsiveContainer width="100%" height={300}>
//                                     <PieChart>
//                                         <Pie
//                                             data={transactionByType}
//                                             dataKey="count"
//                                             nameKey="type"
//                                             cx="50%"
//                                             cy="50%"
//                                             innerRadius={60}
//                                             outerRadius={100}
//                                             paddingAngle={5}
//                                             label
//                                         >
//                                             {transactionByType.map((_: any, index: any) => (
//                                                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                             ))}
//                                         </Pie>
//                                         <Tooltip />
//                                         <Legend />
//                                     </PieChart>
//                                 </ResponsiveContainer>
//                             )}
//                         </CardContent>
//                     </Card>
//                 )}


//                 {role === "AGENT" && (
//                     <Card className="rounded-2xl shadow-md border-none bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 flex flex-col justify-center items-center text-center">
//                         <div className="bg-white/20 p-4 rounded-full mb-4">
//                             <TrendingUp className="h-10 w-10 text-white" />
//                         </div>
//                         <h3 className="text-2xl font-bold mb-2">Grow Your Earnings!</h3>
//                         <p className="text-indigo-100 italic">
//                             "More Cash-In and Cash-Out transactions mean more commission for you. Keep up the great work!"
//                         </p>
//                     </Card>
//                 )}
//             </div>
//         </div>
//     );
// }