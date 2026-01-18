import { motion, type Variants } from "framer-motion";
import {
    Phone, MapPin, MessageSquare,
    Zap, ShieldCheck, Headset, ArrowUpRight,
    Globe, HelpCircle, Laptop, Landmark
} from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactComponent() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden py-16 px-6 font-sans">

            <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-24">

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-black tracking-widest uppercase">
                        <Headset size={14} /> Global Assistance Hub
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none py-2">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-slate-400 via-blue-400 to-indigo-500 drop-shadow-[0_4px_12px_rgba(59,130,246,0.15)]">
                            Direct solutions for <span className="italic">every query.</span>
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg font-bold max-w-2xl mx-auto leading-relaxed">
                        Skip the queues. Choose the department you'd like to reach or explore our specialized support channels.
                    </p>
                </motion.div>


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {[
                        { icon: Zap, title: "General Inquiries", desc: "Basic questions about account setup and features.", link: "General FAQ", color: "from-blue-500 to-cyan-500" },
                        { icon: Landmark, title: "Business & API", desc: "Corporate accounts, API keys, and enterprise solutions.", link: "Developer Portal", color: "from-emerald-500 to-teal-500" },
                        { icon: ShieldCheck, title: "Security & Compliance", desc: "Report suspicious activity or legal documentation.", link: "Report Center", color: "from-red-500 to-rose-500" },
                        { icon: Laptop, title: "Technical Support", desc: "Facing bugs or app performance issues? Let us know.", link: "Open Ticket", color: "from-purple-500 to-indigo-500" },
                        { icon: Globe, title: "Press & Media", desc: "For media inquiries and brand assets.", link: "Media Kit", color: "from-orange-500 to-amber-500" },
                        { icon: HelpCircle, title: "Help Center", desc: "Detailed guides for every tool within PayNest.", link: "Visit Docs", color: "from-sky-500 to-blue-600" }
                    ].map((dept, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group p-8 rounded-xl bg-muted/10 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${dept.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                <dept.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight mb-2 text-foreground/90">{dept.title}</h3>
                            <p className="text-muted-foreground font-medium mb-6 leading-relaxed text-sm">{dept.desc}</p>
                            <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest">
                                {dept.link}
                                {/* <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */}
                            </div>


                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                        </motion.div>
                    ))}
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-xl bg-linear-to-br from-blue-600/20 via-indigo-600/10 to-transparent border border-white/10 backdrop-blur-2xl"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md">
                                <MessageSquare size={32} />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl font-black tracking-tight">Need urgent help?</h3>
                                <p className="text-muted-foreground font-bold">Talk to a real person on our 24/7 live chat.</p>
                            </div>
                        </div>
                        <button className="px-10 py-5 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all duration-500 hover:scale-105 shadow-xl shadow-white/5">
                            Start Live Chat
                        </button>
                    </div>
                </motion.div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-10 rounded-xl bg-muted/10 border border-border/40 flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="w-full h-48 md:w-48 rounded-[2rem] bg-muted/30 border border-border/40 flex items-center justify-center relative overflow-hidden group shrink-0">
                            <MapPin size={40} className="text-primary animate-bounce" />
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <h4 className="text-2xl font-black uppercase tracking-tighter">Silicon Valley HQ</h4>
                            <p className="text-muted-foreground font-medium">
                                402 Tech Plaza, Financial District <br />
                                San Francisco, California, US.
                            </p>
                            <div className="flex justify-center md:justify-start gap-4 text-primary font-black text-xs">
                                <span className="flex items-center gap-2"><Phone size={14} /> +1 800-PAYNEST</span>
                            </div>
                        </div>
                    </motion.div>


                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Active Support", value: "24/7", color: "text-blue-500" },
                            { label: "Reply Time", value: "<2hr", color: "text-emerald-500" },
                            { label: "Agents", value: "150+", color: "text-purple-500" },
                            { label: "Languages", value: "12", color: "text-orange-500" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 rounded-xl bg-background/50 border border-border/40 text-center shadow-sm"
                            >
                                <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}