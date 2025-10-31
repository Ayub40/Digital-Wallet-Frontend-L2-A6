/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Password from "@/components/ui/Password";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
    useUpdateProfileMutation,
    useUserInfoQuery,
    useChangePasswordMutation,
} from "@/redux/features/auth/auth.api";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const profileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().optional(),
    oldPassword: z.string().min(6).optional(),
    newPassword: z.string().min(6).optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export function UpdateProfileForm({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const { data: userData, isLoading } = useUserInfoQuery({});
    const [updateProfile] = useUpdateProfileMutation();
    const [changePassword] = useChangePasswordMutation();

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: userData?.name || "",
            phone: userData?.phone || "",
            oldPassword: "",
            newPassword: "",
        },
    });

    const onSubmit = async (data: ProfileFormValues) => {
        console.log("Form submit data:", data);

        const profilePayload = { name: data.name, phone: data.phone };

        try {
            const profileRes = await updateProfile(profilePayload).unwrap();
            console.log("Profile update response:", profileRes);

            if (data.oldPassword && data.newPassword) {
                const passwordPayload = {
                    oldPassword: data.oldPassword,
                    newPassword: data.newPassword,
                };

                const passwordRes = await changePassword(passwordPayload).unwrap();

                console.log("Password change response:", passwordRes);
                toast.success(passwordRes?.message || "Password changed successfully");
            }

            toast.success(profileRes?.message || "Profile updated successfully");

            form.reset({
                name: data.name,
                phone: data.phone,
                oldPassword: "",
                newPassword: "",
            });
        } catch (err: any) {
            console.error("Error updating profile or password:", err);
            toast.error(err?.data?.message || "Something went wrong!");
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div
            className={cn(
                "max-w-md mx-auto rounded-2xl p-6 mt-10 shadow-xl",
                "bg-white text-gray-900",
                "dark:bg-gray-900 dark:text-gray-100",
                className
            )}
            {...props}
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                                        placeholder="Enter your name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Phone */}
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input
                                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                                        placeholder="Enter your phone"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Old Password */}
                    <FormField
                        control={form.control}
                        name="oldPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Old Password</FormLabel>
                                <FormControl>
                                    <Password
                                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                                        {...field}
                                        placeholder="Enter old password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* New Password */}
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <Password
                                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                                        {...field}
                                        placeholder="Enter new password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white"
                    >
                        Update Profile
                    </Button>
                </form>
            </Form>
        </div>
    );
}

















// /* eslint-disable react-hooks/exhaustive-deps */
// import { Button } from "@/components/ui/button";
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import Password from "@/components/ui/Password";
// import { cn } from "@/lib/utils";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { useUpdateProfileMutation, useUserInfoQuery, useChangePasswordMutation } from "@/redux/features/auth/auth.api";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// const profileSchema = z.object({
//     name: z.string().min(2, "Name must be at least 2 characters"),
//     phone: z.string().optional(),
//     oldPassword: z.string().min(6).optional(),
//     newPassword: z.string().min(6).optional(),
// });

// type ProfileFormValues = z.infer<typeof profileSchema>;

// export function UpdateProfileForm({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
//     const { data: userData, isLoading } = useUserInfoQuery({});
//     const [updateProfile] = useUpdateProfileMutation();
//     const [changePassword] = useChangePasswordMutation();

//     const form = useForm<ProfileFormValues>({
//         resolver: zodResolver(profileSchema),
//         defaultValues: {
//             name: userData?.name || "",
//             phone: userData?.phone || "",
//             oldPassword: "",
//             newPassword: "",
//         },
//     });


//     // =============== Start =========================
//     const onSubmit = async (data: ProfileFormValues) => {
//         console.log("Form submit data:", data);

//         // name/phone payload
//         const profilePayload = { name: data.name, phone: data.phone };

//         try {
//             // Name/Phone update
//             const profileRes = await updateProfile(profilePayload).unwrap();
//             console.log("Profile update response:", profileRes);

//             // Password change
//             if (data.oldPassword && data.newPassword) {
//                 const passwordPayload = { oldPassword: data.oldPassword, newPassword: data.newPassword };

//                 const passwordRes = await changePassword(passwordPayload).unwrap();

//                 console.log("Password change response:", passwordRes);

//                 toast.success(passwordRes?.message || "Password changed successfully");
//             }

//             toast.success(profileRes?.message || "Profile updated successfully");

//             // Reset form
//             form.reset({
//                 name: data.name,
//                 phone: data.phone,
//                 oldPassword: "",
//                 newPassword: "",
//             });
//         } catch (err: any) {
//             console.error("Error updating profile or password:", err);
//             toast.error(err?.data?.message || "Something went wrong!");
//         }
//     };

//     // =============== End ===================


//     // const onSubmit = async (data: ProfileFormValues) => {
//     //     console.log("Form submit data:", data);

//     //     if ((data.oldPassword && !data.newPassword) || (!data.oldPassword && data.newPassword)) {
//     //         toast.error("Both old and new password are required to change password");
//     //         return;
//     //     }

//     //     // Name/Phone update
//     //     if (!data.oldPassword && !data.newPassword) {
//     //         const payload = { name: data.name, phone: data.phone };
//     //         try {
//     //             const res = await updateProfile(payload).unwrap();
//     //             console.log("Profile update response:", res);
//     //             toast.success(res?.message || "Profile updated successfully");
//     //             form.reset({
//     //                 name: res.data.name,
//     //                 phone: res.data.phone,
//     //                 oldPassword: "",
//     //                 newPassword: "",
//     //             });
//     //         } catch (err: any) {
//     //             console.error("Error updating profile:", err);
//     //             toast.error(err?.data?.message || "Something went wrong!");
//     //         }
//     //         return;
//     //     }

//     //     // Password change
//     //     if (data.oldPassword && data.newPassword) {
//     //         try {
//     //             const payload = { oldPassword: data.oldPassword, newPassword: data.newPassword };

//     //             const res = await changePassword(payload).unwrap();

//     //             console.log("Password change response:", res);

//     //             toast.success(res?.message || "Password changed successfully");
//     //             form.reset({ ...form.getValues(), oldPassword: "", newPassword: "" });
//     //         }
//     //         catch (err: any) {
//     //             console.error("Error changing password:", err);
//     //             toast.error(err?.data?.message || "Password change failed");
//     //         }
//     //     }
//     // };

//     if (isLoading) return <div>Loading...</div>;

//     return (
//         <div className={cn("max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 mt-10", className)} {...props}>
//             <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//                     {/* Name */}
//                     <FormField
//                         control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Name</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Enter your name" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     {/* Phone */}
//                     <FormField
//                         control={form.control}
//                         name="phone"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Phone</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Enter your phone" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     {/* Old Password */}
//                     <FormField
//                         control={form.control}
//                         name="oldPassword"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Old Password</FormLabel>
//                                 <FormControl>
//                                     <Password {...field} placeholder="Enter old password" />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     {/* New Password */}
//                     <FormField
//                         control={form.control}
//                         name="newPassword"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>New Password</FormLabel>
//                                 <FormControl>
//                                     <Password {...field} placeholder="Enter new password" />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />

//                     <Button type="submit" className="w-full">
//                         Update Profile
//                     </Button>
//                 </form>
//             </Form>
//         </div>
//     );
// }
