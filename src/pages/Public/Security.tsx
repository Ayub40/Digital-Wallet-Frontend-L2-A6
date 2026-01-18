import { motion } from "framer-motion";
import { Fingerprint, Key, Zap, Lock } from "lucide-react";

export default function Security() {
    const securityFeatures = [
        { title: "Biometric Auth", desc: "FaceID and Fingerprint unlock for instant and safe access.", icon: Fingerprint, color: "text-blue-500", bg: "bg-blue-500/10" },
        { title: "2FA Protection", desc: "Two-factor authentication for every high-value transaction.", icon: Key, color: "text-purple-500", bg: "bg-purple-500/10" },
        { title: "Real-time Alerts", desc: "Get notified instantly for any suspicious account activity.", icon: Zap, color: "text-orange-500", bg: "bg-orange-500/10" },
        { title: "Cold Storage", desc: "Major assets are kept in offline cold wallets for maximum safety.", icon: Lock, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    ];

    return (
        <main className="min-h-screen bg-background py-20 px-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto space-y-20">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.8]">
                        Bank-Grade <br /> <span className="text-primary">Fortress Security</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-muted-foreground font-bold text-lg">
                        We use the same infrastructure as world-class financial institutions to keep your money safe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {securityFeatures.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-[2rem] bg-card/40 backdrop-blur-md border border-border/40 hover:border-primary/50 transition-all shadow-xl group"
                        >
                            <div className={`h-14 w-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <f.icon size={28} />
                            </div>
                            <h3 className="text-xl font-black mb-3">{f.title}</h3>
                            <p className="text-sm text-muted-foreground font-bold leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}