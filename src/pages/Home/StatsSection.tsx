import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    ShieldCheck, History, TrendingUp,
    Users,
} from "lucide-react";
import Loader from "@/specialUi/Loader";
import { useGetPublicOverviewQuery } from "@/redux/features/admin/admin.api";


const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}


export function StatsSection() {
    const { data, isLoading } = useGetPublicOverviewQuery();
    if (isLoading) return <div className="flex justify-center py-20"><Loader /></div>;

    const stats = [
        { label: "Active Users", value: data?.data?.totalUsers || 0, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { label: "Agents", value: data?.data?.totalAgents || 0, icon: ShieldCheck, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { label: "Transactions", value: data?.data?.totalTransactions || 0, icon: History, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
        { label: "Volume", value: data?.data?.totalAmount || 0, icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    ];

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
                <motion.div key={i} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Card className={`rounded-2xl border-border/50 bg-background/40 backdrop-blur-md hover:bg-muted/50 transition-all duration-300 shadow-md border ${s.border}`}>
                        <CardContent className="p-8 text-center">
                            <div className={`w-14 h-14 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                                <s.icon size={28} />
                            </div>
                            <h3 className="text-4xl font-black mb-2 tracking-tight">{s.value.toLocaleString()}</h3>
                            <p className="text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">{s.label}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </section>
    );
}
