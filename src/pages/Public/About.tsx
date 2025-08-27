import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
    return (
        <div className="space-y-6 p-6 mx-auto max-w-screen-xl">
            <h1 className="text-3xl font-bold">About Our Wallet</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Our Story</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        We started our digital wallet to simplify online payments and provide secure transactions for everyone.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Our mission is to make money transfers fast, secure, and accessible to all users worldwide.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Team</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Our team is composed of experienced fintech engineers and designers passionate about payments.</p>
                </CardContent>
            </Card>
        </div>
    );
}
