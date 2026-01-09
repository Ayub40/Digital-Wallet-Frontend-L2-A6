import Logo from "@/assets/icons/Logo";
import { Link } from "react-router-dom";
import {
    Github, Linkedin, Mail, Briefcase, MessageCircle
} from "lucide-react";

export default function Footer() {

    const socialLinks = [
        { Icon: Linkedin, href: "https://www.linkedin.com/in/ayub-khan-dev/", color: "hover:text-blue-700" },
        { Icon: Github, href: "https://github.com/Ayub40", color: "hover:text-foreground" },
        { Icon: Briefcase, href: "https://my-portfolio-website-client.vercel.app/", color: "hover:text-blue-600" },
    ];


    const platformLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Pricing", path: "/pricing" },
        { name: "Security", path: "/security" },
    ];


    const companyLinks = [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms" },
    ];

    return (
        <footer className="max-w-7xl mx-auto border-t border-border/40 bg-card/30 backdrop-blur-xl relative">
      
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-x-12 mb-12">

                  
                    <div className="lg:col-span-4 flex flex-col space-y-5">
                        <Link to="/" className="inline-block transition-transform hover:scale-105 w-fit">
                            <Logo />
                        </Link>
                        <p className="text-muted-foreground text-[14px] leading-relaxed max-w-sm font-medium">
                            Empowering your financial future with next-gen digital assets management.
                            Secure, fast, and transparent solutions for the modern world.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`h-9 w-9 flex items-center justify-center rounded-lg bg-background border border-border/50 text-muted-foreground transition-all duration-300 ${social.color} hover:border-blue-500/50 shadow-sm`}
                                >
                                    <social.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                  
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        <div className="space-y-5">
                            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-foreground">Platform</h4>
                            <ul className="space-y-3">
                                {platformLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-sm text-muted-foreground hover:text-blue-600 transition-colors font-medium">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-5">
                            <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-foreground">Company</h4>
                            <ul className="space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-sm text-muted-foreground hover:text-blue-600 transition-colors font-medium">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

               
                    <div className="lg:col-span-4 space-y-5">
                        <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-foreground">Assistance</h4>

                        <div className="relative overflow-hidden rounded-xl border border-blue-500/10 bg-blue-500/[0.03] p-5">
                            <div className="space-y-3">
                                <a href="mailto:support@paynest.com" className="flex items-center gap-2 text-[13px] font-bold hover:text-blue-600 transition-colors">
                                    <Mail size={14} className="text-blue-600" />
                                    ayubk4028@gmail.com
                                </a>
                                <a href="tel:+880123456789" className="flex items-center gap-2 text-[13px] font-bold hover:text-emerald-600 transition-colors">
                                    {/* <Phone size={14} className="text-emerald-600" /> */}
                                    <MessageCircle size={14} className="text-emerald-600" />
                                    +880 1688871098
                                </a>
                            </div>
                        </div>

                        
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">System Live</span>
                            </div>
                            <div className="px-2.5 py-1 rounded-md bg-muted border border-border/50 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                                v2.0.4 Secure
                            </div>
                        </div>
                    </div>
                </div>

            
                <div className="pt-8 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <p className="text-[12px] font-medium text-muted-foreground">
                        © {new Date().getFullYear()} <span className="text-foreground font-bold">PayNest Digital Wallet.</span> All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-[12px] font-semibold text-muted-foreground/60">
                        <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
