import Logo from "@/assets/icons/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative border-t border-border/40 bg-muted/10 backdrop-blur-md">
            {/* Background Orb Effect for Consistency */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

            <div className="container mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col items-center text-center space-y-8">
                    
                    {/* Brand Section */}
                    <div className="space-y-4 flex flex-col items-center">
                        <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                            <Logo />
                        </Link>
                        <p className="max-w-md text-sm text-muted-foreground leading-relaxed font-medium">
                            The next generation of digital wealth management. <br className="hidden md:block" />
                            Secure, lightning-fast, and designed for your modern lifestyle.
                        </p>
                    </div>

                    {/* Quick Links - Horizontal Layout */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Home</Link>
                        <Link to="/login" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Login</Link>
                        <Link to="/register" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Register</Link>
                        <Link to="/register" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">Become Agent</Link>
                    </nav>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-medium text-muted-foreground/60">
                    <p>© {new Date().getFullYear()} PayNest Digital Wallet. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5 italic">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" /> 
                            System Live
                        </span>
                        <span className="font-mono bg-muted px-2 py-0.5 rounded text-[11px]">v2.0.4</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}