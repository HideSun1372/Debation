
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EditProfileDialogProps {
    user: User;
    children: React.ReactNode;
}

export function EditProfileDialog({ user, children }: EditProfileDialogProps) {
    const { updateProfileMutation } = useAuth();
    const [open, setOpen] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        profileImageUrl: user.profileImageUrl || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Only send changed fields and defined values
        const updates: Partial<User> = {};
        if (formData.username !== user.username) updates.username = formData.username;
        if (formData.email !== (user.email || "")) updates.email = formData.email || null;
        if (formData.firstName !== (user.firstName || "")) updates.firstName = formData.firstName || null;
        if (formData.lastName !== (user.lastName || "")) updates.lastName = formData.lastName || null;
        if (formData.profileImageUrl !== (user.profileImageUrl || "")) updates.profileImageUrl = formData.profileImageUrl || null;

        if (Object.keys(updates).length === 0) {
            setOpen(false);
            return;
        }

        updateProfileMutation.mutate(updates, {
            onSuccess: () => {
                setOpen(false);
                toast({
                    title: "Success",
                    description: "Profile updated successfully",
                });
            },
            onError: (error) => {
                toast({
                    title: "Error",
                    description: error.message,
                    variant: "destructive"
                });
            }
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="firstName" className="text-right">
                                First Name
                            </Label>
                            <Input
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="lastName" className="text-right">
                                Last Name
                            </Label>
                            <Input
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="profileImageUrl" className="text-right">
                                Image URL
                            </Label>
                            <Input
                                id="profileImageUrl"
                                value={formData.profileImageUrl}
                                onChange={handleChange}
                                className="col-span-3"
                                placeholder="https://..."
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={updateProfileMutation.isPending}>
                            {updateProfileMutation.isPending && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Save changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
