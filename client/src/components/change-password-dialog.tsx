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
import { useAuth } from "@/hooks/use-auth";
import { Loader2, KeyRound } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ChangePasswordDialog({ children }: { children: React.ReactNode }) {
  const { changePasswordMutation } = useAuth();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast({ title: "Error", description: "New password must be at least 6 characters", variant: "destructive" });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: "Error", description: "New passwords do not match", variant: "destructive" });
      return;
    }
    changePasswordMutation.mutate(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          setOpen(false);
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
          toast({ title: "Success", description: "Password changed successfully" });
        },
        onError: (error) => {
          toast({ title: "Error", description: error.message, variant: "destructive" });
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <KeyRound className="h-5 w-5" />
            Change password
          </DialogTitle>
          <DialogDescription>
            Enter your current password and choose a new one. Use at least 6 characters.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="currentPassword" className="text-right">
                Current
              </Label>
              <Input
                id="currentPassword"
                type="password"
                autoComplete="current-password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="col-span-3"
                required
                placeholder="Current password"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="newPassword" className="text-right">
                New
              </Label>
              <Input
                id="newPassword"
                type="password"
                autoComplete="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="col-span-3"
                required
                minLength={6}
                placeholder="New password (min 6 characters)"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="confirmPassword" className="text-right">
                Confirm
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="col-span-3"
                required
                minLength={6}
                placeholder="Confirm new password"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={changePasswordMutation.isPending}>
              {changePasswordMutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Change password
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
