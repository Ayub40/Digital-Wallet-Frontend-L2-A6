import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWithdrawMoneyMutation } from "@/redux/features/transaction/transaction.api";
import { toast } from "sonner";

export function UserWithDrawMoney({ className }: React.HTMLAttributes<HTMLDivElement>) {
    const [withdrawMoney, { isLoading }] = useWithdrawMoneyMutation();

    const form = useForm<{ amount: number }>({
        defaultValues: { amount: 0 },
    });

    const onSubmit = async (data: { amount: number }) => {
        try {
            const result = await withdrawMoney(data).unwrap();
            console.log(result);
            toast.success("Money withdrawn successfully!");
        } catch (error: any) {
            console.error(error);
            toast.error(error?.data?.message || "Withdraw failed");
        }
    };

    return (
        <div className={cn("flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-md mx-auto", className)}>
            <div className="text-center">
                <h1 className="text-2xl font-bold">Withdraw Money</h1>
                <p className="text-sm text-muted-foreground">
                    Enter the amount you want to withdraw
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="100" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* <Button type="submit" className="w-full" disabled={isLoading}> */}
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Processing..." : "Withdraw"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
