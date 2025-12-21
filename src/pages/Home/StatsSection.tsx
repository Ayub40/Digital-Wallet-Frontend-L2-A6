import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Loader from "@/specialUi/Loader";
import { useGetPublicOverviewQuery } from "@/redux/features/admin/admin.api";

export default function StatsSection() {
    const { data, isLoading } = useGetPublicOverviewQuery();


    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <Loader />
            </div>
        );
    }

    const overview = data?.data || {};
    const { totalUsers = 0, totalTransactions = 0, totalAgents = 0, totalAmount = 0 } = overview;

    const stats = [
        { label: "Users", value: totalUsers },
        { label: "Transactions", value: totalTransactions },
        { label: "Agents", value: totalAgents },
        { label: "Transaction Volume", value: totalAmount },
    ];

    return (
        <section className="py-20 bg-muted max-w-7xl mx-auto mt-10 rounded-2xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
                {stats.map((s, i) => (
                    <CounterCard key={i} {...s} />
                ))}
            </div>
        </section>
    );
}

function CounterCard({ label, value }: { label: string; value: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = Math.ceil(value / 100);
        const interval = setInterval(() => {
            start += increment;
            if (start >= value) {
                start = value;
                clearInterval(interval);
            }
            setCount(start);
        }, 20);

        return () => clearInterval(interval);
    }, [value]);

    return (
        <Card className="rounded-2xl text-center shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
                <p className="text-4xl font-bold">{count.toLocaleString()}</p>
                <p className="text-muted-foreground">{label}</p>
            </CardContent>
        </Card>
    );
}
