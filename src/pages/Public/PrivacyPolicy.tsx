import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, FileText } from "lucide-react";

export default function PrivacyPolicy() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <main className="min-h-screen bg-background py-20 px-6 relative overflow-hidden">
            {/* Background Blur Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto space-y-12">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
                        <ShieldCheck size={14} /> Trust & Safety
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Privacy <span className="text-primary">Policy</span></h1>
                    <p className="text-muted-foreground font-bold">Last updated: January 2026</p>
                </motion.div>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-card/30 backdrop-blur-xl border border-border/40 rounded-xl p-8 md:p-12 space-y-8 shadow-xl">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black flex items-center gap-3">
                            <Eye className="text-blue-500" /> Data Collection
                        </h2>
                        <p className="text-muted-foreground leading-relaxed font-medium">
                            We collect information to provide better services to all our users. This includes your name, email, and transaction history. We never sell your data to third parties.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-muted/20 border border-border/40">
                            <Lock className="text-purple-500 mb-3" />
                            <h3 className="font-black mb-2">Security First</h3>
                            <p className="text-sm text-muted-foreground">Your data is encrypted with AES-256 protocols before being stored.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-muted/20 border border-border/40">
                            <FileText className="text-emerald-500 mb-3" />
                            <h3 className="font-black mb-2">Your Rights</h3>
                            <p className="text-sm text-muted-foreground">You have the right to request access to or deletion of your personal data at any time.</p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}