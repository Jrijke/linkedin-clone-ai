"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Login() {
  const handleGithubSignIn = async () => {
    try {
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      toast.error("Failed to sign in with GitHub");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sign in to LinkedUp</h1>
        <div className="space-y-4">
          <Button
            onClick={handleGithubSignIn}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            Sign in with GitHub
          </Button>
        </div>
        <p className="text-center mt-4">
          New to LinkedUp?{" "}
          <Link href="/register" className="text-primary hover:underline">
            Join now
          </Link>
        </p>
      </Card>
    </div>
  );
}