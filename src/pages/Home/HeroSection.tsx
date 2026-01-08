import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, Lock } from "lucide-react";


export function HeroSection() {
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