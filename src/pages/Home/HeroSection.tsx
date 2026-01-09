import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full bg-background pt-14 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3 send%3Cpath d='M54 48H6V6h48v42zM6 0H0v6h6V0zm0 54H0v6h6v-6zM54 0h6v6h-6V0zm0 54h6v6h-6v-6z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
              
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col space-y-8"
                    >
                    
                        <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-600 dark:text-blue-400">
                            <span className="text-xs font-bold tracking-wide uppercase">Trusted by 50k+ Companies</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                            The Smart Way to Grow <br />
                            <span className="text-blue-600">Your Digital Assets</span> <br />
                            
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                            Experience the next generation of financial management. Fast, secure, and built for the modern global economy.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link to="/register">
                                <Button size="lg" className="h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 text-md font-semibold">
                                    Start for Free <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="h-14 px-8 rounded-xl border-2 font-semibold">
                                View Pricing
                            </Button>
                        </div>

         
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {["No hidden fees", "Instant transfers", "Bank-grade security", "24/7 Support"].map((text) => (
                                <div key={text} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                    <CheckCircle2 size={18} className="text-blue-500" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </motion.div>

           
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
         
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-white dark:border-white/5 shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" 
                                alt="Financial Dashboard" 
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

             
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 z-20 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4"
                        >
                            <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                <ArrowRight size={20} className="-rotate-45" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Income</p>
                                <p className="text-lg font-bold">+$12,450</p>
                            </div>
                        </motion.div>

           
                        <motion.div 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-card p-4 rounded-2xl shadow-xl border border-border flex items-center gap-4"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-card bg-slate-200" />
                                ))}
                            </div>
                            <p className="text-sm font-bold tracking-tight">Active Investors</p>
                        </motion.div>

                       
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
