import { motion, type Variants } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export function SecuritySection() {
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