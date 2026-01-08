import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Sparkles, Rocket, Landmark, Globe2, Zap } from "lucide-react";

const timeline = [
    { 
        year: "2024", 
        title: "The Vision", 
        desc: "Started with a mission to simplify digital payments for everyone, everywhere.",
        icon: Landmark,
        color: "bg-blue-500"
    },
    { 
        year: "2025", 
        title: "Rapid Growth", 
        desc: "Reached 50k+ active users and launched our state-of-the-art mobile app.",
        icon: Zap,
        color: "bg-emerald-500"
    },
    { 
        year: "Future", 
        title: "Global Expansion", 
        desc: "Aiming to support 50+ currencies and borderless transactions across the globe.",
        icon: Globe2,
        color: "bg-purple-500"
    }
];

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function About() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden pb-24 font-sans">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-32 space-y-32">

                {/* Hero Header */}
                <motion.section initial="hidden" animate="visible" variants={fadeIn} className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                        <Sparkles size={14} /> Who we are
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-emerald-500">
                        Redefining the Future of Money<br />
                        {/* <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-emerald-500">
                            Future of Money
                        </span> */}
                    </h1>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-bold leading-relaxed">
                        PayNest is more than just a wallet. We are a team of visionaries dedicated to making financial freedom accessible to everyone, everywhere.
                    </p>
                </motion.section>

                {/* Zig-Zag Timeline Section */}
                <section className=" relative">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight mb-20">Our Journey</h2>
                        
                        <div className="relative">
                            {/* Central Line (Visible only on Desktop) */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border/50 hidden md:block" />

                            <div className="space-y-20">
                                {timeline.map((item, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7, delay: i * 0.2 }}
                                        className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        {/* Dot on the central line */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 hidden md:flex shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                            <item.icon size={18} className="text-primary" />
                                        </div>

                                        {/* Content Card */}
                                        <div className="w-full md:w-[45%]">
                                            <div className="p-8 rounded-[2.5rem] bg-muted/20 backdrop-blur-xl border border-border/40 hover:border-primary/30 transition-all shadow-xl group">
                                                <div className={`inline-block px-4 py-1 rounded-full ${item.color} text-white text-sm font-black mb-4 shadow-lg`}>
                                                    {item.year}
                                                </div>
                                                <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-muted-foreground font-bold leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Empty space for the other side */}
                                        <div className="hidden md:block md:w-[45%]" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Mission Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Card className="h-full bg-muted/20 backdrop-blur-xl border-border/40 rounded-[2.5rem] overflow-hidden hover:border-primary/30 transition-all duration-500">
                            <CardContent className="p-10 space-y-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-inner"><Rocket size={28} /></div>
                                <h2 className="text-3xl font-black tracking-tight">Our Story</h2>
                                <p className="text-muted-foreground leading-relaxed font-bold">
                                    Started in 2024, PayNest emerged from a simple observation: digital payments were too complex and fragmented.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <Card className="h-full bg-muted/20 backdrop-blur-xl border-border/40 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
                            <CardContent className="p-10 space-y-6">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-inner"><Target size={28} /></div>
                                <h2 className="text-3xl font-black tracking-tight">Our Mission</h2>
                                <p className="text-muted-foreground leading-relaxed font-bold">
                                    To empower 100 million users by providing a borderless, transparent, and ultra-secure financial ecosystem.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </section>

                {/* Values Section */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-muted/10 border border-border/40 rounded-[3rem] p-10 md:p-20 text-center space-y-12">
                    <h2 className="text-4xl font-black tracking-tight">Built by Experts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "Community Driven", desc: "User feedback is our roadmap." },
                            { icon: Shield, title: "Privacy First", desc: "Your data is encrypted & sovereign." },
                            { icon: Sparkles, title: "Modern UX", desc: "Complex tech, made simple." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4 p-6 rounded-3xl hover:bg-background/50 transition-all group">
                                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <h4 className="text-xl font-black">{item.title}</h4>
                                <p className="text-sm text-muted-foreground font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Footer CTA */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="text-center py-10">
                    <h3 className="text-2xl font-black mb-4">Be part of the revolution.</h3>
                    <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
                </motion.div>
            </div>
        </main>
    );
}




// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export default function About() {
//     return (
//         <div className="space-y-6 p-6 mx-auto max-w-screen-xl">
//             <h1 className="text-3xl font-bold">About Our Wallet</h1>

//             <Card>
//                 <CardHeader>
//                     <CardTitle>Our Story</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p>
//                         We started our digital wallet to simplify online payments and provide secure transactions for everyone.
//                     </p>
//                 </CardContent>
//             </Card>

//             <Card>
//                 <CardHeader>
//                     <CardTitle>Mission</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p>Our mission is to make money transfers fast, secure, and accessible to all users worldwide.</p>
//                 </CardContent>
//             </Card>

//             <Card>
//                 <CardHeader>
//                     <CardTitle>Team</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p>Our team is composed of experienced fintech engineers and designers passionate about payments.</p>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }
