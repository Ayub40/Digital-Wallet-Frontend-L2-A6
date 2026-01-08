import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";


export function CTASection() {
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
                        {/* <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-2xl backdrop-blur-md bg-background/50 border-border/80 font-bold">
                            Contact Sales
                        </Button> */}
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