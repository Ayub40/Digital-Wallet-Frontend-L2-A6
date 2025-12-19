/* eslint-disable @typescript-eslint/no-explicit-any */
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

    const handleRoleChange = async (id: string, role: string) => {
        await updateRole({ userId: id, role });
        toast.success("Role updated");
        refetch();
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
                                <Select defaultValue={user.role} onValueChange={(val) => handleRoleChange(user._id, val)}>
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
                            <AlertDialogAction onClick={() => handleStatus(confirmUser)}>
                                Yes, {confirmUser.isActive === "ACTIVE" ? "Block" : "Unblock"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    );
}




















// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
// import { useGetAllUsersQuery, useUpdateUserRoleMutation, useUserStatusMutation, useGetSingleUserQuery } from "@/redux/features/auth/auth.api";
// import { toast } from "sonner";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// export default function AllUser() {
//     const { data, isLoading } = useGetAllUsersQuery({});
//     const [toggleStatus] = useUserStatusMutation();
//     const [updateRole] = useUpdateUserRoleMutation();

//     // State for modal
//     const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

//     // Fetch single user details when view button is clicked
//     const { data: userDetail } = useGetSingleUserQuery(selectedUserId!, {
//         skip: !selectedUserId,
//     });

//     if (isLoading) return <p>Loading...</p>;

//     const handleStatus = async (id: string) => {
//         await toggleStatus(id);
//         toast.success("Status updated");
//     };

//     const handleRoleChange = async (id: string, role: string) => {
//         await updateRole({ userId: id, role });
//         toast.success("Role updated");
//     };

//     return (
//         <>
//             <table className="w-full border">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Role</th>
//                         <th>Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data?.data?.map((user: any) => (
//                         <tr key={user._id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>
//                                 <Select defaultValue={user.role} onValueChange={(val) => handleRoleChange(user._id, val)}>
//                                     <SelectTrigger>
//                                         <SelectValue />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectItem value="USER">USER</SelectItem>
//                                         <SelectItem value="AGENT">AGENT</SelectItem>
//                                         <SelectItem value="ADMIN">ADMIN</SelectItem>
//                                     </SelectContent>
//                                 </Select>
//                             </td>
//                             <td>{user.isActive}</td>
//                             <td className="flex gap-2">
//                                 <Button onClick={() => handleStatus(user._id)}>
//                                     {user.isActive === "ACTIVE" ? "Block" : "Unblock"}
//                                 </Button>
//                                 <Button onClick={() => setSelectedUserId(user._id)}>
//                                     View
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Dialog for single user details */}
//             {selectedUserId && userDetail?.data && (
//                 <Dialog open={!!selectedUserId} onOpenChange={() => setSelectedUserId(null)}>
//                     <DialogContent>
//                         <DialogHeader>
//                             <DialogTitle>User Details</DialogTitle>
//                         </DialogHeader>
//                         <div className="space-y-2">
//                             <p><strong>Name:</strong> {userDetail.data.name}</p>
//                             <p><strong>Email:</strong> {userDetail.data.email}</p>
//                             <p><strong>Role:</strong> {userDetail.data.role}</p>
//                             <p><strong>Status:</strong> {userDetail.data.isActive}</p>
//                             <p><strong>Wallet Balance:</strong> {userDetail.data.wallet?.balance}</p>
//                             <p><strong>Created At:</strong> {new Date(userDetail.data.createdAt).toLocaleString()}</p>
//                             <p><strong>Updated At:</strong> {new Date(userDetail.data.updatedAt).toLocaleString()}</p>
//                         </div>
//                         <Button onClick={() => setSelectedUserId(null)}>Close</Button>
//                     </DialogContent>
//                 </Dialog>
//             )}
//         </>
//     );
// }





























// import { Button } from "@/components/ui/button";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
// import { useGetAllUsersQuery, useUpdateUserRoleMutation, useUserStatusMutation } from "@/redux/features/auth/auth.api";
// // import type { IUser } from "@/types";
// import { toast } from "sonner";

// export default function AllUser() {
//     const { data, isLoading } = useGetAllUsersQuery(undefined);
//     // const { data, isLoading } = useGetAllUsersQuery(undefined) as { data: IUser[] };
//     const [toggleStatus] = useUserStatusMutation();
//     const [updateRole] = useUpdateUserRoleMutation();

//     if (isLoading) return <p>Loading...</p>;

//     const handleStatus = async (id: string) => {
//         await toggleStatus(id);
//         toast.success("Status updated");
//     };

//     const handleRoleChange = async (id: string, role: string) => {
//         await updateRole({ userId: id, role });
//         toast.success("Role updated");
//     };

//     return (
//         <table className="w-full border">
//             <thead>
//                 <tr>
//                     <th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {data?.data?.map((user: any) => (
//                     <tr key={user._id}>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>
//                             <Select defaultValue={user.role} onValueChange={(val) => handleRoleChange(user._id, val)}>
//                                 <SelectTrigger><SelectValue /></SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="USER">USER</SelectItem>
//                                     <SelectItem value="AGENT">AGENT</SelectItem>
//                                     <SelectItem value="ADMIN">ADMIN</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </td>
//                         <td>{user.isActive}</td>
//                         <td>
//                             <Button onClick={() => handleStatus(user._id)}>
//                                 {user.isActive === "ACTIVE" ? "Block" : "Unblock"}
//                             </Button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }
