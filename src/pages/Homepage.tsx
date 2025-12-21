import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ShieldCheck, Zap, Smartphone, ArrowRight, CheckCircle2,
    Users, History, TrendingUp, Lock, UserPlus, CreditCard, Send
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Loader from "@/specialUi/Loader";
import { useGetPublicOverviewQuery } from "@/redux/features/admin/admin.api";

// Shared Animation Settings with TypeScript Fix
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function HomePage() {
    return (
        <main className="min-h-screen bg-background transition-colors overflow-hidden relative">
            {/* Background Decorative Orbs */}
            <div className="absolute top-0 -left-[10%] w-[50%] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="flex flex-col gap-y-24 md:gap-y-32">
                <HeroSection />

                {/* Main Scoped Container for all sections */}
                <div className="max-w-7xl mx-auto w-full px-6 space-y-32 pb-24 container">
                    <StatsSection />
                    <FeaturesSection />
                    <HowItWorks />
                    <SecuritySection />
                    <FAQSection />
                    <CTASection />
                </div>
            </div>
        </main>
    );
}

// ================= Hero Section =================
function HeroSection() {
    return (
        <section className="relative w-full py-20 lg:py-32 border-b border-border/40 bg-muted/10 backdrop-blur-[2px]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center container">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide">
                        <Zap size={14} className="fill-current" /> <span>FINTECH EVOLUTION 2.0</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-foreground">
                        Manage Wealth <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-emerald-500">
                            Without Borders
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        Experience a premium glass-morphic digital wallet. Secure, lightning-fast, and designed for your modern financial lifestyle.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <Link to="/register">
                            <Button size="lg" className="h-14 px-10 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-all text-lg font-bold">
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        {/* <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl backdrop-blur-md bg-background/50 border-border/60 font-bold hover:bg-muted/80">
                            View Demo
                        </Button> */}
                    </div>
                </motion.div>

                {/* Hero Glass Card Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative hidden lg:block"
                >
                    <div className="absolute -inset-4 bg-linear-to-r from-primary/30 to-purple-600/30 rounded-[3rem] blur-2xl opacity-50" />
                    <Card className="relative bg-background/40 backdrop-blur-2xl border-border/50 rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
                        <CardContent className="p-10 space-y-8">
                            <div className="flex justify-between items-center">
                                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-lg">
                                    <Lock size={28} />
                                </div>
                                <div className="text-[10px] font-mono font-bold px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full border border-emerald-500/20 uppercase tracking-widest">
                                    Live Encryption: Active
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold">Dynamic Security</h3>
                                <div className="space-y-4 pt-2">
                                    {[85, 65, 95].map((val, i) => (
                                        <div key={i} className="h-2.5 w-full bg-muted/50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${val}%` }}
                                                transition={{ duration: 2, delay: 0.8 }}
                                                className={`h-full rounded-full bg-linear-to-r ${i === 0 ? 'from-blue-500 to-cyan-400' : i === 1 ? 'from-purple-500 to-pink-500' : 'from-emerald-500 to-teal-400'}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}

// ================= Stats Section =================
function StatsSection() {
    const { data, isLoading } = useGetPublicOverviewQuery();
    if (isLoading) return <div className="flex justify-center py-20"><Loader /></div>;

    const stats = [
        { label: "Active Users", value: data?.data?.totalUsers || 0, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { label: "Agents", value: data?.data?.totalAgents || 0, icon: ShieldCheck, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
        { label: "Transactions", value: data?.data?.totalTransactions || 0, icon: History, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
        { label: "Volume", value: data?.data?.totalAmount || 0, icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    ];

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
                <motion.div key={i} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Card className={`rounded-2xl border-border/50 bg-background/40 backdrop-blur-md hover:bg-muted/50 transition-all duration-300 shadow-xl border ${s.border}`}>
                        <CardContent className="p-8 text-center">
                            <div className={`w-14 h-14 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                                <s.icon size={28} />
                            </div>
                            <h3 className="text-4xl font-black mb-2 tracking-tight">{s.value.toLocaleString()}</h3>
                            <p className="text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">{s.label}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </section>
    );
}

// ================= How It Works Section =================
function HowItWorks() {
    const steps = [
        { title: "Create Account", desc: "Sign up in 30 seconds with your phone number.", icon: UserPlus, color: "from-blue-500/10 to-blue-600/5", iconColor: "text-blue-500" },
        { title: "Add Money", desc: "Link your card or visit an agent to top up.", icon: CreditCard, color: "from-purple-500/10 to-purple-600/5", iconColor: "text-purple-500" },
        { title: "Start Transacting", desc: "Send money or pay bills with a single tap.", icon: Send, color: "from-emerald-500/10 to-emerald-600/5", iconColor: "text-emerald-500" },
    ];

    return (
        <section className="space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">How it Works</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Three simple steps to start your journey with PayNest today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`relative p-10 rounded-2xl border border-border/40 bg-gradient-to-br ${step.color} backdrop-blur-xl text-center space-y-6 shadow-2xl hover:-translate-y-2 transition-transform duration-500`}
                    >
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-background/90 backdrop-blur-md flex items-center justify-center ${step.iconColor} border border-border/50 shadow-xl`}>
                            <step.icon size={36} />
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed font-medium">{step.desc}</p>

                        {i < 2 && (
                            <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="p-2 rounded-full bg-background border border-border shadow-lg">
                                    <ArrowRight className="text-primary w-6 h-6" />
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// ================= Features Section =================
function FeaturesSection() {
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

// ================= Security Section =================
function SecuritySection() {
    return (
        <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-primary/10 via-background to-purple-500/10 border border-border/60 rounded-2xl p-12 md:p-24 text-center relative shadow-2xl backdrop-blur-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                <div className="relative z-10 space-y-8">
                    <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-700 text-white shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)] mb-4">
                        <ShieldCheck size={48} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Regulated & Encrypted</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed font-semibold">
                        Your assets are protected by double-layer SSL and biometric security protocols. Trusted by 50,000+ users worldwide.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-6">
                        {["PCI DSS", "ISO 27001", "GDPR COMPLIANT"].map((text) => (
                            <div key={text} className="flex items-center gap-3 font-bold text-xs bg-background/80 px-6 py-3 rounded-2xl border border-border/50 shadow-sm uppercase tracking-widest">
                                <CheckCircle2 className="text-emerald-500 w-5 h-5" /> {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

// ================= FAQ Section =================
function FAQSection() {
    const faqs = [
        { q: "Is PayNest available 24/7?", a: "Yes, our digital wallet and all transaction services are available 24 hours a day, 7 days a week including holidays." },
        { q: "Are there any hidden charges?", a: "No, we believe in total transparency. All transaction fees are shown clearly before you confirm any payment." },
        { q: "What should I do if I lose my phone?", a: "You can instantly freeze your account by calling our 24/7 helpline or logging in from any other secure device." }
    ];

    return (
        <section className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6 text-center lg:text-left pt-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">Got Questions? <br /> <span className="text-primary font-black uppercase">We've Got Answers.</span></h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                        Everything you need to know about PayNest. If you can't find what you're looking for, our support team is always ready to help.
                    </p>
                    <Button variant="outline" className="h-12 rounded-xl px-8 font-bold border-primary/20 bg-primary/5 hover:bg-primary/10">Visit Help Center</Button>
                </div>

                <div className="bg-muted/20 backdrop-blur-xl border border-border/40 rounded-2xl p-6 md:p-10 shadow-2xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-border/30 px-6 rounded-2xl bg-background/40 transition-all hover:bg-background/60 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6 text-foreground">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-md pb-6 leading-relaxed font-semibold">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

// ================= CTA Section (Professional Glassmorphism Edition) =================
function CTASection() {
    return (
        <section className="py-12 max-w-7xl mx-auto w-full">
            <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-border/50 bg-muted/20 backdrop-blur-xl p-8 md:p-20 text-center shadow-2xl"
            >
                <div className="absolute -top-24 -right-24 h-64 w-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-foreground">
                            Ready to transform your <br /> 
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-emerald-500">
                                financial future?
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                            Join 50,000+ users who trust PayNest for their daily transactions. 
                            Open your account today in less than 2 minutes.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link to="/register">
                            <Button size="lg" className="h-14 px-10 text-lg rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all font-bold group">
                                Create Free Account 
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-2xl backdrop-blur-md bg-background/50 border-border/80 font-bold">
                            Contact Sales
                        </Button>
                    </div>

                    {/* Features Badges */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold text-muted-foreground/80 uppercase tracking-[0.15em] pt-8 border-t border-border/30">
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Paperwork
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Bank-grade Security
                        </span>
                        <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant Setup
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

