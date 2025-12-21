/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import StatsSections from "./Home/StatsSection"
// import AboutUsTab from "./Home/AboutUs"

export default function HomePage() {

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors">
            <HeroSection />
            <StatsSections />
            <FeaturesSection />
            {/* <AboutUsTab /> */}
            <SecuritySection />
            <CTASection />
        </main>
    )
}


function HeroSection() {
    return (
        <section className="relative w-full bg-gradient-to-r from-primary via-secondary to-accent text-foreground transition-colors max-w-7xl mx-auto container rounded-2xl mt-1 ">
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

function FeaturesSection() {
    const features = [
        "Send Money",
        "Cash In / Out",
        "Pay Bills",
        "Mobile Recharge",
        "Transaction History",
        "Encrypted Security",
    ]

    return (
        <section className="py-20 max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">PayNest Wallet Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <Card className="rounded-2xl">
                            <CardContent className="p-6 text-center">
                                <p className="font-semibold">{f}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

function SecuritySection() {
    return (
        <section className="py-20 bg-muted max-w-7xl mx-auto mt-1 rounded-2xl">
            <div className="max-w-3xl mx-auto text-center px-6">
                <h2 className="text-3xl font-bold">100% Secure & Trusted</h2>
                <p className="mt-4 text-muted-foreground">
                    Bank-level encryption, OTP verification, and role-based access.
                </p>
            </div>
        </section>
    )
}

function CTASection() {
    return (
        <section className="py-20 max-w-screen-xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-4xl font-bold">Start Using PayNest Wallet Today</h2>
                <p className="text-muted-foreground mt-3">Fast • Secure • Reliable</p>
                {/* <Button size="lg" className="mt-6">Create Free Account</Button> */}
                <Link to="/register" replace className="underline underline-offset-4">
                    {/* Register */}
                    <Button size="lg" className="mt-6">Create Free Account</Button>
                </Link>
            </motion.div>
        </section>
    )
}
