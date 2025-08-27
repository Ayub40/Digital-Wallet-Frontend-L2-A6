import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
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

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { useGetAllAgentsQuery, useAgentApprovalMutation, useGetSingleUserQuery } from "@/redux/features/auth/auth.api";

export default function ManageAgents() {
    // const { data: agentsRes, isLoading, refetch } = useGetAllAgentsQuery({});
    const { data: agentsRes, isLoading, refetch } = useGetAllAgentsQuery();
    const [agentApproval] = useAgentApprovalMutation();

    const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
    const [confirmAgent, setConfirmAgent] = useState<any>(null);

    const agents = agentsRes?.data || [];

    const { data: agentDetail } = useGetSingleUserQuery(selectedAgentId!, {
        skip: !selectedAgentId,
    });

    const handleApproval = async (agent: any) => {
        try {
            const updatedAgent = await agentApproval(agent._id).unwrap();
            toast.success(
                updatedAgent.isAgentStatus === "APPROVED"
                    ? "Agent Approved"
                    : "Agent Suspended"
            );
            refetch();
            setConfirmAgent(null);
        } catch (err) {
            toast.error("Action failed");
        }
    };

    // const handleApproval = async (agent: any) => {
    //     try {
    //         await agentApproval(agent._id).unwrap();
    //         toast.success(agent.isApproved ? "Agent Approved" : "Agent Suspended");
    //         refetch();
    //         setConfirmAgent(null);
    //     } catch (err) {
    //         toast.error("Action failed");
    //     }
    // };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Manage Agents</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Approved</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {agents.map((agent: any) => (
                        <TableRow key={agent._id}>
                            <TableCell>{agent.name}</TableCell>
                            <TableCell>{agent.email}</TableCell>
                            <TableCell>
                                <span className={agent.isActive === "ACTIVE" ? "text-red-600" : "text-green-600"}>
                                    {agent.isActive}
                                </span>
                            </TableCell>
                            <TableCell>
                                <span className={agent.isAgentStatus === "APPROVED" ? "text-green-600" : "text-red-600"}>
                                    {agent.isAgentStatus === "APPROVED" ? "Approved" : "Suspended"}
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
                    ))}
                </TableBody>
            </Table>

            {/* Agent Details Dialog */}
            {selectedAgentId && agentDetail?.data && (
                <Dialog open={true} onOpenChange={() => setSelectedAgentId(null)}>
                    <DialogContent className="sm:max-w-lg w-full">
                        <DialogHeader>
                            <DialogTitle>Agent Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-2 mt-2">
                            <p><strong>Name:</strong> {agentDetail.data.name}</p>
                            <p><strong>Email:</strong> {agentDetail.data.email}</p>
                            <p><strong>Phone:</strong> {agentDetail.data.phone || "-"}</p>
                            <p><strong>Status:</strong> {agentDetail.data.isActive}</p>
                            {/* <p><strong>Approved:</strong> {agentDetail.data.isApproved ? "Yes" : "No"}</p> */}
                            <p><strong>Wallet Balance:</strong> {agentDetail.data.wallet?.balance ?? 0} ৳</p>
                            <p><strong>Created At:</strong> {new Date(agentDetail.data.createdAt).toLocaleString()}</p>
                            <p><strong>Updated At:</strong> {new Date(agentDetail.data.updatedAt).toLocaleString()}</p>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                            <Button onClick={() => setSelectedAgentId(null)}>Close</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            {/* AlertDialog for Approve/Suspend */}
            {confirmAgent && (
                <AlertDialog open={true} onOpenChange={() => setConfirmAgent(null)}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                You want to {confirmAgent.isAgentStatus === "APPROVED" ? "Suspend" : "Approve"} this agent?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setConfirmAgent(null)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleApproval(confirmAgent)}>
                                {confirmAgent.isAgentStatus === "APPROVED" ? "Suspend" : "Approve"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    );
}
