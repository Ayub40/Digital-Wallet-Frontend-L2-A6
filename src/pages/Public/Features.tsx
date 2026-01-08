import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ShieldCheck, Globe, CreditCard, PieChart, Smartphone, Sparkles } from "lucide-react";

const features = [
    {
        title: "Instant Transfers",
        description: "Send money instantly to anyone, anywhere in the world within seconds.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Military-Grade Security",
        description: "Your funds and data are protected by bank-level encryption and MFA.",
        icon: ShieldCheck,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Global Currency Support",
        description: "Hold and transact in 50+ currencies with real-time exchange rates.",
        icon: Globe,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Virtual Cards",
        description: "Generate instant virtual cards for secure online shopping and subscriptions.",
        icon: CreditCard,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Smart Analytics",
        description: "Track your spending habits with AI-powered financial insights and reports.",
        icon: PieChart,
        color: "text-rose-500",
        bg: "bg-rose-500/10"
    },
    {
        title: "Mobile First Experience",
        description: "Access your wallet on the go with our lightning-fast iOS and Android apps.",
        icon: Smartphone,
        color: "text-sky-500",
        bg: "bg-sky-500/10"
    },
];

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Features() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden py-24">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 space-y-20">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase">
                        <Sparkles size={14} /> Powering the future
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                        Next-Gen <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-600">
                            Wallet Features
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-bold leading-relaxed">
                        Experience the most advanced financial tools designed to give you complete control over your money.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <Card className="relative h-full bg-muted/20 backdrop-blur-xl border-border/40 rounded-[2.5rem] overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-primary/5">
                                <CardHeader className="p-8 pb-4">
                                    <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-inner`}>
                                        <feature.icon size={28} />
                                    </div>
                                    <CardTitle className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 pt-0">
                                    <p className="text-muted-foreground font-bold leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>

                                {/* Bottom Decorative Accent */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-blue-600 group-hover:w-full transition-all duration-700" />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Integration Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center bg-muted/10 border border-border/40 p-10 rounded-[3rem] backdrop-blur-sm"
                >
                    <h3 className="text-xl font-black mb-2">And much more coming soon...</h3>
                    <p className="text-muted-foreground font-medium italic">We are constantly evolving to provide you with the best experience.</p>
                </motion.div>
            </div>
        </main>
    );
}








// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Check } from "lucide-react";

// const features = [
//     { title: "Instant Transfers", description: "Send money instantly to anyone.", icon: <Check /> },
//     { title: "Secure Wallet", description: "Your funds are safe with us.", icon: <Check /> },
//     { title: "Multi-currency Support", description: "Transact in multiple currencies.", icon: <Check /> },
// ];

// console.log(document.querySelector(".features-menu"));

// export default function Features() {
//     return (
//         <div className="space-y-6 p-6 mx-auto max-w-screen-xl features-menu">
//             <h1 className="text-3xl font-bold">Features</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {features.map((feature, index) => (
//                     <Card key={index}>
//                         <CardHeader>
//                             <CardTitle className="flex items-center gap-2">
//                                 {feature.icon} {feature.title}
//                             </CardTitle>
//                         </CardHeader>
//                         <CardContent>{feature.description}</CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// }
