"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { ImageIcon, VideoIcon, Calendar, MoreHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";

interface CreatePostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPost: (content: string) => void;
}

export default function CreatePostDialog({
  open,
  onOpenChange,
  onPost,
}: CreatePostDialogProps) {
  const { data: session } = useSession();
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content.trim()) {
      onPost(content);
      setContent("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create a post</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2 mt-4">
          <Avatar className="w-12 h-12">
            <img
              src={session?.user?.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"}
              alt={session?.user?.name || "Profile"}
              className="w-full h-full object-cover"
            />
          </Avatar>
          <div>
            <p className="font-semibold">{session?.user?.name || "Anonymous"}</p>
            <Button variant="outline" size="sm" className="text-xs">
              🌍 Anyone
            </Button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What do you want to talk about?"
            className="min-h-[150px] resize-none border-none text-lg focus-visible:ring-0"
          />
          <div className="flex items-center justify-between border rounded-lg p-4">
            <div className="flex gap-4">
              <Button type="button" size="icon" variant="ghost">
                <ImageIcon className="h-5 w-5 text-neutral-500" />
              </Button>
              <Button type="button" size="icon" variant="ghost">
                <VideoIcon className="h-5 w-5 text-neutral-500" />
              </Button>
              <Button type="button" size="icon" variant="ghost">
                <Calendar className="h-5 w-5 text-neutral-500" />
              </Button>
              <Button type="button" size="icon" variant="ghost">
                <MoreHorizontal className="h-5 w-5 text-neutral-500" />
              </Button>
            </div>
            <Button type="submit">Post</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}