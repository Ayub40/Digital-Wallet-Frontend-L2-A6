import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-xl border border-border/60 bg-card p-8 md:p-16 shadow-md text-center"
      >
    
        <div className="absolute -top-32 -right-32 h-72 w-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 space-y-8">


          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Start managing your money  
              <br />
              <span className="text-blue-600">the smarter way</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Join thousands of users who trust PayNest for fast, secure,
              and reliable digital transactions — all in one place.
            </p>
          </div>

    
          <div className="flex justify-center pt-4">
            <Link to="/register">
              <Button
                size="lg"
                className="h-14 px-10 rounded-xl font-bold text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 group"
              >
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

     
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold text-muted-foreground uppercase tracking-widest pt-8 border-t border-border/40">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              No Paperwork
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Bank-grade Security
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Instant Setup
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
