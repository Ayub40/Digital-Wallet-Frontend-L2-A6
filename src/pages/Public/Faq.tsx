import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
    { question: "How do I add money?", answer: "Go to Dashboard > Add Money and follow the instructions." },
    { question: "Is my money safe?", answer: "Yes! We use advanced encryption to protect your funds." },
    { question: "Can I transfer internationally?", answer: "Currently, we support domestic transfers only." },
];

export default function FAQPage() {
    return (
        <div className="p-6 mx-auto max-w-screen-xl">
            <h1 className="text-3xl font-bold mb-4">FAQ</h1>
            <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
