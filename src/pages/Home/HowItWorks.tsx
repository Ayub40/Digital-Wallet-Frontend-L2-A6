import { motion, type Variants } from "framer-motion";
import { ArrowRight, UserPlus, CreditCard, Send } from "lucide-react";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export function HowItWorks() {
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
