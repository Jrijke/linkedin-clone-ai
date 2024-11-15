import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthError() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
        <p className="text-muted-foreground mb-6">
          There was a problem signing you in. Please try again.
        </p>
        <Button asChild>
          <Link href="/login">Back to Login</Link>
        </Button>
      </Card>
    </div>
  );
}