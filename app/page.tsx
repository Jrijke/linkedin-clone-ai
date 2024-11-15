import { getSession } from "@/lib/auth";
import ClientHome from "@/components/ClientHome";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to LinkedUp</h1>
          <p className="text-xl text-muted-foreground">
            Join the world&apos;s largest professional network
          </p>
        </div>
      </div>
    );
  }

  return <ClientHome session={session} />;
}