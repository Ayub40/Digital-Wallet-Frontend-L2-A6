import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
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
import { useSendMoneyMutation } from "@/redux/features/transaction/transaction.api";

const sendMoneySchema = z.object({
    receiver: z
        .string()
        .min(3, { message: "Receiver is required" }) // email or phone
        .max(50),
    amount: z
        .number({ error: "Amount must be a number" })
        .min(1, { message: "Amount must be greater than 0" }),
});

export function SendMoney({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const [sendMoney, { isLoading }] = useSendMoneyMutation();

    const form = useForm<z.infer<typeof sendMoneySchema>>({
        resolver: zodResolver(sendMoneySchema),
        defaultValues: {
            receiver: "",
            amount: 0,
        },
    });

    const onSubmit = async (data: z.infer<typeof sendMoneySchema>) => {
        try {
            const result = await sendMoney({
                receiver: data.receiver,
                amount: data.amount,
            }).unwrap();
            toast.success(result?.message || "Money sent successfully!");
            form.reset();
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to send money");
        }
    };

    return (
        <div className={cn("flex flex-col gap-6 max-w-md mx-auto", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Send Money</h1>
                <p className="text-sm text-muted-foreground">
                    Enter receiver email/phone and amount
                </p>
            </div>

            <div className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Receiver */}
                        <FormField
                            control={form.control}
                            name="receiver"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Receiver (Email or Phone)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="aaa@gmail.com / 017XXXXXXXX" {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        Receiver email or phone
                                    </FormDescription>
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
                                            type="number"
                                            placeholder="Enter amount"
                                            {...field}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        Amount to send
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Sending..." : "Send Money"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
