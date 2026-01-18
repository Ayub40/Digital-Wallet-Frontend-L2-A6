import { motion, type Variants } from "framer-motion";
import { Eye, Database, Share2, Lock, UserCheck, ShieldAlert, FileText, Zap, Globe } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden py-16 px-6 font-sans">

            <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-24">

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-black tracking-widest uppercase">
                        <Eye size={14} /> Privacy Protocol
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none whitespace-nowrap overflow-visible">
                        Your data belongs
                        <span className="relative ml-3 bg-clip-text text-transparent bg-linear-to-r from-orange-400 via-rose-400 to-amber-300 italic group">
                            only to you.
                            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-linear-to-r from-orange-400/40 via-rose-400/40 to-transparent rounded-full -rotate-1 translate-y-2 group-hover:rotate-0 transition-transform duration-500" />
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
                        We believe privacy is a fundamental right. PayNest is built to ensure your personal and financial information stays private.
                    </p>
                </motion.div>


                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: Database, title: "Data Collection", desc: "We only collect essential identity data required by law for KYC and transaction processing. No unnecessary tracking.", color: "from-purple-500 to-blue-500" },
                        { icon: Share2, title: "Zero Data Selling", desc: "We never sell or rent your personal information to third-party advertisers. Your privacy is not our business model.", color: "from-blue-500 to-cyan-500" },
                        { icon: Lock, title: "End-to-End Encryption", desc: "Your personal details and chat logs are encrypted with military-grade protocols that even we cannot read.", color: "from-cyan-500 to-emerald-500" },
                        { icon: UserCheck, title: "Your Control", desc: "You have the absolute right to download, modify, or permanently delete your data from our servers at any time.", color: "from-emerald-500 to-teal-500" },
                        { icon: ShieldAlert, title: "Anonymous Analytics", desc: "Our usage analytics are completely anonymized, focusing on app performance rather than individual user behavior.", color: "from-orange-500 to-red-500" },
                        { icon: Globe, title: "Global GDPR Compliance", desc: "We adhere to the strictest global privacy standards, including GDPR and CCPA, regardless of where you live.", color: "from-indigo-500 to-purple-600" }
                    ].map((feature, i) => (
                        <motion.div key={i} variants={itemVariants} className="p-8 rounded-[2.5rem] bg-muted/10 backdrop-blur-md border border-border/40 hover:border-primary/30 transition-all duration-300 group shadow-sm">
                            <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight mb-3 text-foreground/90 uppercase">{feature.title}</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>


                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative group overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl blur-xl" />
                    <div className="relative bg-muted/20 backdrop-blur-2xl border border-border/40 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/20">
                        <div className="absolute top-0 right-0 opacity-10 group-hover:-rotate-12 transition-transform duration-1000 pointer-events-none">
                            <FileText size={250} className="text-primary" strokeWidth={1} />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                                    <Zap size={14} /> Data Transparency
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                                    Privacy Shield <br />
                                    <span className="text-primary">Always Active.</span>
                                </h3>
                                <p className="text-muted-foreground text-lg font-bold max-w-md leading-relaxed">
                                    Our systems are audited by third-party privacy experts to ensure your data remains 100% confidential.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
                                {[
                                    { label: "Data Safety", value: "100%", color: "text-purple-500" },
                                    { label: "Third-Party Sharing", value: "0%", color: "text-blue-500" },
                                    { label: "User Control", value: "Full", color: "text-emerald-500" },
                                    { label: "Audit Pass", value: "Verified", color: "text-orange-500" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-3xl bg-background/50 border border-border/40 text-center space-y-1 hover:scale-105 transition-all shadow-sm">
                                        <p className={`text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</p>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}