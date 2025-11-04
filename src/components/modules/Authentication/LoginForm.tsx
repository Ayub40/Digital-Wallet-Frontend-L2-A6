import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Password from "@/components/ui/Password";
import { cn } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { useState } from "react";
import Loader from "@/specialUi/Loader";


const loginSchema = z.object({
    email: z.string().email({ message: "Enter a valid email" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();
    
    const [loadingAfterLogin, setLoadingAfterLogin] = useState(false);

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        try {
            const res = await login(data).unwrap();

            if (res.success) {
                setLoadingAfterLogin(true);
                toast.success("Logged in successfully");
                navigate("/");
            }
        } catch (err) {
            const typedErr = err as FetchBaseQueryError & { data?: { message?: string } };
            console.error(typedErr);


            if (typedErr.data?.message === "Password does not match") {
                toast.error("Invalid credentials");
            }

            if (typedErr.data?.message === "User is not verified") {
                toast.error("Your account is not verified");
                navigate("/verify", { state: data.email });
            }

            if (typedErr.data?.message === "User is BLOCKED") {
                toast.error("Your account is blocked");
                navigate("/unauthorized");
            }
        }
    };

    if (loadingAfterLogin) {
        return <Loader />;
    }



    return (
        <div className={cn("max-w-md mx-auto flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="aaa@gmail.com" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Password {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>
                </form>
            </Form>

            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                </span>
            </div>

            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" replace className="underline underline-offset-4">
                    Register
                </Link>
            </div>
        </div>
    );
}


