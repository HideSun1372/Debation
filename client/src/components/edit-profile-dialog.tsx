
import { useState, useRef } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { User } from "@shared/schema";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EditProfileDialogProps {
    user: User;
    children: React.ReactNode;
}

function resizeImageToDataUrl(file: File, maxSize: number): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
            URL.revokeObjectURL(url);
            const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
            const canvas = document.createElement("canvas");
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", 0.82));
        };
        img.onerror = reject;
        img.src = url;
    });
}

export function EditProfileDialog({ user, children }: EditProfileDialogProps) {
    const { updateProfileMutation } = useAuth();
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        bio: user.bio || "",
    });
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
    const [avatarDataUrl, setAvatarDataUrl] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 10 * 1024 * 1024) {
            toast({ title: "Image too large", description: "Please choose an image under 10MB.", variant: "destructive" });
            return;
        }
        try {
            const dataUrl = await resizeImageToDataUrl(file, 400);
            setAvatarPreview(dataUrl);
            setAvatarDataUrl(dataUrl);
        } catch {
            toast({ title: "Failed to process image", variant: "destructive" });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updates: Partial<User> = {};
        if (formData.username !== user.username) updates.username = formData.username;
        if (formData.email !== (user.email || "")) updates.email = formData.email || null;
        if (formData.firstName !== (user.firstName || "")) updates.firstName = formData.firstName || null;
        if (formData.lastName !== (user.lastName || "")) updates.lastName = formData.lastName || null;
        if (formData.bio !== (user.bio || "")) updates.bio = formData.bio || null;
        if (avatarDataUrl) updates.profileImageUrl = avatarDataUrl;

        if (Object.keys(updates).length === 0) {
            setOpen(false);
            return;
        }

        updateProfileMutation.mutate(updates, {
            onSuccess: () => {
                setOpen(false);
                setAvatarPreview(null);
                setAvatarDataUrl(null);
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

    const currentAvatar = avatarPreview || user.profileImageUrl;

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
                        {/* Avatar */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">Avatar</Label>
                            <div className="col-span-3 flex items-center gap-3">
                                {currentAvatar && (
                                    <img
                                        src={currentAvatar}
                                        alt="Profile preview"
                                        className="h-12 w-12 rounded-full object-cover border"
                                    />
                                )}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    {currentAvatar ? "Change photo" : "Upload photo"}
                                </Button>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>

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
                        <div className="grid grid-cols-4 items-start gap-4">
                            <Label htmlFor="bio" className="text-right pt-2">
                                Bio
                            </Label>
                            <Textarea
                                id="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                className="col-span-3"
                                placeholder="Tell people a bit about yourself..."
                                rows={3}
                                maxLength={300}
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
