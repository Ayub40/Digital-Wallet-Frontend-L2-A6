import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useAddMoneyMutation } from "@/redux/features/transaction/transaction.api";


export default function AddMoney() {
    const [amount, setAmount] = useState<number>(0);
    const [addMoney, { isLoading }] = useAddMoneyMutation();

    const handleAddMoney = async () => {
        if (!amount || amount <= 0) {
            toast.error("Please enter a valid amount!");
            return;
        }

        try {
            const res = await addMoney({ amount }).unwrap();
            toast.success(res?.message || "Money added successfully!");
            setAmount(0);
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to add money!");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Add Money to My Wallet 💰
            </h2>

            <div className="flex flex-col gap-4">
                <Input
                    type="number"
                    placeholder="Enter amount (e.g., 500)"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />

                <Button
                    onClick={handleAddMoney}
                    disabled={isLoading}
                    className="w-full py-3 text-lg"
                >
                    {isLoading ? "Processing..." : "Add Money"}
                </Button>
            </div>
        </div>
    );
}