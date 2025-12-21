import Logo from "@/assets/icons/Logo";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto max-w-screen-xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <Logo />
                        </div>

                        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                            Secure digital wallet for users, agents, and admins.
                            Fast transactions, reliable system, and full control.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-foreground">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-sm flex gap-5">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-foreground">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-muted-foreground hover:text-foreground">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="text-muted-foreground hover:text-foreground">
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Digital Wallet. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

