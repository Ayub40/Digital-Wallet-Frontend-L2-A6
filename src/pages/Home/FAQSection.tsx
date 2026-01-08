import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQSection() {
    const faqs = [
        { q: "Is PayNest available 24/7?", a: "Yes, our digital wallet and all transaction services are available 24 hours a day, 7 days a week including holidays." },
        { q: "Are there any hidden charges?", a: "No, we believe in total transparency. All transaction fees are shown clearly before you confirm any payment." },
        { q: "What should I do if I lose my phone?", a: "You can instantly freeze your account by calling our 24/7 helpline or logging in from any other secure device." }
    ];

    return (
        <section className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6 text-center lg:text-left pt-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">Got Questions? <br /> <span className="text-primary font-black uppercase">We've Got Answers.</span></h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                        Everything you need to know about PayNest. If you can't find what you're looking for, our support team is always ready to help.
                    </p>
                    <Button variant="outline" className="h-12 rounded-xl px-8 font-bold border-primary/20 bg-primary/5 hover:bg-primary/10">Visit Help Center</Button>
                </div>

                <div className="bg-muted/20 backdrop-blur-xl border border-border/40 rounded-2xl p-6 md:p-10 shadow-2xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-border/30 px-6 rounded-2xl bg-background/40 transition-all hover:bg-background/60 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6 text-foreground">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-md pb-6 leading-relaxed font-semibold">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}