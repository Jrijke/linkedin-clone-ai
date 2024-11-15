import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();
    return session?.user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}