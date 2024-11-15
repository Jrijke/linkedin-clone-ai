"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { ImageIcon, VideoIcon, CalendarIcon, NewspaperIcon } from "lucide-react";
import Link from "next/link";

export default function CreatePost({ onClick }: { onClick: () => void }) {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex gap-2">
        <Avatar className="w-12 h-12">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </Avatar>
        <Button 
          variant="outline" 
          className="w-full justify-start text-muted-foreground rounded-full h-12"
          onClick={onClick}
        >
          Start a post
        </Button>
      </div>
      <div className="flex justify-between">
        <Button variant="ghost" className="flex-1 space-x-2">
          <ImageIcon className="w-5 h-5 text-blue-600" />
          <span>Media</span>
        </Button>
        <Button variant="ghost" className="flex-1 space-x-2">
          <CalendarIcon className="w-5 h-5 text-amber-600" />
          <span>Event</span>
        </Button>
        <Button variant="ghost" className="flex-1 space-x-2">
          <NewspaperIcon className="w-5 h-5 text-rose-600" />
          <span>Write article</span>
        </Button>
      </div>
    </Card>
  );
}