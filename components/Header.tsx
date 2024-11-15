"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { useRouter } from "next/navigation";
import { Search, Home, Users, BriefcaseIcon, MessageSquare, BellIcon } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BriefcaseIcon className="h-6 w-6" />
            <span className="font-bold">LinkedUp</span>
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" onClick={() => router.push("/login")}>Sign In</Button>
            <Button onClick={() => router.push("/register")}>Join Now</Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <BriefcaseIcon className="h-6 w-6" />
            <span className="font-bold">LinkedUp</span>
          </Link>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="w-[300px] pl-8"
            />
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/" className="flex flex-col items-center text-sm">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link href="/network" className="flex flex-col items-center text-sm">
            <Users className="h-5 w-5" />
            <span>Network</span>
          </Link>
          <Link href="/jobs" className="flex flex-col items-center text-sm">
            <BriefcaseIcon className="h-5 w-5" />
            <span>Jobs</span>
          </Link>
          <Link href="/messages" className="flex flex-col items-center text-sm">
            <MessageSquare className="h-5 w-5" />
            <span>Messages</span>
          </Link>
          <Link href="/notifications" className="flex flex-col items-center text-sm">
            <BellIcon className="h-5 w-5" />
            <span>Notifications</span>
          </Link>
          <ModeToggle />
          <Button variant="destructive" onClick={() => signOut({ callbackUrl: "/" })}>
            Logout
          </Button>
        </nav>
      </div>
    </header>
  );
}