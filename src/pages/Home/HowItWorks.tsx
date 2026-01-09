import { motion } from "framer-motion";
import { UserPlus, CreditCard, Send, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
    const steps = [
        { 
            title: "Create Account", 
            desc: "Sign up in 30 seconds with your phone number. No complex paperwork required.", 
            icon: UserPlus, 
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        { 
            title: "Add Money", 
            desc: "Link your bank card or visit an agent to top up your wallet instantly.", 
            icon: CreditCard, 
            color: "text-indigo-600",
            bgColor: "bg-indigo-50"
        },
        { 
            title: "Start Transacting", 
            desc: "Send money, pay bills, or shop online with a single secure tap.", 
            icon: Send, 
            color: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
    ];

    return (
        <section className="py-3 w-full bg-background ">
            <div className="container max-w-7xl mx-auto px-6">

                <div className="mx-auto mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 ">
                        Simple <span className="text-blue-600">Onboarding.</span>
                    </h2>
                    <p className="text-muted-foreground font-bold text-lg">
                        Three easy steps to transform your digital finance experience.
                    </p>
                </div>

     
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative p-6 rounded-xl border border-border/60 bg-card hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                        >
             
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-12 h-12 rounded-2xl ${step.bgColor} ${step.color} flex items-center justify-center`}>
                                    <step.icon size={24} />
                                </div>
                                <div className="h-px flex-1 bg-border/50" />
                                <span className="text-xs font-black text-muted-foreground/30 uppercase tracking-widest">
                                    Step 0{i + 1}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-black flex items-center gap-2">
                                    {step.title}
                                    <CheckCircle2 size={16} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-muted-foreground font-medium leading-snug">
                                    {step.desc}
                                </p>
                            </div>

                       
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 group-hover:w-1/2 transition-all duration-500 rounded-b-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

