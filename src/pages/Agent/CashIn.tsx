import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useAgentCashInMutation } from "@/redux/features/transaction/transaction.api";

const cashInSchema = z.object({
    identifier: z.string().min(3, { message: "Email or Phone is required" }),
    amount: z.number().min(1, { message: "Amount must be greater than 0" }),
});

export function CashIn({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    const [cashIn, { isLoading }] = useAgentCashInMutation();

    const form = useForm<z.infer<typeof cashInSchema>>({
        resolver: zodResolver(cashInSchema),
        defaultValues: {
            identifier: "",
            amount: 0,
        },
    });

    const onSubmit = async (data: z.infer<typeof cashInSchema>) => {
        try {
            const result = await cashIn(data).unwrap();
            toast.success(result?.message || "Cash-In successful!");
            form.reset();
        } catch (error: any) {
            toast.error(error?.data?.message || "Cash-In failed");
        }
    };

    return (
        <div className={cn("flex flex-col gap-6 max-w-md mx-auto", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Agent Cash-In</h1>
                <p className="text-sm text-muted-foreground">
                    Enter User Email/Phone and amount
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Identifier */}
                    <FormField
                        control={form.control}
                        name="identifier"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>User (Email or Phone)</FormLabel>
                                <FormControl>
                                    <Input placeholder="aaa@gmail.com / 017XXXXXXXX" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Amount */}
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input
                                        // type="number"
                                        placeholder="Enter amount"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Processing..." : "Cash-In"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
