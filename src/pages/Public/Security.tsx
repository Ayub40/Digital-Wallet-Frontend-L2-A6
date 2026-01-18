import { motion, type Variants } from "framer-motion";
import {
    ShieldCheck, Lock, Fingerprint, Eye, Zap,
    Globe, Server, ShieldAlert,
} from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Security() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden py-16 px-6 font-sans">

            <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-24">

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black tracking-widest uppercase">
                        <ShieldCheck size={14} /> Bank-Grade Security
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 via-blue-500 to-sky-400 drop-shadow-[0_5px_15px_rgba(59,130,246,0.1)]">
                            Your trust is our <span className="italic underline underline-offset-8 decoration-blue-500/20">greatest asset.</span>
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
                        We deploy proprietary encryption protocols and real-time AI monitoring to ensure that your money and data remain untouchable.
                    </p>
                </motion.div>


                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: Fingerprint, title: "Biometric Protocol", desc: "Every sensitive action is protected by multi-factor biometric authentication including FaceID and Fingerprint touch.", color: "from-blue-500 to-cyan-500" },
                        { icon: Server, title: "Segregated Storage", desc: "User funds are never mixed with company operational accounts. Your money is held in regulated Tier-1 banks.", color: "from-purple-500 to-pink-500" },
                        { icon: Lock, title: "AES-256 Encryption", desc: "Data is encrypted at rest and in transit using the highest industry standard encryption used by global banks.", color: "from-emerald-500 to-teal-500" },
                        { icon: ShieldAlert, title: "AI Fraud Shield", desc: "Our neural network analyzes transaction patterns 24/7 to flag and block suspicious activities instantly.", color: "from-orange-500 to-red-500" },
                        { icon: Eye, title: "Zero Knowledge", desc: "We use zero-knowledge proofs for authentication, meaning even our staff cannot see your sensitive passwords or PINs.", color: "from-blue-400 to-indigo-600" },
                        { icon: Globe, title: "Compliance", desc: "PayNest is fully PCI-DSS compliant and undergoes monthly penetration testing by independent security firms.", color: "from-teal-400 to-emerald-600" }
                    ].map((feature, i) => (
                        <motion.div key={i} variants={itemVariants} className="p-8 rounded-[2.5rem] bg-muted/10 backdrop-blur-md border border-border/40 hover:border-primary/30 transition-all duration-300 group shadow-sm">
                            <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight mb-3 text-foreground/90">{feature.title}</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>


                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-transparent to-blue-500/10 rounded-3xl blur-xl" />
                    <div className="relative bg-muted/20 backdrop-blur-2xl border border-border/40 rounded-[3rem] p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/20">
                        <div className="absolute top-0 right-0 opacity-10 group-hover:-rotate-12 transition-transform duration-1000 pointer-events-none">
                            <ShieldCheck size={250} className="text-primary" strokeWidth={1} />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                                    <Zap size={14} /> Security Infrastructure
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                                    Trusted Security <br />
                                    <span className="text-primary">Validated by Experts.</span>
                                </h3>
                                <p className="text-muted-foreground text-lg font-bold max-w-md leading-relaxed">
                                    Our commitment to your safety has made us the most secure digital wallet in the world.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
                                {[
                                    { label: "Safety Score", value: "99.9%", color: "text-blue-500" },
                                    { label: "Global Nodes", value: "150+", color: "text-emerald-500" },
                                    { label: "Audit Frequency", value: "Monthly", color: "text-purple-500" },
                                    { label: "Data Uptime", value: "100%", color: "text-orange-500" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-3xl bg-background/50 border border-border/40 text-center space-y-1 hover:scale-105 transition-all duration-300 shadow-sm">
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