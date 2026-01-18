import { motion } from "framer-motion";
import { Scale, CheckCircle2 } from "lucide-react";

export default function TermsOfService() {
    const terms = [
        { title: "Account Eligibility", desc: "You must be 18+ years old and provide valid KYC documents to use PayNest." },
        { title: "User Responsibilities", desc: "Users are responsible for maintaining the confidentiality of their PIN and login credentials." },
        { title: "Prohibited Activities", desc: "Any fraudulent activity or money laundering will result in immediate account termination." }
    ];

    return (
        <main className="min-h-screen bg-background py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Scale size={48} className="mx-auto text-primary opacity-50" />
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-500">Service</span></h1>
                </div>

                <div className="space-y-6">
                    {terms.map((term, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-muted/10 border border-border/40 hover:border-primary/30 transition-all group"
                        >
                            <div className="flex gap-5">
                                <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-black mb-2 group-hover:text-primary transition-colors">{term.title}</h3>
                                    <p className="text-muted-foreground font-medium leading-relaxed">{term.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}