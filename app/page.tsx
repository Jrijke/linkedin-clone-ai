"use client";

import { useEffect, useState } from "react";
import { Post } from "@/lib/types";
import CreatePost from "@/components/Feed/CreatePost";
import PostCard from "@/components/Feed/PostCard";
import ProfileCard from "@/components/Sidebar/ProfileCard";
import NewsCard from "@/components/Sidebar/NewsCard";
import CreatePostDialog from "@/components/CreatePostDialog";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleCreatePost = (content: string) => {
    if (!content.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      content,
      author: {
        name: session?.user?.name || "Anonymous",
        title: "Software Engineer",
        avatar: session?.user?.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      },
      likes: 0,
      comments: 0,
      timestamp: new Date().toISOString(),
    };

    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    toast.success("Post created successfully!");
  };

  if (!mounted) {
    return null;
  }

  if (status === "unauthenticated") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to LinkedUp</h1>
          <p className="text-xl text-muted-foreground">
            Join the world's largest professional network
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <ProfileCard />
        </div>

        {/* Main Feed */}
        <div className="md:col-span-2 space-y-4">
          <CreatePost onClick={() => setIsCreatePostOpen(true)} />
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <NewsCard />
        </div>
      </div>

      <CreatePostDialog
        open={isCreatePostOpen}
        onOpenChange={setIsCreatePostOpen}
        onPost={handleCreatePost}
      />
    </div>
  );
}