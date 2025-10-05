import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Props {
    onApply: (filters: { search: string; type: string; status: string }) => void;
}

export default function AdminTransactionFilter({ onApply }: Props) {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");

    console.log(status);
    console.log(search);
    console.log(type);

    const applyFilters = () => {
        onApply({
            search: search || "",
            type: type || "",
            status: status || ""
        });
    };


    const clearFilters = () => {
        setSearch("");
        setType("");
        setStatus("");
        onApply({ search: "", type: "", status: "" });
    };

    return (
        <div className="w-full border p-4 rounded-md space-y-4 flex items-end gap-4">
            <div className="flex-1">
                <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div>
                <Select value={type} onValueChange={setType}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ADD">Add Money</SelectItem>
                        <SelectItem value="WITHDRAW">Withdraw</SelectItem>
                        <SelectItem value="TRANSFER">Transfer</SelectItem>
                        <SelectItem value="CASH_IN">Cash In</SelectItem>
                        <SelectItem value="CASH_OUT">Cash Out</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="SUCCESS">Success</SelectItem>
                        <SelectItem value="FAILED">Failed</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button onClick={applyFilters}>Apply</Button>
            <Button variant="outline" onClick={clearFilters}>Clear</Button>
        </div>
    );
}
