"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const result = await signIn("github", { callbackUrl: "/" });
      if (result?.error) {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred during registration");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Join LinkedUp</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full">Create Account</Button>
        </form>
        <p className="text-center mt-4">
          Already on LinkedUp?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  );
}