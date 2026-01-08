import { motion, type Variants, } from "framer-motion";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles, PlusCircle, ShieldCheck, Globe, Mail } from "lucide-react";

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    }
};

const faqs = [
    {
        question: "How do I add money to my wallet?",
        answer: "Navigating to Dashboard > Add Money. You can use your linked bank account, credit card, or visit any authorized agent to top up instantly.",
        icon: PlusCircle
    },
    {
        question: "Is my personal data and money safe?",
        answer: "Absolutely. We employ bank-grade AES-256 encryption and multi-factor authentication (MFA) to ensure your assets stay protected 24/7.",
        icon: ShieldCheck
    },
    {
        question: "Can I transfer money internationally?",
        answer: "Currently, we focus on providing the fastest domestic transfers. However, international remittance features are in our roadmap for late 2025!",
        icon: Globe
    },
];

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden py-20 px-6">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[40%] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[300px] bg-purple-500/5 rounded-full blur-[80px] -z-10" />

            <div className="max-w-4xl mx-auto space-y-12">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
                        <HelpCircle size={14} /> Support Center
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                        Frequently Asked <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
                            Questions
                        </span>
                    </h1>
                    <p className="text-muted-foreground text-lg font-medium max-w-xl mx-auto">
                        Everything you need to know about PayNest. Can't find the answer? Contact our 24/7 support.
                    </p>
                </motion.div>

                {/* FAQ Accordion Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-muted/10 backdrop-blur-xl border border-border/40 rounded-xl p-4 md:p-8 shadow-xl"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border-none px-6 rounded-xl bg-background/40 hover:bg-background/60 transition-all border border-transparent hover:border-primary/20 shadow-sm"
                                >
                                    <AccordionTrigger className="hover:no-underline py-6">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                                <faq.icon size={20} />
                                            </div>
                                            <span className="font-bold text-lg md:text-xl tracking-tight text-foreground/90">
                                                {faq.question}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-md pb-6 pl-12 leading-relaxed font-medium">
                                        <div className="flex gap-2">
                                            <Sparkles className="text-primary shrink-0 mt-1" size={16} />
                                            {faq.answer}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Bottom Contact Help */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center p-8 rounded-3xl border border-dashed border-border/60"
                >
                </motion.div>
            </div>

        </main>
    );
}






// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// const faqs = [
//     { question: "How do I add money?", answer: "Go to Dashboard > Add Money and follow the instructions." },
//     { question: "Is my money safe?", answer: "Yes! We use advanced encryption to protect your funds." },
//     { question: "Can I transfer internationally?", answer: "Currently, we support domestic transfers only." },
// ];

// export default function FAQPage() {
//     return (
//         <div className="p-6 mx-auto max-w-screen-xl">
//             <h1 className="text-3xl font-bold mb-4">FAQ</h1>
//             <Accordion type="single" collapsible>
//                 {faqs.map((faq, index) => (
//                     <AccordionItem key={index} value={`item-${index}`}>
//                         <AccordionTrigger>{faq.question}</AccordionTrigger>
//                         <AccordionContent>{faq.answer}</AccordionContent>
//                     </AccordionItem>
//                 ))}
//             </Accordion>
//         </div>
//     );
// }
