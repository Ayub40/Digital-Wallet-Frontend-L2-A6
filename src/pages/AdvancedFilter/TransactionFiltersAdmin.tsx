import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";

export default function TransactionFiltersAdmin() {
    const [searchParams, setSearchParams] = useSearchParams();

    const type = searchParams.get("type") || "";
    const status = searchParams.get("status") || "";
    const startDate = searchParams.get("startDate") || "";
    const endDate = searchParams.get("endDate") || "";
    const minAmount = searchParams.get("minAmount") || "";
    const maxAmount = searchParams.get("maxAmount") || "";
    const search = searchParams.get("search") || "";

    const handleParamChange = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) params.set(key, value);
        else params.delete(key);
        setSearchParams(params);
    };

    const handleClear = () => {
        setSearchParams({});
    };

    return (
        <div className="w-full border p-4 rounded-md space-y-4 flex flex-col md:flex-row md:items-end md:gap-4">
            <div className="flex-1">
                <Label>Search (Sender / Receiver)</Label>
                <Input
                    placeholder="Search by name or email"
                    value={search}
                    onChange={(e) => handleParamChange("search", e.target.value)}
                />
            </div>

            <div className="w-40">
                <Label>Type</Label>
                <Select value={type} onValueChange={(val) => handleParamChange("type", val)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="ADD">Add</SelectItem>
                            <SelectItem value="WITHDRAW">Withdraw</SelectItem>
                            <SelectItem value="TRANSFER">Transfer</SelectItem>
                            <SelectItem value="CASH_IN">Cash In</SelectItem>
                            <SelectItem value="CASH_OUT">Cash Out</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-40">
                <Label>Status</Label>
                <Select value={status} onValueChange={(val) => handleParamChange("status", val)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="SUCCESS">Success</SelectItem>
                            <SelectItem value="FAILED">Failed</SelectItem>
                            <SelectItem value="PENDING">Pending</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex gap-2">
                <div>
                    <Label>Start Date</Label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => handleParamChange("startDate", e.target.value)}
                        className="border rounded p-2 w-36"
                    />
                </div>
                <div>
                    <Label>End Date</Label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => handleParamChange("endDate", e.target.value)}
                        className="border rounded p-2 w-36"
                    />
                </div>
            </div>

            <div className="flex gap-2">
                <div>
                    <Label>Min Amount</Label>
                    <Input
                        type="number"
                        value={minAmount}
                        onChange={(e) => handleParamChange("minAmount", e.target.value)}
                        className="w-28"
                    />
                </div>
                <div>
                    <Label>Max Amount</Label>
                    <Input
                        type="number"
                        value={maxAmount}
                        onChange={(e) => handleParamChange("maxAmount", e.target.value)}
                        className="w-28"
                    />
                </div>
            </div>

            <div>
                <Button variant="outline" onClick={handleClear}>Clear Filters</Button>
            </div>
        </div>
    );
}

