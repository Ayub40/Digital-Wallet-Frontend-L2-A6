import HeartbeatButton from "@/specialUi/HeartbeatButton";
import { motion } from "framer-motion";
import {
    ShieldCheck, Zap, Smartphone, History, TrendingUp, Lock, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export function FeaturesSection() {
    const features = [
        { title: "Quick Transfer", desc: "Instant global payments.", icon: Zap, color: "bg-blue-500" },
        { title: "Secure Vault", desc: "Bank-grade data safety.", icon: Lock, color: "bg-indigo-600" },
        { title: "History", desc: "Track every single cent.", icon: History, color: "bg-pink-500" },
        { title: "Scan & Pay", desc: "Easy merchant checkout.", icon: ShieldCheck, color: "bg-emerald-500" },
        { title: "Mobile App", desc: "Finance on the move.", icon: Smartphone, color: "bg-orange-500" },
        { title: "Cashback", desc: "Earn rewards daily.", icon: TrendingUp, color: "bg-purple-500" },
    ];

    return (
        <section className="py-5 bg-background">
            <div className="container max-w-7xl mx-auto px-6">


                <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Powerful <span className="text-blue-600">Capabilities</span></h2>
                        <p className="text-muted-foreground font-medium text-lg">Simplified tools for your daily financial needs.</p>
                    </div>
                    {/* <Link to="/features">
                        <button className="text-sm font-bold flex items-center gap-2 hover:text-blue-600 transition-colors uppercase tracking-widest">
                            Explore All <ArrowRight size={16} />
                        </button>
                    </Link> */}
                    <Link to="/features">
                        <HeartbeatButton>
                            Explore All <ArrowRight size={16} />
                        </HeartbeatButton>
                    </Link>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative flex items-center p-5 rounded-2xl border border-border/50 bg-card/50 hover:bg-card hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                        >

                            <div className={`flex-shrink-0 h-12 w-12 rounded-xl ${f.color} flex items-center justify-center text-white shadow-lg shadow-current/20`}>
                                <f.icon size={22} />
                            </div>


                            <div className="ml-5">
                                <h3 className="font-bold text-lg text-foreground group-hover:text-blue-600 transition-colors">
                                    {f.title}
                                </h3>
                                <p className="text-sm text-muted-foreground font-medium leading-tight">
                                    {f.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
