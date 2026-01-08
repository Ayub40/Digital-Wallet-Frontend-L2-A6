import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    ShieldCheck, Zap, Smartphone, History, TrendingUp, Lock,
} from "lucide-react";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export function FeaturesSection() {
    const features = [
        { title: "Send Money", desc: "Instant money transfer anywhere.", icon: Zap, color: "bg-blue-500/10 text-blue-500", border: "hover:border-blue-500/40" },
        { title: "Mobile Pay", desc: "Easy deposit & withdrawal.", icon: Smartphone, color: "bg-indigo-500/10 text-indigo-500", border: "hover:border-indigo-500/40" },
        { title: "Vault", desc: "Military grade data protection.", icon: Lock, color: "bg-purple-500/10 text-purple-500", border: "hover:border-purple-500/40" },
        { title: "Merchant", desc: "Pay shops with a simple scan.", icon: ShieldCheck, color: "bg-emerald-500/10 text-emerald-500", border: "hover:border-emerald-500/40" },
        { title: "History", desc: "Detailed transaction analytics.", icon: History, color: "bg-pink-500/10 text-pink-500", border: "hover:border-pink-500/40" },
        { title: "Rewards", desc: "Cashback on every single pay.", icon: TrendingUp, color: "bg-orange-500/10 text-orange-500", border: "hover:border-orange-500/40" },
    ];

    return (
        <section className="space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">Premium Features</h2>
                <p className="text-muted-foreground text-lg font-medium">Modern tools built for modern financial needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((f, i) => (
                    <motion.div key={i} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                        <Card className={`rounded-2xl border-border/50 bg-background/40 backdrop-blur-md ${f.border} transition-all duration-300 h-full group hover:shadow-2xl shadow-lg`}>
                            <CardContent className="p-10 space-y-5">
                                <div className={`h-16 w-16 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${f.color}`}>
                                    <f.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold">{f.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-medium">{f.desc}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}