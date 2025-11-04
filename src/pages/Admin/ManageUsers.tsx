import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
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

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import {
    useGetAllUsersQuery,
    useUserStatusMutation,
    useUpdateUserRoleMutation,
    useGetSingleUserQuery,
} from "@/redux/features/auth/auth.api";
import Loader from "@/specialUi/Loader";

export default function AllUser() {
    const { data: usersRes, isLoading, refetch } = useGetAllUsersQuery({});
    const [toggleStatus] = useUserStatusMutation();
    const [updateRole] = useUpdateUserRoleMutation();

    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [confirmUser, setConfirmUser] = useState<any>(null);

    const users = usersRes?.data || [];

    const { data: userDetail } = useGetSingleUserQuery(selectedUserId!, {
        skip: !selectedUserId,
    });

    // ----- User Block / Unblock -----
    const handleStatus = async (user: any) => {
        try {
            await toggleStatus(user._id).unwrap();
            toast.success(`${user.isActive === "ACTIVE" ? "Blocked" : "Unblocked"} successfully`);
            refetch();
            setConfirmUser(null);
        } catch (err) {
            toast.error("Action failed");
        }
    };

    // ----- Role Change + Auto Approve/Suspend -----
    const handleRoleChange = async (user: any, role: string) => {
        try {
            await updateRole({
                userId: user._id,
                role
            }).unwrap();

            toast.success("Role updated successfully");
            refetch();
        } catch {
            toast.error("Failed to update role");
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40 text-gray-600">
                <Loader />
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Manage Users</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
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
                            <TableCell>
                                <Select
                                    defaultValue={user.role}
                                    onValueChange={(val) => handleRoleChange(user, val)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="USER">USER</SelectItem>
                                        <SelectItem value="AGENT">AGENT</SelectItem>
                                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                                    </SelectContent>
                                </Select>
                            </TableCell>
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
                                        <DropdownMenuItem onClick={() => setSelectedUserId(user._id)}>View</DropdownMenuItem>
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

            {/* User Details Dialog */}
            {selectedUserId && userDetail?.data && (
                <Dialog open={true} onOpenChange={() => setSelectedUserId(null)}>
                    <DialogContent className="sm:max-w-lg w-full">
                        <DialogHeader>
                            <DialogTitle>User Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-2 mt-2">
                            <p><strong>Name:</strong> {userDetail.data.name}</p>
                            <p><strong>Email:</strong> {userDetail.data.email}</p>
                            <p><strong>Role:</strong> {userDetail.data.role}</p>
                            <p><strong>Status:</strong> {userDetail.data.isActive}</p>
                            <p><strong>Wallet Balance:</strong> {userDetail.data.wallet?.balance ?? 0} ৳</p>
                            <p><strong>Created At:</strong> {new Date(userDetail.data.createdAt).toLocaleString()}</p>
                            <p><strong>Updated At:</strong> {new Date(userDetail.data.updatedAt).toLocaleString()}</p>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                            <Button onClick={() => setSelectedUserId(null)}>Close</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            {/* Block/Unblock */}
            {confirmUser && (
                <AlertDialog open={true} onOpenChange={() => setConfirmUser(null)}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                You want to {confirmUser.isActive === "ACTIVE" ? "block" : "unblock"} this user?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setConfirmUser(null)}>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleStatus(confirmUser)}>
                                {confirmUser.isActive === "ACTIVE" ? "Block" : "Unblock"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    );
}

