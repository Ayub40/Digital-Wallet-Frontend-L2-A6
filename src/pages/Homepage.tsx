import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function HeroSection() {

    return (
        <section className="relative w-full bg-gradient-to-r from-primary via-secondary to-accent text-foreground transition-colors max-w-screen-xl mx-auto container rounded-2xl">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl text-center md:text-left space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        <span className="text-primary-foreground">Simplify</span> Your{" "}
                        <span className="text-primary-foreground">Digital Wallet</span>
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground">
                        Manage your money, send payments, and stay in control — all in one secure and fast wallet.
                    </p>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 md:mt-0"
                >
                    <Card className="w-[320px] md:w-[400px] shadow-2xl rounded-2xl bg-card text-card-foreground transition-colors">
                        <CardContent className="p-6 space-y-4">
                            <h2 className="text-xl font-semibold">Why Choose Our Wallet?</h2>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">✔</span>
                                    Instant money transfer anytime, anywhere
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">✔</span>
                                    Pay bills securely with one tap
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">✔</span>
                                    Track all your transactions in real-time
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">✔</span>
                                    Safe & encrypted system to protect your money
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
