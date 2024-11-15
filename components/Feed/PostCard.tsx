"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Share2, Send } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Post } from "@/lib/types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <Avatar className="w-12 h-12">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-full h-full object-cover"
          />
        </Avatar>
        <div>
          <h3 className="font-semibold hover:text-blue-600 hover:underline cursor-pointer">
            {post.author.name}
          </h3>
          <p className="text-sm text-muted-foreground">{post.author.title}</p>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(post.timestamp))} ago
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6">{post.content}</p>
      <div className="mt-4 pt-2 border-t">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="flex-1">
            <ThumbsUp className="mr-2 h-4 w-4" />
            <span className="text-sm">Like</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <MessageSquare className="mr-2 h-4 w-4" />
            <span className="text-sm">Comment</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <Share2 className="mr-2 h-4 w-4" />
            <span className="text-sm">Share</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-1">
            <Send className="mr-2 h-4 w-4" />
            <span className="text-sm">Send</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}