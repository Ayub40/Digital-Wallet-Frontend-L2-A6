import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Verify() {
    const navigate = useNavigate();
    const location = useLocation();

    // email can come as state: { email } or just a string depending on how you navigate
    const email =
        (location.state as { email?: string } | undefined)?.email ??
        (location.state as string | undefined) ??
        "";

    useEffect(() => {
        if (!email) {
            navigate("/", { replace: true });
        }
    }, [email, navigate]);

    const handleContinue = () => navigate("/login");

    return (
        <div className="grid place-content-center h-screen">
            <Card className="w-[360px]">
                <CardHeader>
                    <CardTitle className="text-xl">Verify your email address</CardTitle>
                    <CardDescription>
                        Your account for <br /> <span className="font-medium">{email}</span> is ready.
                        {/* <br /> No OTP required. */}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        You can continue to login now.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleContinue} className="w-full">
                        Continue to Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
