"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { EllipsisVertical } from "lucide-react";

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

import { useGetAllUsersQuery, useUserStatusMutation } from "@/redux/features/auth/auth.api";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function ManageUsers() {
    const { data: usersRes, isLoading, refetch } = useGetAllUsersQuery({});
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [confirmUser, setConfirmUser] = useState<any>(null);
    const [userStatus] = useUserStatusMutation();

    const users = usersRes?.data || [];

    // Block/Unblock handler
    const handleToggleBlock = async (user: any) => {
        try {
            const response = await userStatus(user._id).unwrap();
            console.log("Block/Unblock API Response:", response);
            toast.success(`${user.isActive === "ACTIVE" ? "Blocked" : "Unblocked"} successfully`);
            refetch();
            setConfirmUser(null);
        } catch (err) {
            console.error("Block/Unblock API Error:", err);
            toast.error("Action failed");
        }
    };

    const handleView = (user: any) => {
        setSelectedUser(user);
    };

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Manage Users</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user: any) => (
                        <TableRow key={user._id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone || "-"}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                                <span className={user.isActive === "ACTIVE" ? "text-green-600" : "text-red-600"}>
                                    {user.isActive}
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
                                        <DropdownMenuItem onClick={() => handleView(user)}>View</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => setConfirmUser(user)}>
                                            {user.isActive === "ACTIVE" ? "Block" : "Unblock"}
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* User Details Modal */}
            {selectedUser && (
                <Dialog open={true} onOpenChange={() => setSelectedUser(null)}>
                    <DialogContent className="sm:max-w-lg w-full">
                        <div className="space-y-2 mt-2">
                            <h3 className="text-lg font-semibold mb-4">User Details</h3>
                            <p><strong>Name:</strong> {selectedUser.name}</p>
                            <p><strong>Email:</strong> {selectedUser.email}</p>
                            <p><strong>Phone:</strong> {selectedUser.phone || "-"}</p>
                            <p><strong>Role:</strong> {selectedUser.role}</p>
                            <p><strong>Status:</strong> {selectedUser.isActive}</p>
                            <p><strong>Approved:</strong> {selectedUser.isApproved ? "Yes" : "No"}</p>
                            <p><strong>Wallet Balance:</strong> {selectedUser.wallet?.balance ?? 0} ৳</p>
                            <p><strong>Created At:</strong> {new Date(selectedUser.createdAt).toLocaleString()}</p>
                            <p><strong>Updated At:</strong> {new Date(selectedUser.updatedAt).toLocaleString()}</p>
                            <p><strong>Auth Providers:</strong> {selectedUser.auths.map((a: any) => a.provider).join(", ")}</p>
                            <div className="mt-4 flex justify-end gap-2">
                                <Button onClick={() => setSelectedUser(null)}>Close</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            {/* AlertDialog for Block/Unblock */}
            {confirmUser && (
                <AlertDialog open={true} onOpenChange={() => setConfirmUser(null)}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action will {confirmUser.isActive === "ACTIVE" ? "block" : "unblock"} the user.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setConfirmUser(null)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={() => handleToggleBlock(confirmUser)}
                            >
                                Yes, {confirmUser.isActive === "ACTIVE" ? "Block" : "Unblock"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    );
}
