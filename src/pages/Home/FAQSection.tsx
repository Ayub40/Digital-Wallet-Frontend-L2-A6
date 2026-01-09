import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
    const faqs = [
        {
            q: "Is PayNest available 24/7?",
            a: "Yes, PayNest is fully operational 24 hours a day, 7 days a week, including weekends and public holidays.",
        },
        {
            q: "Are there any hidden charges?",
            a: "No. All fees are transparently shown before you confirm any transaction. What you see is what you pay.",
        },
        {
            q: "What should I do if I lose my phone?",
            a: "You can instantly freeze your account via our helpline or by logging in from another secure device.",
        },
        {
            q: "Is my money safe with PayNest?",
            a: "Absolutely. Your funds are protected with bank-grade encryption, real-time monitoring, and strict compliance standards.",
        },
    ];

    return (
        <section className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start rounded-xl border border-border/60 bg-card p-8 md:p-16 shadow-md">

            
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-8 pt-2"
                >

                    <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-600 dark:text-blue-400">
                        <span className="text-xs font-bold tracking-wide uppercase flex gap-2"><HelpCircle size={14} /> Support Center</span>
                    </div>


                    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                        Questions?
                        <br />
                        <span className="text-blue-600">Answered Clearly.</span>
                    </h2>

                    <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-xl">
                        We believe clarity builds trust. Here are the most common questions
                        users ask before getting started with PayNest.
                    </p>

                    <Button
                        variant="outline"
                        className="h-12 rounded-xl px-8 font-bold border-primary/20 bg-primary/5 hover:bg-primary/10"
                    >
                        Visit Help Center
                    </Button>
                </motion.div>

              
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="space-y-4"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="rounded-xl border border-border/50 bg-background shadow-sm hover:shadow-md transition-shadow"
                            >
                                <AccordionTrigger className="px-6 py-5 text-left font-bold text-base md:text-lg hover:no-underline">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 text-muted-foreground font-medium leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
