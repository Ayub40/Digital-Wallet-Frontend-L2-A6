import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Fingerprint,
  Activity,
  CheckCircle2,
} from "lucide-react";

export function SecuritySection() {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center rounded-xl border border-border/60 bg-card p-8 md:p-16 shadow-md">

       
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 font-bold text-xs tracking-widest uppercase">
            Security & Compliance
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Built on <span className="text-blue-600">Trust</span>,  
            Secured by Design
          </h2>

          <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-xl">
            From encryption to fraud detection, every layer of our system
            is engineered to protect your money, identity, and transactions
            at all times.
          </p>

          <div className="space-y-3">
            {[
              "End-to-end encrypted transactions",
              "Real-time fraud & anomaly detection",
              "Strict access control & monitoring",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500" size={20} />
                <span className="font-semibold text-sm">{text}</span>
              </div>
            ))}
          </div>


          <div className="flex flex-wrap gap-3 pt-4">
            {["PCI DSS", "ISO 27001", "GDPR"].map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-xl border border-border text-xs font-bold tracking-widest bg-background"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {[
            {
              icon: Lock,
              title: "256-bit Encryption",
              desc: "Industry-standard encryption for all data & payments.",
            },
            {
              icon: Fingerprint,
              title: "Biometric Security",
              desc: "Fingerprint & device-level authentication support.",
            },
            {
              icon: Activity,
              title: "Live Monitoring",
              desc: "Continuous monitoring to prevent suspicious activity.",
            },
            {
              icon: ShieldCheck,
              title: "Regulatory Compliance",
              desc: "Fully aligned with global financial standards.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl border border-border/50 bg-background p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <item.icon size={22} />
              </div>
              <h3 className="font-black text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
