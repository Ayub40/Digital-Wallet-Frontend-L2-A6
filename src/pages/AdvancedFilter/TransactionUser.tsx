import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchParams } from "react-router";

export default function TransactionUser() {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedType = searchParams.get("type") || "";
    const startDate = searchParams.get("startDate") || "";
    const endDate = searchParams.get("endDate") || "";

    const handleTypeChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("type", value);
        setSearchParams(params);
    };

    const handleDateChange = (field: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set(field, value);
        setSearchParams(params);
    };

    const handleClearFilter = () => {
        setSearchParams({});
    };

    return (
        <div className="w-full border p-4 rounded-md space-y-4 flex items-end gap-4">
            {/* <div className="flex justify-between items-center"> */}
            <div className="items-center gap-2">
                <h1 className="text-lg font-semibold">Filters</h1>
                <Button size="sm" variant="outline" onClick={handleClearFilter}>
                    Clear Filter
                </Button>
            </div>

            {/* Filter by Type */}
            <div className="">
                <Label className="">Transaction Type</Label>
                <Select value={selectedType} onValueChange={handleTypeChange}>
                    {/* <SelectTrigger className="w-full"> */}
                    <SelectTrigger className="w-40">
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

            {/* Filter by Date Range */}
            {/* <div className="flex gap-2"> */}
            {/* <div className="flex-1"> */}
            <div className="flex gap-4">
                <div className="">
                    <Label className="">Start Date</Label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => handleDateChange("startDate", e.target.value)}
                        className="w-40 border rounded p-2"
                    />
                </div>
                {/* <div className="flex-1"> */}
                <div className="">
                    <Label className="">End Date</Label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => handleDateChange("endDate", e.target.value)}
                        className="w-40 border rounded p-2"
                    />
                </div>
            </div>
        </div>
    );
}

