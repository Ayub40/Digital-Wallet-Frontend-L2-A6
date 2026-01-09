import { motion, type Variants } from "framer-motion";
import {
    Zap, Lock, History, ShieldCheck, Smartphone, TrendingUp,
    ArrowLeft, Globe, CreditCard, Headphones, Sparkles,
    MousePointer2
} from "lucide-react";
import { Link } from "react-router-dom";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};


const floating: Variants = {
    initial: { y: 0 },
    animate: {
        y: [0, -15, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
};

export default function Features() {
    const allFeatures = [
        { title: "Instant Transfer", desc: "Send money globally in real-time with zero delay.", icon: Zap, color: "text-blue-500", bg: "bg-blue-500/10", hoverBg: "group-hover:bg-blue-600" },
        { title: "Vault Protection", desc: "Advanced AES-256 encryption for your assets.", icon: Lock, color: "text-indigo-500", bg: "bg-indigo-500/10", hoverBg: "group-hover:bg-indigo-600" },
        { title: "Transaction History", desc: "Get monthly PDF statements and spending graphs.", icon: History, color: "text-pink-500", bg: "bg-pink-500/10", hoverBg: "group-hover:bg-pink-600" },
        { title: "Merchant Payments", desc: "Scan any QR code and pay instantly at stores.", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", hoverBg: "group-hover:bg-emerald-600" },
        { title: "Mobile Experience", desc: "Native iOS and Android apps for on-the-go banking.", icon: Smartphone, color: "text-orange-500", bg: "bg-orange-500/10", hoverBg: "group-hover:bg-orange-600" },
        { title: "Yield Rewards", desc: "Earn up to 5% APY on your idle balance.", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-500/10", hoverBg: "group-hover:bg-purple-600" },
        { title: "Global Access", desc: "Support for 50+ currencies and 120+ countries.", icon: Globe, color: "text-cyan-500", bg: "bg-cyan-500/10", hoverBg: "group-hover:bg-cyan-600" },
        { title: "Virtual Cards", desc: "Generate unlimited virtual cards for safe shopping.", icon: CreditCard, color: "text-rose-500", bg: "bg-rose-500/10", hoverBg: "group-hover:bg-rose-600" },
        { title: "24/7 Support", desc: "Dedicated human support for all your queries.", icon: Headphones, color: "text-slate-500", bg: "bg-slate-500/10", hoverBg: "group-hover:bg-slate-600" },
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden text-foreground">
   
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <main className="container max-w-7xl mx-auto px-6 py-12 lg:py-12">

                
                <div className="mb-12">
                    <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold uppercase text-[10px] tracking-widest group w-fit">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back Home
                    </Link>
                </div>


                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-widest uppercase"
                        >
                            <Sparkles size={14} className="animate-pulse" /> Powering the future
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-6xl font-black tracking-tighter leading-[0.9]"
                        >
                            Next-Gen <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                                Wallet Features.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground font-bold leading-relaxed max-w-lg"
                        >
                            Simplified tools designed for the modern financial era. Experience security with extreme raw speed.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4"
                        >
                        </motion.div>
                    </div>


                    <div className="relative">
                        <motion.div
                            variants={floating}
                            initial="initial"
                            animate="animate"
                            className="relative z-10 rounded-xl p-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-2xl shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&q=80&w=800"
                                alt="Dashboard"
                                className="rounded-[2rem] w-full h-[350px] object-cover shadow-inner"
                            />


                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-6 -right-6 p-6 bg-card border border-border rounded-xl shadow-2xl backdrop-blur-md hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase opacity-50 tracking-tighter">Balance Growth</p>
                                        <p className="text-lg font-black">+24.5%</p>
                                    </div>
                                </div>
                            </motion.div>

                        
                            <motion.div
                                animate={{ x: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute -bottom-8 -left-8 p-4 bg-zinc-900 text-white rounded-2xl shadow-2xl hidden md:flex items-center gap-3 border border-white/10"
                            >
                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                    <MousePointer2 size={14} />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest">Instant Pay</p>
                            </motion.div>
                        </motion.div>

                     
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-[80px] -z-10 animate-pulse" />
                    </div>
                </section>

             
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {allFeatures.map((f, i) => (
                        <motion.div key={i} variants={fadeInUp}>
                            <div className="relative p-8 h-full rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 hover:border-primary/30 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden">
                                <div className={`h-14 w-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-6 transition-all duration-300 ${f.hoverBg} group-hover:text-white group-hover:scale-110 shadow-inner group-hover:rotate-3`}>
                                    <f.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-primary transition-colors">
                                    {f.title}
                                </h3>
                                <p className="text-muted-foreground font-bold leading-relaxed mb-4">
                                    {f.desc}
                                </p>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-blue-600 group-hover:w-full transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </main>
        </div>
    );
}
