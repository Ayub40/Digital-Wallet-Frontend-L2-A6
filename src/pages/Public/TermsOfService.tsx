import { motion, type Variants } from "framer-motion";
import { Scale, Zap, ShieldCheck, Info, Globe, Ban, CheckCircle } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden py-16 px-6 font-sans">

            <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-24">

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-black tracking-widest uppercase">
                        <Scale size={14} /> Legal Framework
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight">
                        Our agreement  <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-emerald-500 to-cyan-500 italic">for the future.</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
                        By using PayNest, you agree to follow these rules. They are designed to keep the ecosystem safe and fair for everyone.
                    </p>
                </motion.div>


                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: CheckCircle, title: "User Eligibility", desc: "Users must be 18+ and provide valid government ID for KYC to access full wallet features and withdrawal limits.", color: "from-blue-500 to-cyan-500" },
                        { icon: Ban, title: "Prohibited Acts", desc: "Any attempt at money laundering, fraud, or using PayNest for illegal goods will result in immediate permanent ban.", color: "from-red-500 to-orange-500" },
                        { icon: Zap, title: "Instant Finality", desc: "Digital transfers are near-instant and cannot be reversed. Always double-check the recipient's wallet address.", color: "from-purple-500 to-pink-500" },
                        { icon: Info, title: "Fee Structure", desc: "P2P transfers are free. External bank withdrawals may incur a small 1% service fee which is clearly shown before confirmation.", color: "from-emerald-500 to-teal-500" },
                        { icon: ShieldCheck, title: "Account Safety", desc: "You are responsible for keeping your PIN and recovery phrase secure. We can never recover your lost private keys.", color: "from-cyan-500 to-blue-600" },
                        { icon: Globe, title: "Service Range", desc: "PayNest services are available globally except in sanctioned regions or where prohibited by local financial laws.", color: "from-indigo-500 to-purple-600" }
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
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-emerald-500/10 rounded-3xl blur-xl" />
                    <div className="relative bg-muted/20 backdrop-blur-2xl border border-border/40 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/20">
                        <div className="absolute top-0 right-0 opacity-10 group-hover:-rotate-12 transition-transform duration-1000 pointer-events-none">
                            <Scale size={250} className="text-primary" strokeWidth={1} />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                                    <ShieldCheck size={14} /> Regulated Operations
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                                    Legal Compliance <br />
                                    <span className="text-primary">Global Standards.</span>
                                </h3>
                                <p className="text-muted-foreground text-lg font-bold max-w-md leading-relaxed">
                                    We operate in full transparency with financial regulators to ensure a sustainable future.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
                                {[
                                    { label: "Jurisdictions", value: "150+", color: "text-blue-500" },
                                    { label: "KYC Success", value: "99.2%", color: "text-emerald-500" },
                                    { label: "Update Rate", value: "Quarterly", color: "text-purple-500" },
                                    { label: "Trust Score", value: "4.9/5", color: "text-orange-500" }
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