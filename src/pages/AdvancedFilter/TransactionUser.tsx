import { Button } from "@/components/ui/button";
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
import { Trash2 } from "lucide-react";

export default function TransactionUser() {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedType = searchParams.get("type") || "";
    const startDate = searchParams.get("startDate") || "";
    const endDate = searchParams.get("endDate") || "";

    const handleTypeChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set("type", value);
        } else {
            params.delete("type");
        }
        setSearchParams(params);
    };

    const handleDateChange = (field: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set(field, value);
        } else {
            params.delete(field);
        }
        setSearchParams(params);
    };

    const handleClearFilter = () => {
        setSearchParams({});
    };

    return (
        <div className="w-full rounded-xl border border-border bg-card p-5 shadow-sm space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-3">
                <h1 className="text-lg font-semibold tracking-tight">
                    Filters
                </h1>

                <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleClearFilter}
                    className="text-destructive hover:bg-destructive/10"
                >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Filter
                </Button>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-end gap-4">
                {/* Transaction Type */}
                <div className="space-y-2 lg:w-52">
                    <Label className="text-sm text-muted-foreground">
                        Transaction Type
                    </Label>

                    <Select value={selectedType} onValueChange={handleTypeChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="ADD">Add Money</SelectItem>
                                <SelectItem value="WITHDRAW">Withdraw</SelectItem>
                                <SelectItem value="TRANSFER">Transfer</SelectItem>
                                <SelectItem value="CASH_IN">Cash In</SelectItem>
                                <SelectItem value="CASH_OUT">Cash Out</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* Date Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex lg:gap-4 flex-1">
                    <div className="space-y-2 flex-1">
                        <Label className="text-sm text-muted-foreground">
                            Start Date
                        </Label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) =>
                                handleDateChange("startDate", e.target.value)
                            }
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm
                            ring-offset-background
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                            focus-visible:ring-offset-2
                            text-foreground dark:scheme-dark"
                        />
                    </div>

                    <div className="space-y-2 flex-1">
                        <Label className="text-sm text-muted-foreground">
                            End Date
                        </Label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) =>
                                handleDateChange("endDate", e.target.value)
                            }
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm
                            ring-offset-background
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                            focus-visible:ring-offset-2
                            text-foreground dark:scheme-dark"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}









// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useSearchParams } from "react-router";
// import { Trash2 } from "lucide-react"; 

// export default function TransactionUser() {
//     const [searchParams, setSearchParams] = useSearchParams();

//     const selectedType = searchParams.get("type") || "";
//     const startDate = searchParams.get("startDate") || "";
//     const endDate = searchParams.get("endDate") || "";

//     const handleTypeChange = (value: string) => {
//         const params = new URLSearchParams(searchParams);
//         params.set("type", value);
//         setSearchParams(params);
//     };

//     const handleDateChange = (field: string, value: string) => {
//         const params = new URLSearchParams(searchParams);
//         params.set(field, value);
//         setSearchParams(params);
//     };

//     const handleClearFilter = () => {
//         setSearchParams({});
//     };

//     return (
//         <div className="w-full border bg-card p-5 rounded-xl shadow-sm space-y-5">
//             {/* Header Section */}
//             <div className="flex items-center justify-between border-b pb-3">
//                 <h1 className="text-xl font-bold tracking-tight">Filters</h1>
//                 <Button 
//                     size="sm" 
//                     variant="ghost" 
//                     onClick={handleClearFilter}
//                     className="text-destructive hover:bg-destructive/10 transition-colors"
//                 >
//                     <Trash2 className="w-4 h-4 mr-2" />
//                     Clear Filter
//                 </Button>
//             </div>

//             {/* Filter Controls */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-end gap-4">
                
//                 {/* Filter by Type */}
//                 <div className="space-y-2 lg:w-48">
//                     <Label className="text-sm font-medium text-muted-foreground">Transaction Type</Label>
//                     <Select value={selectedType} onValueChange={handleTypeChange}>
//                         <SelectTrigger className="w-full focus:ring-2">
//                             <SelectValue placeholder="All Types" />
//                         </SelectTrigger>
//                         <SelectContent>
//                             <SelectGroup>
//                                 <SelectItem value="ADD">Add Money</SelectItem>
//                                 <SelectItem value="WITHDRAW">Withdraw</SelectItem>
//                                 <SelectItem value="TRANSFER">Transfer</SelectItem>
//                                 <SelectItem value="CASH_IN">Cash In</SelectItem>
//                                 <SelectItem value="CASH_OUT">Cash Out</SelectItem>
//                             </SelectGroup>
//                         </SelectContent>
//                     </Select>
//                 </div>

//                 {/* Date Inputs - Wrapping in a sub-grid for better mobile look */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex lg:gap-4 flex-1">
//                     <div className="space-y-2 flex-1">
//                         <Label className="text-sm font-medium text-muted-foreground">Start Date</Label>
//                         <input
//                             type="date"
//                             value={startDate}
//                             onChange={(e) => handleDateChange("startDate", e.target.value)}
//                             className="w-full h-10 border rounded-md px-3 py-2 text-sm bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition-all"
//                         />
//                     </div>

//                     <div className="space-y-2 flex-1">
//                         <Label className="text-sm font-medium text-muted-foreground">End Date</Label>
//                         <input
//                             type="date"
//                             value={endDate}
//                             onChange={(e) => handleDateChange("endDate", e.target.value)}
//                             className="w-full h-10 border rounded-md px-3 py-2 text-sm bg-background ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition-all"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


