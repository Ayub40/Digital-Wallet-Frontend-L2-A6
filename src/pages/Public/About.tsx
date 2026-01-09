import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Sparkles, Rocket, Landmark, Globe2, Zap, Award } from "lucide-react";

const timeline = [
    { 
        year: "2024", 
        title: "The Vision", 
        desc: "PayNest was born to bridge the gap between traditional banking and modern digital needs.",
        icon: Landmark,
        color: "bg-blue-500"
    },
    { 
        year: "2025", 
        title: "Feature Ecosystem", 
        desc: "Launched seamless peer-to-peer transfers, real-time tracking, and multi-tier security.",
        icon: Zap,
        color: "bg-emerald-500"
    },
    { 
        year: "2026", 
        title: "Market Leader", 
        desc: "Empowering 1M+ users with lightning-fast transactions and zero hidden costs.",
        icon: Award,
        color: "bg-orange-500"
    },
    { 
        year: "Future", 
        title: "Global Gateway", 
        desc: "Expanding to 50+ countries with borderless smart payments and AI-driven insights.",
        icon: Globe2,
        color: "bg-purple-500"
    }
];

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function About() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden pb-16 font-sans">

 
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 space-y-20 md:space-y-24">

         
                <motion.section initial="hidden" animate="visible" variants={fadeIn} className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                        <Sparkles size={14} /> All-in-One Finance
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-emerald-500 pb-2">
                        Everything You Need for Modern Payments
                    </h1>
                    <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl font-bold leading-relaxed">
                        PayNest combines speed, security, and simplicity. From personal wallets to business tools, we provide a complete financial ecosystem designed for the next generation.
                    </p>
                </motion.section>

            
                <section className="relative">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-center tracking-tight mb-12">Our Evolution</h2>
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border/50 hidden md:block" />
                            <div className="space-y-12 md:space-y-16">
                                {timeline.map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: i * 0.1 }}
                                        className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 hidden md:flex shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                            <item.icon size={18} className="text-primary" />
                                        </div>
                                        <div className="w-full md:w-[45%]">
                                            <div className="p-6 md:p-8 rounded-xl bg-muted/20 backdrop-blur-md border border-border/40 hover:border-primary/30 transition-all shadow-md group">
                                                <div className={`inline-block px-4 py-1 rounded-full ${item.color} text-white text-xs font-black mb-3 shadow-lg`}>
                                                    {item.year}
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-black mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm md:text-base font-bold leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hidden md:block md:w-[45%]" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

          
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Card className="h-full bg-muted/20 backdrop-blur-md border-border/40 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-md">
                            <CardContent className="p-8 md:p-10 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-inner"><Rocket size={24} /></div>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tight">Flexible Pricing</h2>
                                <p className="text-muted-foreground leading-relaxed font-bold text-sm md:text-base">
                                    Whether you are an individual or a business, we offer transparent pricing with no hidden fees, ensuring the best value for every transaction.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Card className="h-full bg-muted/20 backdrop-blur-md border-border/40 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-md">
                            <CardContent className="p-8 md:p-10 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-inner"><Target size={24} /></div>
                                <h2 className="text-2xl md:text-3xl font-black tracking-tight">Our Core Mission</h2>
                                <p className="text-muted-foreground leading-relaxed font-bold text-sm md:text-base">
                                    To provide a borderless, transparent, and ultra-secure financial ecosystem that empowers people to take control of their digital wealth.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </section>

  
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-muted/10 border border-border/40 rounded-xl p-8 md:p-16 text-center space-y-10 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">Built for Your Safety</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { icon: Users, title: "Support 24/7", desc: "Our help desk is always here to assist with any payment issues.", color: "text-blue-500", bg: "bg-blue-500/10" },
                            { icon: Shield, title: "Bank-Grade Security", desc: "All data is encrypted with enterprise-level protocols for total peace of mind.", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                            { icon: Sparkles, title: "Seamless Experience", desc: "A clean, modern interface that makes complex transactions feel like magic.", color: "text-purple-500", bg: "bg-purple-500/10" }
                        ].map((item, i) => (
                            <div key={i} className="space-y-3 p-6 rounded-2xl bg-muted/20 border border-border/40 hover:bg-background hover:shadow-lg hover:border-primary/20 transition-all group">
                                <div className={`mx-auto w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform shadow-inner`}>
                                    <item.icon size={28} />
                                </div>
                                <h4 className={`text-lg font-black ${item.color}`}>{item.title}</h4>
                                <p className="text-xs md:text-sm text-muted-foreground font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

            </div>
        </main>
    );
}
