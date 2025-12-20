/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // সার্চের জন্য
import { EllipsisVertical, Search } from "lucide-react";
import { toast } from "sonner";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import {
    useGetAllAgentsQuery,
    useAgentApprovalMutation,
    useGetSingleUserQuery
} from "@/redux/features/auth/auth.api";
import Loader from "@/specialUi/Loader";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function ManageAgents() {
    // --- State Management ---
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const limit = 5;

    // --- API Calls ---
    const { data: agentsRes, isLoading, refetch } = useGetAllAgentsQuery(
        {
            page: currentPage.toString(),
            limit: limit.toString(),
            searchTerm: searchTerm
        },
        { refetchOnMountOrArgChange: true }
    );

    const [agentApproval] = useAgentApprovalMutation();

    const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
    const [confirmAgent, setConfirmAgent] = useState<any>(null);

    const agents = agentsRes?.data || [];
    const totalPage = agentsRes?.meta?.totalPage ?? 1;

    const { data: agentDetail } = useGetSingleUserQuery(selectedAgentId!, {
        skip: !selectedAgentId,
    });

    // --- Handlers ---
    const handleApproval = async (agent: any) => {
        try {
            const result = await agentApproval(agent._id).unwrap();
            toast.success(
                result.data.isAgentStatus === "APPROVED"
                    ? "Agent Approved"
                    : "Agent Suspended"
            );
            refetch();
            setConfirmAgent(null);
        } catch {
            toast.error("Action failed");
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40">
                <Loader />
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Manage Agents</h2>

                {/* Search Bar */}
                <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                        placeholder="Search agents..."
                        className="pl-8"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // সার্চ করলে ১ নম্বর পেজে নিয়ে যাবে
                        }}
                    />
                </div>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Approval</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {agents.length > 0 ? (
                        agents.map((agent: any) => (
                            <TableRow key={agent._id}>
                                <TableCell>{agent.name}</TableCell>
                                <TableCell>{agent.email}</TableCell>
                                <TableCell>
                                    <span className={agent.isActive === "ACTIVE" ? "text-green-600" : "text-red-600"}>
                                        {agent.isActive}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span className={agent.isAgentStatus === "APPROVED" ? "text-green-600 font-medium" : "text-orange-600 font-medium"}>
                                        {agent.isAgentStatus}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="p-2">
                                                <EllipsisVertical />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-36">
                                            <DropdownMenuItem onClick={() => setSelectedAgentId(agent._id)}>View</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => setConfirmAgent(agent)}>
                                                {agent.isAgentStatus === "APPROVED" ? "Suspend" : "Approve"}
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} className="text-center py-10 text-gray-500">
                                No agents found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* Pagination UI */}
            {totalPage > 1 && (
                <div className="flex justify-end mt-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>

                            {Array.from({ length: totalPage }, (_, i) => i + 1).map(page => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        isActive={currentPage === page}
                                        onClick={() => setCurrentPage(page)}
                                        className="cursor-pointer"
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPage))}
                                    className={currentPage === totalPage ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}

            {/* View Details Dialog */}
            {selectedAgentId && agentDetail?.data && (
                <Dialog open={true} onOpenChange={() => setSelectedAgentId(null)}>
                    <DialogContent>
                        <DialogHeader><DialogTitle>Agent Profile</DialogTitle></DialogHeader>
                        <div className="space-y-2 text-sm">
                            <p><strong>Name:</strong> {agentDetail.data.name}</p>
                            <p><strong>Email:</strong> {agentDetail.data.email}</p>
                            <p><strong>Status:</strong> {agentDetail.data.isActive}</p>
                            <p><strong>Agent Status:</strong> {agentDetail.data.isAgentStatus}</p>
                            <p><strong>Balance:</strong> {agentDetail.data.wallet?.balance ?? 0} ৳</p>
                        </div>
                        <Button onClick={() => setSelectedAgentId(null)} className="mt-4">Close</Button>
                    </DialogContent>
                </Dialog>
            )}

            {/* Approve/Suspend AlertDialog */}
            {confirmAgent && (
                <AlertDialog open={true} onOpenChange={() => setConfirmAgent(null)}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Change Agent Status?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to {confirmAgent.isAgentStatus === "APPROVED" ? "suspend" : "approve"} <b>{confirmAgent.name}</b>?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setConfirmAgent(null)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleApproval(confirmAgent)}>
                                Confirm
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    );
}

