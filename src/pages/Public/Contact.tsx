import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-6 mx-auto max-w-screen-xl ">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            {submitted ? (
                <p>Thank you! Your inquiry has been submitted.</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input type="text" placeholder="Name" required />
                    <Input type="email" placeholder="Email" required />
                    <Input type="text" placeholder="Message" required />
                    <Button type="submit">Submit</Button>
                </form>
            )}
        </div>
    );
}
