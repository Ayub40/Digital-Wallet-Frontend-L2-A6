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
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useAgentCashOutMutation } from "@/redux/features/transaction/transaction.api";

const cashOutSchema = z.object({
    identifier: z.string().min(3, { message: "Email or Phone is required" }),
    amount: z.number().min(1, { message: "Amount must be greater than 0" }),
});

export function CashOut({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    const [cashOut, { isLoading }] = useAgentCashOutMutation();

    const form = useForm<z.infer<typeof cashOutSchema>>({
        resolver: zodResolver(cashOutSchema),
        defaultValues: {
            identifier: "",
            amount: 0,
        },
    });

    const onSubmit = async (data: z.infer<typeof cashOutSchema>) => {
        try {
            const result = await cashOut(data).unwrap();
            toast.success(result?.message || "Cash-Out successful!");
            form.reset();
        } catch (error: any) {
            toast.error(error?.data?.message || "Cash-Out failed");
        }
    };

    return (
        <div className={cn("flex flex-col gap-6 max-w-md mx-auto", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Agent Cash-Out</h1>
                <p className="text-sm text-muted-foreground">
                    Enter User Email/Phone and amount
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        {isLoading ? "Processing..." : "Cash-Out"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
