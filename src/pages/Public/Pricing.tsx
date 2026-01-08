import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
    { name: "Free", price: "$0", description: "Basic wallet features" },
    { name: "Pro", price: "$9.99/mo", description: "Advanced analytics & priority support" },
];

export default function Pricing() {
    return (
        <div className="space-y-6 p-6 mx-auto max-w-7xl">
            <h1 className="text-3xl font-bold">Pricing</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plans.map((plan, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{plan.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xl font-semibold">{plan.price}</p>
                            <p>{plan.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
