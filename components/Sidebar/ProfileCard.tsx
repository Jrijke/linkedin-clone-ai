"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookmarkIcon } from "lucide-react";
import { useSession } from "next-auth/react";

export default function ProfileCard() {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Card className="overflow-hidden">
      <div className="h-14 bg-gradient-to-r from-blue-600 to-blue-800" />
      <div className="p-4 -mt-8">
        <Avatar className="w-16 h-16 border-4 border-background">
          <img
            src={session?.user?.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"}
            alt={session?.user?.name || "Profile"}
            className="w-full h-full object-cover"
          />
        </Avatar>
        <h2 className="mt-2 font-semibold text-lg hover:underline cursor-pointer">
          {session?.user?.name || "Welcome"}
        </h2>
        <p className="text-sm text-muted-foreground">
          Software Engineer at Tech Company
        </p>
        <div className="mt-4 pt-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Profile viewers</span>
            <span className="text-blue-600 font-semibold">64</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Post impressions</span>
            <span className="text-blue-600 font-semibold">847</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-sm">
            <BookmarkIcon className="mr-2 h-4 w-4" />
            My items
          </Button>
        </div>
      </div>
    </Card>
  );
}