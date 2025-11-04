import { BorderBeam } from "@/components/magicui/border-beam";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import Loader from "@/specialUi/Loader";
import { Link } from "react-router";
// import { BorderBeam } from "@/components/magicui/border-beam";

const MyProfile = () => {
    const { data, isLoading, isError } = useUserInfoQuery(null, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-40 text-gray-600">
                <Loader />
            </div>
        );
    }
    if (isError) return <p>Failed to load profile</p>;

    const user = data?.data;

    return (
        <Card className="relative w-[350px] mx-auto overflow-hidden shadow-xl rounded-2xl">
            <CardHeader className="flex flex-col items-center gap-2">
                <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src={user?.image} alt={user?.name} />
                    <AvatarFallback>
                        {user?.name ? user.name.charAt(0) : "U"}
                    </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-semibold">{user?.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                    {user?.email}
                </CardDescription>
                <Badge variant="outline" className="text-xs">
                    {user?.role}
                </Badge>
            </CardHeader>

            <CardContent className="space-y-3 text-sm">
                <div>
                    <p className="font-medium">Phone:</p>
                    <p className="text-muted-foreground">{user?.phone || "Not added"}</p>
                </div>
                <div>
                    <p className="font-medium">Wallet Balance:</p>
                    <p className="text-muted-foreground">{user?.wallet?.balance} BDT</p>
                </div>
                <div>
                    <p className="font-medium">Status:</p>
                    <Badge
                        className={`${user?.isActive === "ACTIVE"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                            }`}
                    >
                        {user?.isActive}
                    </Badge>
                </div>
                <div>
                    <Button asChild className="w-full">
                        {/* <Link to="/agent/update-profile">Update Profile</Link> */}
                        <Link to={`/${user.role.toLowerCase()}/update-profile`}>Update Profile</Link>
                    </Button>
                </div>
            </CardContent>

            {/* Border Animation */}
            <BorderBeam duration={8} size={120} />
        </Card>
    );
};

export default MyProfile;
