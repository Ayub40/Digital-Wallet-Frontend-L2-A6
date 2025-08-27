import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const features = [
    { title: "Instant Transfers", description: "Send money instantly to anyone.", icon: <Check /> },
    { title: "Secure Wallet", description: "Your funds are safe with us.", icon: <Check /> },
    { title: "Multi-currency Support", description: "Transact in multiple currencies.", icon: <Check /> },
];

export default function Features() {
    return (
        <div className="space-y-6 p-6 mx-auto max-w-screen-xl">
            <h1 className="text-3xl font-bold">Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                {feature.icon} {feature.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{feature.description}</CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
