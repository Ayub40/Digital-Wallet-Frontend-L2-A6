import { motion, type Variants } from "framer-motion";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";
import {
    HelpCircle,
    PlusCircle,
    ShieldCheck,
    Globe,
    Zap,
    CreditCard,
    Award,
} from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const faqCategories = [
    {
        category: "Getting Started",
        color: "from-blue-500 to-cyan-400",
        questions: [
            {
                question: "How do I add money to my wallet?",
                answer: "Navigate to Dashboard > Add Money. You can use your linked bank account, credit card, or visit any authorized agent to top up instantly with zero processing fees.",
                icon: PlusCircle
            },
            {
                question: "Is there a limit on daily transactions?",
                answer: "Standard accounts have a $5,000 daily limit. Verified users can enjoy up to $50,000 per day. You can upgrade your limit by completing the KYC process in settings.",
                icon: Zap
            }
        ]
    },
    {
        category: "Security & Privacy",
        color: "from-purple-500 to-pink-500",
        questions: [
            {
                question: "Is my personal data and money safe?",
                answer: "Absolutely. We employ bank-grade AES-256 encryption and multi-factor authentication (MFA). Your funds are stored in segregated tier-1 bank accounts for maximum safety.",
                icon: ShieldCheck
            },
            {
                question: "What happens if I lose my phone?",
                answer: "Don't worry! Your money is safe. Simply log in from another device and use the 'Terminate Other Sessions' feature, or contact our support to temporarily freeze your account.",
                icon: ShieldCheck
            }
        ]
    },
    {
        category: "Fees & Transfers",
        color: "from-emerald-500 to-teal-400",
        questions: [
            {
                question: "Are there any hidden charges?",
                answer: "No hidden surprises at PayNest. Peer-to-peer transfers are always free. We only charge a small flat fee for withdrawals to external bank accounts.",
                icon: CreditCard
            },
            {
                question: "Can I transfer money internationally?",
                answer: "Currently, we focus on providing the fastest domestic transfers. However, international remittance features are in our roadmap for late 2025!",
                icon: Globe
            }
        ]
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden py-12 md:py-20 px-6 font-sans text-foreground">
  
            <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-24">
         
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase">
                        <HelpCircle size={14} /> Help Center
                    </div>
                    <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight">
                        We're here to <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-500 to-emerald-500">help you grow.</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed">
                        Have questions? We have answers. Explore our comprehensive guide or reach out to our team of experts.
                    </p>
                </motion.div>

               
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-20"
                >
                    {faqCategories.map((cat, catIdx) => (
                        <div key={catIdx} className="space-y-8 max-w-5xl mx-auto">
                            <h2 className={`text-2xl font-black border-l-4 px-4 tracking-tight uppercase bg-linear-to-r ${cat.color} bg-clip-text text-transparent border-primary/50`}>
                                {cat.category}
                            </h2>
                            <div className="grid gap-5">
                                {cat.questions.map((faq, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem
                                                value={`item-${catIdx}-${index}`}
                                                className="border border-border/40 px-6 md:px-8 rounded-[2rem] bg-muted/10 backdrop-blur-md hover:bg-muted/20 transition-all duration-300 hover:border-primary/30 shadow-sm overflow-hidden group"
                                            >
                                                <AccordionTrigger className="hover:no-underline py-7">
                                                    <div className="flex items-center gap-5 text-left">
                                                        <div className={`p-3 rounded-2xl bg-linear-to-br ${cat.color} text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500`}>
                                                            <faq.icon size={22} />
                                                        </div>
                                                        <span className="font-bold text-lg md:text-2xl tracking-tight text-foreground/90 group-data-[state=open]:text-primary transition-colors">
                                                            {faq.question}
                                                        </span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground text-lg pb-8 pl-4 md:pl-20 leading-relaxed font-medium">
                                                    <div className="flex gap-4 items-start relative">
                                                       
                                                        <div className={`absolute left-[-28px] top-0 bottom-0 w-1 bg-linear-to-b ${cat.color} rounded-full opacity-20`} />
                                                        
                                                        <div className={`w-2.5 h-2.5 rounded-full bg-linear-to-r ${cat.color} mt-2.5 shrink-0 shadow-lg`} />
                                                        <p className="opacity-90">{faq.answer}</p>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>

               
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl blur-xl" />
                    <div className="relative bg-muted/20 backdrop-blur-2xl border border-border/40 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-primary/20">
                        <div className="absolute top-0 right-0 opacity-10 group-hover:-rotate-12 transition-transform duration-1000 pointer-events-none">
                            <ShieldCheck size={200} className="text-primary" strokeWidth={1} />
                        </div>
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-black uppercase tracking-widest">
                                    <ShieldCheck size={14} /> 100% Verified Community
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
                                    Trusted by millions of <br />
                                    <span className="text-primary">smart users globally.</span>
                                </h3>
                                <p className="text-muted-foreground text-lg font-bold max-w-md">
                                    Our commitment to security and user experience has made us the top-rated digital wallet in the region.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
                                {[
                                    { label: "Active Users", value: "2.5M+", color: "text-blue-500" },
                                    { label: "User Rating", value: "4.9/5", color: "text-emerald-500" },
                                    { label: "Transactions", value: "10M+", color: "text-purple-500" },
                                    { label: "Security Score", value: "99.9%", color: "text-orange-500" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-3xl bg-background/50 border border-border/40 text-center space-y-1 hover:scale-105 transition-all duration-300 shadow-sm">
                                        <p className={`text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</p>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 pt-8 border-t border-border/40 flex flex-wrap justify-center md:justify-start gap-8 opacity-60">
                            <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest"><Award size={16} className="text-primary" /> Award Winning UI</div>
                            <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest"><Zap size={16} className="text-primary" /> Instant Processing</div>
                            <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest"><Globe size={16} className="text-primary" /> Global Standards</div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
