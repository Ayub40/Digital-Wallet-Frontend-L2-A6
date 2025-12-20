/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "@/specialUi/Loader";
import { useGetAdminOverviewQuery } from "@/redux/features/admin/admin.api";
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
    Bar
} from "recharts";

const colorsAgents = ["#8884d8", "#82ca9d", "#ffc658", "#d0ed57", "#a4de6c"];
const colorsUsers = ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed"];

export default function AdminOverview() {
    const { data, isLoading } = useGetAdminOverviewQuery();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <Loader />
            </div>
        );
    }

    const overview = data?.data || {};
    const {
        totalUsers = 0,
        totalAgents = 0,
        totalTransactions = 0,
        totalAmount = 0,
        monthlyTransactions = [],
        transactionByType = [],
        topAgents = [],
        topUsers = []
    } = overview;

    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#C6A4B8"];

    return (
        <div className="space-y-8">

            {/* --- Cards --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="rounded-2xl shadow-md">
                    <CardHeader><CardTitle>Total Users</CardTitle></CardHeader>
                    <CardContent><p className="text-3xl font-bold">{totalUsers}</p></CardContent>
                </Card>

                <Card className="rounded-2xl shadow-md">
                    <CardHeader><CardTitle>Total Agents</CardTitle></CardHeader>
                    <CardContent><p className="text-3xl font-bold">{totalAgents}</p></CardContent>
                </Card>

                <Card className="rounded-2xl shadow-md">
                    <CardHeader><CardTitle>Transactions</CardTitle></CardHeader>
                    <CardContent><p className="text-3xl font-bold">{totalTransactions}</p></CardContent>
                </Card>

                <Card className="rounded-2xl shadow-md">
                    <CardHeader><CardTitle>Transaction Volume</CardTitle></CardHeader>
                    <CardContent><p className="text-3xl font-bold">{totalAmount} ৳</p></CardContent>
                </Card>
            </div>

            {/* --- Monthly Transactions Line Chart --- */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader><CardTitle>Monthly Transactions</CardTitle></CardHeader>
                <CardContent>
                    {monthlyTransactions.length === 0 ? (
                        <p>No transaction data available.</p>
                    ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={monthlyTransactions}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" name="Amount (৳)" />
                                <Line type="monotone" dataKey="totalTransactions" stroke="#82ca9d" name="Transactions" />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                </CardContent>
            </Card>

            {/* --- Transaction Type Pie Chart --- */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader><CardTitle>Transactions by Type</CardTitle></CardHeader>
                <CardContent>
                    {transactionByType.length === 0 ? (
                        <p>No transaction type data available.</p>
                    ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={transactionByType}
                                    dataKey="count"
                                    nameKey="type"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label
                                >
                                    {transactionByType.map((_: any, index: any) => (
                                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    )}
                </CardContent>
            </Card>

            {/* --- Top Agents Bar Chart --- */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader><CardTitle>Top Agents by Transactions</CardTitle></CardHeader>
                <CardContent>
                    {topAgents.length === 0 ? (
                        <p>No agent data available.</p>
                    ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={topAgents}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="transactions">
                                    {topAgents.map((entry: any, index: any) => (
                                        <Cell key={`cell-agent-${index}`} fill={colorsAgents[index % colorsAgents.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </CardContent>
            </Card>

            {/* --- Top Users Bar Chart --- */}
            <Card className="rounded-2xl shadow-md">
                <CardHeader><CardTitle>Top Users by Transactions</CardTitle></CardHeader>
                <CardContent>
                    {topUsers.length === 0 ? (
                        <p>No user data available.</p>
                    ) : (
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={topUsers} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Bar dataKey="transactions" name="Transactions">
                                    {topUsers.map((entry: any, index: any) => (
                                        <Cell key={`cell-user-${index}`} fill={colorsUsers[index % colorsUsers.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
